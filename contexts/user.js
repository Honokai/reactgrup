import React, {children, createContext, useState, useEffect} from 'react';
import firebase from 'firebase';
import 'firebase/auth';

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const ListenAuth = (userState) => {
        setUser(userState)
    }

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(ListenAuth)
        return listener
    },[])

    const resetPassword = (email) => {
        firebase.auth().sendPasswordResetEmail(email).then(resp => {
            console.warn(resp)
        }).catch(err => {
            if(err == "Error: There is no user record corresponding to this identifier. The user may have been deleted."){
                console.warn("Não há registro para o e-mail informado.")
            }
        })
    }

    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(resp => {
        }).catch(err => {
            console.log(err)
            if(err == "Error: There is no user record corresponding to this identifier. The user may have been deleted."){
                alert("Não há registro para este usuário.")
            }
            if (err== "Error: The email address is badly formatted."){
                alert("Verifique o endereço de e-mail.")
            }
            if(err == "Error: The password is invalid or the user does not have a password."){
                alert("Usuário ou senha inválido.")
            }
            
        })
    }

    const signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(resp => {
        }).catch(err => {
            console.warn(err)
        })
    }

    const signOut = () => {
        firebase.auth().signOut().then(resp => {
            console.warn("Usuário deslogado")
        }).catch(err => {
            console.warn(err)
        })
    }

    return(
        <UsuarioContext.Provider value={{user, signIn, signUp, signOut, resetPassword}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioContext, UsuarioProvider }