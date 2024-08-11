import { FlatList } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from '../components/categoriesGridTitle';


function CategoriesScreen({navigation}){
function renderCategoryItem(itemdata){
    function PressHandler(){
        navigation.navigate('MealsOverview',{
            categoryId:itemdata.item.id
        })
    }
  

    return (
    <CategoryGridTitle 
    title={itemdata.item.title} 
    color={itemdata.item.color}
    onPress={PressHandler}
    />
    )
}

    return(
    <FlatList data={CATEGORIES} 
    keyExtractor={(item)=>item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
    />

    )
}
export default CategoriesScreen;