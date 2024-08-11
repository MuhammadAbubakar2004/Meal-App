import { View ,Text, Pressable, Image, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native'
import MealsDetail from "../MealsDetail";
function MealItem({id,title,imageUrl,duration,complexity,affordability,}){

    const navigation=useNavigation();
    function selectMealItemhandler(){
        navigation.navigate('MealsDetail',{
            mealId:id
        })
    }
     return(
    <View style={styles.mealitem}>
        <Pressable 
        android_ripple={{color:'#ccc'}}
        style={({pressed})=>pressed?styles.buttonPressed:null}
          onPress={selectMealItemhandler}  
        >
            <View style={styles.innerContainer}>
            <View>
        <Image source={{uri:imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{title} </Text>
        
            </View>
            <MealsDetail 
            duration={duration}
            complexity={complexity}
            affordability={affordability}
            />
            </View>
        </Pressable>
    </View>
    )
}
export default MealItem;
const styles=StyleSheet.create({
    mealitem:{
        margin:16,
        backgroundColor:'white',
        borderRadius:8,
        elevation:12,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.35,
        backgroundColor:'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        shadowRadius:16
    },
    buttonPressed:{
        opacity:0.5
    },
    image:{
        width:'100%',
        height:200,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        margin:8
    },
    innerContainer:{
        borderRadius:10,
        overflow:'hidden'
    },
    
})