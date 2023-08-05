import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';
import { getSpellDetails, Spell, SpellDetail } from '../services/api';

// get the selected single spell detail from the api
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
            <Card style={{ marginTop: '1em' }}>

            <h1><span style={{ fontWeight: 'bold' }}>Name:</span> {spell.name}</h1>
            <p><span style={{ fontWeight: 'bold' }}>Desc: </span> {spell.desc}</p>
            <p><span style={{ fontWeight: 'bold' }}>Level:</span>  {spell.level}</p>
            <p><span style={{ fontWeight: 'bold' }}>Duration:</span>  {spell.duration}</p>
            <p><span style={{ fontWeight: 'bold' }}>Range: </span> {spell.range}</p>
            <p><span style={{ fontWeight: 'bold' }}>Attack Type: </span> {spell.attack_type}</p>
            <p><span style={{ fontWeight: 'bold' }}>Casting Time:</span>  {spell.casting_time}</p>
            </Card>

        </div>
  );
};

export default SingleSpellDetails;
