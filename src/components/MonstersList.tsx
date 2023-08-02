import React, {useEffect, useState} from 'react';
import {Spell, getMonsters, fetchMonsterDetails} from "../services/api";
import {Link} from "react-router-dom";


const MonstersList:React.FC = () => {
    const baseURL = 'https://www.dnd5eapi.co';

    const [monstersArr, setMonstersArr] = useState<Spell[]>([]);

    useEffect(() => {
        const fetchMonsters = async () => {
            const allMonsters = await getMonsters();
            setMonstersArr(allMonsters);
        }
        fetchMonsters().then(r => {});
    }, []);

    return (
        <div>
            <h1>Monsters List</h1>
            <div>
                <ul>
                    {monstersArr.map((monster) => (

                        <li onClick={()=>{
                            fetchMonsterDetails(monster.url).then(r => {
                                console.log(r)
                            })
                        }} key={monster.url} >
                            <Link to={`${baseURL}`+monster.url}>
                                {monster.name}
                            </Link>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MonstersList;