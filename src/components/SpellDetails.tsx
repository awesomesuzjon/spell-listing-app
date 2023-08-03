import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for getting dynamic URL parameters
import { getSpellDetails, SpellDetail } from '../services/api'; // Assuming the API functions are in api.ts

const SpellDetails = () => {
    const { spellId } = useParams<{ spellId: string }>(); // Get the dynamic spellId from the URL
    const [spellDetails, setSpellDetails] = useState<SpellDetail | null>(null);

    useEffect(() => {
        // Fetch the spell details when the component mounts
        async function fetchSpellDetails() {
            try {
                const spellData = await getSpellDetails(spellId!);
                setSpellDetails(spellData);
            } catch (error) {
                console.error('Error fetching spell details:', error);
            }
        }
        fetchSpellDetails().then(() => console.log(spellDetails));
    }, [spellId]); // Fetch spell details when the spellId changes

    if (!spellDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>hello
            {/*<h1>{spellDetails.name}</h1>*/}
            {/* Render other spell details here */}
        </div>
    );
};

export default SpellDetails;
