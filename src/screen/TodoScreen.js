import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper'
import Fallback from '../components/Fallback'

const TodoScreen = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [editedTodo, setEditedTodo] = useState(null)

    const handleAddTodo = () => {

        if(todo === "") {
            return;
        }
        
        setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);

        setTodo("");
    }

    const handleDeleteTodo = (id) => {
        const updateTodoList = todoList.filter((todo) => todo.id != id);

        setTodoList(updateTodoList);
    }

    const handleEditTodo = (todo) => {
        setEditedTodo(todo);
        setTodo(todo.title)
    }

    const handleUpdateTodo = () => {

        const updateTodos = todoList.map((item) => {

            if(item.id == editedTodo.id) {
                return {...item, title: todo}
            }

            return item
        })

        setTodoList(updateTodos)
        setEditedTodo(null)
        setTodo("")
    }

    // For displaying all the todos
    const renderTodos = ({ item, index}) => {
        return (
            <View
                style={{ backgroundColor: "#1e90ff", borderRadius: 6, paddingHorizontal: 6, paddingVertical: 12, marginBottom: 12, flexDirection: "row", alignItems: "center" }}
            >
                
                <Text 
                    style={{ color: '#fff', fontSize: 20, fontWeight: 700, flex: 1 }} 
                >
                        {item.title}
                </Text>

                <IconButton icon='pencil' iconColor='#fff' onPress={()=>handleEditTodo(item)} />
                <IconButton icon='trash-can' iconColor='#fff' onPress={()=>handleDeleteTodo(item.id)} />
            </View>
        )
    }

  return (
    <View style={{ marginHorizontal: 16}}>
        <TextInput 
            style={{ borderWidth: 2, borderColor: "#1e90ff", borderRadius: 6, paddingVertical: 12, paddingHorizontal: 16 }}
            placeholder='Add Todo'
            value={todo}
            onChangeText={(userText) => setTodo(userText)}
        />

        { editedTodo ? <TouchableOpacity 
                style={{ backgroundColor: "#000", borderRadius: 6, paddingVertical: 8, marginVertical: 34, alignItems: "center"}}
                onPress={()=>handleUpdateTodo()}
            >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20}}>Update</Text>
            </TouchableOpacity> :
            <TouchableOpacity 
                style={{ backgroundColor: "#000", borderRadius: 6, paddingVertical: 8, marginVertical: 34, alignItems: "center"}}
                onPress={()=>handleAddTodo()}
            >
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20}}>Add</Text>
            </TouchableOpacity>
        }

        <FlatList data={todoList} renderItem={renderTodos} />

        {
            todoList.length <= 0 && <Fallback />
        }
    </View>
  )
}

export default TodoScreen

const styles = StyleSheet.create({})