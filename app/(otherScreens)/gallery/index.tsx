import { View, ScrollView } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Input, InputField } from "@/components/ui/input";
import { Badge, BadgeText } from "@/components/ui/badge";

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
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: 10,
      }}
      className="w-full flex-col"
    >
      {/* Header Section */}
      <View className="flex-row justify-between items-center p-4 bg-white w-full">
        <View className="gap-2 flex-row items-center">
          <Heading size="lg">University Gallery</Heading>
        </View>
        <View>
          <Avatar className="bg-blue-600 rounded-full ">
            <AvatarFallbackText className="text-white font-extrabold">
              Alex
            </AvatarFallbackText>
          </Avatar>
        </View>
      </View>

      {/* Search Section */}
      <View className="w-full px-5">
        <Input
          variant="outline"
          size="md"
          className="bg-white mt-5 rounded-full"
        >
          <InputField placeholder="Search events and activities..." />
        </Input>
      </View>

      {/* Gallery Section */}
      <View className="w-full px-5 mt-5">
        {galleryItems.map((item) => (
          <View
            key={item.id}
            className="bg-white rounded-lg shadow-md p-5 mb-5"
          >
            <Heading>{item.title}</Heading>
            <View className="w-full my-5 h-[20vh] bg-primary-100 flex-row justify-center items-center">
              <Text className="w-full text-white text-center">
                {item.image}
              </Text>
            </View>
            <Heading>{item.subtitle}</Heading>
            <Text className="w-full my-3" size="sm">
              {item.description}
            </Text>
            <View className="flex-row gap-5 mt-5">
              {item.tags.map((tag, index) => (
                <Badge key={index} size="md" variant="solid" action="muted">
                  <BadgeText>{tag}</BadgeText>
                </Badge>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Gallery;
