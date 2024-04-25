import { Image, StyleSheet } from "react-native";

export const Avatar = () => {
  return (
    <Image
      source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFN1Tvo80rYwu-eXsDNNzsuPITOdtyRPlYIsIqKaIbw&s" }}
      width={34}
      height={34}
      borderRadius={100}
    />
  )
}