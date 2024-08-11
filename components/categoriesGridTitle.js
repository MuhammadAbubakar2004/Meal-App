import { Pressable, StyleSheet , Platform} from "react-native";
import { View , Text} from "react-native";

function CategoryGridTitle ({title , color,onPress}){
    return(
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color:'#ccc'}} 
            style={({pressed})=>[styles.Button,pressed?styles.buttonPressed:null]}
                onPress={onPress}
            >
                < View style={[styles.innerContainer,{backgroundColor:color}]}>
            <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CategoryGridTitle;
const styles=StyleSheet.create({
    gridItem:{
        flex : 1,
        height:150,
        borderRadius:8,
        margin:16,
        elevation:6,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.25,
        backgroundColor:'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        borderRadius:8
    },

    Button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5
    },
    title:{
        fontWeight:'bold',
        fontSize:18
    }
})