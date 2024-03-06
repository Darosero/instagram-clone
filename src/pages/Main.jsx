import { View } from "react-native";
import Constants from "expo-constants"
import Header from "../components/Header";
import States from "../components/States";
import Avatars from "../components/Avatars";

export default function Main(){
    return(
        <View style={{ marginTop: Constants.statusBarHeight, flex:1, }}>
            <Header/>
            <Avatars/>
        </View>
    );
}