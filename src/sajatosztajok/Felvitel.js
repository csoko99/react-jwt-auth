import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity } from 'react-native-web';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';



export default class Fevitel extends Component {
  constructor(props) {
    super(props);
    this.state = {

        nev:"",
        datum:"",
        mufaj:"",
        evad:"",
        leiras:"",
    };
  }

felvitel=async ()=>{
    //alert(this.state.nev)

    if (this.state.nev=="" || this.state.datum=="" || this.state.mufaj==""|| this.state.evad=="")
    {
      alert("Add meg a mezőket!")
      return
    }
    let bemenet={
      bevitel1:this.state.nev,
      bevitel2:this.state.datum,
      bevitel3:this.state.mufaj,
      bevitel4:this.state.evad,
      
    }

    if (this.state.leiras=="")
    {
      alert("Add meg a leírást!")
      return
    }
    let leiras_felvitel={
      leiras:this.state.leiras,
      
    }


    fetch('http://localhost:8080/anime_felvitel',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
    )
    .then((response) => response.text())
    .then((szoveg) => {

    alert(szoveg)
     

})

fetch('http://localhost:8080/leiras_felvitel',{
  method: "POST",
  body: JSON.stringify(leiras_felvitel),
  headers: {"Content-type": "application/json; charset=UTF-8"}
}
   
)
.then((response) => response.text())
.then((szoveg) => {

alert(szoveg)
 

})
    
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
              Leírás:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40, width:'50%',alignSelf:'center',backgroundColor:'grey',marginBottom:5,textAlignVertical:'top',color:"white"}}
          placeholder="Add meg a leírást:"
          onChangeText={(leiras) => this.setState({leiras})}
          value={this.state.leiras}
        />
        
        

        <Button variant="primary" type="submit" onClick={async ()=>this.felvitel()} style={{width:'40%', alignSelf:'center', margin: 10}}>Felvitel</Button>
      </View>
      
    </View>
    
    );
    
  }
}


const styles = StyleSheet.create({
    gombSzoveg:{
            textAlign:'center',
            color:'white',
            marginTop:'auto',
            marginBottom:'auto',
            fontSize:25
    },
    gomb:{
            height:45,
            width:'45%',
           
    },
});