import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image,} from 'react-native';
import { TouchableOpacity } from 'react-native-web';



export default function App() {

  const [impressao, setImpressao] = useState("")
  const[img, setImg] = useState(0)

const frases =[
  'Nada é tão lamentável e nocivo como antecipar desgraças.',
  'Exige muito de ti e espera pouco dos outros. Assim, evitarás muitos aborrecimentos.',
  'É preciso que o discípulo da sabedoria tenha o coração grande e corajoso. O fardo é pesado e a viagem longa.',
  'O saber a gente aprende com os mestres e os livros. A sabedoria se aprende é com a vida e com os humildes.',
  'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
  ' O sonho inspira, mas é a ação que realiza!',
  'Seja a melhor versão de você mesma.',
];
function quebrar(){
  if(img == 0 ){
    let numAleatorio = Math.floor(Math.random() * frases.length);
    setImpressao(frases[numAleatorio])
    setImg(1)
  }
}
function novo (){
  setImpressao(frases[''])
  setImg(0)
}

function exibirimagem(numero){
  if(numero==0){
    return(<Image source={require('./assets/biscoito.png')} style={styles.img} />)
  }else{
    return(<Image source={require('./assets/biscoitoAberto.png')} style={styles.img}/>)
  }
}
  return (
    <View style={styles.container}>
      {exibirimagem(img)}
      <Text style={styles.textoFrase}>{impressao}</Text>
      <TouchableOpacity style={styles.botao} onPress={()=>quebrar()}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={()=>novo()}>
        <view style={styles.btnArea}>
          <Text style={styles.btnTexto}>Novo biscoito</Text>
        </view>
      </TouchableOpacity>
    <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height:250,
    width: 250,
  },
  textoFrase:{
    fontSize:20,
    color:"#FF7F50",
    margin:30,
    fontStyle:'italic',
    textAlign:'center',
  },
  botao:{
    width:260,
    height:60,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius:27,
    margin:10,
  },
  
  btnArea:{
    flex:1,
    width: 230,
    alignItems:'center',
    justifyContent:'center',
    margin:15,
  },
  btnTexto:{
    color:'#dd7b22',
    fontSize:20,
    fontWeight:'bold',
    textAlign: 'center',
    margin:48,
   

  }
});
