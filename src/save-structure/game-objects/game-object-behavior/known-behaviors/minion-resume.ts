import { MinionSkillGroup } from "../../../const-data/skills/skill-group";

import { GameObjectBehavior } from "../game-object-behavior";

import { BehaviorName } from "./types";

export const MinionResumeBehavior: BehaviorName<MinionResumeBehavior> =
  "MinionResume";
export interface MinionResumeBehavior extends GameObjectBehavior {
  name: "MinionResume";
  templateData: {
    MasteryByRoleID: [string, boolean][];
    MasteryBySkillID: [string, boolean][];
    AptitudeBySkillGroup: [MinionSkillGroup, number][];

    totalExperienceGained: number;

    currentRole: string;
    targetRole: string;

    currentHat: string;
    targetHat: string;
  };
}
