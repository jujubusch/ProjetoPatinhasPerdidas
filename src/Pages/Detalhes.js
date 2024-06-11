import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Detalhes = ({ route }) => {
  const { animais } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: animais.image}} style={styles.image} />
      <View style={styles.DetalhesContainer}>
        <Text style={styles.title}>{animais.name}</Text>
        <Text style={styles.raca}>{animais.breed}</Text>
        <Text style={styles.tipo}>{animais.type}</Text>
        <Text style={styles.cor}>{animais.color}</Text>
        <Text style={styles.sexo}>{animais.genere}</Text>
        <Text style={styles.observacao}>{animais.observation}</Text>
        <Text style={styles.foto}>{animais.picture}</Text>
        <Text style={styles.foto}>{animais.picture}</Text>
        <Text style={styles.location}>Last seen: {animais.lastSeenLocation}</Text>
        <Text style={styles.date}>Date: {animal.lastSeenDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  DetalhesContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});

export default Detalhes;

/*import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Detalhes() {

  const [produtos, setProdutos] = useState([]);

  return (
    <View style={css.container}>
      {produtos ?
        <>
          <FlatList
            data={produtos}
            renderItem={({ item }) => <Produto title={item.title} price={item.price} image={item.image} description={item.description} category={item.category} rating={item.rating} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ height: (produtos.length * 600) + 110 }}
          />
        </>
        :
        <Text style={css.text}>Carregando produtos...</Text>
      }
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  },
  stories: {
    width: "100%",
    height: 100
  }
})*/

/*async function getProdutos() {
    await fetch('https://10.139.75.12/detalhes', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setProdutos(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getProdutos();
  }, [])*/