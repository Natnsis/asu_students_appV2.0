import { View, ScrollView, Image } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { Badge, BadgeText } from "@/components/ui/badge";
import { SafeAreaView } from "react-native-safe-area-context";

const Lounges = () => {
  const lounges = [
    {
      title: "Natural Science library",
      subtitle: "Main Library Study Hub",
      image:
        "https://placehold.co/600x400/FF5733/FFFFFF?text=Natural+Science+Library",
      location: "In front of male Dormitory",
      availability: "Available",
      noise: "Low",
      temperature: "72°F",
      capacity: 450,
      hours: "24/7",
    },
    {
      title: "Social Library",
      subtitle: "Social Students Study Space",
      image: "https://placehold.co/600x400/33C7FF/FFFFFF?text=Social+Library",
      location: "near the cafeteria",
      availability: "Available",
      noise: "Moderate",
      temperature: "70°F",
      capacity: 310,
      hours: "24/7",
    },
    {
      title: "University Head Office",
      subtitle: "office for campus employees",
      image: "https://placehold.co/600x400/33FF57/FFFFFF?text=Head+Office",
      location: "front door",
      availability: "Full",
      noise: "High",
      temperature: "75°F",
      capacity: "-",
      hours: "9:00am - 7:00pm",
    },
    {
      title: "Natural Cafeteria",
      subtitle: "cafeteria closest for natural Students",
      image:
        "https://placehold.co/600x400/E333FF/FFFFFF?text=Natural+Cafeteria",
      location: "near Natural Library",
      availability: "Full",
      noise: "High",
      temperature: "75°F",
      capacity: 50,
      hours: "9:00am - 1:00pm",
    },
    {
      title: "Social Cafeteria",
      subtitle: "cafeteria closest for natural Students",
      image: "https://placehold.co/600x400/FFFF33/000000?text=Social+Cafeteria",
      location: "near the Atm",
      availability: "Full",
      noise: "High",
      temperature: "75°F",
      capacity: 50,
      hours: "9:00am - 9:00pm",
    },
  ];

  const getAvailabilityBadge = (status) => {
    if (status === "Available") {
      return (
        <Badge action="success" variant="solid" className="bg-green-500">
          <BadgeText>{status}</BadgeText>
        </Badge>
      );
    } else {
      return (
        <Badge action="error" variant="solid" className="bg-red-500">
          <BadgeText>{status}</BadgeText>
        </Badge>
      );
    }
  };

  const getNoiseBadge = (noiseLevel) => {
    if (noiseLevel === "Low") {
      return (
        <Badge action="success" variant="solid" className="bg-green-500">
          <BadgeText>{noiseLevel}</BadgeText>
        </Badge>
      );
    } else if (noiseLevel === "Moderate") {
      return (
        <Badge action="warning" variant="solid" className="bg-yellow-500">
          <BadgeText>{noiseLevel}</BadgeText>
        </Badge>
      );
    } else {
      return (
        <Badge action="error" variant="solid" className="bg-red-500">
          <BadgeText>{noiseLevel}</BadgeText>
        </Badge>
      );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <View className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-start px-4 pt-4">
          <Heading size="lg">Campus Lounges</Heading>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
        }}
        className="w-full flex-col px-4 pt-4"
      >
        {/* Lounge Cards Section */}
        <View className="w-full gap-4">
          {lounges.map((lounge, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg p-5">
              <Image
                source={{ uri: lounge.image }}
                className="w-full h-48 rounded-lg mb-4"
                resizeMode="cover"
              />

              <Heading size="md" className="font-bold text-blue-700">
                {lounge.subtitle}
              </Heading>
              <Text className="text-gray-500 mb-4">{lounge.location}</Text>

              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-gray-700">Availability:</Text>
                {getAvailabilityBadge(lounge.availability)}
              </View>

              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-gray-700">Noise Level:</Text>
                {getNoiseBadge(lounge.noise)}
              </View>

              <Divider className="my-4" />

              <View className="flex-row justify-between items-center mb-2">
                <View className="flex-row items-center gap-2">
                  <Text className="font-medium text-gray-700">
                    Temperature:
                  </Text>
                  <Text>{lounge.temperature}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Text className="font-medium text-gray-700">Capacity:</Text>
                  <Text>{lounge.capacity}</Text>
                </View>
              </View>
              <Text className="text-sm text-gray-500 text-center mt-2">
                Hours: {lounge.hours}
              </Text>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lounges;
