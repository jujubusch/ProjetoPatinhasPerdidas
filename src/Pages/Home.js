import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Stories from '../Components/Stories';
import Animal from '../Components/Animal';


export default function Home() {

  const [animal, setAnimal] = useState([]);

  async function getAnimal() {
    await fetch('http://10.139.75.12:5251/api/Animal/GetAllAnimais', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setAnimal(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAnimal();
  }, [])


  return (
    <View style={css.container}>
      {animal ?
        <>
          <Stories produtos={animal} />
          <FlatList
            data={animal}

            renderItem={({ item }) => 
            <Animal 
            animalNome={item.animalNome} 
            animalRaca={item.animalRaca} 
            animalFoto={item.animalFoto} 
            animalTipo={item.animalTipo} 
            animalCor={item.animalCor} 
            animalSexo={item.animalSexo} 
            animalObservacao={item.animalObservacao} 
            animalDtDesaparecimento={item.animalDtDesaparecimento} 
            animalDtEncontro={item.animalDtEncontro} 
            animalStatus={item.animalStatus}/>}
            
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ height: (animal.length * 600) + 110 }}
          />
          
        </>
        :
        <Text style={css.text}>Carregando Animais...</Text>
      }
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    color: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  },
  stories: {
    width: "100%",
    height: 100
  },
  btn: {
    backgroundColor: "black",
    color:"black",
    width: "70%",
    height: 80,
    borderRadius: 5,
  },
})