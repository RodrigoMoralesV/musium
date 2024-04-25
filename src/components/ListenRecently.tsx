import React from "react";
import { Alert, Image, Pressable, StyleSheet, View } from "react-native";
import { StyledText } from "./StyledText";

interface ListenRecentlyProps {
  albumImg: string
  albumName: string
}

export const ListenRecently: React.FC<ListenRecentlyProps> = (props) => {
  const { albumImg, albumName } = props

  return (
    <Pressable
      onPress={() => Alert.alert("Hola")}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: albumImg }}
          width={54}
          height={54}
        />
        <StyledText>{albumName}</StyledText>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "rgba(67,99,105,0.2)",
  }
})