import Constant from "expo-constants";

const ENV = {
    dev: {
        apiUrl: "https://superheroapi.com/api/4058882490856709/",
        apiSearch: "https://superheroapi.com/api/4058882490856709/search/",
        apiKey: "AIzaSyDpJtljFLlFkDLhjOn-UMn-3LdumCig19w",
        authDomain: "defendersandvillains.firebaseapp.com",
        projectId: "defendersandvillains",
        storageBucket: "defendersandvillains.appspot.com",
        messagingSenderId: "436769309617",
        appId: "1:436769309617:web:d0c9fbf032f768e5da7390",
    },
    staging: {
        apiUrl: "https://superheroapi.com/api/4058882490856709/",
        apiSearch: "https://superheroapi.com/api/4058882490856709/search/",
        apiKey: "AIzaSyDpJtljFLlFkDLhjOn-UMn-3LdumCig19w",
        authDomain: "defendersandvillains.firebaseapp.com",
        projectId: "defendersandvillains",
        storageBucket: "defendersandvillains.appspot.com",
        messagingSenderId: "436769309617",
        appId: "1:436769309617:web:d0c9fbf032f768e5da7390",
    },
    production: {
        apiUrl: "https://superheroapi.com/api/4058882490856709/",
        apiKey: "AIzaSyDpJtljFLlFkDLhjOn-UMn-3LdumCig19w",
        authDomain: "defendersandvillains.firebaseapp.com",
        projectId: "defendersandvillains",
        storageBucket: "defendersandvillains.appspot.com",
        messagingSenderId: "436769309617",
        appId: "1:436769309617:web:d0c9fbf032f768e5da7390",
    }

}

const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    if (__DEV__) return ENV.dev;
    else if (env === "staging") return ENV.dev;
    else if (env === "production" || env === "default") return ENV.production;
};

export default getEnvVars;