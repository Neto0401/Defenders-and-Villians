import Constant from "expo-constants";

const ENV = {
    dev: {
        apiUrl: "https://superheroapi.com/api/4058882490856709/",
        apiSearch: "https://superheroapi.com/api/4058882490856709/search/",
        apiKey: "AIzaSyDEMlUpX8-HAjkCBvS-7lBbxdJV4wnSkSQ",
        authDomain: "defenders-and-villains.firebaseapp.com",
        projectId: "defenders-and-villains",
        storageBucket: "defenders-and-villains.appspot.com",
        messagingSenderId: "686369988871",
        appId: "1:686369988871:web:9f9e3c3831b6c9231ca5a2",
        
    },

    production: {
        apiUrl: "https://superheroapi.com/api/4058882490856709/",
        apiKey: "AIzaSyDEMlUpX8-HAjkCBvS-7lBbxdJV4wnSkSQ",
        authDomain: "defenders-and-villains.firebaseapp.com",
        projectId: "defenders-and-villains",
        storageBucket: "defenders-and-villains.appspot.com",
        messagingSenderId: "686369988871",
        appId: "1:686369988871:web:9f9e3c3831b6c9231ca5a2",    
    }

}

const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    if (__DEV__) return ENV.dev;
    else if (env === "staging") return ENV.dev;
    else if (env === "production" || env === "default") return ENV.production;
};

export default getEnvVars;