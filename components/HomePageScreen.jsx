import React from 'react'
import { StyleSheet, Text, View,ScrollView,Button } from 'react-native';
import InProgressProject from './InProgressProject';
import FinishedProject from './FinishedProject';

const HomePageScreen = () => {
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
                            <Button title='cliquer ici' onPress={()=>{}}/>
                        </View>
                     </View>
                     <View style={styles.bloc2}>
                       <Text style={styles.projet}>MES PROJETS TERMINES : nbr </Text>
                       <View style={styles.button}>
                            <Button title='cliquer ici' onPress={()=>{}}/>
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
        padding:30
    },
    hello:{
       fontSize:30,

    },
    prenom:{
        fontSize:25,
        fontWeight:"bold"
    },
    bloc1:{
        display:"flex",
        borderRadius:30,
        backgroundColor: 'pink',
        height:400,
        marginTop:20,
        marginBottom:20
    },
    bloc2:{
        display:"flex",
        borderRadius:30,
        backgroundColor: 'purple',
        height:400
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
