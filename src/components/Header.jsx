import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 35,
    fontWeight: "100",
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    gap: 30,
  },
});
export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Text>
      <View style={styles.icons}>
        <AntDesign name="hearto" size={24} color="black" />
        <Fontisto name="messenger" size={24} color="black" />
      </View>
    </View>
  );
}
