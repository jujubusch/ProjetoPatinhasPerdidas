import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const Home = ({ navigation }) => {

  const [PetsPerdidos, setPetsPerdidos] = useState([
    { id: '1', nome: 'Rex', Raca: 'yorkshire', Tipo: 'Mini', Cor: 'Cachorro Preto', Sexo: 'Macho', Observação: 'Tem uma pequena manchinha branca na orelha esquerda!', Foto: 'https://yorkshirecoloridos.wordpress.com/wp-content/uploads/2013/08/yorkshire-tala-11.jpg', DataDesaparecimento: '07/05/2024', DataEncontrado: 'NÃO ENCONTRADO', Status: 'Desaparecido' },
    { id: '2', nome: 'Luna', Raca: 'Shih Tzu', Tipo: 'Toy', Cor: 'Cadela Branca', Sexo: 'Femea', Observação: 'Tem uma coleirinha rosa!', Foto: 'https://a-static.mlcdn.com.br/450x450/coleira-para-cachorro-com-guia-peitoral-rosa-grid-pata-chic/lojaamigobicho/grid-p/71ca28d1e76e63a742e089bb03c13853.jpeg', DataDesaparecimento: '01/05/2024', DataEncontrado: 'NÃO ENCONTRADA', Status: 'Desaparecida' },
  ]);

  async function getHome() {
    await fetch('https://10.139.75.12/home/', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setPetsPerdidos(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getHome();
  }, [])

  const PetDesaparecido = ({ item }) => (
    <TouchableOpacity
      style={styles.petItem}
      onPress={() => navigation.navigate('DetalhesPet', { pet: item })}>
      <Text style={styles.petName}>{item.name}</Text>
      <Text style={styles.petBreed}>Raça: {item.breed}</Text>
      <Text style={styles.petType}>Tipo: {item.type}</Text>
      <Text style={styles.petColor}>Cor: {item.color}</Text>
      <Text style={styles.petGenere}>Sexo: {item.genere}</Text>
      <Text style={styles.petObservation}>Observação: {item.observation}</Text>
      <Text style={styles.petPicture}>Foto: {item.picture}</Text>
      <Text style={styles.petDtMissing}>Data do Desaparecimento: {item.missing}</Text>
      <Text style={styles.petDtFound}>Data que foi Encontrado: {item.found}</Text>
      <Text style={styles.petStatus}>Status: {item.status}</Text>
      <TouchableOpacity
        style={styles.DetalhesBtn}
        onPress={() => navigation.navigate('DetalhesPet', { pet: item })}>
        <Text style={styles.DetalhesBtnText}>Detalhes</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patinhas Perdidas</Text>
      <FlatList
        data={PetsPerdidos}
        renderItem={PetDesaparecido}
        keyExtractor={item => item.id}
        style={styles.PetDesaparecido}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: "black"
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white",
    marginTop: 40
  },
  PetDesaparecido: {
    width: '100%',
  },
  petItem: {
    backgroundColor: '#90EAAF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    elevation: 2,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  petBreed: {
    fontSize: 16,
    marginBottom: 5,
  },
  petType: {
    fontSize: 16,
    marginBottom: 5,
  },
  petColor: {
    fontSize: 16,
    marginBottom: 10,
  },
  petGenere: {
    fontSize: 16,
    marginBottom: 10,
  },
  petObservation: {
    fontSize: 16,
    marginBottom: 10,
  },
  petPicture: {
    fontSize: 16,
    marginBottom: 10,
  },
  petDtMissing: {
    fontSize: 16,
    marginBottom: 10,
  },
  petDtFound: {
    fontSize: 16,
    marginBottom: 10,
  },
  petStatus: {
    fontSize: 16,
    marginBottom: 10,
  },
  DetalhesBtn: {
    backgroundColor: '#227247',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  DetalhesBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;