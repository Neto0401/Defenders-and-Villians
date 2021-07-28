import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/theme';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './src/theme/themeContext';
import DrawerNavigator from './src/components/navigation/DrawerNavigation';
import StackLogin from './src/components/navigation/StackLogin';
import { Provider as AuthContext } from './src/components/providers/AuthContext';


export default function App() {
  const [mode, setMode] = useState(false);

  useEffect(() =>{
    let eventListener = EventRegister.addEventListener("changeTheme",(data)=>{
      setMode(data);
    });
    return()=>{
      EventRegister.removeEventListener(eventListener);
    }
  })
  
  return (
      <themeContext.Provider value ={mode === true ? theme.darkTheme : theme.colors}>
          <StackLogin/>
      </themeContext.Provider>
  );
}

{/* <themeContext.Provider value ={mode === true ? theme.darkTheme : theme.colors}>
<NavigationContainer>
  <DrawerNavigator />
</NavigationContainer>
</themeContext.Provider> */}
