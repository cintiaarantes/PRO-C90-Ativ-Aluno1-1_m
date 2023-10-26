//Aula 90: Este arquivo teo mesmo nome de ISSLocationScreen, pois ela é uma classe child (filha) do arquivo IssLocation.

import React, { Component } from "react";
import { View, Text, StyleSheet, Alert} from "react-native";
import axios from "axios";

export default class IssLocationScreen extends Component {
    //Desafio 01: Criação de um objeto em nosso estado “location” (semelhante ao IssLocation)
    constructor(props) {
      
    }

    //Desafio 03: Chamada da função de localização da EEI continuamente após intervalos definidos.
    componentDidMount() {

    }

    //Desafio 02: função para fazer solicitações na API e buscar os dados de localização
    getIssLocation = () => {

    }

    //Desafio 04: SE a função estiver buscando os dados, MOSTRE uma mensagem de carregamento na tela:
    //Desafio 05: SENÃO mostre os dados no cartão de localização.
    render() {
        if (Object.keys(this.state.location).length === 0) {
            return (
                
            );
        } else {
            return (
                
            );
        }
    }
}

const styles = StyleSheet.create({
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    infoText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
});