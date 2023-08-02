// src/components/SpellComponent.tsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSpells, selectSpellsData, selectSpellsLoading, selectSpellsError } from '../store/slices/spellsSlice';
import {Dispatch } from '@reduxjs/toolkit'; // Correct import path for AppDispatch


import { RootState } from '../store/store';
import {AppDispatch} from "../store/slices/dndSlice";

interface Spell {
    id: number;
    name: string;
    level: number;
    description: string;
    // Add other spell properties as needed
}

const SpellComponent: React.FC = () => {
    const spells: Spell[] = useSelector(selectSpellsData);
    const isLoading = useSelector(selectSpellsLoading);
    const error = useSelector(selectSpellsError);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchSpells());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Spells</h2>
            <ul>
                {spells?.map((spell: Spell) => ( // Explicitly set the type for 'spell'
                    <li key={spell.id}>
                        <h3>{spell.name}</h3>
                        <p>Level: {spell.level}</p>
                        <p>Description: {spell.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpellComponent;
