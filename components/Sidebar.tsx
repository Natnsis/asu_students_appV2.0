import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { CloseIcon, Icon, MenuIcon } from "@/components/ui/icon";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { View, ScrollView } from "react-native";
import { Divider } from "./ui/divider";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Avatar, AvatarFallbackText, AvatarImage } from "./ui/avatar";

export function Sidebar() {
  const [showDrawer, setShowDrawer] = useState(false);
  const { user } = useUser();
  const { signOut } = useAuth();

  // Guard clause to handle cases where user data is not yet available
  if (!user) {
    return (
      <Button
        size="xl"
        className="rounded-full p-3.5 bg-gray-200"
        variant="solid"
        onPress={() => setShowDrawer(true)}
      >
        <ButtonIcon as={MenuIcon} size="lg" />
      </Button>
    );
  }

  const handleNavigation = async (
    pathIfFilled: string,
    fallbackPath: string
  ) => {
    const studentStatus = await AsyncStorage.getItem("studentStatus");
    if (studentStatus) {
      router.push(pathIfFilled as any);
    } else {
      router.push(fallbackPath as any);
    }
    setShowDrawer(false);
  };

  const fallbackText = `${user.firstName?.[0] || ""}${
    user.lastName?.[0] || ""
  }`;

  return (
    <>
      <Button
        size="xl"
        className="rounded-full p-3.5 bg-gray-200"
        variant="solid"
        onPress={() => setShowDrawer(true)}
      >
        <ButtonIcon as={MenuIcon} size="lg" />
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
        size="lg"
        anchor="left"
      >
        <DrawerBackdrop />
        <DrawerContent className="bg-gray-100">
          <DrawerHeader className="flex-row justify-between items-center p-4">
            <Heading size="2xl">ASU Students</Heading>
            <Button
              onPress={() => setShowDrawer(false)}
              variant="link"
              action="secondary"
              size="xl"
              className="rounded-full p-3.5"
            >
              <ButtonIcon as={CloseIcon} />
            </Button>
          </DrawerHeader>
          <DrawerBody className="p-4">
            <Card className="w-full p-4 rounded-xl shadow-lg bg-white">
              <View className="flex-row items-center gap-4">
                <Avatar className="bg-blue-600 h-12 w-12 rounded-full">
                  <AvatarImage
                    source={{ uri: user.imageUrl }}
                    alt="User profile picture"
                  />
                  <AvatarFallbackText>{fallbackText}</AvatarFallbackText>
                </Avatar>
                <View>
                  <Heading size="lg">{user.fullName}</Heading>
                  <Text size="sm" className="text-gray-500">
                    {user.emailAddresses?.[0]?.emailAddress}
                  </Text>
                </View>
              </View>
            </Card>

            <Divider className="my-5" />

            <ScrollView className="flex-1">
              <View className="gap-y-3">
                <Button
                  className="w-full justify-start rounded-xl px-4 pb-3"
                  variant="link"
                  onPress={() =>
                    handleNavigation(
                      "/(otherScreens)/curriculum",
                      "/(otherScreens)/studentStatus"
                    )
                  }
                >
                  <ButtonText className="text-gray-800 font-medium">
                    ✅ Curriculum
                  </ButtonText>
                </Button>
                <Button
                  className="w-full justify-start rounded-xl px-4 pb-3"
                  variant="link"
                  onPress={() =>
                    handleNavigation(
                      "/(otherScreens)/gpa-calculator",
                      "/(otherScreens)/studentStatus"
                    )
                  }
                >
                  <ButtonText className="text-gray-800 font-medium">
                    🧮 GPA Calculator
                  </ButtonText>
                </Button>
                <Button
                  className="w-full justify-start rounded-xl px-4 pb-3"
                  variant="link"
                  onPress={() => {
                    router.push("/(otherScreens)/lounges");
                    setShowDrawer(false);
                  }}
                >
                  <ButtonText className="text-gray-800 font-medium">
                    🍴 Lounges
                  </ButtonText>
                </Button>
                <Button
                  className="w-full justify-start rounded-xl px-4 pb-3"
                  variant="link"
                  onPress={() => {
                    router.push("/(otherScreens)/gallery");
                    setShowDrawer(false);
                  }}
                >
                  <ButtonText className="text-gray-800 font-medium">
                    📷 Gallery
                  </ButtonText>
                </Button>
                <Button
                  className="w-full justify-start rounded-xl px-4 pb-3"
                  variant="link"
                  onPress={() => {
                    router.push("/(otherScreens)/remainders");
                    setShowDrawer(false);
                  }}
                >
                  <ButtonText className="text-gray-800 font-medium">
                    📝 Remainder
                  </ButtonText>
                </Button>
                <Button
                  className="w-full justify-start rounded-xl px-4 pb-3"
                  variant="link"
                  onPress={() => {
                    router.push("/(otherScreens)/about");
                    setShowDrawer(false);
                  }}
                >
                  <ButtonText className="text-gray-800 font-medium">
                    🔔 About Asu
                  </ButtonText>
                </Button>
                <Button
                  className="w-full justify-start rounded-xl px-4 pb-3"
                  variant="link"
                  onPress={() => {
                    router.push(
                      "https://www.linkedin.com/in/natnael-sisay-orcadev/"
                    );
                    setShowDrawer(false);
                  }}
                >
                  <ButtonText className="text-gray-800 font-medium">
                    📧 Contact Us
                  </ButtonText>
                </Button>
              </View>
            </ScrollView>
          </DrawerBody>
          <DrawerFooter className="p-4 gap-4 items-center">
            <Text size="sm" className="w-full text-center text-gray-500">
              Designed & Developed by Natnael Sisay with ❤️
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
