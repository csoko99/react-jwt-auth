import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View } from 'react-native-web';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


export default class Torles extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  lekerdez=() => {
    return fetch('http://localhost:8080/leiras')
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


  torles=(szam)=>{
    //alert(szam)
    
    var bemenet={
      bevitel1:szam
    }
    

  fetch("http://localhost:8080/leiras_torles", {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => {alert(y);this.lekerdez()})

  }


  componentDidMount(){
    this.lekerdez()
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
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.leiras} </Text>
           

          
      <Button variant="danger" onClick={async ()=>this.torles(item.anime_leiras_id)} style={{ width:'35%', alignSelf:'center', padding:10, fontWeight:'bold', color:'black' }}>Ezt szeretném törölni</Button>
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