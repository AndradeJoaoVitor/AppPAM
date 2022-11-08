import React from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';

import imgJogoFIFA from '../../assets/jogo-3.png';
import imgJogoFarCry from '../../assets/jogo-2.png';
import imgJogoCod from '../../assets/jogo-4.png';


export default function TelaJogos() {
const Navigation = useNavigation();
 return (
  <ScrollView>
  <View style={ styles.container }>
    <Text style={ styles.titulo }>Jogos em 4k</Text>
    <Text style={ styles.descricao }>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoFIFA } style={ styles.card }>
        <Text style={ styles.cardTitulo }>FIFA 23</Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>FIFA, também conhecido como FIFA Football ou FIFA Soccer, é uma série de videojogos de futebol, lançados anualmente pela Electronic Arts sobre a chancela EA Sports. </Text>
    </View>
    
    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoFarCry } style={ styles.card }>
        <Text style={ styles.cardTitulo }>Far Cry 4</Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>Far Cry 4 é um jogo eletrônico de tiro em primeira pessoa jogado em mundo aberto que foi produzido pela Ubisoft Montreal juntamente com a Ubisoft Red Storm, a Ubisoft Toronto, a Ubisoft Shanghai e a Ubisoft Kiev.</Text>
    </View>
    
    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoCod } style={ styles.card }>
        <Text style={ styles.cardTitulo }>Call of Duty: Modern Warfare II</Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>Call of Duty: Modern Warfare II é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Infinity Ward e publicado pela Activision. É uma sequência direta do reboot de 2019 e é o 19º jogo da franquia Call of Duty.</Text>
    </View>
  </View>
</ScrollView>
  );
}