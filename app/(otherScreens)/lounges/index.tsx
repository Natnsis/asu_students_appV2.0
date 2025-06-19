import { View, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Alert, AlertText } from "@/components/ui/alert";
import { Divider } from "@/components/ui/divider";

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

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white" }}
      className="py-5"
    >
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
            <Heading size="lg">Campus Lounges</Heading>
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

        {/* Lounge Cards Section */}
        <View className="w-full mt-5">
          {lounges.map((lounge, index) => (
            <View
              key={index}
              className="bg-white rounded-b-lg shadow-md p-4 mx-5 mb-5"
            >
              <View className="w-full h-[30vh] bg-primary-300 flex justify-center items-center">
                <Heading className="w-full text-white text-center">
                  {lounge.title}
                </Heading>
              </View>
              <View>
                <Heading>{lounge.subtitle}</Heading>
                <Text size="sm" className="mb-5">
                  {lounge.location}
                </Text>
                <View className="flex-row justify-between items-center mb-5">
                  <View className="flex-row items-center gap-2">
                    <Text>Available: </Text>
                    <Alert action="success" variant="solid">
                      <AlertText>{lounge.availability}</AlertText>
                    </Alert>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <Text>Noise: </Text>
                    <Alert action="warning" variant="solid">
                      <AlertText>{lounge.noise}</AlertText>
                    </Alert>
                  </View>
                </View>
                <View className="flex-row justify-between items-center mb-5">
                  <View className="flex-row items-center gap-2">
                    <Text>Temperature: </Text>
                    <Alert action="muted" variant="solid">
                      <AlertText>{lounge.temperature}</AlertText>
                    </Alert>
                  </View>
                  <View className="flex-row items-center gap-2">
                    <Text>Capacity: </Text>
                    <Alert action="info" variant="solid">
                      <AlertText>{lounge.capacity}</AlertText>
                    </Alert>
                  </View>
                </View>
                <Divider className="mb-5" />
                <Text className="mb-5">{lounge.hours}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lounges;
