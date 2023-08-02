// src/components/SpellDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getSpellDetails, Spell} from '../services/api';

const SpellDetails: React.FC = () => {
    const { index } = useParams<{ index: string }>();
    const [spell, setSpell] = useState<Spell | any>();

    useEffect(() => {
        const fetchSpellDetails = async () => {
            const spellDetails = await getSpellDetails(index);
            setSpell(spellDetails);
        };

        fetchSpellDetails().then(r => {});
    }, [index]);

    if (!spell) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{spell.name}</h1>
            <p>{spell.desc.join(' ')}</p>
            {/* Add favorite button here */}
        </div>
    );
};

export default SpellDetails;
