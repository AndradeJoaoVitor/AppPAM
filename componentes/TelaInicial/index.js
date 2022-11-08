import React from 'react';
import { View, Pressable, ScrollView, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles'

import imgXcloud from '../../assets/xcloud-1.png';
import imgFundo from '../../assets/logo.png';
import imgConsole from '../../assets/xcloud-2.png';
import imgJogo from '../../assets/jogo-1.png'

export default function TelaInicial() {
const Navigation = useNavigation();
 return (
    <View style={ styles.container }>
    <Image source={ imgFundo } style={ styles.img } />
    <Text style={ styles.titulo }>Xbox</Text>
    <Text style={ styles.descricao }>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>

    <Pressable
      onPress={ () => { Navigation.navigate("Consoles") } }
      style={styles.card}
    >
      <Image source={ imgConsole } style={ styles.cardImg } />
      <Text style={ styles.cardTexto }>Conheça os consoles</Text>
    </Pressable>

    <Pressable
      onPress={ () => { Navigation.navigate("Jogos") } }
      style={styles.card}
    >
      <Image source={ imgJogo } style={ styles.cardImg } />
      <Text style={ styles.cardTexto }>Conheça os jogos</Text>
    </Pressable>

    <Pressable
      onPress={ () => { Navigation.navigate("Nuvem") } }
      style={styles.card}
    >
      <Image source={ imgXcloud } style={ styles.cardImg } />
      <Text style={ styles.cardTexto }>Conheça o xCloud</Text>
    </Pressable>
  </View>
)
}