import { ScrollView, View } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Sidebar } from "@/components/Sidebar";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Input, InputField } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { EditIcon, Icon } from "@/components/ui/icon";

const map = () => {
  const locations = [
    {
      name: "Main Library",
      description: "Central library with study spaces and research resources",
      icon: EditIcon,
      status: "Open 24/7",
    },
    {
      name: "Building A",
      description: "Administrative offices and lecture halls",
      icon: EditIcon,
      status: "Open 8:00 AM - 6:00 PM",
    },
    {
      name: "Sports Complex",
      description: "Gym, swimming pool, and sports facilities",
      icon: EditIcon,
      status: "Open 6:00 AM - 10:00 PM",
    },
    {
      name: "Cafeteria",
      description: "Food court with multiple dining options",
      icon: EditIcon,
      status: "Open 7:00 AM - 9:00 PM",
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
          <Sidebar />
          <Heading size="lg">Campus Map</Heading>
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
          <InputField placeholder="Search locations..." />
        </Input>
      </View>

      {/* Map Section */}
      <View className="w-full px-5 mt-5">
        <Card
          variant="filled"
          className="w-full h-[30vh] bg-primary-500 shadow-md"
        >
          <Icon as={EditIcon} size="md" />
        </Card>
      </View>

      {/* Locations List */}
      <View className="mt-5 w-full px-5">
        {locations.map((location, index) => (
          <View
            key={index}
            className="flex-row gap-5 p-5 bg-white shadow-md rounded-lg mb-5"
          >
            <View>
              <Icon as={location.icon} size="xl" />
            </View>
            <View>
              <Heading>{location.name}</Heading>
              <Text>{location.description}</Text>
              <View className="flex-row gap-2 mt-2 w-full items-center">
                <Icon as={location.icon} size="sm" />
                <Text className="text-center">{location.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default map;
