import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React,{useContext} from 'react';
import { Text, View } from 'react-native';
import HomePageScreen from './screen/HomePageScreen';
import InprogressProject from './screen/InProgressProject';
import FinishedProject from './screen/FinishedProject'

const Stack = createStackNavigator();

const App =() =>{
    
  //Standby
  // création d'un contexte pour pouvoir utiliser les infos  a travers tte l'appli
 const Project = React.createContext(MyContext) // myContext contiendra l'objet context
 const MyContext = useContext(Project)
 console.log(Project)
 
  return (
     <NavigationContainer>

       <Stack.Navigator>
         
          <Stack.Screen name='Accueil' component={HomePageScreen}/>
          <Stack.Screen name='Projets en cours' component={InprogressProject}/>
          <Stack.Screen name='Projets terminé ' component={FinishedProject}/>
          
           {/* creer un contexte avec useContext */}
       </Stack.Navigator>
          
     </NavigationContainer>
    
  );
}



export default App