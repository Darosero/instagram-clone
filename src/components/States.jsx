import { StyleSheet, Image, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    
    margin: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  text:{
    alignSelf:"center"
  }
});

export default function States({ name, AvatarUrl, id }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: AvatarUrl }} style={styles.image}></Image>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
