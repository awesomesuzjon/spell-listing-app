// SpellList.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpells, Spell } from '../services/api';
import { Card, List, Button } from "antd";
import { addToFavorites } from '../redux/actions/addToFavourites';
import { removeFromFavorites } from '../redux/actions/removeFromFav'; // Import the removeFromFavorites action
import { AppState } from "../redux/reducers/favReducer";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const SpellList: React.FC = () => {
    const [spells, setSpells] = useState<Spell[]>([]);
    const dispatch = useDispatch();
    const favorites = useSelector((state: AppState) => state.favorites);

    useEffect(() => {
        async function fetchSpells() {
            try {
                const spellsData = await getSpells();
                setSpells(spellsData);
            } catch (error) {
                console.error('Error fetching spells:', error);
            }
        }
        fetchSpells();
    }, []);

    const handleAddToFavorites = (spell: Spell) => {
        if (favorites.some((favSpell) => favSpell.index === spell.index)) {
            // If the spell is already in favorites, remove it from favorites
            dispatch(removeFromFavorites(spell.index));
        } else {
            // Otherwise, add it to favorites
            dispatch(addToFavorites(spell));
        }
    };

    return (
        <div style={{display:"flex",flexDirection:"row"}}>
        <div style={{width:"60%",padding:"2em"}}>
            <h1>Spell List</h1>
            <List
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                dataSource={spells}
                renderItem={(item) => (
                    <List.Item>


                                <Card hoverable={false} >
                                    <div style={{display:"flex",flexDirection:"column"}}>

                                    <a style={{color:"green"}} href={`/spells/${item.index}`}>
                                        {item.name}
                                    </a>
                                    <Button  onClick={() => handleAddToFavorites(item)} style={{marginTop:"1em"}}>
                                                {favorites.some((favSpell) => favSpell.index === item.index) ? (
                                                    <>
                                                        Remove from Favorites <HeartFilled style={{color:"red"}}/>
                                                    </>
                                                ) : (
                                                    <>
                                                        Add to Favorites <HeartOutlined />
                                                    </>
                                                )}
                                            </Button>
                                    </div>
                                </Card>

                    </List.Item>
                )}
            />
        </div>
            <div style={{padding:"2em"}}>
            <h2>Favorites</h2>

            <List
                dataSource={favorites}
                renderItem={(item) => <li style={{listStyle:"disc"}}>{item.name}</li>}
            />
            </div>

        </div>
    );
};

export default SpellList;
