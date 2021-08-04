import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';
import Navigation from "./src/components/navigation";
import theme from "./src/theme"
import { EventRegister } from "react-native-event-listeners";
import themeContext from "./src/theme/themeContext";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
import { Provider as PerfilContext } from "./src/providers/InfoPerfilContext";
import LongTimers from "./src/utils/LongTimer";

export default function App() {
    LongTimers();
    const [mode, setMode] = useState(false);

    useEffect(() => {
        let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
            setMode(data);
        });
        return () => {
            EventRegister.removeEventListener(eventListener);
        }
    })

    return ( <
        PerfilContext >
            <AuthProvider >
                <themeContext.Provider value = { mode === true ? theme.darkTheme : theme.colors } >
                    <Navigation/>
                </themeContext.Provider> 
            </AuthProvider> 
        </PerfilContext>
    );
}