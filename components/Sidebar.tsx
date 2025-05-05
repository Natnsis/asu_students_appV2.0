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
import { CloseIcon, Icon, MenuIcon, StarIcon } from "@/components/ui/icon";
import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { View } from "react-native";
import { Divider } from "./ui/divider";
import { Center } from "./ui/center";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Sidebar() {
  interface UserData {
    fullName: string;
    [key: string]: any;
  }
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userInformation = await AsyncStorage.getItem("userData");
      if (userInformation) {
        setUserData(JSON.parse(userInformation));
      } else {
        console.log("No data found");
      }
    };
    fetchData();
  }, []);

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

  return (
    <>
      <Button
        size="xl"
        className="rounded-full p-3.5"
        variant="link"
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <ButtonText>
          <Icon as={MenuIcon} size="lg" />
        </ButtonText>
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        size="lg"
        anchor="left"
      >
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader className="flex-row justify-between items-center gap-2">
            <Heading size="2xl">Asu Students</Heading>
            <Button
              onPress={() => {
                setShowDrawer(false);
              }}
              variant="link"
              action="secondary"
              size="xl"
              className="rounded-full p-3.5"
            >
              <ButtonIcon as={CloseIcon} />
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <Card className="w-full" variant="filled">
              <View className="flex-row items-center gap-2">
                <View>
                  <Button size="lg" className="rounded-full p-3.5">
                    <ButtonIcon as={StarIcon} />
                  </Button>
                </View>
                <View>
                  <Heading size="lg">{userData?.fullName ?? "Guest"}</Heading>
                  <Text size="sm">
                    {userData?.department ?? "no-department"}
                  </Text>
                </View>
              </View>
            </Card>

            <Divider className="my-5" />

            <View className="gap-y-3">
              <Button
                variant="link"
                onPress={() =>
                  handleNavigation(
                    "/(otherScreens)/curriculum",
                    "/(otherScreens)/studentStatus"
                  )
                }
              >
                <ButtonText>
                  <Heading>Curriculum</Heading>
                </ButtonText>
              </Button>
              <Button
                variant="link"
                onPress={() =>
                  handleNavigation(
                    "/(otherScreens)/gpa-calculator",
                    "/(otherScreens)/studentStatus"
                  )
                }
              >
                <ButtonText>
                  <Heading>GPA Calculator</Heading>
                </ButtonText>
              </Button>
              <Button
                variant="link"
                onPress={() => {
                  router.push("/(otherScreens)/campus-map/index.tsx");
                  setShowDrawer(false);
                }}
              >
                <ButtonText>
                  <Heading>Campus Map</Heading>
                </ButtonText>
              </Button>
              <Button
                variant="link"
                onPress={() => {
                  router.push("/(otherScreens)/lounges");
                  setShowDrawer(false);
                }}
              >
                <ButtonText>
                  <Heading>Lounges</Heading>
                </ButtonText>
              </Button>
              <Button
                variant="link"
                onPress={() => {
                  router.push("/(otherScreens)/gallery");
                  setShowDrawer(false);
                }}
              >
                <ButtonText>
                  <Heading>Gallery</Heading>
                </ButtonText>
              </Button>
              <Button
                variant="link"
                onPress={() => {
                  router.push("/(otherScreens)/remainders");
                  setShowDrawer(false);
                }}
              >
                <ButtonText>
                  <Heading>Remainder</Heading>
                </ButtonText>
              </Button>
              <Button
                variant="link"
                onPress={() => {
                  router.push("/(otherScreens)/about");
                  setShowDrawer(false);
                }}
              >
                <ButtonText>
                  <Heading>About Asu</Heading>
                </ButtonText>
              </Button>
              <Button
                variant="link"
                onPress={() => {
                  setShowDrawer(false);
                }}
              >
                <ButtonText>
                  <Heading>Contact Us</Heading>
                </ButtonText>
              </Button>
            </View>
          </DrawerBody>
          <DrawerFooter>
            <Text size="sm" className="w-full text-center absolute bottom-0">
              Developed by Natnael Sisay with ❤️
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
