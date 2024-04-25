import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";

export const colors = {
  blue20: "#A6F3FF",
  blue40: "#44D7DD",
  blue60: "#00C2CB",
  blue80: "#1DB1B7",
  blue100: "#446266",
  bgWhite: "#fff",
  bgBlack: "rgba(30,30,30,.85)",
  textGray: "#8A9A9D",
  textWhite: "rgba(255,255,255,.87)",
}

// const [fontsLoaded] = useFonts({
//   'Mulish': require('../assets/fonts/Mulish.ttf'),
// });

export const fonts = {
  secondary: "Mulish",
  altSecondary: "MulishItalic",
}

export const fontsSizes = {
  textS: 9,
  textSM: 10,
  textM: 11,
  textML: 12,
  textL: 13,
  textXL: 15,
  textXLM: 16,
  textXLL: 18,
  text2XL: 20,
  text3XL: 24,
  text4XL: 27,
  textH: 32,
  textG: 34,
  textMA: 44
}

export const fontsWeight = {
  bold: 600,
  regular: 400,
}

export const styledFallback = StyleSheet.create({
  text: {
    fontSize: fontsSizes.textML,
    color: colors.textWhite
  }
})

export const styledFontSize = StyleSheet.create({
  textS: { fontSize: fontsSizes.textS },
  textSM: { fontSize: fontsSizes.textSM },
  textM: { fontSize: fontsSizes.textM },
  textML: { fontSize: fontsSizes.textML },
  textL: { fontSize: fontsSizes.textL },
  textXL: { fontSize: fontsSizes.textXL },
  textXLM: { fontSize: fontsSizes.textXLM },
  textXLL: { fontSize: fontsSizes.textXLL },
  text2XL: { fontSize: fontsSizes.text2XL },
  text3XL: { fontSize: fontsSizes.text3XL },
  text4XL: { fontSize: fontsSizes.text4XL },
  textH: { fontSize: fontsSizes.textH },
  textG: { fontSize: fontsSizes.textG },
  textMA: { fontSize: fontsSizes.textMA },
})

export const styledColor = StyleSheet.create({
  blue80: { color: colors.blue80 },
  blue40: { color: colors.blue40 },
  blue60: { color: colors.blue60 },
  blue20: { color: colors.blue20 },
  blue100: { color: colors.blue100 },
  bgWhite: { backgroundColor: colors.bgWhite },
  bgBlack: { backgroundColor: colors.bgBlack },
  textGray: { color: colors.textGray },
  textWhite: { color: colors.textWhite },
})

export const styledFontWeight = StyleSheet.create({
  bold: { fontWeight: "600" },
  regular: { fontWeight: "400" },
})

export const styledTextJustified = StyleSheet.create({
  textCenter: { textAlign: "center" },
  textJustify: { textAlign: "justify" },
  textLeft: { textAlign: "left" },
  textRight: { textAlign: "right" }
})

// Estilos HomeScreen marginHorizontal: 29,
export const styledHeaderHome = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 17,
    alignItems: 'center',
    marginBottom: 25,
  },
  iconsDistribution: {
    flexDirection: 'row',
    alignItems: "center",
    columnGap: 23,
  }
})

export const styledList = StyleSheet.create({
  listDistribution: {
    flexDirection: 'row',
    columnGap: 12,
    marginTop: 12
  },
  order: {
    flex: 1,
    rowGap: 9,
  }
})