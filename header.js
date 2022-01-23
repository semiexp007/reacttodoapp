import React,{ useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
export default function Header(){

    return(
        <View style={styles.header}>
            <Text style={styles.textheader}>My Todos</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    header:{
        
        height:80,
       
        backgroundColor:'pink'
    },
    textheader:{
       marginTop:40,
       textAlign:'center',
     
        color:'#fff',
        fontWeight:'bold',
        fontSize:25,
       

    
    }

})