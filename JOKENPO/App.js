import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Image, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  const [imgJogador, setImgJogador] = useState(0)
  const [imgMaquina, setImgMaquina] = useState(0)
  const [pontosJogador, setPontosJogador] = useState(0)
  const [pontosMaquina, setPontosMaquina] = useState(0)
 

  function exibirImagem(valor){
    if(valor==0){
      return(<Image style={{width:180, height:120}}source={require('./assets/caixaMist.png')} />)
    }else if (valor==1){
      return(<Image style={{width:100, height:80}} source={require('./assets/papel.png')} />)
    } else if(valor==2){
      return(<Image style={{width:100, height:80}}source={require('./assets/pedra.png')} />)
    } else if(valor == 3){
      return(<Image style={{width:100, height:80}}source={require('./assets/tesoura.png')}/>)
    }
  }
  
  function jogar(numJogador){
    setImgJogador (numJogador)
    let numMaquina = Math.floor(Math.random()*3)+1
    setImgMaquina(numMaquina)

    if(numJogador==1 && numMaquina == 3 || numJogador==2 && numMaquina==1 || numJogador==3 && numMaquina ==2){
      setPontosJogador(pontosJogador+1)
    } else if(numJogador==3 && numMaquina==1 || numJogador==1 && numMaquina==2 || numJogador==2 && numMaquina==3){
      setPontosMaquina(pontosMaquina+1)
    }
  }
    function newPartida(){
        setPontosJogador(0);
        setPontosMaquina(0);
        setImgJogador(0)
        setImgMaquina(0)
    }
  
  return (
    <View style={styles.container}>
      <View style={styles.title} >
        <Image source={require('./assets/logo.png')} style={{width:460,height:150,}}/>
      </View>

      <View style={styles.placar}>
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
          <Text style={{fontSize: 35,fontFamily:'verdana',fontWeight: 'bold',color:'white'}} >
            PLACAR
          </Text>
        </View>
        
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
          <Text style={{fontSize: 35,fontFamily:'verdana',color:'white'}}>{pontosMaquina}</Text>
          <Text style={{fontSize: 35,fontFamily:'verdana',color:'white'}}>{pontosJogador}</Text>
        </View>

      </View>

      <View style={styles.game}>
        {exibirImagem(imgJogador)} 
        
        <Image
          style={{width:90, height:100}}
          source={require('./assets/vs2.png')}
        />
        {exibirImagem(imgMaquina)}
      </View>

      <View style={styles.botao}>
        <TouchableOpacity style={styles.button} onPress={() => newPartida()}>
            <Text style={styles.buttonTxt}> Nova Partida</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mao}>
        <TouchableOpacity onPress={()=>jogar(1)}> 
          <Image style={{width:105, height:85}} source={require('./assets/papel.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>jogar(2)}>
          <Image style={{width:105, height:85}}source={require('./assets/pedra.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>jogar(3)}>
          <Image style={{width:105, height:85}}source={require('./assets/tesoura.png')}/>
        </TouchableOpacity>

      </View>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f39bd1',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'hidden'
  },
  title: {
    flex:1,
    height:'100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '10%',
  },
  placar:{
    flex:1,
    width:'100%',
    height:'100%',
    marginTop: '10%',
  },
  pontuacao:{
    flex:1,
    width:'100%',
    height:'100%',
  },
  game:{
    flex:2,
    width:'100%',
    height:'100%',
    flexDirection:"row", 
    justifyContent:"space-evenly",
    alignItems:'center',
  },
  botao:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    borderColor:'white',
    width:'190%',
    height:'47%',
    borderRadius: '43%',
    backgroundColor:'#88BF11',
  },

  buttonTxt:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:10,
    textAlign: 'center',
    color: 'white',
   
  },
 mao:{
  flex:2,
    width:'100%',
    height:'100%',
    flexDirection:"row", 
    justifyContent:"space-evenly",
    alignItems:'center',
 }

});

