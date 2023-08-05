import axios from 'axios';

// service api of dnde5eapi.co
const baseURL = 'https://www.dnd5eapi.co/api';

// Defining the Interface for Spell

export interface Spell {
  index: string;
  name: string;
  url: string;
}

// Defining the Interface for SpellDetail
export interface SpellDetail {
  index: string;
  name: string;
  url: string;
  desc: string[];
  higher_level: string[];
  duration: string;
  level: number;
  attack_type: string;
  range: string;
  casting_time: string;
}

// fetch the data of spells list from api
export const getSpells = async (): Promise<Spell[]> => {
  try {
    const response = await axios.get(`${baseURL}/spells`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching spells:', error);
    throw error;
  }
};

// fetch the detail data of selected spell from api

export const getSpellDetails = async (url: string): Promise<SpellDetail> => {
  try {
    const response = await axios.get<SpellDetail>(`${baseURL}/spells/${url}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching spell details:', error);
    throw error;
  }
};
