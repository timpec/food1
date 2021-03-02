import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const Banner = () => {
  const handlePress = (component) => {console.log("Component: " + component)};

  return (
    <View>
      <Image style={[styles.banner]} source={require('../assets/Kebab-ateria.jpg')}/>
    </View>
  );
}

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
const styles = StyleSheet.create({
  banner: {
    height: imageHeight,
    width: undefined,
    resizeMode: 'contain',
  }
});

export default Banner;