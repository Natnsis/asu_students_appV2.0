import { View } from 'react-native'
import React from 'react'
import { Image } from '@/components/ui/image'
import { Avatar, AvatarFallbackText } from '@/components/ui/avatar'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Button, ButtonText } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'

const profile = () => {
  return (
    <View>
      <View>
        <Avatar className="bg-blue-600 border-4 border-white rounded-full h-28 w-28 absolute z-10 bottom-0 left-[40vw]">
          <AvatarFallbackText className="text-white font-extrabold text-3xl">
            Alex Thomson
          </AvatarFallbackText>
        </Avatar>
        <Image
          size="2xl"
          className="w-full"
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
          alt="image"
        />
      </View>

      <View className="mt-5 bg-white flex-row justify-between items-center px-5 py-5 shadow-md">
        <Heading>Profile</Heading>
        <Button>
          <ButtonText>Edit Profile</ButtonText>
        </Button>
      </View>

      <Text className='w-full text-center mb-1' size='sm'>alex@thomson.com</Text>
      <View className='w-full flex-row justify-between items-center px-5 mb-5'>
        <Text className='w-fit bg-blue-500 rounded-full px-2 text-white font-bold'>CS</Text>
        <Text className='w-fit bg-blue-500 rounded-full px-2 text-white font-bold'>Year: 4</Text>
        <Text className='w-fit bg-blue-500 rounded-full px-2 text-white font-bold'>Id: 2362/14</Text>
      </View>

      <View className='flex-row justify-start items-center gap-x-5'>
        <Button variant='link'>
          <ButtonText>OverView</ButtonText>
        </Button>
        <Button variant='link'>
          <ButtonText>Academic</ButtonText>
        </Button>
        <Button variant='link'>
          <ButtonText>Settings</ButtonText>
        </Button>
      </View>

      <Divider className='my-2'/>

      
    </View>
  );
}

export default profile