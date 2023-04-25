import React, {Component} from "react";
import {EntityType, Entity, CompareEntities} from "../models/Entity";

export type BattleListProps = {
    entities: Entity[],
}
class BattleList extends Component<BattleListProps> {
    render() {
        console.log(this.props)
        return (
            <div>
                <table style={{width:"100%"}}>
                    <tr>
                        <th style={{textAlign:"center"}} colSpan={3}><h2>Initiative Order</h2></th>
                    </tr>
                    {
                        this.props.entities
                            .sort(CompareEntities)
                            .reverse()
                            .map(e => (<EntitySummary {...e}/>))
                    }
                </table>
            </div>
        )
    }
}

class EntitySummary extends Component<Entity> {
    render() {
        const name =
            (this.props.funName
                ? this.props.funName + " the "
                : "")
            + (this.props.funAdjective
                ? this.props.funAdjective + " "
                : "")
            + this.props.name

        let subtitle = "Unknown"
        switch (this.props.type) {
            case EntityType.PLAYER:
                subtitle = this.props.class
                break;
            case EntityType.ALLY_CREATURE:
            case EntityType.ENEMY_CREATURE:
                subtitle = "Creature"
                break;
            case EntityType.HAZARD:
                subtitle = "Hazard"
                break;
        }
        subtitle += " level " + this.props.level

        return (
            <tr style={{height:"40px"}}>
                <td width={10}>
                    <div style={{borderColor: "black", backgroundColor:"lightgrey", padding:"15px", borderRadius:"5px"}}>
                        {this.props.initiative}
                    </div>
                </td>
                <td align="left">
                    <div style={{backgroundColor:"lightgrey", padding:"5px", height:"40px", borderRadius:"5px"}}>
                        <text><strong>{name}</strong></text><br />
                        <text><em>{subtitle}</em></text>
                    </div>
                </td>
                <td width={10}>
                    <button style={{padding:"5px", height:"48px"}}>more...</button>
                </td>
            </tr>
        );
    }
}

export default BattleList
