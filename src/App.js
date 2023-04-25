import './App.css';
import React from "react";
import BattleList from "./components/BattleList";
import {EntityType, Entity} from "./models/Entity";

const funNames = [
    "Stan",
    "Harry",
    "Bob",
    "Lisa",
    "Peter",
    "Elan",
    "Rebecca",
    "David",
]

const funAdjectives = [
    "Adaptable",
    "Courageous",
    "Giving",
    "Neat",
    "Self-confident",
    "Adventurous",
    "Creative",
    "Good",
    "Nice",
    "Self-disciplined",
    "Affable",
    "Decisive",
    "Gregarious",
    "Non-judgemental",
    "Sensible",
    "Affectionate",
    "Dependable",
    "Hardworking",
    "Observant",
    "Sensitive",
    "Agreeable",
    "Determined",
    "Helpful",
    "Optimistic",
    "Shy",
    "Ambitious",
    "Diligent",
    "Hilarious",
    "Organized",
    "Silly",
    "Amiable",
    "Diplomatic",
    "Honest",
    "Passionate",
    "Sincere",
    "Amicable",
    "Discreet",
    "Humorous",
    "Patient",
    "Smart",
    "Amusing",
    "Dynamic",
    "Imaginative",
    "Persistent",
    "Socialable",
    "Artistic",
    "Easy-going",
    "Impartial",
    "Pioneering",
    "Straight-Forward",
    "Brave",
    "Emotional",
    "Independent",
    "Philosophical",
    "Sympathetic",
    "Bright",
    "Efficient",
    "Industrious",
    "Placid",
    "Talkative",
]

function App() {
    const entities: Entity[] = [
        {
            name: "Zenobia",
            isUnique: true,
            type: EntityType.PLAYER,
            class: "Cleric",
            level: 1,
            initiative: 15,
        },
        {
            name: "Garthynax",
            isUnique: true,
            type: EntityType.ENEMY_CREATURE,
            level: 12,
            initiative: 24,
        },
        {
            name: "Giant Rat",
            isUnique: false,
            type: EntityType.ENEMY_CREATURE,
            level: -1,
            initiative: 19,
        },
        {
            name: "Giant Rat",
            isUnique: false,
            funName: "Grim",
            funAdjective: "Grim",
            type: EntityType.ENEMY_CREATURE,
            level: -1,
            initiative: 19,
        },
        {
            name: "Giant Rat",
            isUnique: false,
            funAdjective: "Asshole",
            type: EntityType.ENEMY_CREATURE,
            level: -1,
            initiative: 19,
        },
    ]

    entities.forEach((e) => {
        if (!e.isUnique) {
            e.funName = e.funName ? e.funName : funNames[Math.floor((Math.random()*funNames.length))];
            e.funAdjective = e.funAdjective ? e.funAdjective : funAdjectives[Math.floor((Math.random()*funAdjectives.length))];
        }
    })

    return (
        <div className="App">
            <div className="App-header">
                <h1><img src="/logo512.png" alt="logo"/> Pathfinder 2E Battle-tracker</h1>
            </div>
            <div className="App-battle-page">
                <div className="App-battle-leftCol" style={{width: "25%", height: "90vh", backgroundColor: "beige"}}>
                    <div style={{height:"80vh"}}>
                        <BattleList entities={entities}/>
                    </div>
                    <div style={{height:"10vh", backgroundColor:"darkgray"}}>
                        <button style={{width:"100%", height:"100%"}}>Next turn</button>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
