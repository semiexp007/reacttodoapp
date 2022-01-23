import React,{ useState} from 'react';
import { StyleSheet, Text, View,Button ,TextInput,ScrollView,FlatList} from 'react-native';
import Header from './conponents/header';
import TodoItem from './conponents/todoItem';
import AddTodo from './conponents/addtodos';

export default function App() {
  const[todo, setTodo]=useState([
    { text:'buy coffee', key:'1'},
    { text:'create a app', key:'2'},
    { text:'play on the switch',key:'3'}
  ]);
 
const pressHandler =(key)=>{
  setTodo((prevTodos)=>{

    return prevTodos.filter(todo=>todo.key != key);
  });

}

const submitHandler=(text)=>{
  setTodo((prevTodos)=>{
    return[
      {text:text, key:Math.random().toString()},
      ...prevTodos
    ]
  })
}

  return (
    <View style={styles.container}>
    
     <Header/>
     <View style={styles.content}>
     <AddTodo submitHandler={submitHandler}/>
       <View style={styles.list}>
       
         <FlatList
          data={todo}
          renderItem={({ item}) => (
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
         />
       </View>

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    padding :40,

  },
  list:{
    marginTop:20,
  }
  
});
