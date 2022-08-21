import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';

//criando a tela 
export default function Home(){
 
    //Váriavies 
    let [valor1, setValor1] = useState();
    let [valor2, setValor2] = useState();
    let [total, setTotal] = useState();

    //função
    function CalcularTotal(){
        let resultado = parseFloat(valor1) + parseFloat(valor2);
        setTotal(resultado);

        Alert.alert("O Resultado total é: " + total);
    }


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Projeto Soma?</Text>
            <TextInput onChangeText={setValor1} style={styles.campo} placeholder="Digite um Número"/>
            <TextInput onChangeText={setValor2} style={styles.campo} placeholder="Digite um Número"/>

            <TouchableOpacity style={styles.botao} onPress={CalcularTotal} >
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}
 
//Estilo do app

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize: 30,
        color:'#fff',
        fontWeight:'bold',
        marginBottom:40
    },

    campo:{
        backgroundColor:'#B2BEBF',
        fontSize:20,
        padding: 5  ,
        marginTop:10,
        marginBottom:10,
        with: 300,
        borderRadius:10
    },

    botao:{
        backgroundColor:'#BD2A2E',
        alignItems: "center",
        borderRadius: 25,
        marginTop:20,
        width:200
    },

    botaoTexto:{
        color:"#FFF",
        fontSize:18,
        fontWeight:"700",
    }

});