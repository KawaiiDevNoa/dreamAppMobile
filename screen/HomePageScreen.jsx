import React from 'react'
import { StyleSheet, Text, View,ScrollView,Button } from 'react-native';
import {Poppins_300Light_Italic,useFonts} from '@expo-google-fonts/poppins';

// ici la props me permet de recupérer la prop navigation 
const HomePageScreen = (props) => {

    let [fontsLoaded] = useFonts({
        Poppins_300Light_Italic,
      })
  
      if (!fontsLoaded){
        return <View><Text>Chargement...</Text></View>
      }

    return (
        <>
            <ScrollView style={styles.container}>
                 <View>
                     <Text style={styles.hello}>HELLO!</Text>
                     <Text style={styles.prenom}>Noa</Text>
                 </View>
                 <View>
                     <View style={styles.bloc1}>
                        <Text style={styles.projet}>MES PROJETS EN COURS : nbr </Text>
                        <View style={styles.button}>
                             
                            <Button title='cliquer ici' onPress={()=>{props.navigation.navigate("Projets en cours")}}/>
                        </View>
                     </View>
                     <View style={styles.bloc2}>
                       <Text style={styles.projet}>MES PROJETS TERMINES : nbr </Text>
                       <View style={styles.button}>
                            <Button title='cliquer ici' onPress={()=>{props.navigation.navigate("Projets terminés")}}/>
                       </View>
                     </View>
                 </View>
                
                
                    {/* <StatusBar style="auto" /> */}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:40,
        backgroundColor:"#fff",
    },
    hello:{
       fontSize:50,
      fontFamily:"Poppins_300Light_Italic"
    },
    prenom:{
        fontSize:45,
        fontWeight:"bold"
    },
    bloc1:{
        display:"flex",
        borderRadius:30,
        backgroundColor: 'pink',
        height:600,
        marginTop:20,
        marginBottom:30
    },
    bloc2:{
        display:"flex",
        borderRadius:30,
        backgroundColor: 'purple',
        height:600
    },
    projet:{
        padding:110,
        fontSize:50,
        textAlign:"center",
        color:"#fff"
        
    },
    button:{
        alignSelf:"center",
    }
  });

export default HomePageScreen
