import axios from 'axios';

const baseURL = 'https://www.dnd5eapi.co/api';

export interface Spell {
    index: string;
    name: string;
    url: string;
}

export interface Monster {
    index: string;
    name: string;
    url: string;
}

export interface SpellDetail {
    index: string;
    name: string;
    url: string;
    desc: string[];
    higher_level: string[];
    duration: string;
    level: number;
}

export const getMonsters = async (): Promise<Monster[]> => {
    try {
        const response = await axios.get(`${baseURL}/monsters`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching monsters:', error);
        throw error;
    }
};

export const fetchMonsterDetails = async (url: string): Promise<Monster> => {
    try {
        const response = await axios.get<Monster>(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching monster details:', error);
        throw error;
    }
};

export const getSpells = async (): Promise<Spell[]> => {
    try {
        const response = await axios.get(`${baseURL}/spells`);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching spells:', error);
        throw error;
    }
};

export const getSpellDetails = async (url: string): Promise<SpellDetail> => {
    try {
        const response = await axios.get<SpellDetail>(`${baseURL}/spells/${url}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching spell details:', error);
        throw error;
    }
};
