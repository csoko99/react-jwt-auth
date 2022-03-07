import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native-web';
import "bootstrap/dist/css/bootstrap.min.css";

import FileUpload from "./upload"



export default class Fevitel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nev:"",
        datum:"",
        mufaj:"",
        evad:"",
        triler:"",
        leiras:"",
        
    };
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


  render() {
    return (
      
         
    <View style = {{backgroundColor:'white',width:'80%',borderRadius:20,alignSelf:'center'}}>
    
    

      <View style={{padding: 10}}>
     
          <Text style={{padding: 10, fontSize: 22,color:'black',textAlign:'center'}}>
              Anime név:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'50%',alignSelf:'center',backgroundColor:'grey',borderColor:'black',color:"white", padding: 10}}
          placeholder="Add meg az anime nevét:"
          onChangeText={(nev) => this.setState({nev})}
          value={this.state.nev}
        />
        

        <Text style={{padding: 10, fontSize: 22,color:'black',textAlign:'center'}}>
              Megjelenési dátum:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40, width:'50%',alignSelf:'center',backgroundColor:'grey',marginBottom:5,textAlignVertical:'top',color:"white"}}
          placeholder="Add meg a dátumot:"
          onChangeText={(datum) => this.setState({datum})}
          value={this.state.datum}
        />

        <Text style={{padding: 10, fontSize: 22,color:'black',textAlign:'center'}}>
              Anime műfaj:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40, width:'50%',alignSelf:'center',backgroundColor:'grey',marginBottom:5,textAlignVertical:'top',color:"white"}}
          placeholder="Add meg a műfajt:"
          onChangeText={(mufaj) => this.setState({mufaj})}
          value={this.state.mufaj}
        />

        <Text style={{padding: 10, fontSize: 22,color:'black',textAlign:'center'}}>
              Évadok száma:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40, width:'50%',alignSelf:'center',backgroundColor:'grey',marginBottom:5,textAlignVertical:'top',color:"white"}}
          placeholder="Add meg az évadok számát:"
          onChangeText={(evad) => this.setState({evad})}
          value={this.state.evad}
        />

       <Text style={{padding: 10, fontSize: 22,color:'black',textAlign:'center'}}>
              Trailer link:
          </Text>
        <TextInput  
          placeholderTextColor="white"
          style={{height: 40, width:'50%',alignSelf:'center',backgroundColor:'grey',marginBottom:5,textAlignVertical:'top',color:"white"}}
          placeholder="Add meg az évadok számát:"
          onChangeText={(trailer) => this.setState({trailer})}
          value={this.state.trailer}
        />
        
        <Text style={{padding: 10, fontSize: 22,color:'black',textAlign:'center'}}>
              Leírás:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40, width:'50%',alignSelf:'center',backgroundColor:'grey',marginBottom:5,textAlignVertical:'top',color:"white"}}
          placeholder="Add meg a leírást:"
          onChangeText={(leiras) => this.setState({leiras})}
          value={this.state.leiras}
        />
      
        <FileUpload szoveg={this.state.szoveg} nev={this.state.nev} datum={this.state.datum} mufaj={this.state.mufaj} evad={this.state.evad} leiras={this.state.leiras} ></FileUpload>

        
      </View>
      
    </View>
    
    );
    
  }
}


