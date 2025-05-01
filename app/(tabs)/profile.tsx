import { ScrollView, View } from "react-native";
import React from "react";
import { Image } from "@/components/ui/image";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EditIcon, Icon } from "@/components/ui/icon";

const Profile = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 20,
      }}
      className="w-full bg-gray-100"
    >
      {/* Profile Header */}
      <View>
        <View className="absolute z-10 bottom-0 w-full flex-row justify-center">
          <Avatar className="bg-blue-600 border-4 border-white rounded-full h-28 w-28">
            <AvatarFallbackText className="text-white font-extrabold text-3xl">
              Alex Thomson
            </AvatarFallbackText>
          </Avatar>
        </View>
        <Image
          size="2xl"
          className="w-full"
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
          alt="image"
        />
      </View>

      {/* Profile Info */}
      <View className="mt-5 bg-white flex-row justify-between items-center px-5 py-5 shadow-md">
        <Heading>Profile</Heading>
        <Button>
          <ButtonText>Edit Profile</ButtonText>
        </Button>
      </View>

      <Text className="w-full text-center mb-1" size="sm">
        alex@thomson.com
      </Text>

      {/* Navigation Buttons */}
      <View className="flex-row justify-start items-center gap-x-5 p-3 py-1 border-b border-gray-300">
        <Button variant="link">
          <ButtonText>Overview</ButtonText>
        </Button>
        <Button variant="link">
          <ButtonText>Academic</ButtonText>
        </Button>
        <Button variant="link">
          <ButtonText>Settings</ButtonText>
        </Button>
      </View>

      {/* Program and Student Info */}
      <View className="mt-5">
        <View className="flex-row justify-between items-center px-5 mb-5">
          <Card
            variant="filled"
            className="bg-white shadow-md px-3 py-3 w-[43vw]"
          >
            <Text size="xs">Program</Text>
            <Heading size="sm" className="w-full">
              Computer Science
            </Heading>
          </Card>
          <Card
            variant="filled"
            className="bg-white shadow-md px-3 py-3 w-[43vw]"
          >
            <Text size="xs">Student ID</Text>
            <Heading size="sm" className="w-full">
              2362/14
            </Heading>
          </Card>
        </View>

        <View className="flex-row justify-between items-center px-5 mb-5">
          <Card
            variant="filled"
            className="bg-white shadow-md px-3 py-3 w-[43vw]"
          >
            <Text size="xs">GPA</Text>
            <Heading size="sm" className="w-full">
              3.85
            </Heading>
          </Card>
          <Card
            variant="filled"
            className="bg-white shadow-md px-3 py-3 w-[43vw]"
          >
            <Text size="xs">Credits</Text>
            <Heading size="sm" className="w-full">
              120
            </Heading>
          </Card>
        </View>
      </View>

      {/* Recent Achievements */}
      <View className="p-5 mb-20">
        <View className="bg-white shadow p-5 rounded-md">
          <View className="mb-5">
            <Heading size="xl">Recent Achievements</Heading>
          </View>

          {/* Achievement 1 */}
          <View className="flex-row gap-3 w-full items-center mb-4">
            <View>
              <Icon as={EditIcon} size="xl" />
            </View>
            <View className="gap-x-3">
              <Heading size="sm">Academic Excellence</Heading>
              <Text size="xs">Top 5% in computer science</Text>
            </View>
          </View>

          {/* Achievement 2 */}
          <View className="flex-row gap-3 w-full items-center mb-4">
            <View>
              <Icon as={EditIcon} size="xl" />
            </View>
            <View className="gap-x-3">
              <Heading size="sm">Dean's List</Heading>
              <Text size="xs">Recognized for outstanding performance</Text>
            </View>
          </View>

          {/* Achievement 3 */}
          <View className="flex-row gap-3 w-full items-center mb-4">
            <View>
              <Icon as={EditIcon} size="xl" />
            </View>
            <View className="gap-x-3">
              <Heading size="sm">Hackathon Winner</Heading>
              <Text size="xs">Won 1st place in university hackathon</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
