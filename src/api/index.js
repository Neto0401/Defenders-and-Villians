import React from 'react'

const Heroes = () => {
    const [heroes, setHeroes] = React.useState([]);

    React.useEffect(() => {
        console.log('use Effect');
        obtenerDatos();

    }, [])

    const obtenerDatos = async() => {
        const data = await fetch('https://www.superheroapi.com/api/4058882490856709/1');
        const dataHeroes = await data.json();
        console.log(dataHeroes);
        setHeroes(dataHeroes.powerstats);
    }

}

export default Heroes