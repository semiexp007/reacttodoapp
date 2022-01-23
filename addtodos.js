import React,{ useState} from 'react';
import { StyleSheet, Text, View,Button ,TextInput} from 'react-native';

export default function AddTodo({ submitHandler}){
   
const [text,setText]=useState('');


   const changeHandler=(val)=>{
    setText(val); 

   }
   
    return(
        <View>

            <TextInput sytle={styles.input}
             placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button
             onPress={()=> submitHandler(text)} title='add todo' color='pink'
             
             >
            </Button>

            
        </View>
    )
}
const styles =StyleSheet.create({
    input:{
      
        marginBottom:20,
        padding:10,
        borderBottomWidth:2,
        borderRadius:2,
        borderBottomColor:'#ddd'

    }
})