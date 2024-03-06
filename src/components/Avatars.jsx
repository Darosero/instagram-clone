import { FlatList, StyleSheet } from "react-native";
import images from "../data/images";
import States from "./States";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});
export default function Avatars() {
  return (
    <FlatList
      style={styles.container}
      data={images}
      horizontal
      renderItem={({ item }) => <States {...item} />}
    ></FlatList>
  );
}
