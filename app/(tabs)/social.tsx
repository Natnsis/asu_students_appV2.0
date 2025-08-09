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
        paddingBottom: 20,
      }}
      className="w-full flex-col bg-gray-100"
    >
      {/* Header Section */}
      <SafeAreaView className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-start px-4 pt-4">
          <Heading size="lg">Social Hub</Heading>
        </View>
      </SafeAreaView>

      {/* Search Bar */}
      <View className="w-[90vw] mx-auto mt-6">
        <Input
          variant="rounded"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          className="bg-white rounded-full shadow-md"
        >
          <InputField placeholder="Search groups and societies..." />
        </Input>
      </View>

      {/* Sections */}
      <View className="mt-6 w-[90vw] mx-auto mb-20 gap-4">
        {sections.map((section, index) => (
          <View key={index} className="bg-white rounded-xl shadow-lg p-6">
            <View className="flex-col gap-4">
              <View className="flex-row justify-between items-center w-full">
                <View className="flex-row items-center gap-3">
                  <Text className="bg-blue-600 rounded-full p-2" size="xl">
                    {section.emoji}
                  </Text>
                  <Heading size="md" className="font-bold">
                    {section.title}
                  </Heading>
                </View>
                <Button
                  variant="solid"
                  action="primary"
                  className="bg-success-700 rounded-full px-4 py-2"
                  onPress={() => handleJoinPress(section.telegram)}
                >
                  <ButtonText className="text-white font-bold">Join</ButtonText>
                </Button>
              </View>
              <Text className="text-gray-500 text-sm leading-snug">
                {section.description}
              </Text>
              <View className="flex-row items-center flex-wrap gap-2 mt-2">
                {section.infos.map((info, infoIndex) => (
                  <Text
                    key={infoIndex}
                    className={`bg-success-50 text-base rounded-lg text-center px-3 py-1 font-bold text-success-700`}
                  >
                    {info.label}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default social;
