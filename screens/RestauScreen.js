import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  InteractionManager,
  ImageBackground,
  TextInput,
  AsyncStorage,Button
} from 'react-native';

import { MonoText } from '../components/StyledText';
import * as FirebaseAPI from '../modules/firebaseAPI';
import * as ImagePicker from 'expo-image-picker';

export default class RestauScreen extends React.Component{
  

  constructor(props){
    super(props);

    this.state = {
     
    };

  
  }

  valider = () =>{};

  logout(navigation){
    console.log('logout called');
    this.removeItemValue('userToken');

    InteractionManager.runAfterInteractions(()=>{
      navigation.navigate('Auth')
    });
  }

  render(){
    return (
    <View style={styles.container}>
      
      <ImageBackground source={require('../assets/images/holiday2013_front.jpg')} style={{width: '100%', height: '100%'}}>
      <Text style={styles.InfoTitle}>Ajout de Menu </Text>
      <View style={styles.textContainer}>
      <View style = {styles.row}>
              <Text  style = {styles.form}> Entrées:   </Text>
              <TextInput onChangeText={(text)=>this.setState({username: text})} value={this.state.username} style = {styles.leftdiv}   placeholder = "Entrée 1 .................................." placeholderTextColor="#8FBDBE" /> 
              <TextInput onChangeText={(text)=>this.setState({username: text})} value={this.state.username} style = {styles.leftdiv}   placeholder = "Entrée 2 .................................." placeholderTextColor="#8FBDBE" />
      </View>
      <View style = {styles.row}>
              <Text  style = {styles.form}> Plats:   </Text>
              <TextInput onChangeText={(text)=>this.setState({username: text})} value={this.state.username} style = {styles.leftdiv}   placeholder = "Plat 1 .................................." placeholderTextColor="#8FBDBE" /> 
              <TextInput onChangeText={(text)=>this.setState({username: text})} value={this.state.username} style = {styles.leftdiv}   placeholder = "Plat 2 .................................." placeholderTextColor="#8FBDBE" /> 
      </View>
      <View style = {styles.row}>
              <Text  style = {styles.form}> Desserts:   </Text>
              <TextInput onChangeText={(text)=>this.setState({username: text})} value={this.state.username} style = {styles.leftdiv}   placeholder = "Dessert 1 .................................." placeholderTextColor="#8FBDBE" /> 
              <TextInput onChangeText={(text)=>this.setState({username: text})} value={this.state.username} style = {styles.leftdiv}   placeholder = "Dessert 2 .................................." placeholderTextColor="#8FBDBE" /> 
      </View>
      <Button title="Valider" onPress={this.valider} style={styles.buttonSubmit}  color="#F5D242"></Button>

      <View style={styles.tabBarInfoContainer}>
        <TouchableOpacity onPress={()=>{this.logout(this.props.navigation)}}>
            <Text style={styles.tabBarInfoText}>
               Logout
            </Text>
          </TouchableOpacity>
      </View>
      </View>
      </ImageBackground>
    </View>
  );
  }
  
}

RestauScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    borderRadius: 15,
    ...Platform.select({
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
  //  backgroundColor: '#fbfbfb',
    backgroundColor: '#8FBDBE', 
    paddingVertical: 20,
  },
  textContainer: {
    flex: 3,
    marginHorizontal: 40,
  },
  form:{
    color:'#FFFFFF',
    fontWeight: 'bold',
    marginTop: -4,
    
  },
  row: {
    borderBottomColor:'#FFFFFF',
   borderBottomWidth: 0.9,
    marginBottom: 30,
   
  },
  leftdiv: {
    marginLeft: 60,
    fontWeight: 'bold',
  },
  InfoTitle:{
  //  color: '#8FBDBE',
   color: '#fff',
    fontSize:22,
    marginTop:60,
    marginBottom:50,
    display: 'flex',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  tabBarInfoText: {
    fontSize: 17,
   // color: 'rgba(96,100,109, 1)',
   color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
