import getEnvVars from '../../environment';
const {apiUrl} = getEnvVars();

export const fetchHeroes = async() => {
    try {
        for (let index = 1; index < 700; index++) {
            const endpoint=`apiUrl${index}`
        }
        const response = await fetch(endpoint); 
        const data = await response.json();

        const heroesInfo = () =>{
            const promises = data.results.map(async(heroes)=> {
                return{
                    ...heroes,
                    heroesInfo: await searchHeroes(heroes.name),
                };
            });
            return Promise.all(promises);
        };
        return{
            count: data.count, results: await heroesInfo()}
        } catch (error) {
        console.log(error);
        return{  
            count:0,
        }    
    };
    
};