// import React from 'react';
// import { StyleSheet, Text, View ,Image} from "react-native";
// import { MEALS } from '../data/dummy-data';
// import MealsDetail from '../components/MealsDetail';

// function MealsDetailScreen({route}){
//     const mealId=route.params.mealId;
//     const selectedMeal=MEALS.find((meal)=>meal.id===mealId)
    
//     return(
//         <View >
//             {/* <Text>Meals Display Screen ({mealId}) </Text> */}
//          <Image source={{uri:selectedMeal.imageUrl}} />
//          <Text>{selectedMeal.title}</Text>
//          <MealsDetail
//             duration={selectedMeal.duration}
//             complexity={selectedMeal.complexity}
//             affordability={selectedMeal.affordability}
//          />
         
//          <Text>Ingredients</Text>
//             {selectedMeal.ingredients.map((ingredient) =>  (
//             <Text key={ingredient}>{ingredient}</Text> ))}
//          <Text>Steps</Text>
//          {selectedMeal.Steps.map((step) => (
//             <Text key={step}>{step}</Text>))}
//          </View>
//     )
// }
// export default MealsDetailScreen;
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         padding:16
//     }
// })
// import React, { useContext, useLayoutEffect } from 'react';
// import { StyleSheet, Text, View, Image,ScrollView, Button } from 'react-native';
// import { MEALS } from '../data/dummy-data';
// import MealsDetail from '../components/MealsDetail';
// import Subtitle from '../components/MealDetail/SubTitle';
// import List from '../components/MealDetail/List';
// import IconButton from '../components/IconButton';

// import { FavouriteContext } from '../store/context/favourites-context';


// function MealsDetailScreen({ route,navigation }) {

// const favMealctx=useContext(FavouriteContext);

// const mealId = route.params.mealId;
// const selectedMeal = MEALS.find((meal) => meal.id === mealId);
// const mealIsFavourite=favMealctx.ids.includes(mealId);


//   function changeFavouriteStatusHandler(){
//     if (mealIsFavourite){
//       favMealctx.removeFavourite(mealId)
//     }else{
//       favMealctx.addFavourite(mealId) 
//     }
//   }
//   useLayoutEffect(()=>{
//     navigation.setOptions({
//       headerRight :()=>{
//        return <IconButton 
//         icon={mealIsFavourite ? 'star' : 'star-outline'}
//         color='white'
//         onPress={changeFavouriteStatusHandler}
//           />
//       }
//     })
//   },[ navigation,changeFavouriteStatusHandler])
  



//   return (
//     <ScrollView style={styles.rootContainer}>
//       <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
//       <Text style={styles.title}>{selectedMeal.title}</Text>
//       <MealsDetail
//         duration={selectedMeal.duration}
//         complexity={selectedMeal.complexity}
//         affordability={selectedMeal.affordability}
//         textStyle={styles.detailText}
//       />
//       <View style= {styles.ListContainer}>
//       <View style={styles.WidthContainer}>
//       <Subtitle>Ingredients</Subtitle>
//       <List data={selectedMeal.ingredients}/>
//         <Subtitle>Steps</Subtitle>
//       <List data={selectedMeal.steps}/>
//       </View>
//       </View>

//     </ScrollView>

//   );
// }

// export default MealsDetailScreen;

// const styles = StyleSheet.create({
//   rootContainer:{
//     marginBottom:30
//   },
//   image:{
//     width:'100%',
//     height:300
//   },
//   title: {
//     fontWeight:'bold',
//     margin: 6,
//     fontSize:24,
//     textAlign:'center',
//     color:'white'
//   },
//   detailText:{
//     color:'white',
//   },
//   ListContainer:{
//     alignItems:'center'
//   },
//   WidthContainer:{
//     width:'80%',
//   }
  
// });



import React, { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealsDetail from '../components/MealsDetail';
import Subtitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

import { FavouriteContext } from '../store/context/favourites-context';

function MealsDetailScreen({ route, navigation }) {
  const favMealctx = useContext(FavouriteContext);

  const mealId = route.params.mealId;
  // Add null checks for favMealctx and favMealctx.ids
  // const mealIsFavourite = favMealctx && favMealctx.ids && favMealctx.ids.includes(mealId);
  const mealIsFavourite = favMealctx && favMealctx.ids ? favMealctx.ids.includes(mealId) : false;
  // const mealIsFavourite = favMealctx.ids.includes(mealId);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function changeFavouriteStatusHandler() {
    if (favMealctx && favMealctx.addFavourite && favMealctx.removeFavourite){
    if (mealIsFavourite) {
      favMealctx.removeFavourite(mealId);
    } else {
      favMealctx.addFavourite(mealId);
    }
  }
}

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? 'star' : 'star-outline'}
            color='white'
            onPress={changeFavouriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);


  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealsDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.ListContainer}>
        <View style={styles.WidthContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    margin: 6,
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  ListContainer: {
    alignItems: 'center',
  },
  WidthContainer: {
    width: '80%',
  },
});
