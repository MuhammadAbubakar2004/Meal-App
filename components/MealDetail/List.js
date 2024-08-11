import { StyleSheet, View } from "react-native";
import { Text } from "react-native"
function List({data}){
    return(
        // selectedMeal.ingredients && selectedMeal.ingredients.length > 0 ? (
            data.map((dataPoint) => (
              <View key={dataPoint} style={styles.ListItem}>
                <Text style={styles.itemText}>{dataPoint}</Text>
              </View>

            )))
    //       ) : (
    //         <Text>No ingredients available.</Text>
    //       )
    // )
}
export default List;
const styles=StyleSheet.create({
    ListItem:{
      borderRadius:6,
      marginHorizontal:12,
      marginVertical:4,
      backgroundColor:'#e2b497',
      paddingHorizontal:8,
      paddingVertical:4
    },
    itemText:{
      color:'#351401',
      textAlign:'center'
    }
})