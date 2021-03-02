import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Footer = () => {
  return (
    <View style={{paddingTop: 10}}>
        <View style={styles.top}>
            <View style={styles.topItemCorner}>
                <Icon name="instagram" size={28} color="#f4e609" />
            </View>
            <View style={styles.topItemCorner}>
                <Icon name="info" size={28} color="#f4e609" />
            </View>
            <View style={styles.topItemCorner}>
                <Icon name="facebook-square" size={28} color="#f4e609" />
            </View>
        </View>
        <Text style={styles.text}>Copyright © 2021 PizzaTaxim</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection:'row',
    paddingTop: 10
  },
  topItemCorner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    padding: 5,
    alignSelf: "center"
  }
});

export default Footer;