import React, { useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, View } from 'react-native'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { TextInput } from 'react-native-web';

function Login({ navigateToTodoList }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth,email, password);
            console.log(response)
            // alert('success')
            // navigation.navigate('TodoList')
            navigateToTodoList();
        } catch (error) {
            console.log(error);
            alert('user info not stored' + error.message)
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response)
            // alert('user added')
            navigateToTodoList();
        } catch (error) {
            console.log(error);
            alert('user exist')
        } finally {
            setLoading(false);
        }
    }


    return (
        <View style={styles.container} >
            <View style={styles.headerTxt} >
                Login To Do
            </View>
            <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}  ></TextInput>
            <TextInput value={password} secureTextEntry={true} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}  ></TextInput>


            {
                loading ? <ActivityIndicator size="large" color="#0000ff" /> :
                    <>
                        <View style={styles.btn} >
                        <Button  title='Login' onPress={signIn} />
                        </View>
                        <View style={styles.btn} >
                        <Button  title='Create Account' onPress={signUp} />
                        </View>
                    </>
            }


        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'lightgray',
        borderRadius: 10,
        padding: 10,
        width: '70%',
        marginBottom: 10
    },

    headerTxt: {
        marginVertical: 40,
        fontSize: 'larger',
        fontWeight: '700',
        fontFamily: 'Arial'
    },
    
    btn: {
        marginBottom:10,
    }

})

export default Login


