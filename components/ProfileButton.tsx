// components/ProfileButton.tsx

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Modal,
  Dimensions,
} from "react-native";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Heading } from "./ui/heading"; // Assuming these are from gluestack-ui
import { Center } from "./ui/center";

const { width } = Dimensions.get("window");

const ProfileButton = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);

  const handleSignOut = async () => {
    setModalVisible(false);
    try {
      await signOut();
      router.replace("/(auth)/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
      Alert.alert("Sign Out Error", "An error occurred during sign out.");
    }
  };

  const profileImageUrl = user?.imageUrl || "https://placehold.co/100x100";

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="ml-auto mr-4"
      >
        <Image
          source={{ uri: profileImageUrl }}
          className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
        />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={StyleSheet.absoluteFillObject}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View
            className="flex-1 justify-end items-end p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <View className="bg-white p-4 rounded-xl shadow-lg w-full max-w-xs ">
              <Center className="gap-3 mb-4">
                <Image
                  source={{ uri: profileImageUrl }}
                  className="w-20 h-20 rounded-full border-2 border-gray-200"
                />
                <Heading size="md" className="font-bold">
                  {user?.firstName || "Guest"}
                </Heading>
                <Text className="text-gray-500 text-sm">
                  {user?.emailAddresses?.[0]?.emailAddress ||
                    "user@example.com"}
                </Text>
              </Center>
              <View className="border-t border-gray-200 pt-4 mt-4">
                <TouchableOpacity
                  onPress={handleSignOut}
                  className="bg-red-500 rounded-lg p-3"
                >
                  <Text className="text-white text-center font-bold">
                    Sign Out
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default ProfileButton;
