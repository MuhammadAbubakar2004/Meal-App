import { View,StyleSheet,FlatList } from "react-native";

import MealItem from "./MealItem";

function MealsList({items}){
    function renderMealItem(itemdata){
        const item=itemdata.item;
        const mealItemProps={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordability:item.affordability
        }
        return <MealItem {...mealItemProps}/>
    }
    return(
        <View style={styles.titleContainer}>
        <FlatList data={items} 
        keyExtractor={(item)=>item.id}
        renderItem={renderMealItem}
        />
        </View>
    )
}

export default MealsList;
const styles = StyleSheet.create({
    titleContainer:{
        flex:1,
        padding:16
    }
})