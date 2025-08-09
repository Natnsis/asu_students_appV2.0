import { View, ScrollView } from "react-native";
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
      title: "Library Study Hub",
      subtitle: "Main Library Study Hub",
      location: "Library 2nd year",
      availability: "Available",
      noise: "Low",
      temperature: "72°F",
      capacity: 40,
      hours: "7:00pm - 11:00pm",
    },
    {
      title: "Engineering Lounge",
      subtitle: "Engineering Building Lounge",
      location: "Engineering Block A",
      availability: "Available",
      noise: "Moderate",
      temperature: "70°F",
      capacity: 30,
      hours: "8:00am - 10:00pm",
    },
    {
      title: "Business Lounge",
      subtitle: "Business School Lounge",
      location: "Business Block C",
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
            <InputField placeholder="Search locations..." />
          </Input>
        </View>

        {/* Lounge Cards Section */}
        <View className="w-full gap-4">
          {lounges.map((lounge, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg p-5">
              <View className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg shadow-inner mb-4">
                {/* Placeholder for a lounge image. Replace with a real image later. */}
                <Text className="text-gray-600 font-bold text-center">
                  {lounge.title}
                </Text>
              </View>

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
