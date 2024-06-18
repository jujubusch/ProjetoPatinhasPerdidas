import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Pessoas({navigation, animalNome, animalRaca, animalFoto, animalTipo, animalCor, animalSexo, animalObservacao, animalDtDesaparecimento, animalDtEncontro, animalStatus}) {
  
    const [exibe, setExibe] = useState(false); 

        const FuncionarDetalhe = () => {
            setExibe(!exibe); 
        };
    
      
    
    return (
        <View style={css.grandecaixa}>
        <View style={css.caixa}>
            <View style={css.caixatextaoreto}>
                <View style={css.circleAvatar}></View>
                <Text style={css.titulofoto}>{animalNome}</Text>
            </View>     
            
            <TouchableOpacity style={css.btnDetalhes} onPress={FuncionarDetalhe}>
                <Text style={css.btnDetalhesText}>
                {exibe ? 'Fechar Detalhes' : 'Detalhes'}
                </Text>
            </TouchableOpacity>

            {exibe && ( 
                <View style={css.detalhesModel}>
                <View style={css.detalhesModel}>
                <Text style={css.texto}>{animalRaca}</Text>
            </View>
            <Text style={css.texto}>{animalFoto}</Text>
            <Text style={css.texto}>{animalTipo}</Text>
            <Text style={css.texto}>{animalCor}</Text>
            <Text style={css.texto}>{animalSexo}</Text>
            <Text style={css.texto}>{animalObservacao}</Text>
            <Text style={css.texto}>{animalDtDesaparecimento}</Text>
            <Text style={css.texto}>{animalDtEncontro}</Text>
            <Text style={css.texto}>{animalStatus}</Text>
        </View>
      )}

        </View>
        </View>
  )
}
const css = StyleSheet.create({
   
    caixa:{
        marginTop: 80,
        

    }, caixatextaoreto: {
        flexDirection: 'row', 
        marginLeft: 10,
        alignItems: 'center'

    }, circleAvatar: {
        padding: 15,
        backgroundColor: 'black',
        borderRadius: 15

    }, titulofoto: {
      marginBottom: 10,
      marginLeft: 10,
      fontWeight: "bold",
      fontSize: 12

    }, fotonaalinha: {
        alignItems: 'center'

    }, tipo: {
        marginBottom: 10,
        color: 'blue',
        textAlign: 'center'

    }, foto: {
        width: 380,
        height: 380,

    }, valor: {
        textAlign: 'center',
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 20,

    }, texto: {
        fontStyle:'italic',
        marginLeft: 10,
        marginTop: 10
    }
})