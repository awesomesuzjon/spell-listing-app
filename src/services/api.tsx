// src/api.ts
import axios from 'axios';

const baseURL = 'http://www.dnd5eapi.co/api';

export interface Spell {
    index: string;
    name: string;
    desc: string[];
}

export const getSpells = async (): Promise<Spell[]> => {
    const response = await axios.get(`${baseURL}/spells`);
    return response.data.results;
};

export const getSpellDetails = async (index: string): Promise<Spell> => {
    const response = await axios.get(`${baseURL}/spells/${index}`);
    return response.data;
};
