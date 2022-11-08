import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';
import imgConsole1 from '../../assets/xboxS.png';
import imgConsole2 from '../../assets/xboxX.png';


export default function TelaConsole() {
const Navigation = useNavigation();
 return (
  <ScrollView style={ styles.container}>
  <View style={ styles.box }>
    <Image source={ imgConsole1 } style={ styles.img } />
    <Text style={ styles.titulo }>XBOX SERIES S</Text>
    <Text style={ styles.subtitulo }>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
    <Text style={ styles.paragrafo }>O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance</Text>
  </View>
  
  <View style={ styles.box }>
  <Image source={ imgConsole2 } style={ styles.img } />
    <Text style={ styles.titulo }>XBOX SERIES X</Text>
    <Text style={ styles.subtitulo }>O Xbox mais rápido e poderoso de todos os tempos.</Text>
    <Text style={ styles.paragrafo }>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
  </View>
</ScrollView>
  );
}