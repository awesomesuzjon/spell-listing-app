// src/components/Favorites.tsx
import React, {useEffect, useState} from 'react';
import {List, Skeleton, Tag} from "antd";
import {Spell} from "../services/api";
import { CheckCircleOutlined } from '@ant-design/icons';
import logger from "../utils/log";



const Favorites: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const[favorites, setFavorites] = useState<Spell[]>([])
    useEffect(()=>{
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
        setLoading(false);

    },[])
    return (
        <div>

            <div style={{ padding: '2em' }}>
                <h2>Favorites</h2>
                {/*render all of the user selected favorites spells from the localStorage*/}
                {loading ? <Skeleton active /> :
                    <List dataSource={favorites} renderItem={(item) => <li style={{ listStyle: 'none',paddingBottom: "1em" }}>
                        <Tag style={{fontSize:"1.5em",color:"black"}} icon={<CheckCircleOutlined />} color="transparent">{item.name}
                        </Tag>

                        </li>} />}
            </div>
        </div>
    );
};

export default Favorites;
