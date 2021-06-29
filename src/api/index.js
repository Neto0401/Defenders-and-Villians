import React from 'react'
import getEnvVars from '../../environment';

const { apiUrl } = getEnvVars();


export const fetchHeroes = async() => {
    try {
        const allCharacters = { results: [] };
        for (let index = 1; index < 10; index++) {

            const endpoint = `${apiUrl}${index}`
            const response = await fetch(endpoint);
            const data = await response.json();

            allCharacters.results.push(data);

        }

        return allCharacters;

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
        for (let index = 1; index < 10; index++) {
            const endpoint = `${apiUrl}${index}`
            const response = await fetch(endpoint);
            const data = await response.json();

            allCharacters.results.push(data);

        }
        const Heroes = { results: [] };
        Heroes = allCharacters.results.filter(hero => hero.biography.alignment === 'bad')
        return Heroes;

    } catch (error) {

        console.log(error);
        return {
            count: 0,
        }

    };

};


// export const filterCharacters = (characters) => {
//     try {
//         const Heroes = characters.results.filter(hero => hero.biography.alignment === 'good')
//         return Heroes

//     } catch (error) {

//     }
// }