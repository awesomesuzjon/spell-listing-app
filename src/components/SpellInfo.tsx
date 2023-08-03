import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getSpellDetails, Spell, SpellDetail} from '../services/api';

const SingleSpellDetails: React.FC = () => {
    const { url } = useParams<{ url: string }>();
    const [spell, setSpell] = useState<SpellDetail | null>(null);

    useEffect(() => {
        const fetchSpellDetails = async () => {
            try {
                const spellDetails = await getSpellDetails(url!);
                setSpell(spellDetails);
            } catch (error) {
                console.error('Error fetching spell details:', error);
            }
        };

        fetchSpellDetails();
    }, [url]);

    if (!spell) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Name: {spell.name}</h1>
            <p>Desc: {spell.desc}</p>
            <p>Level: {spell.level}</p>
            <p>Duration: {spell.duration}</p>

        </div>
    );
};

export default SingleSpellDetails;
