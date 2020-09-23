import React from 'react'
import { View, Text,Button,StyleSheet } from 'react-native'

const InProgressProject = () => {
    return (
        <>
            <View>

                <Text>Mes projets</Text>
                <View>
                    <View>
                        <Button title='+' onPress={()=>{}}/>
                    </View>
                </View>
                
            </View>
        </>
    )
}

const Styles = StyleSheet.create({
    container2:{
        flex:1,
        padding:30,
    },
    myProject:{
        display:"flex",

    },
    buttonProject:{
       
    }
})
export default InProgressProject
