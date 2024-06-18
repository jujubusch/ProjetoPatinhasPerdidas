import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const [detalhes, setDetalhes] = useState([])

const Detalhes = ({ route }) => {
  const { Detalhes } = route.params;

  async function getDetalhes() {
    await fetch('http://10.139.75.12:5251/api/Animal/GetAllAnimais', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setDetalhes(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDetalhes();
  }, [])

  return (
    <View style={styles.container}>
      
      <View style={styles.DetalhesContainer}>
        <Text style={styles.title}>{Detalhes.name}</Text>
        <Text style={styles.raca}>{Detalhes.breed}</Text>
        <Text style={styles.tipo}>{Detalhes.type}</Text>
        <Text style={styles.cor}>{Detalhes.color}</Text>
        <Text style={styles.sexo}>{Detalhes.genere}</Text>
        <Text style={styles.observacao}>{Detalhes.observation}</Text>
        <Text style={styles.foto}>{Detalhes.picture}</Text>
        <Text style={styles.dtDesaparecimento}>{Detalhes.missing}</Text>
        <Text style={styles.dtEncontrado}>{Detalhes.found}</Text>
        <Text style={styles.status}>{Detalhes.status}</Text>
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
  raca: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  tipo: {
    fontSize: 16,
    marginBottom: 5,
  },
  cor: {
    fontSize: 16,
  },
  sexo: {
    fontSize: 16,
  },
  observacao: {
    fontSize: 16,
  },
  foto: {
    fontSize: 16,
  },
  dtDesaparecimento: {
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

