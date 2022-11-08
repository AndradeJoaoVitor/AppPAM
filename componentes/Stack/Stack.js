import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TelaConsole from '../TelaConsole';
import TelaInicial from '../TelaInicial';
import TelaJogos from '../TelaJogos';
import TelaNuvem from '../TelaNuvem';


const Stack = createNativeStackNavigator();


export default function Rotas() { 
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Início"
            component={TelaInicial}
            />

            <Stack.Screen
            name="Jogos"
            component={TelaJogos}
            />

            <Stack.Screen
            name="Nuvem"
            component={TelaNuvem}
            />

            <Stack.Screen
            name="Consoles"
            component={TelaConsole}
            />
            
        </Stack.Navigator>
    );
}
