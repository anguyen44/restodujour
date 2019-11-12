import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'


class Restaurants extends React.Component {
    render() {
        const restaurant = this.props.restaurant
        return (
            <View style={styles.main_container}>
            <Image
                style={styles.image}
                source={{uri: '../assets/images/restaurant1.jpg'}}
            />
            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.Nom_text}>{restaurant.Nom_resto}</Text>
                    <Text style={styles.prix_text}>{restaurant.Prix}</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_text}>{restaurant.Entrees}</Text>
                    <Text style={styles.description_text}>{restaurant.plats}</Text>
                    <Text style={styles.description_text}>{restaurant.desserts}</Text>
                </View>
            </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      height: 190,
      flexDirection: 'row'
    },
    image: {
      width: 120,
      height: 180,
      margin: 5,
      backgroundColor: 'gray'
    },
    content_container: {
      flex: 1,
      margin: 5
    },
    header_container: {
      flex: 3,
      flexDirection: 'row'
    },
    Nom_text: {
      fontWeight: 'bold',
      fontSize: 20,
      flex: 1,
      flexWrap: 'wrap',
      paddingRight: 5
    },
    prix_text: {
      fontWeight: 'bold',
      fontSize: 26,
      color: '#666666'
    },
    description_container: {
      flex: 7
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666'
    },
    date_container: {
      flex: 1
    }
  })
  
  export default Restaurants