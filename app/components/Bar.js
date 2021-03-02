import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Bar = () => {
  return (
    <View style={styles.top}>
        <View style={styles.topItemCorner}>
          <Icon name="bars" size={28} color="#f4e609" />
        </View>
        <View style={styles.topItemMiddle}>
            <Image style={styles.topImage} source={require('../assets/pizzataximlogo1.png')}/>
        </View>
        <View style={styles.topItemCorner}>
          <Icon name="user" size={28} color="#f4e609" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    height: "7.5%",
    borderBottomWidth: 1,
    borderColor: "black",
    flexDirection:'row',
  },
  topItemCorner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topItemMiddle: {
    flex: 3,
    justifyContent: "center",
  },
  topImage: {
    height: "70%",
    width: undefined,
    resizeMode: 'contain',
  }
});

export default Bar;