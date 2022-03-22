import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image   } from 'react-native-web';






export default class Anime extends React.Component {


  
  constructor(props){
    super(props);
    this.state ={ isLoading: true,
    
    }
  }

  

     
     
 
  

  componentDidMount(){
    return fetch('http://localhost:8080/Szavazatok')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
          date:new Date(),
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
       
     

      <View style={  {flex: 1, paddingTop:20, backgroundColor:"F0F8FF", }}>
        
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 


          
          <View>
      
       
     
          <Image  source={{uri:'http://localhost:8080/'+item.anime_id+'.jpg'}}   style={{ width:225, height:314 ,marginLeft:"auto",marginRight:"auto", borderRadius:10}} />  
          
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Név: {item.anime_nev} </Text>
          <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >Szavazatok: {item.darab} db</Text>
          

          <Text> </Text>
          
          
          
          </View>
          

        
        }
        
        
        
      
        
         
        />
      </View>
    );
  }
}
;