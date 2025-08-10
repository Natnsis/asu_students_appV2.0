import { View, ScrollView, Linking } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";

import { Send, Gamepad, Facebook, Twitter } from "lucide-react-native";
import { Icon } from "@/components/ui/icon";

const social = () => {
  const socialGroups = [
    {
      emoji: "📚",
      title: "CSS Study Group",
      description:
        "Join the official study group for Computer Science students.",
      link: "https://t.me/assosa_cs",
      platform: "telegram",
    },
    {
      emoji: "📣",
      title: "ASU Official News Twitter",
      description:
        "Follow the university's official updates and announcements.",
      link: "https://x.com/AssosaU",
      platform: "twitter",
    },
    {
      emoji: "🎨",
      title: "Art & Culture Society",
      description:
        "Connect with students passionate about art and cultural events.",
      link: "https://facebook.com/asu_art_culture",
      platform: "facebook",
    },
    {
      emoji: "🎮",
      title: "Gaming Guild",
      description: "Join the official university Discord server for gamers.",
      link: "https://discord.gg/bf4rKRkU",
      platform: "discord",
    },
    {
      emoji: "⚽",
      title: "ASU Football Fans",
      description:
        "A chat for all things related to the inter-faculty football league.",
      link: "https://t.me/Asu_StudentUnion",
      platform: "telegram",
    },
    {
      emoji: "✍️",
      title: "Official Assosa University facebook",
      description:
        "Share your poems, stories, and scripts with fellow writers.",
      link: "https://facebook.com/AssosaUniversityOfficial/",
      platform: "facebook",
    },
  ];

  const handleJoinPress = (link: string) => {
    if (link) {
      Linking.openURL(link);
    }
  };

  const getButtonIcon = (platform) => {
    switch (platform) {
      case "telegram":
        return <Icon as={Send} size="lg" color="white" />;
      case "facebook":
        return <Icon as={Facebook} size="lg" color="white" />;
      case "twitter":
        return <Icon as={Twitter} size="lg" color="white" />;
      case "discord":
        return <Icon as={Gamepad} size="lg" color="white" />;
      default:
        return null;
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 100,
      }}
      className="w-full flex-col bg-gray-100"
    >
      {/* Header Section */}
      <SafeAreaView className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-start px-4 pt-4">
          <Heading size="lg">Social Hub</Heading>
        </View>
      </SafeAreaView>

      {/* Sections */}
      <View className="mt-6 w-[90vw] mx-auto gap-4">
        {socialGroups.map((group, index) => (
          <View key={index} className="bg-white rounded-xl shadow-lg p-6">
            <View className="flex-col gap-4">
              <View className="flex-row justify-between items-center w-full">
                <View className="flex-row items-center gap-3 flex-1">
                  <Text className="bg-gray-200 rounded-full p-2" size="xl">
                    {group.emoji}
                  </Text>
                  <Heading
                    size="md"
                    className="font-bold text-blue-700 flex-shrink"
                  >
                    {group.title}
                  </Heading>
                </View>
                <Button
                  variant="solid"
                  action="primary"
                  className="bg-blue-500 rounded-full px-4 py-2 flex-row gap-1"
                  onPress={() => handleJoinPress(group.link)}
                >
                  <ButtonIcon as={() => getButtonIcon(group.platform)} />
                  <ButtonText className="text-white font-bold">Join</ButtonText>
                </Button>
              </View>
              <Text className="text-gray-500 text-sm leading-snug">
                {group.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default social;
