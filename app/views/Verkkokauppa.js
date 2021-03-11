import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Menu from '../views/Food/Menu'; // Menu view for food categories
import SignIn from '../views/Profile/SignIn';
import Cart from '../views/Cart/Cart';
import Info from '../views/Info/Info';
import Register from '../views/Profile/Register';

import PizzaStyle from '../views/Food/PizzaBuilder/PizzaStyle';
import PizzaPohja from '../views/Food/PizzaBuilder/PizzaPohja';
import PizzaTopping from '../views/Food/PizzaBuilder/PizzaTopping';
import PizzaDetails from '../views/Food/PizzaBuilder/PizzaDetails';
import PizzaCheck from '../views/Food/PizzaBuilder/PizzaCheck';
import Serving from './Food/Servings/Serving';
import OrderDetails from './Cart/OrderDetails';
import OrderSend from './Cart/OrderSend';
import OrderConfirmed from './Cart/OrderConfirmed';
import { Image, StyleSheet, View } from 'react-native';

const Verkkokauppa = () => {
  const productsInCart = useSelector(state => state.productsInCart)

  const Tabs = createBottomTabNavigator();
  const MenuStack = createStackNavigator();
  const CartStack = createStackNavigator();
  const AuthStack = createStackNavigator();
  
  const MenuStackScreen = () => (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={Menu} options={headerImageOptions} />

      <MenuStack.Screen name="PizzaStyle" component={PizzaStyle} options={{title: "Minkälaisen pizzan haluaisit"}} />
      <MenuStack.Screen name="PizzaPohja" component={PizzaPohja} options={{title: "Pizzapohjan valinta"}} />
      <MenuStack.Screen name="PizzaTopping" component={PizzaTopping} options={{title: "Valitse pizzasi"}} />
      <MenuStack.Screen name="PizzaDetails" component={PizzaDetails} options={{title: "Pizzasi muutokset"}} />
      <MenuStack.Screen name="PizzaCheck" component={PizzaCheck} options={{title: "Pizzasi tiedot"}} />

      <MenuStack.Screen name="Serving" component={Serving} options={{title: "Tuotteen valinta"}} />
    </MenuStack.Navigator>
  )

  const AuthStackScreen = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} options={{title: "Sisäänkirjautuminen"}} />
      <AuthStack.Screen name="Register" component={Register} options={{title: "Rekisteröityminen"}} />
    </AuthStack.Navigator>
  )

  //Order details...
  const CartStackScreen = () => (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} options={{title: "Ostoskori"}} />
      <CartStack.Screen name="OrderDetails" component={OrderDetails} options={{title: "Toimitustiedot"}} />
      <CartStack.Screen name="OrderSend" component={OrderSend} options={{title: "Tilauksen lähetys"}} />
      <CartStack.Screen name="OrderConfirmed" component={OrderConfirmed} options={{headerLeft: null}} />
    </CartStack.Navigator>
  )

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
        
              if (route.name === 'Menu') {
                iconName = 'pizza';
              } else if (route.name === 'Cart') {
                iconName = 'cart';
              } else if (route.name === 'Info') {
                iconName = 'information';
              } else if (route.name === 'SignIn') {
                iconName = 'person';
              } 
        
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            inactiveBackgroundColor: "#f5f5f5",
            activeBackgroundColor: "#f5f5f5",
            activeTintColor: "black",
            keyboardHidesTabBar: "true",
          }} >
          <Tabs.Screen name='Menu' component={MenuStackScreen} options={{title: "Ruokalista"}} />
          <Tabs.Screen name='Cart' component={CartStackScreen} options={{title: "Ostoskori", tabBarBadge: productsInCart.length}} />
          <Tabs.Screen name='Info' component={Info} options={{title: "Tietoja"}} />
          <Tabs.Screen name='SignIn' component={AuthStackScreen} options={{title: "Käyttäjätili"}} />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  headerImg: {
    height: 50,
    width: 200,
    resizeMode: 'contain',
  },
  headerImgContainer: {
    flex:1,
    width: "100%",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  }
});

const headerImageOptions = {
  headerTitleStyle: {
    alignSelf: "center"
  },
  headerTitle: 
    <View style={styles.headerImgContainer}>
      <Image style={styles.headerImg} source={require('../assets/pizzataximlogo1.png')}/>
    </View>
}


export default Verkkokauppa;