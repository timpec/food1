import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
// Make a drawable that contains this info

const QuickInfo = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.tetxHeading}>Kuljetusalueet</Text>
        <Text style={styles.text}>02100 Tapiola, 02120 Hakalehto, 02120 Suvikumpu, 02130 Koivu-Mankkaa, 02130 Pohjoi-Tapiola, 02140 Laajalahti, 02140 Laajaranta, 02180 Mankkaa, 02200 Lukupuro, 02200 Olarinluoma, 02200 Tontunmäki, 02210 Kuitinmäki, 02210 Olari, 02210 Olarinmäki, 02230 Mätinkylä, 02250 Henttaa, 02250 Leppäsilta, 02250 Suurpelto, 02600 Friisinmäki, 02600 Ruusutorppa, 02600 Säteri, 02610 Karamalmi, 02610 Kilo, 02610 Kuninkainen, 02620 Karakallio, 02630 Nihtisilta, 02630 Nuijala, 02630 Sinimäki, 02700 Kauniainen, 02710 Viherlaakso, 02750 Sepänkylä, 02750 Taavinkylä</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    fontFamily: "Verdana",
    color: "white"
  },
  tetxHeading: {
    fontSize: 18,
    fontFamily: "Verdana",
    color: "white"
  },
  container: {
    padding: 10,
  }
});

export default QuickInfo;