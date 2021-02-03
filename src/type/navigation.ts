import { Drip } from "./drip";
import { Script } from "./script"
import { DripSettings } from "./dripSettings"

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Drip: { drip: Drip };
  Script: { script: Script};
  DripSetting: { drip: Drip, dripSettings: DripSettings};
  CreateScript: undefined;
  Timer: {drip: Drip};
  ScriptDetail: { script: Script}
};
