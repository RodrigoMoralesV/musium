import { Image } from "react-native"

interface IconProps {
  width: number
  height: number
}

export const BarIcon: React.FC<IconProps> = (props) => {
  const { height, width } = props

  return (
    <Image
      source={require('../../../assets/icons/bar-2.png')}
      width={width}
      height={height}
    />
  )
}

export const BellIcon: React.FC<IconProps> = (props) => {
  const { height, width } = props

  return (
    <Image
      source={require('../../../assets/icons/bell.png')}
      width={width}
      height={height}
    />
  )
}

export const SettingsIcon: React.FC<IconProps> = (props) => {
  const { height, width } = props

  return (
    <Image
      source={require('../../../assets/icons/settings.png')}
      width={width}
      height={height}
    />
  )
}