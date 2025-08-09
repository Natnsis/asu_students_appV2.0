import { View, ScrollView, Linking } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Center } from "@/components/ui/center";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SafeAreaView } from "react-native-safe-area-context";

const chat = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 20,
      }}
      className="w-full flex-col bg-gray-100"
    >
      {/* Header Section */}
      <SafeAreaView className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-start px-4 pt-4">
          <Heading size="lg">Chat Space</Heading>
        </View>
      </SafeAreaView>

      {/* Main "Coming Soon" Section */}
      <View className="mt-8 mb-6 p-4 w-[90vw] mx-auto bg-white rounded-xl shadow-lg flex-col items-center gap-4">
        <View className="w-[40vw] h-[40vw] rounded-full bg-blue-500 flex justify-center items-center shadow-lg">
          <View className="w-[35vw] h-[35vw] rounded-full bg-blue-700 flex justify-center items-center shadow-inner">
            <Text className="text-[40px]">💭</Text>
          </View>
        </View>
        <Center className="gap-2">
          <Heading size="2xl" className="text-center font-bold">
            Chat Space
          </Heading>
          <Heading size="lg" className="text-center font-bold text-gray-500">
            Coming Soon
          </Heading>
        </Center>
      </View>

      {/* Feature Details Section */}
      <View className="mt-4 p-6 w-[90vw] mx-auto bg-white rounded-xl shadow-lg">
        <Center className="gap-4">
          <View className="flex-col items-center gap-2">
            <Heading size="lg" className="text-center font-bold text-gray-800">
              Group Discussions
            </Heading>
            <Text className="w-full text-center text-gray-600 px-4 leading-snug">
              We're building a better way for students to connect, collaborate,
              and communicate.
            </Text>
          </View>
          <View className="flex-col items-center gap-2">
            <Heading size="xl" className="w-full text-center font-bold">
              15
            </Heading>
            <Text size="sm" className="w-full text-center text-gray-500">
              Days to Launch
            </Text>
          </View>
        </Center>
      </View>

      {/* Get Notified Section */}
      <View className="mt-6 p-6 w-[90vw] mx-auto bg-white rounded-xl shadow-lg">
        <Center className="gap-3">
          <Button
            variant="solid"
            size="lg"
            className="bg-success-700 w-full rounded-full shadow-md"
            onPress={() => {
              const telegramUrl = "https://t.me/bugpusher";
              Linking.openURL(telegramUrl);
            }}
          >
            <ButtonText className="text-white font-bold">
              Get Notified
            </ButtonText>
          </Button>
          <Text className="w-full text-center text-gray-500">
            We'll let you know when we launch!
          </Text>
        </Center>
      </View>

      {/* Feature Cards Section */}
      <View className="flex-row justify-evenly items-center gap-3 w-[90vw] mx-auto mb-24 mt-6">
        <Card className="w-[30vw] p-4 bg-white rounded-xl shadow-lg">
          <Center className="gap-2">
            <Heading size="lg">👨‍👩‍👧‍👦</Heading>
            <Text className="text-center text-sm text-gray-500 leading-tight">
              Connect with peers
            </Text>
          </Center>
        </Card>
        <Card className="w-[30vw] p-4 bg-white rounded-xl shadow-lg">
          <Center className="gap-2">
            <Heading size="lg">🤝</Heading>
            <Text className="text-center text-sm text-gray-500 leading-tight">
              Collaborate Easily
            </Text>
          </Center>
        </Card>
        <Card className="w-[30vw] p-4 bg-white rounded-xl shadow-lg">
          <Center className="gap-2">
            <Heading size="lg">🚀</Heading>
            <Text className="text-center text-sm text-gray-500 leading-tight">
              Stay Productive
            </Text>
          </Center>
        </Card>
      </View>
    </ScrollView>
  );
};

export default chat;
