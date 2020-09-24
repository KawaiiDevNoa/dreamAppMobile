import React from 'react'
import { View, Text,Button,StyleSheet,TextInput,Textarea} from 'react-native'

const InProgressProject = () => {
    
    // champs du formulaire
    const [projectName,setProjectName]=React.useState("");
    const [projectDescription,setProjectDescription]=React.useState("");

    // cacher et montrer le formulaire
    const [visible,setVisible]= React.useState(false);
    
    // cacher et montre le formulaire des étapes
    const [visibleStep,setVisibleStep]= React.useState(false);
    return (
        <>
            <View style={Styles.container2}>

                <Text>Mes projets</Text>
                <View style={Styles.myProject}>
                    <View style={Styles.buttonProject}>
                        <Button title='+' onPress={()=>{setVisible(!visible)}}/>
                    </View>
                    
                    {/* creation champs de formulaire ....faire une condition ternaire pour cacher et montrer*/}
                    { visible===true? <View style={Styles.createForm}>
                        <Text>Nom du projet</Text>
                        <TextInput onChangeText={text => setProjectName(text)}
                                   value={projectName}
                                   style={Styles.champs}/>
                        <Text>Description</Text>
                        <TextInput onChangeText={text => setProjectDescription(text)}
                                   value={projectDescription}
                                   style={Styles.champs}/>
                        {/* creation des étapes */}
                         <View style={Styles.buttonProject}>
                             <Button title='+' onPress={()=>{setVisibleStep(!visibleStep)}}/>
                              <Text>créer des étapes</Text>
                         </View> 
                         {visibleStep===true?<View>
                                  <Text>Step 1</Text>
                                  <Text>Step 2</Text>
                                  <Text>Step 3</Text>
                                  <Text>Step 4</Text>
                                  <Text>Step 5</Text>
                                  <Text>Step 6</Text>
                                  <Text>Step 7</Text>
                                  <Text>Step 8</Text>
                                  <Text>Step 9</Text>
                                  <Text>Step 10</Text>
                                  <Text>Step 11</Text>
                                  <Text>Step 12</Text>
                                  
                                  
                              </View> :null}    
                        <View style={Styles.buttonCreateP}>
                           <Button title='créer' onPress={()=>{}}/>
                        </View>
                       
                    </View> : null}
                    
                    {/* affichage des projets créé */}
                     <View>
                         {/* liste des étapes avec un case a coché  */}



                     </View>

                </View>
                
            </View>
        </>
    )
}

// dans chaque projet mettre le nombre d'étape réalisé et  un bouton terminé et si cliqué faire apparaitre le projet dans la partie projet terminé

const Styles = StyleSheet.create({
    container2:{
        flex:1,
        padding:40,
        backgroundColor:"#fff"
    },
    myProject:{
        display:"flex",
   
    },
    buttonProject:{
       
       flexDirection:"row",
    },
    createForm:{
        display:"flex",
        backgroundColor:"lightgrey",
        padding:30,
        marginTop:20
    },
    buttonCreateP:{
       flexDirection:"row",
       marginTop:10
    },
    champs:{
        
        backgroundColor:"#fff",
        marginBottom:10
    }
})
export default InProgressProject
