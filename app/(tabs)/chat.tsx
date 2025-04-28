import { View, ScrollView } from 'react-native'
import React from 'react'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Center } from '@/components/ui/center'
import { Button, ButtonText } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const chat = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: 10,
      }}
      className="w-full flex-col"
    >
      <View className="bg-white w-full flex-row justify-between items-center p-4 mb-10">
        <Heading>Chat Space</Heading>
        <Text className="w-[30px] h-[30px] rounded-full bg-blue-700 text-white text-center text-lg">
          A
        </Text>
      </View>

      <View className="w-[40vw] h-[40vw] rounded-full bg-blue-500 flex-row justify-center items-center">
        <View className="w-[35vw] h-[35vw] rounded-full bg-blue-700 flex justify-center items-center">
          <Text className="text-[40px]">💭</Text>
        </View>
      </View>

      <View className="mt-5 w-full">
        <Center>
          <Heading size="xl">Chat Space</Heading>
          <Heading size="xl">Coming Soon</Heading>
        </Center>
      </View>

      <View className="mt-10 w-full">
        <Center className="gap-1">
          <Text size="sm" className='w-full text-center'>Group Discussions</Text>
          <Text size="sm" className="w-full px-5 text-center">
            We're building a better way for students to connect, collaborate,
            and communicate.
          </Text>
          <Text className="text-blue-700 w-full text-center">Direct Message</Text>
        </Center>
      </View>

      <View className="mt-10 w-full">
        <Center>
          <Heading size="2xl" className='w-full text-center'>15</Heading>
          <Text size="sm" className='w-full text-center'>Hours</Text>
        </Center>
      </View>

      <View className="mt-10 w-full">
        <Center className="gap-3">
          <Text className='w-full text-center'>File Sharing</Text>
          <Text className='w-full text-center'>Voice Channels</Text>
          <Text className='w-full text-center'>Study Groups</Text>
          <Text className='w-full text-center'>Event Planning</Text>
        </Center>
      </View>

      <View>
        <Center className="gap-3">
          <Button variant="solid" size="lg" className="mt-10">
            <ButtonText>Get Notified</ButtonText>
          </Button>

          <Text className='w-full text-center'>We'll let you know when we launch!</Text>
          <Heading>Coming Soon</Heading>
        </Center>
      </View>

      <View className="flex-row justify-evenly items-center gap-3 mb-24 p-5">
        <Card variant="outline" className="w-[30vw] mt-10 p-2">
          <Center>
            <Heading>👨‍👩‍👧‍👦</Heading>
            <Text className="text-center">Connect with peers</Text>
          </Center>
        </Card>

        <Card variant="outline" className="w-[30vw] mt-10 p-2">
          <Center>
            <Heading>🤝</Heading>
            <Text className="text-center">Collaborate Easily</Text>
          </Center>
        </Card>

        <Card variant="outline" className="w-[30vw] mt-10 p-2">
          <Center>
            <Heading>🚀</Heading>
            <Text className="text-center">Stay Productive</Text>
          </Center>
        </Card>
      </View>
    </ScrollView>
  );
}

export default chat