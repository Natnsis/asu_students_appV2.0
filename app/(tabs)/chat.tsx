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
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20,
        }}
        className="w-full flex-col"
      >
        {/* Header Section */}
        <View className="w-full bg-white shadow-sm pb-4 px-4 pt-4">
          <Heading size="lg">Chat Space</Heading>
        </View>

        {/* Main "Coming Soon" Section */}
        <View className="mt-8 mb-6 p-4 mx-4 bg-white rounded-xl shadow-lg flex-col items-center gap-4">
          <View className="w-40 h-40 rounded-full bg-blue-500 flex justify-center items-center shadow-lg">
            <View className="w-32 h-32 rounded-full bg-blue-700 flex justify-center items-center shadow-inner">
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
        <View className="mt-4 p-6 mx-4 bg-white rounded-xl shadow-lg">
          <Center className="gap-4">
            <View className="flex-col items-center gap-2">
              <Heading
                size="lg"
                className="text-center font-bold text-gray-800"
              >
                Group Discussions
              </Heading>
              <Text className="text-center text-gray-600 leading-snug">
                We're building a better way for students to connect,
                collaborate, and communicate.
              </Text>
            </View>
          </Center>
        </View>

        {/* Get Notified Section */}
        <View className="mt-6 p-6 mx-4 bg-white rounded-xl shadow-lg">
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
        <View className="flex-row justify-between mx-4 mt-6 gap-3 mb-24">
          <Card className="flex-1 p-4 bg-white rounded-xl shadow-lg">
            <Center className="gap-2">
              <Heading size="lg">👨‍👩‍👧‍👦</Heading>
              <Text className="text-center text-sm text-gray-500 leading-tight">
                Connect with peers
              </Text>
            </Center>
          </Card>
          <Card className="flex-1 p-4 bg-white rounded-xl shadow-lg">
            <Center className="gap-2">
              <Heading size="lg">🤝</Heading>
              <Text className="text-center text-sm text-gray-500 leading-tight">
                Collaborate Easily
              </Text>
            </Center>
          </Card>
          <Card className="flex-1 p-4 bg-white rounded-xl shadow-lg">
            <Center className="gap-2">
              <Heading size="lg">🚀</Heading>
              <Text className="text-center text-sm text-gray-500 leading-tight">
                Stay Productive
              </Text>
            </Center>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default chat;
