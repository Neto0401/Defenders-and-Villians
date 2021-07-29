import getEnvVars from '../../../environment';

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

        for (let index = 1; index < 50; index++) {

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

export const fetchImage = async() => {
    try {
        const endpoint = `${apiUrl}${id}/image`
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

export let volver = ''

export const CambioPantalla = ({ cambio }) => {
    if (cambio = 'Listado') {
        volver = 'Listado'
    } else {
        volver = 'Resultados de Busqueda'
    }
}