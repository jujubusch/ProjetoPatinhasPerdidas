import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import { useFocusEffect } from '@react-navigation/native';

export default function Cadastrar() {

  const fade = useRef( new Animated.Value(0) ).current;

  useFocusEffect(
    React.useCallback( () => {
      fade.setValue(0);
      Animated.timing(fade, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [] )
  );

  const[UsuarioNome, setUsuarioNome] = useState ("");
  const[UsuarioTelefone, setUsuarioTelefone] = useState("");
  const[UsuarioEmail, setUsuarioEmail] = useState("");
  const[UsuarioSenha, setUsuarioSenha] = useState("");
  const[erro, setErro] = useState("");
  const[sucesso, setSucesso] = useState("");

  async function Cadastrar() 
  {
    await fetch('http://10.139.75.12:5251/api/Usuario/GetAllUsuario',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
              name: {
                firstname: UsuarioNome,
            },
              phone: UsuarioTelefone,
              email: UsuarioEmail,
              password: UsuarioSenha
          })
        })
        .then( res => (res.ok == true) ? res.json () : false)
        .then(json => {
          setSucesso((json.id) ? true : false);
          setErro((json.id) ? false : true);
      } )
        .catch(err => setErro( true ) )
  }

  return (
    <ScrollView contentContainerStyle={css.container}>
      <Animated.View style={{ opacity: fade }}>
      <Text style={css.titulo}>Cadastrar Usuário</Text>
      { sucesso ? 
        <Text>Seu Cadastro foi Realizado com Sucesso!</Text>
      :
      <>
      <TextInput 
        style={css.campos}
        placeholder="Nome:"
        placeholderTextColor={"gray"}
        TextInput={UsuarioNome}
        onChangeText={(digitado) => setUsuarioNome( digitado ) }
      />
      <TextInput 
        style={css.campos}
        placeholder="Telefone:"
        placeholderTextColor={"gray"}
        TextInput={UsuarioTelefone}
        onChangeText={(digitado) => setUsuarioTelefone( digitado ) }
      />
      <TextInput 
        style={css.campos}
        placeholder="Email:"
        placeholderTextColor={"gray"}
        TextInput={UsuarioEmail}
        onChangeText={(digitado) => setUsuarioEmail( digitado ) }
      />
      <TextInput 
        style={css.campos}
        placeholder="Senha:"
        placeholderTextColor={"gray"}
        TextInput={UsuarioSenha}
        onChangeText={(digitado) => setUsuarioSenha( digitado ) }
      />
      <TouchableOpacity style={css.btnCadastrar}>
        <Text style={css.btnCadastrarText} onPress={Cadastrar}>CADASTRAR</Text>
      </TouchableOpacity>
      {erro && <Text style={css.text}>Revise cuidadosamente os campos!</Text>}
    </>
  }
      </Animated.View>
    </ScrollView>
  )
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    color: "white",
    justifyContent: "center",
    alignItems: "center",

    height: "100%"
  },
  text: {
    marginTop: -15,
    fontSize: 20,
    color: "white",
    marginLeft: 15
  },
  campos: {
    backgroundColor: "#BCE3DA",
    width: 350,
    height: 60,
    marginTop: 30,
    marginLeft: -10,
    borderRadius: 10,
    fontSize: 15,
  },
  btnCadastrar: {
    backgroundColor: "#00CCB3",
    width: 300,
    height: 50,
    marginTop: 30,
    borderRadius: 5,
    margin: 30
  },
  btnCadastrarText: {
    fontSize: 27,
    textAlign: "center",
    marginTop: 10
  },
  titulo: {
    color: "white",
    fontSize: 30,
    marginLeft: 40
  }
})