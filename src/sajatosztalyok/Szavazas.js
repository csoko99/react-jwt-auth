import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native-web';



export default class Szavazas extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  szavazat=(szam)=>{
    var bemenet={
      bevitel1:szam
    }
    

  fetch("http://localhost:8080/szavazatfelvitel", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
    .then(x => x.text())
    .then(y => alert(y));

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
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View >
        <Image  source={{uri: 'http://localhost:8080/'+item.anime_id+'.jpg'}} style={{width:225, height:314 ,marginLeft:"auto",marginRight:"auto", borderRadius:10}} /> 
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.anime_nev} </Text>
           

          <TouchableOpacity
        style={styles.lilagomb}
        onPress={async ()=>this.szavazat(item.anime_id)}
      >
        <Text style={{color:"black",fontWeight:"bold",fontSize:15}}  >Erre szavazok</Text>
      </TouchableOpacity>
      <Text style={{marginTop:10}}></Text>
          </View>
        
        }

        
          keyExtractor={({anime_id}, index) => anime_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  lilagomb: {
    alignItems: "center",
    backgroundColor: "purple",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius:10,
  }
});