// src/components/SpellList.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSpells, Spell } from '../services/api';

const SpellList: React.FC = () => {
    const [spells, setSpells] = useState<Spell[]>([]);

    useEffect(() => {
        const fetchSpells = async () => {
            const allSpells = await getSpells();
            setSpells(allSpells);
        };

        fetchSpells();
    }, []);

    return (
        <div>
            <h1>Spell List</h1>
            <ul>
                {spells.map((spell) => (
                    <li key={spell.index}>
                        <Link to={`/spells/${spell.index}`}>{spell.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpellList;
