// src/api.ts
import axios from 'axios';

const baseURL = 'https://www.dnd5eapi.co/api';

export interface Spell {
    index: string;
    name: string;
    url: string;
}



export const getMonsters=async ():Promise<Spell[]>=>{
    // const response = await axios.get(`${baseURL}/monsters}`);
    const response = await axios.get(`${baseURL}/monsters`);
    return response.data.results;
}

export const getSpells = async (): Promise<Spell[]> => {
    const response = await axios.get(`${baseURL}/spells`);
    return response.data.results;
};

export const getSpellDetails = async (index: string | undefined): Promise<Spell> => {
    const response = await axios.get(`${baseURL}/spells/${index}`);
    return response.data;
};

export const fetchMonsterDetails = async (url: string) => {
    try {
        const response = await axios.get(url);
    } catch (error) {
        console.error('Error fetching monster details from the API.');
    }
};