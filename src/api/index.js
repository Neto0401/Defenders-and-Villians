import React from 'react'
import getEnvVars from '../../environment';

const { apiUrl, apiSearch } = getEnvVars();

let cat;
let Busqueda;
let id;

export const searchHeroes = async() => {
    const allCharacters = { results: [] };
    try {
        const endpoint = `${apiSearch}${Busqueda}`
        const response = await fetch(endpoint);
        const data = await response.json();
       // allCharacters.results.push(data);
        //return allCharacters;

        return data["results"];

    } catch (error) {

        console.log(error);
        return {
            count: 0,
        }

    };

};

export const FilterHeros = async() => {
    try {

        const allCharacters = { results: [] };
        const Heroes = { results: [] };

        for (let index = 1; index < 10; index++) {

            const endpoint = `${apiUrl}${index}`
            const response = await fetch(endpoint);
            const data = await response.json();

            allCharacters.results.push(data);

        }

        if (cat === 'good' || cat === 'bad') {
            Heroes.results = allCharacters.results.filter(hero => hero.biography.alignment === cat)
        } else if (cat === 'Marvel Comics' || cat === 'DC Comics') {
            Heroes.results = allCharacters.results.filter(hero => hero.biography.publisher === cat)
        } else if (cat === 'others') {
            Heroes.results = allCharacters.results.filter(hero => hero.biography.publisher != 'Marvel Comics' && hero.biography.publisher != 'DC Comics')
        } else if (cat === 'all') {

            return allCharacters;
        }

        return Heroes;

        // return allCharacters.results.filter(hero => hero.biography.alignment == 'bad')

    } catch (error) {

        console.log(error);
        return {
            count: 0,
        }

    };

};

export const MostrarInfo = async() => {
    try {
        const endpoint = `${apiUrl}${id}`
        const response = await fetch(endpoint);
        const data = await response.json();
    
        return data;

    } catch (error) {
        console.log(error);
        return {
            count: 0,
        }

    };

};

export const elergirCat = ({ Categoria }) => {

    cat = Categoria;

}

export const BuscarPersonaje = ({ Nombre }) => {

    Busqueda = Nombre;

}

export const GuardarId = ({ Guardar }) => {

    id = Guardar;

}

// export const filterCharacters = (characters) => {
//     try {
//         const Heroes = characters.results.filter(hero => hero.biography.alignment === 'good')
//         return Heroes

//     } catch (error) {

//     }
// }