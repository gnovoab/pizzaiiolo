"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { DoughMode } from "@/lib/types";

interface PizzaState {
  // Dough Calculator
  selectedPizzaioloId: string;
  doughMode: DoughMode;
  numPizzas: number;
  ballWeight: number;
  flourInput: number;
  waterInput: number;
  hydration: number;
  salt: number;
  yeast: number;

  // Fermentation
  roomTemp: number;
  fridgeTemp: number;
  bakeTime: string;
  bakeDate: string;

  // Poolish
  poolishTotalFlour: number;
  poolishPercent: number;
  poolishYeastPercent: number;

  // Biga
  bigaTotalFlour: number;
  bigaPercent: number;
  bigaHydration: number;
  bigaYeastPercent: number;

  // Sauce
  sauceNumPizzas: number;
  sauceGramsPerPizza: number;

  // Cost
  flourCostPerKg: number;
  tomatoCostPerKg: number;
  mozzarellaCostPerKg: number;
  oliveOilCostPerL: number;
  mozzarellaGramsPerPizza: number;
  oliveOilMlPerPizza: number;

  // Temperature
  roomTempForWater: number;
  flourTemp: number;
  frictionFactor: number;

  // Flour Blend
  flourBlendPreset: string;
  flourPizzeriaPercent: number;
  flourNuvolaPercent: number;
  flourTipo1Percent: number;
  flourCuocoPercent: number;
  flourIntegralePercent: number;
  flourSemolinaAddPercent: number;

  // Actions
  set: (partial: Partial<PizzaState>) => void;
  setFromPizzaiolo: (id: string, hydration: number, salt: number, yeast: number) => void;
}

export const usePizzaStore = create<PizzaState>()(
  persist(
    (set) => ({
      selectedPizzaioloId: "pino-prestanizzi",
      doughMode: "pizzas",
      numPizzas: 4,
      ballWeight: 270,
      flourInput: 1000,
      waterInput: 620,
      hydration: 0.62,
      salt: 0.024,
      yeast: 0.0009,

      roomTemp: 22,
      fridgeTemp: 4,
      bakeTime: "18:00",
      bakeDate: new Date().toISOString().split("T")[0],

      poolishTotalFlour: 1000,
      poolishPercent: 0.50,
      poolishYeastPercent: 0.001,

      bigaTotalFlour: 1000,
      bigaPercent: 0.50,
      bigaHydration: 0.45,
      bigaYeastPercent: 0.005,

      sauceNumPizzas: 4,
      sauceGramsPerPizza: 100,

      flourCostPerKg: 1.5,
      tomatoCostPerKg: 3.0,
      mozzarellaCostPerKg: 8.0,
      oliveOilCostPerL: 6.0,
      mozzarellaGramsPerPizza: 100,
      oliveOilMlPerPizza: 10,

      roomTempForWater: 22,
      flourTemp: 20,
      frictionFactor: 3.0,

      flourBlendPreset: "traditional",
      flourPizzeriaPercent: 1.0,
      flourNuvolaPercent: 0,
      flourTipo1Percent: 0,
      flourCuocoPercent: 0,
      flourIntegralePercent: 0,
      flourSemolinaAddPercent: 0,

      set: (partial) => set(partial),
      setFromPizzaiolo: (id, hydration, salt, yeast) =>
        set({ selectedPizzaioloId: id, hydration, salt, yeast }),
    }),
    { name: "pizza-lab-store" }
  )
);
