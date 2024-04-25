import React from 'react'
import { StyledText } from '../../components/StyledText'
import { Alert, Pressable, View } from 'react-native'
import { BarIcon, BellIcon, SettingsIcon } from '../../components/icons/Icons'
import { styledHeaderHome, styledList } from '../../config/theme/appTheme'
import { Avatar } from '../../components/Avatar'
import { Background } from '../../components/Background'
import { ScrollView } from 'react-native'
import { ListenRecently } from '../../components/ListenRecently'

export const HomeScreen = () => {
  return (
    <ScrollView>
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
              <BarIcon width={20} height={24}></BarIcon>
            </Pressable>

            <Pressable
              onPress={() => Alert.alert("Hola")}
            >
              <BellIcon width={20} height={24}></BellIcon>
            </Pressable>

            <Pressable
              onPress={() => Alert.alert("Hola")}
            >
              <SettingsIcon width={20} height={24}></SettingsIcon>
            </Pressable>

          </View>

        </View>

        <View>
          <StyledText text2XL bold>Continue Listening</StyledText>

          <View style={styledList.listDistribution}>

            <View style={styledList.order}>
              <ListenRecently
                albumImg='https://i.scdn.co/image/ab67616d00001e02592889d4d323785856f18770'
                albumName='The 1975'
              />
              <ListenRecently
                albumImg='https://i.scdn.co/image/ab67616d00001e02592889d4d323785856f18770'
                albumName='The 1975'
              />
              <ListenRecently
                albumImg='https://i.scdn.co/image/ab67616d00001e02592889d4d323785856f18770'
                albumName='The 1975'
              />
            </View>

            <View style={styledList.order}>
              <ListenRecently
                albumImg='https://i.scdn.co/image/ab67616d00001e02592889d4d323785856f18770'
                albumName='The 1975'
              />
              <ListenRecently
                albumImg='https://i.scdn.co/image/ab67616d00001e02592889d4d323785856f18770'
                albumName='The 1975'
              />
              <ListenRecently
                albumImg='https://i.scdn.co/image/ab67616d00001e02592889d4d323785856f18770'
                albumName='The 1975'
              />
            </View>

          </View>

        </View>

      </Background>
    </ScrollView>
  )
}