import pkg from "../../package.json";

// Single source of truth for the app version shown in the UI (AppShell
// footer/header). Bump `version` in package.json on every release — do not
// hardcode a version string anywhere else.
export const APP_VERSION: string = pkg.version;
