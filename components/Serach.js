import React from 'react';

import app from '../config';

import {View, TextInput, Button, StyleSheet, Fatalist} from 'react-native';

import Restaurants from './Restaurants';
import * as Firebase from '../modules/FirebaseAPI'

//var databasee = app.ref('resto1-data').child('resto1');

export default class Search extends React.Component {
    
    constructor(props) {
        super(props)
        //this.databasee = app.ref().child("resto1");
        this.state = {
            resto1 : []
        };
        this.searchedText = ""
    }

    componentDidMount(){
        this.databasee.on('value',snapshot => {
            //var dataa = snapshot.val();
            //var resto1 = Object.values(dataa);
            this.setState( {resto1});
        })
    }

    _loadrestaurants() {
        if(this.searchedText.length > 0) { // Pour lancer une recherche correcte
            // this.setState({searchedText})
          Firebase.connectDatabase();
        }
    }

    _serachTextInputChanged(text) {
        this.searchedText = text
    }

    render () {
        return(
            <View style = {styles.main_container}>
                <TextInput onChangeText= {(text) => this._serachTextInputChanged(text)} style = {styles.textinput} placeholder='Entrez la ville'/>
                <Button title='Rechercher' onPress={() => (this._loadrestaurants())}/>

                <Fatalist
                    data = {this.state.dataRest}
                    keyExtractor = {(item) => item.id.toString()}
                   renderItem = {({item}) => <Restaurants restaurant = {item}/>}
                ></Fatalist>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        height: 390,
        flex: 1
    },
    textinput : {
        marginRight: 5,
        height: 50,
        marginLeft : 5
    }
 
 })

//export default Search