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

const Verkkokauppa = () => {

  const productsInCart = useSelector(state => state.productsInCart)
  //console.log(productsInCart)

  const Tabs = createBottomTabNavigator();
  const MenuStack = createStackNavigator();
  const CartStack = createStackNavigator();
  const AuthStack = createStackNavigator();
  
  const MenuStackScreen = () => (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={Menu} />

      <MenuStack.Screen name="PizzaStyle" component={PizzaStyle} />
      <MenuStack.Screen name="PizzaPohja" component={PizzaPohja} />
      <MenuStack.Screen name="PizzaTopping" component={PizzaTopping} />
      <MenuStack.Screen name="PizzaDetails" component={PizzaDetails} />
      <MenuStack.Screen name="PizzaCheck" component={PizzaCheck} />

      <MenuStack.Screen name="Serving" component={Serving} />
    </MenuStack.Navigator>
  )

  const AuthStackScreen = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  )

  //Order details...
  const CartStackScreen = () => (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="OrderDetails" component={OrderDetails} />
      <CartStack.Screen name="OrderSend" component={OrderSend} />
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
          <Tabs.Screen name='Menu' component={MenuStackScreen} />
          <Tabs.Screen name='Cart' component={CartStackScreen} options={{tabBarBadge: productsInCart.length}} />
          <Tabs.Screen name='Info' component={Info} />
          <Tabs.Screen name='SignIn' component={AuthStackScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default Verkkokauppa;