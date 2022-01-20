import React, { Component,setState } from 'react';
import { Button, StyleSheet, View,FlatList,Image,Text} from 'react-native';



export default class Megjelenes extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource:[]}
  }

  ketezer = () => {
    return fetch('http://localhost:8080/ketezer')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  ezertiz = () => {
    return fetch('http://localhost:8080/ezertiz')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  ezerhusz = () => {
    return fetch('http://localhost:8080/ezerhusz')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  huszfelett = () => {
    return fetch('http://localhost:8080/huszfelett')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
        
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.alternativeLayoutButtonContainer}>
        <Button 
            onPress={this.ketezer}
            title="-2000"
          />
          <Button 
            onPress={this.ezertiz}
            title="2001-2010"
          />
          <Button 
            onPress={this.ezerhusz}
            title="2011-2020"
          />
          <Button 
            onPress={this.huszfelett}
            title="2020-"
          />
        </View>

        {this.state.dataSource ? 
          <FlatList
          data={this.state.dataSource}  
          renderItem = {({item}) =>
            <View >
            <Image  source={{uri:'http://localhost:8080/'+item.anime_id+'.jpg'}} style={{width:225, height:314 ,marginLeft:"auto",marginRight:"auto", borderRadius:10}} />  
            <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Név: {item.anime_nev} </Text>
            <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Megjelenés: {item.anime_megjdatum.split('T')[0].trim()} </Text>
            <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Műfaj: {item.anime_mufaj} </Text>
            <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Évadok száma: {item.anime_evadsz} db </Text>
            
            </View>
            
          }
          
          keyExtractor={item => item.anime_id}
         />
        : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
});