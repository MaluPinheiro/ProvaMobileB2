import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cartao from '../../Components/DashboardPage';

export default function RPGlist() {
  const cartoes=[
    {
      nome: 'Adric',
      classe: 'Guerreiro',
      ataque: '5 pontos',
      defesa: '7 pontps',
      imgUrl: 'https://pm1.narvii.com/6593/5bf260d7ebddba7d0ce5756108e332b8f46cfebd_00.jpg'
    },
    {
      nome: 'Amenadiel',
      classe: 'Mago',
      ataque: '8 pontos',
      defesa: '4 pontos',
      imgUrl: 'https://ellosrpg.files.wordpress.com/2016/09/c3adcarus.jpg?w=640'
    },
    {
      nome: 'Thrael',
      classe: 'Assassino',
      ataque: '9 pontos',
      defesa: '7 pontos',
      imgUrl: 'https://pm1.narvii.com/6522/8fcf75f7592da2f9573b12629e800d7480ff11f2_hq.jpg'
    }
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cartões de RPG:</Text>
       {cartoes.map(c => <Cartao cartao={c}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: 'black',
    fontSize: 18 
  }
});