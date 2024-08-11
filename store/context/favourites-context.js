import { createContext, useState } from "react";
export const FavouriteContext=createContext({
    ids:[],
    addFavourite:() => {},
    removeFavourite: () => {},
});

function FavContextProvider({children}){
    
    const [favouriteMealIds, setfavouriteMealIds]=useState();

    function addFavourite(id){
        setfavouriteMealIds((currentfavIds)=>[...currentfavIds,id]);
    }
    function removeFavourite(id){
        return setfavouriteMealIds((currentfavIds)=>currentfavIds.filter((mealId)=>mealId!==id));
    }
    const value ={
        ids:favouriteMealIds,
        addFav:addFavourite,
        removeFav:removeFavourite,

    }

    return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
}

export default FavContextProvider;
// import React, { createContext, useState, useEffect } from "react";

// export const FavouriteContext = createContext({
//   ids: [],
//   addFav: () => {},
//   removeFav: () => {},
// });

// function FavContextProvider({ children }) {
//   const [favouriteMealIds, setFavouriteMealIds] = useState([]);

//   function addFav(id) {
//     setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
//   }

//   function removeFav(id) {
//     setFavouriteMealIds((currentFavIds) =>
//       currentFavIds.filter((mealId) => mealId !== id)
//     );
//   }

//   useEffect(() => {
//     console.log("Updated FavMealctx.ids:", favouriteMealIds);
//   }, [favouriteMealIds]);

//   const value = {
//     ids: favouriteMealIds,
//     addFav: addFav,
//     removeFav: removeFav,
//   };

//   return (
//     <FavouriteContext.Provider value={value}>
//       {children}
//     </FavouriteContext.Provider>
//   );
// }

// export default FavContextProvider;
