import { View, ScrollView, Linking } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { SafeAreaView } from "react-native-safe-area-context";

const social = () => {
  const sections = [
    {
      emoji: "📚",
      title: "Curriculum",
      media: "telegram",
      description: "Track your courses and credits",
      telegram: "https://t.me/css_study",
      infos: [
        { label: "4.0 GPA", width: "w-20" },
        { label: "t.me/css.study", width: "w-32" },
      ],
    },
    {
      emoji: "🗺",
      title: "Campus Map",
      media: "telegram",
      description: "Navigate your campus with ease",
      telegram: "https://t.me/campus_map",
      infos: [
        { label: "Building A", width: "w-24" },
        { label: "Library", width: "w-24" },
      ],
    },
    {
      emoji: "🪑",
      title: "Lounges",
      media: "telegram",
      description: "find study and relaxation spaces",
      telegram: "https://t.me/lounges_group",
      infos: [
        { label: "120 credits", width: "w-28" },
        { label: "3 semesters left", width: "w-36" },
      ],
    },
    {
      emoji: "🧮",
      title: "Gpa Calculator",
      media: "telegram",
      description: "Calculate your grades",
      telegram: "https://t.me/gpa_calculator",
      infos: [
        { label: "120 credits", width: "w-28" },
        { label: "3 semesters left", width: "w-36" },
      ],
    },
    {
      emoji: "📸",
      title: "Gallery",
      media: "telegram",
      description: "University photo galleries",
      telegram: "https://t.me/university_gallery",
      infos: [
        { label: "120 credits", width: "w-28" },
        { label: "3 semesters left", width: "w-36" },
      ],
    },
    {
      emoji: "⏰",
      title: "Remainders",
      media: "telegram",
      description: "Stay on top of your tasks",
      telegram: "https://t.me/remainders_channel",
      infos: [
        { label: "120 credits", width: "w-28" },
        { label: "3 semesters left", width: "w-36" },
      ],
    },
  ];

  const handleJoinPress = (telegramLink: string) => {
    if (telegramLink) {
      Linking.openURL(telegramLink);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: 10,
      }}
      className="w-full flex-col"
    >
      <SafeAreaView className="w-full bg-white h-24 px-5 mb-5">
        <View className="flex-row justify-between items-center  bg-white w-full">
          <View className="gap-2 flex-row  w-full pt-5 items-center">
            <Heading size="lg" className="h-[30px]">
              Social Hub
            </Heading>
          </View>
        </View>
      </SafeAreaView>

      <View className="w-full px-4">
        <Input
          variant="rounded"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          className="bg-white"
        >
          <InputField placeholder="search groups and societies..." />
        </Input>
      </View>

      <View className="mb-20">
        {sections.map((section, index) => (
          <View
            key={index}
            className="bg-white w-[90vw] mt-6 rounded-lg shadow-hard-1 p-5"
          >
            <Center className="gap-3">
              <View className="flex-row justify-between items-center w-full">
                <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
                  {section.emoji}
                </Text>
                <Heading>{section.title}</Heading>
                <Button
                  variant="solid"
                  action="primary"
                  className="bg-success-700"
                  onPress={() => handleJoinPress(section.telegram)}
                >
                  <ButtonText>Join</ButtonText>
                </Button>
              </View>
              <Text className="text-base">{section.description}</Text>
              <View className="flex-row justify-between items-center gap-3">
                {section.infos.map((info, infoIndex) => (
                  <Text
                    key={infoIndex}
                    className={`bg-success-50 text-base rounded-lg text-center ${info.width}`}
                  >
                    {info.label}
                  </Text>
                ))}
              </View>
            </Center>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default social;
