import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Pressable, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../actions/todoActions';
import { TextInput } from 'react-native-web';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function TodoList() {


    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [completed, setCompleted] = useState([]);

    const handleAddTodo = () => {

        if (title.trim() !== '' && desc.trim() !== '') {
            dispatch(addTodo({
                id: todos.length + 1,
                title: title,
                desc: desc
            }));
            setTitle('');
            setDesc('');
        }
    };

    const handleRemoveTodo = (id) => {
        confirm('Are you sure you want to delete this todo?')
        dispatch(removeTodo(id));

    }


    const completefn = (id) => {
        if (!completed.includes(id)) {
            setCompleted([...completed, id]);
        }
    }

    return (
        <View style={styles.container} >
            {todos.length === 0 ? (
                <View style={{justifyContent:'center',alignItems:'center', flex:1}} > <Text style={styles.addTodoText}>add your ACTION PLAN todo!</Text> </View>
            ) : (
                <View style={{ alignItems: 'center', justifyContent: 'start', width: '100%' }} >
                    {todos.map(todo => (
                        <View style={styles.card} key={todo.id} >
                            <View style={styles.textContainer} >
                                <Text style={[styles.cardtxt1, completed.includes(todo.id) && styles.completedText]} >{todo.title}</Text>
                                <Text style={[styles.cardtxt2, completed.includes(todo.id) && styles.completedText]} >{todo.desc}</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }} >
                                <Pressable style={styles.completebtn} onPress={() => completefn(todo.id)} >
                                    <FontAwesome5 name='check' color="#fff" />
                                </Pressable>
                                <Pressable style={styles.deletebtn} onPress={() => handleRemoveTodo(todo.id)} >
                                    <AntDesign name='delete' color="#fff" />
                                </Pressable>
                            </View>
                        </View>
                    ))}
                </View>
            )}

            <View style={styles.bottombtn} >
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                    placeholder="Title"
                    value={title}
                    onChangeText={text => setTitle(text)}
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                    placeholder="Description"
                    value={desc}
                    onChangeText={text => setDesc(text)}
                />
                <Button style={styles.bottombtn} title="Add Todo" onPress={handleAddTodo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    bottombtn: {
        position: 'absolute',
        bottom: 0,
    },

    completebtn: {
        backgroundColor: 'green',
        padding: 10,
        marginRight: 5,
        borderRadius: 20,
    },

    deletebtn: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 20,
    },

    addTodoText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign: 'center',
        marginTop: 20,
    },

    textContainer: {
        flex: 1,
    },

    cardtxt1: {
        fontSize: 'larger',
        color: 'black',
        flexShrink: 1,
    },

    cardtxt2: {
        color: 'gray',
        flexShrink: 5,
    },

    completedText: {
        textDecorationLine: 'underline line-through',
    },

    card: {
        flexShrink: 1,
        flexDirection: "row",
        alignItems: 'start',
        justifyContent: "space-between",
        width: '80%',
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f4eeed',
        borderRadius: 20
    }

})

export default TodoList