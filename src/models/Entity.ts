export enum EntityType {
    PLAYER,
    ALLY_CREATURE,
    ENEMY_CREATURE,
    HAZARD,
}

export class Entity {
    name: string = "Giant Rat"
    type: EntityType = EntityType.ENEMY_CREATURE
    class: string = ""
    level: number = 25
    isUnique: boolean = false
    funName: string = ""
    funAdjective: string = ""
    initiative: number = 20
}

export function CompareEntities(a: Entity, b: Entity) {
    if (a.initiative > b.initiative) {
        return 1;
    } else if (a.initiative < b.initiative) {
        return -1;
    } else {
        if (a.type > b.type) {
            return 1;
        } else if (a.type < b.type) {
            return -1;
        } else {
            return 0;
        }
    }
}