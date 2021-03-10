import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import Bar from '../../components/Bar';
import Banner from '../../components/Banner';
import FoodMenuItems from '../../components/FoodMenuItems';
import Footer from '../../components/Footer';
import QuickInfo from '../../components/QuickInfo';

const Menu = ({navigation}) => {

//<Banner/>         <Footer/>
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: "#f5f5f5"}}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
        <FoodMenuItems navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}


export default Menu;