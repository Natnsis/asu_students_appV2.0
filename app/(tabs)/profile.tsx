import { ScrollView, View } from "react-native";
import React from "react";
import { Image } from "@/components/ui/image";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useUser } from "@clerk/clerk-expo";
import { Center } from "@/components/ui/center";

const Profile = () => {
  // Use the Clerk useUser hook to get the logged-in user's data
  const { user, isLoaded } = useUser();

  // Show a loading indicator while the user data is being fetched
  if (!isLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl">Loading...</Text>
      </View>
    );
  }

  // If user data is loaded but the user is null (e.g., signed out),
  // we can also handle that gracefully here.
  if (!user) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl">User not found.</Text>
      </View>
    );
  }

  // Extract first letter of first name and last name for avatar fallback
  const fallbackText = `${user.firstName?.[0] || ""}${
    user.lastName?.[0] || ""
  }`;

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingBottom: 20,
      }}
      className="w-full bg-gray-100"
    >
      {/* Profile Header */}
      <View className="mb-8">
        <View className="absolute z-10 bottom-0 w-full flex-row justify-center">
          <Avatar className="bg-blue-600 border-4 border-white rounded-full h-28 w-28">
            <AvatarImage
              source={{ uri: user.imageUrl }}
              alt="User profile picture"
            />
            <AvatarFallbackText className="text-white font-extrabold text-3xl">
              {fallbackText}
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

      {/* Coming Soon Section */}
      <Center className="flex-1 justify-center items-center p-5">
        <Heading size="2xl" className="text-gray-800 font-bold mb-4">
          Coming Soon!
        </Heading>
        <Text size="md" className="text-gray-500 text-center px-4">
          Academic and achievement details will be available in future updates.
          Stay tuned!
        </Text>
      </Center>
    </ScrollView>
  );
};

export default Profile;
