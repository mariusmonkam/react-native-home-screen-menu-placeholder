import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet, 
  ImageBackground
  
 } from 'react-native';
import MenuItem from './components/MenuItem'

export default class App extends Component{
  
  render(){
    return(
      <ImageBackground
      source={{uri: 'https://source.unsplash.com/1600x900/?nature,water'}}
      style={styles.container}
      >
     <View style={styles.overlayContainer}>
           <View style={styles.top}>
             <Text style={styles.header}>H O M E</Text>
          </View>
          <View style={styles.menuContainer}>
             <MenuItem itemImage={({uri:'https://via.placeholder.com/150'})}/>
             <MenuItem itemImage={({uri:'https://via.placeholder.com/150'})}/>
             <MenuItem itemImage={({uri:'https://via.placeholder.com/150'})}/>
             <MenuItem itemImage={({uri:'https://via.placeholder.com/150'})} />
             <MenuItem itemImage={({uri:'https://via.placeholder.com/150'})}/>
             <MenuItem itemImage={({uri:'https://via.placeholder.com/150'})}/>
             
          </View>

     </View>
      </ImageBackground>
        
        
      
    )
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
    width:'100%',
    height:'100%' 
},
overlayContainer:{
 flex:1,
 backgroundColor:'rgba(47,163,218,0.4)'
},
top :{
  height:'58%',
  alignItems: 'center',
  justifyContent:'center'

},
header:{
color:'#fff',
fontSize: 28,
borderColor:'#fff',
borderWidth: 2,
padding:20,
paddingLeft: 40,
paddingRight: 40,
backgroundColor:'rgba(255,255,255, .1)'
},
menuContainer:{
  height:'40%',
  flexDirection: 'row',
  flexWrap: 'wrap',
}
})
