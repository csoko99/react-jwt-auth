import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native-web';


export default class Anime extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  kattintas=(sorszam, nev, mufaj, datum, evad, leiras)=>{
    //alert(sorszam)
    //alert(nev)
   
    this.props.navigacio.navigate('Seged',{aktid:sorszam, aktnev:nev, aktmufaj:mufaj, aktdatum:datum, aktevad:evad, aktleiras:leiras })
    
  }

  componentDidMount(){
    return fetch('http://localhost:8080/animek')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){
    
    
    
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    
    }

    return(
     

      <View style={{flex: 1, paddingTop:20, backgroundColor:"F0F8FF"}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 


          
          
      <View >
        <TouchableOpacity onPress={()=>this.kattintas(item.anime_id, item.anime_nev, item.anime_mufaj, item.anime_megjdatum, item.anime_evadsz, item.leiras)}>
          <Image  source={{uri:'http://localhost:8080/'+item.anime_id+'.jpg'}}   style={{ width:225, height:314 ,marginLeft:"auto",marginRight:"auto", borderRadius:10}} />  
          </TouchableOpacity>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Név: {item.anime_nev} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Megjelenés: {item.anime_megjdatum.split('T')[0].trim()} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Műfaj: {item.anime_mufaj} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Évadok száma: {item.anime_evadsz} db </Text>
          <Text> </Text>
          </View>

        
        }

        
        
      
        
         
        />
      </View>
    );
  }
}


  
  
;