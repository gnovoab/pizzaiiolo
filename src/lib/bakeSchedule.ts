export type BakePlan =
  | {
      type: "room-temp";
      mixTime: Date;
      ballTime: Date;
      bakeTime: Date;
      bulkHours: number;
      roomProofHours: number;
      coldHours: 0;
      warmupHours: 0;
    }
  | {
      type: "cold";
      mixTime: Date;
      ballTime: Date;
      fridgeEntry: Date;
      fridgeExit: Date;
      bakeTime: Date;
      bulkHours: number;
      coldHours: number;
      warmupHours: number;
    };

export interface BakeEvent {
  label: string;
  time: Date;
  icon: string;
  desc: string;
}

export function calcBakePlan(
  bakeDate: string,
  bakeTime: string,
  fermentMin: number,
  fermentMax: number
): BakePlan {
  const [bH, bM] = (bakeTime || "18:00").split(":").map(Number);
  const bake = new Date(bakeDate || new Date().toDateString());
  bake.setHours(bH, bM, 0, 0);

  const avg = (fermentMin + fermentMax) / 2;

  // Room-temp-only: max fermentation ≤ 24h (traditional Neapolitan, e.g. Pino 8–24h)
  if (fermentMax <= 24) {
    const roomProofHours = 1;
    const bulkHours = avg - roomProofHours;
    const ballTime = new Date(bake.getTime() - roomProofHours * 3600000);
    const mixTime = new Date(ballTime.getTime() - bulkHours * 3600000);
    return {
      type: "room-temp",
      mixTime,
      ballTime,
      bakeTime: bake,
      bulkHours,
      roomProofHours,
      coldHours: 0,
      warmupHours: 0,
    };
  }

  // Cold-proof workflow: all 24h+ pizzaioli
  const bulkHours = 2;
  const warmupHours = 2;
  const coldHours = avg - bulkHours - warmupHours;

  const fridgeExit = new Date(bake.getTime() - warmupHours * 3600000);
  const fridgeEntry = new Date(fridgeExit.getTime() - coldHours * 3600000);
  const ballTime = new Date(fridgeEntry.getTime() - 0.5 * 3600000);
  const mixTime = new Date(ballTime.getTime() - bulkHours * 3600000);

  return {
    type: "cold",
    mixTime,
    ballTime,
    fridgeEntry,
    fridgeExit,
    bakeTime: bake,
    bulkHours,
    coldHours,
    warmupHours,
  };
}

export function fmtBakeDate(d: Date): string {
  return d.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function buildBakeEvents(
  plan: BakePlan,
  roomTemp: number,
  fridgeTemp: number
): BakeEvent[] {
  if (plan.type === "room-temp") {
    return [
      { label: "Mix Dough", time: plan.mixTime, icon: "🥣", desc: `Bulk ferment at room temp (~${plan.bulkHours.toFixed(1)}h at ${roomTemp}°C)` },
      { label: "Ball & Shape", time: plan.ballTime, icon: "⚽", desc: `Divide and ball — room-temp proof (~${plan.roomProofHours}h)` },
      { label: "Bake! 🔥", time: plan.bakeTime, icon: "🍕", desc: "Time to bake!" },
    ];
  }
  return [
    { label: "Mix Dough", time: plan.mixTime, icon: "🥣", desc: `Short bulk at room temp (~${plan.bulkHours}h at ${roomTemp}°C)` },
    { label: "Ball & Shape", time: plan.ballTime, icon: "⚽", desc: "Divide and ball — then straight into fridge" },
    { label: "Fridge In", time: plan.fridgeEntry, icon: "❄️", desc: `Cold proof (~${plan.coldHours.toFixed(0)}h at ${fridgeTemp}°C)` },
    { label: "Fridge Out", time: plan.fridgeExit, icon: "☀️", desc: `Warm up at room temp (~${plan.warmupHours}h)` },
    { label: "Bake! 🔥", time: plan.bakeTime, icon: "🍕", desc: "Time to bake!" },
  ];
}
