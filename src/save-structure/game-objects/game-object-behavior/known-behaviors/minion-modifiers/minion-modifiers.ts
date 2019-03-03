import { GameObjectBehavior } from "../../game-object-behavior";

import { BehaviorName } from "../types";

export const MinionModifiersBehavior: BehaviorName<MinionModifiersBehavior> =
  "MinionModifiers";
export interface MinionModifiersBehavior extends GameObjectBehavior {
  name: "MinionModifiers";
  templateData: {};
  extraData: MinionModifiersExtraData;
}

/**
 * MinionModifiers is a Modifiers object with some extra runtime behavior.
 * Save data is identical to Modifiers object.
 *
 * Modifiers object saves:
 * amounts: Amounts => Modifications<Amount, AmountInstance>.  Serializes list of InstanceType {count; forEach{name:string; data-length(start); SerializeTypeless(instance:AmountInstance); data-length(end)} }
 * - AmountInstance is templated, has one field "value": float
 *
 * diseases: Diseases => Modifications<Disease, DiseaseInstance> - blahblah
 * - DiseaseInstance should be a template...
 * -- field "exposureInfo" { diseaseID: string; infectionSourceInfo: string}
 */
export interface MinionModifiersExtraData {
  amounts: MinionAmountInstance[];
  diseases: MinionDiseaseInstance[];
}

export interface MinionModificationInstance {
  name: string;
  value: any;
}

export interface MinionAmountInstance extends MinionModificationInstance {
  value: { value: number };
}

export interface MinionDiseaseInstance extends MinionModificationInstance {
  value: {
    diseaseId: string;
    infectionSourceInfo: string;
  };
}
