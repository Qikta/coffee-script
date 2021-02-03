import { IDrip } from "./drip";
import { Script } from "./script"
import { IDripSettings } from "./dripSettings"

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  Drip: { drip: IDrip };
  Script: { script: Script};
  DripSetting: { drip: IDrip, dripSettings: IDripSettings};
  CreateScript: undefined;
  Timer: {drip: IDrip};
  ScriptDetail: { script: Script}
};
