import createDataContext from "./createDataContext";
import { firebase } from "../firebase";

//Acciones diferentes del reducer
const projectReducer = (state, action) => {
    switch (action.type) {
        case "errorMessage":
            return {...state, error: action.payload };
        case "message":
            return {...state, message: action.payload };
        case "getCartas":
            return {...state, cartas: action.payload };
        case "getPreguntas":
            return {...state, preguntas: action.payload };
        default:
            return state;
    }
};

//crear una referencia para la coleccion de proyectos
//obtener los datos de las preguntas
const preguntasRef = firebase.firestore().collection("preguntas")

const getPreguntas = (dispatch) => (id) => {
    preguntasRef
        .where("numPregunta", "==", id)
        .onSnapshot((querySnapshot) => {
            var preguntas = {};

            querySnapshot.forEach((doc) => {
                const pregunta = doc.data();
                pregunta.id = doc.id;
                preguntas = pregunta;
            })
            dispatch({ type: "getPreguntas", payload: preguntas });
        }, (error) => {
            dispatch({ type: "errorMessage", payload: error.message });
        })
}

//crear una nueva coleccion
const cartasRef = firebase.firestore().collection("Cartas")

const nuevaCarta = (dispatch) => (id, nombre, imagen, user) => {
    const data = {
        id,
        nombre,
        imagen,
        userId: user,
    };

    cartasRef.add(data).then((_doc) => {
            dispatch({ type: "message", payload: "Carta Creada" });
        })
        .catch((error) => {
            dispatch({ type: "errorMessage", payload: error.message });
        })
}

//obtener las cartas
const getCartas = (dispatch) => (userId) => {
    cartasRef
        .where("userId", "==", userId)
        .onSnapshot(
            (querySnapshot) => {
                const cartas = [];

                querySnapshot.forEach((doc) => {
                    const carta = doc.data();
                    carta.id = doc.id;
                    cartas.push(carta);
                });
                dispatch({ type: "getCartas", payload: cartas });
            }, (error) => {
                dispatch({ type: "errorMessage", payload: error.message })
            })
}

//Actualizar los datos

//Exportar las funcionalidades del contexto y el proveedor
export const { Provider, Context } = createDataContext(
    projectReducer, {
        getPreguntas,
        nuevaCarta,
        getCartas,
    }, {
        errorMesasage: null,
        cartas: [],
        preguntas: {},
    }
);