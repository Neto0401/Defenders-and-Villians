import createDataContext from "./createDataContext";
import { firebase } from "../firebase"


const authReducer = (state, action) => {
    switch (action, type) {
        case 'registrarse':
            return state;
        default:
            return state;
    };
};

//funciones

const registrarse = (dispatch) => (nick, mail, contraseña) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(mail, contraseña)
        .then((response) => {
            console.log('usuario ha sido creado');
        })
        .catch((err) => {
            console.log(err);
        });
};

//exportar las funciones del contexto

export const { Provider, Context } = createDataContext(
    authReducer, {
        registrarse,
    }, {
        user: {},
    },
);