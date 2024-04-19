import React from 'react'
import { StyledText } from '../../components/StyledText'
import { Alert, Pressable, View } from 'react-native'
import { BarIcon, BellIcon, SettingsIcon } from '../../components/icons/Icons'
import { styledHeaderHome } from '../../config/theme/appTheme'
import { Avatar } from '../../components/Avatar'
import { Background } from '../../components/Background'

export const HomeScreen = () => {
  return (
    <Background>

      <View style={styledHeaderHome.container}>

        <View>
          <Avatar />
        </View>

        <View>
          <StyledText textXL bold>Welcome back!</StyledText>
          <StyledText textML textGray bold>User Name</StyledText>
        </View>

        <View style={styledHeaderHome.iconsDistribution}>

          <Pressable
            onPress={() => Alert.alert("Hola")}
          >
            <BarIcon width={22} height={25}></BarIcon>
          </Pressable>

          <Pressable
            onPress={() => Alert.alert("Hola")}
          >
            <BellIcon width={22} height={25}></BellIcon>
          </Pressable>

          <Pressable
            onPress={() => Alert.alert("Hola")}
          >
            <SettingsIcon width={22} height={25}></SettingsIcon>
          </Pressable>

        </View>

      </View>

    </Background>
  )
}