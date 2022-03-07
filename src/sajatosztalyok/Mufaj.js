import React, { Component,setState } from 'react';
import { Button, StyleSheet, View,FlatList,Image,Text} from 'react-native-web';



export default class Mufaj extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true, dataSource:[]}
  }

  Fantasy = () => {
    return fetch('http://localhost:8080/Fantasy')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  Drama = () => {
    return fetch('http://localhost:8080/Drama')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  Comedy = () => {
    return fetch('http://localhost:8080/Comedy')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataSource:responseJson});
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  Action = () => {
    return fetch('http://localhost:8080/Action')
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
            onPress={this.Fantasy}
            title="Fantasy"
          />
          <Button
            onPress={this.Action}
            title="Action"
          />
          <Button
            onPress={this.Drama}
            title="Drama"
          />
          <Button
            onPress={this.Comedy}
            title="Comedy"
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
  }
});