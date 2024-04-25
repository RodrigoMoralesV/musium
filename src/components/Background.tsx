import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, View } from 'react-native'

interface BackgroundProps {
  children: React.ReactNode
  colors?: string[]
}

export const Background: React.FC<BackgroundProps> = (props) => {
  const { children, colors } = props

  const currentColor = colors ?? ['#06A0B5', '#102B2D', '#0E0E0E']

  return (
    <View style={stylesBackground.container}>
      <LinearGradient
        colors={currentColor}
        style={stylesBackground.background}
      />
      {children}
    </View>
  )
}

const stylesBackground = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 29,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    zIndex: -10,
  },
});