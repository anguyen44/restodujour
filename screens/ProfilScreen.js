import React from 'react';
import  { View, Text,TextInput,Button, ImageBackground, StyleSheet, Image } from "react-native";




export default class ProfilScreen extends React.Component{
    static navigationOptions = {
        header: null
      };

    constructor(props){
        super(props)
        this.state ={ 
            email: '',
            password: '',
            Username: '',
            type: '',
            data:[]

        };
        
//  this.getUser = this.getUser.bind(this);
 // this.getloginUser = this.getloginUser.bind(this);
    }

    fetchData = async()=>{
      const reponse = await fetch('http://10.188.70.173:4000/utilisateurs');
     // 10.188.70.173
         const utilisateurs = await reponse.json();
         this.state.data= utilisateurs;
         this.setState({ data:  utilisateurs});   
    
    }

    componentDidMount(){
        this.fetchData();
    }

    valider = () =>{};

    renderRow = () =>{

    }

    render (){
        return(
            <View style = {styles.container}>
                 <ImageBackground source={require('../assets/images/holiday2013_front.jpg')} style={{width: '100%', height: '100%'}}>
                 
       
                 <Text style={styles.InfoTitle}>Informations Profil </Text>
       
                    <View style={styles.textContainer}>

                        <View style = {styles.row}>
                        <Text  style = {styles.form}> Username:   </Text>
                        <TextInput onChangeText={(text)=>this.setState({username: text})} value={this.state.username} style = {styles.leftdiv}   placeholder = "Password" placeholderTextColor="#8FBDBE" /> 
                        </View>

                        <View style = {styles.row}> 
                        <Text  style = {styles.form}> Email:  </Text>
                        <TextInput onChangeText={(text)=>this.setState({email: text})} value={this.state.email} style = {styles.leftdiv}  placeholder = "Password" placeholderTextColor="#8FBDBE"  /> 
                        </View>

                        <View style = {styles.row}> 
                        <Text  style = {styles.form}> Password:  </Text>
                            <TextInput onChangeText={(text)=>this.setState({password: text})} value={this.state.password}  style = {styles.leftdiv} secureTextEntry={true}  placeholder = "Password" placeholderTextColor="#8FBDBE"/>
                         </View>
                 
                       

          <Button title="Valider" onPress={this.valider} style={styles.buttonSubmit}  color="#F5D242"></Button>

                 </View>
      </ImageBackground>
                 
            </View>
    
            
        );
    
    }

}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Roboto',
        flex: 1,
        backgroundColor: '#fff',
      },
      warning:{
        fontSize:12,
        color:'#FF5733',
        marginBottom:10
      },
      signUp:{
        display:'flex',alignItems:'center',textAlign:'center', flex:0.6, marginTop:20,fontSize:12,color: '#8FBDBE'
      },
      InfoTitle:{
        color: '#FFFFFF',
        fontSize:22,
        marginTop:60,
        marginBottom:50,
        display: 'flex',
        textAlign: 'center',
        fontWeight: 'bold'
      },
      cavas:{
        textAlign: 'center', flex:2.5, alignItems: 'stretch',paddingTop:70,paddingBottom:30,
      },
      cavasImg:{
        width: 150,
        height: 150
      },  spacer: {
        flex: 3,
      },
      textContainer: {
        flex: 3,
        marginHorizontal: 40,
      },
      text: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
      },
      
      form:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        marginTop: -4,
        
      },
      row: {
        borderBottomColor:'#FFFFFF',
       borderBottomWidth: 0.9,
        marginBottom: 60,
       
      },
      leftdiv: {
        marginLeft: 130,
        marginTop: -9,
        fontWeight: 'bold',
        position: 'absolute',
      },
      buttonSubmit: {
          marginTop: 80,
       }

});

