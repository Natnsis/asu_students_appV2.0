import { View, ScrollView } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Badge, BadgeText } from "@/components/ui/badge";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";

const Gallery = () => {
  // Array of gallery items
  const galleryItems = [
    {
      id: 1,
      title: "Cultural Festival",
      subtitle: "Spring Festival 2024",
      description:
        "Annual spring celebration featuring student performances and activities.",
      image: "Spring Festival",
      tags: ["Culture", "Student Life", "Performance"],
    },
    {
      id: 2,
      title: "Art Exhibition",
      subtitle: "Modern Art Showcase",
      description:
        "A showcase of modern art created by students and local artists.",
      image: "Art Showcase",
      tags: ["Art", "Exhibition", "Creativity"],
    },
    {
      id: 3,
      title: "Sports Day",
      subtitle: "Annual Sports Meet",
      description:
        "A day filled with sports competitions and activities for students.",
      image: "Sports Meet",
      tags: ["Sports", "Competition", "Teamwork"],
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <View className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-start px-4 pt-4">
          <Heading size="lg">University Gallery</Heading>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100, // Ensure content is above the tab bar
        }}
        className="w-full flex-col px-4 pt-4"
      >
        {/* Search Section */}
        <View className="w-full mb-6">
          <Input
            variant="rounded"
            size="md"
            className="bg-white rounded-full shadow-md"
          >
            <InputField placeholder="Search events and activities..." />
          </Input>
        </View>

        {/* Gallery Items */}
        <View className="w-full gap-4">
          {galleryItems.map((item, index) => (
            <Card key={item.id} className="bg-white rounded-xl shadow-lg p-5">
              <Heading size="md" className="font-bold text-blue-700">
                {item.title}
              </Heading>
              <Text className="text-gray-500 mt-1 mb-3">{item.subtitle}</Text>

              <View className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg shadow-inner my-3">
                {/* This is a placeholder for an image. Replace with a real Image component later. */}
                <Text className="text-gray-600 font-bold">{item.image}</Text>
              </View>

              <Text size="sm" className="text-gray-700">
                {item.description}
              </Text>

              <View className="flex-row flex-wrap gap-2 mt-4">
                {item.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    size="md"
                    variant="solid"
                    action="muted"
                    className="bg-gray-200"
                  >
                    <BadgeText className="text-gray-700">{tag}</BadgeText>
                  </Badge>
                ))}
              </View>
              {index < galleryItems.length - 1 && <Divider className="my-3" />}
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Gallery;
