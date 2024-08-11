import { View,Text,StyleSheet } from "react-native";
function MealsDetail({duration,complexity,affordability,style,textStyle}){
    return(
        <View style={[styles.details , style]}>
                <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
                <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
                <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}
export default MealsDetail;
const styles=StyleSheet.create({
    details:{
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'center',
        padding:8
    },
    detailItem:{
        fontSize:15,
        marginHorizontal:4
    }
})