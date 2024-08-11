import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';

import MealsOverViewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealsDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import FavContextProvider from './store/context/favourites-context';

const stack = createNativeStackNavigator();
const Drawer=createDrawerNavigator();

function DrawerNavigation(){
  return <Drawer.Navigator 
      screenOptions={{
      headerStyle:{backgroundColor:'#351401'},
      headerTintColor:'white',
      sceneContainerStyle:{backgroundColor:'#3f2f25'},
      drawerContentStyle:{backgroundColor:'#351401'},
      drawerInactiveTintColor:"white",
      drawerActiveTintColor:'#351401',
      drawerActiveBackgroundColor:'#cb8357'
   }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title:'All Categories',
        drawerIcon:({size,color})=><Ionicons  name='list' size={size} color={color}/>,
      }}/>
      <Drawer.Screen name='Favourite' component={FavouriteScreen}
      options={{
        drawerIcon:({size,color})=><Ionicons  name='star' size={size} color={color}/>,
      
      }}
      />

  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
    <StatusBar style='inverted'/>
    <FavContextProvider>
    <NavigationContainer>
      <stack.Navigator 
      screenOptions={{
      headerStyle:{backgroundColor:'#351401'},
      headerTintColor:'white',
      contentStyle:{backgroundColor:'#3f2f25'}
     }}>
        <stack.Screen name='Drawer'
         component={DrawerNavigation} 
         options={{
          headerShown:false,
          // title:'All Categories',
          
          }}
         />
        <stack.Screen 
         name='MealsOverview'
         component={MealsOverViewScreen}
        //  options={({route,navigation})=>{
        //  const catId=route.params.categoryId
        //  return{
        //   title:catId
        //  }
        //  }}
         />
         <stack.Screen  
            name='MealsDetail' component={MealDetailScreen}options={{
              title:'About the meal',
         }}
          //  options={{
          //   headerRight:()=>{
          //     return<Button title='Tap me!' onPress={MealDetailScreen} />
          //   }
          //  }}
           />
      </stack.Navigator>
    </NavigationContainer>
    </FavContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  
});
