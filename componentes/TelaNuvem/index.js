import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import imgFundo from '../../assets/fundo-xcloud.png'
import img1 from '../../assets/xcloud-2.png'


export default function TelaNuvem() {
const Navigation = useNavigation();
 return (
  <ImageBackground source={ imgFundo } style={ styles.container }>
  <Text style={ styles.titulo }>Xbox Cloud Gaming</Text>
  <Text style={ styles.subtitulo }>Serviço de streaming de jogos</Text>
  <Text style={ styles.paragrafo }>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>
  <Text style={ styles.paragrafo }>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>
  <Text style={ styles.paragrafo }>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>
  <Image source={ img1 } style={ styles.img } />
</ImageBackground>
  );
}