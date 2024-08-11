import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavouriteContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";

function FavouriteScreen(){
const FavMealctx = useContext(FavouriteContext);

const FavouriteMeal= MEALS.filter(meal => FavMealctx.ids.includes(meal.id))

    return <MealsList items={FavouriteMeal}/>
}
export default FavouriteScreen;

// import { useContext } from "react";
// import MealsList from "../components/MealsList/MealsList";
// import { FavouriteContext } from "../store/context/favourites-context";
// import { MEALS } from "../data/dummy-data";

// function FavouriteScreen() {
//   const FavMealctx = useContext(FavouriteContext);

//   // Check if FavMealctx.ids is defined before using includes
//   const FavouriteMeal = FavMealctx.ids
//     ? MEALS.filter((meal) => FavMealctx.ids.includes(meal.id))
//     : [];

//   return <MealsList items={FavouriteMeal} />;
// }

// export default FavouriteScreen;


// import { useContext } from "react";
// import MealsList from "../components/MealsList/MealsList";
// import { FavouriteContext } from "../store/context/favourites-context";
// import { MEALS } from "../data/dummy-data";

// function FavouriteScreen() {
//   const FavMealctx = useContext(FavouriteContext);

//   // Debugging console.log statements
// //   console.log("FavMealctx:", FavMealctx);
// //   console.log("FavMealctx.ids:", FavMealctx.ids);

//   const FavouriteMeal= MEALS.filter(meal => FavMealctx.ids.includes(meal.id))
// //   const FavouriteMeal = FavMealctx.ids ? MEALS.filter(meal => FavMealctx.ids.includes(meal.id)) : [];

//   return <MealsList items={FavouriteMeal} />;
// }

// export default FavouriteScreen;


// function FavouriteScreen(){
//     const FavMealctx = useContext(FavouriteContext);

//     // Check if FavMealctx is undefined before accessing its 'ids' property
//     const FavouriteMeal = FavMealctx ? MEALS.filter(meal => FavMealctx.ids.includes(meal.id)) : [];

//     return <MealsList items={FavouriteMeal} />
// }

// export default FavouriteScreen;
// function FavouriteScreen(){
//     const FavMealctx = useContext(FavouriteContext);

//     // Check if FavMealctx is defined before accessing its 'ids' property
//     const FavouriteMeal = FavMealctx && FavMealctx.ids ? MEALS.filter(meal => FavMealctx.ids.includes(meal.id)) : [];

//     return <MealsList items={FavouriteMeal} />;
// }

// export default FavouriteScreen;

// import { useContext } from "react";
// import MealsList from "../components/MealsList/MealsList";
// import { FavouriteContext } from "../store/context/favourites-context";
// import { MEALS } from "../data/dummy-data";
// function FavouriteScreen(){
//     const FavMealctx = useContext(FavouriteContext);

//     // Check if FavMealctx is defined before accessing its 'ids' property
//     const FavouriteMeal = FavMealctx && FavMealctx.ids ? MEALS.filter(meal => FavMealctx.ids.includes(meal.id)) : [];

//     return <MealsList items={FavouriteMeal} />;
// }

// export default FavouriteScreen;
// import React, { useContext } from "react";
// import MealsList from "../components/MealsList/MealsList";
// import { FavouriteContext } from "../store/context/favourites-context";
// import { MEALS } from "../data/dummy-data";

// function FavouriteScreen(){
//     const FavMealctx = useContext(FavouriteContext);

//     // Check if FavMealctx is defined before accessing its 'ids' property
//     // const FavouriteMeal = FavMealctx || FavMealctx.ids ? MEALS.filter(meal => FavMealctx.ids.includes(meal.id)) : [];
//     const FavouriteMeal = FavMealctx?.ids ? MEALS.filter(meal => FavMealctx.ids.includes(meal.id)) : [];
//     return <MealsList items={FavouriteMeal} />;
// }

// export default FavouriteScreen;
// function FavouriteScreen() {
//     // Assuming FavouriteContext is properly imported
//     const FavMealctx = useContext(FavouriteContext);

//     // Check if FavMealctx is defined and has the 'ids' property
//     const FavouriteMeal = FavMealctx && FavMealctx.ids
//         ? MEALS.filter(meal => FavMealctx.ids.includes(meal.id))
//         : [];

//     console.log(FavouriteMeal); // Log the filtered meals to check if they are correct

//     return <MealsList items={FavouriteMeal} />;
// }

// export default FavouriteScreen;
