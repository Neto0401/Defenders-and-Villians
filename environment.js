import Constant from "expo-constants";

const ENV = {
    dev: {
        apiUrl: "https://superheroapi.com/api/4058882490856709/",
        apiSearch: "https://superheroapi.com/api/4058882490856709/search/",
    },

    production: {
        apiUrl: "https://superheroapi.com/api/4058882490856709/",
    }

}

const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    if (__DEV__) return ENV.dev;
    else if (env === "staging") return ENV.dev;
    else if (env === "production" || env === "default") return ENV.production;
};

export default getEnvVars;