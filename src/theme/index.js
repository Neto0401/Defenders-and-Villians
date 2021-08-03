import { DefaultTheme } from "react-native-paper";
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        theme: "light",
        primaryColor: '#0F2441',
        secondaryColor: '#323CA6',
        textColor: '#212121',
        bckColor: '#ffffff',
        blackColor: '#000A12',
        BckText: '#ffffff',
        titleColor: '#ffffff',
        progressBar: '#43A9BF',
        configCards: '#DEDFE4',
        botonSalir: '#D50000',
        botonJuego: '#0F2441',
        fondoJuego: '#ffffff',
        header: '#000000',
        drawer: '#0F2441',
    },
    darkTheme: {
        theme: "dark",
        primaryColor: '#000000',
        secondaryColor: '#1E1E1E',
        textColor: '#000000',
        bckColor: '#090B10',
        blackColor: '#000A12',
        BckText: '#BB86FC',
        titleColor: '#ffffff',
        progressBar: '#ffffff',
        configCards: '#BB86FC',
        botonSalir: '#8E1414',
        botonJuego: '#BB86FC',
        fondoJuego: '#0F1232',
        header: '#ffffff',
        drawer: '#212121',
    }
}

export default theme;