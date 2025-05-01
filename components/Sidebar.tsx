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
import React from "react";
import { Card } from "./ui/card";
import { View } from "react-native";
import { Divider } from "./ui/divider";
import { Center } from "./ui/center";

export function Sidebar() {
  const [showDrawer, setShowDrawer] = React.useState(false);
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
                  <Heading size="lg">Alex Thompson</Heading>
                  <Text size="sm">Computer Science Year-3</Text>
                </View>
              </View>
            </Card>

            <Divider className="my-5" />

            <View className="flex flex-col gap-4">
              {/* First Row */}
              <View className="flex flex-row justify-between gap-4">
                <Card
                  variant="filled"
                  className="w-[48%] h-[100px] flex justify-center items-center"
                >
                  <Center>
                    <Text>📚</Text>
                    <Text>Library</Text>
                  </Center>
                </Card>
                <Card
                  variant="filled"
                  className="w-[48%] h-[100px] flex justify-center items-center"
                >
                  <Center>
                    <Text>📖</Text>
                    <Text>Books</Text>
                  </Center>
                </Card>
              </View>

              {/* Second Row */}
              <View className="flex flex-row justify-between gap-4">
                <Card
                  variant="filled"
                  className="w-[48%] h-[100px] flex justify-center items-center"
                >
                  <Center>
                    <Text>🎓</Text>
                    <Text>Graduation</Text>
                  </Center>
                </Card>
                <Card
                  variant="filled"
                  className="w-[48%] h-[100px] flex justify-center items-center"
                >
                  <Center>
                    <Text>🖥️</Text>
                    <Text>Labs</Text>
                  </Center>
                </Card>
              </View>
            </View>

            <Divider className="my-5" />

            <View className="gap-y-5">
              <Button variant="outline">
                <ButtonText>Materials</ButtonText>
              </Button>
              <Button variant="outline">
                <ButtonText>Settings</ButtonText>
              </Button>
              <Button variant="outline">
                <ButtonText>Logout</ButtonText>
              </Button>
              <Button variant="outline">
                <ButtonText>Feedback</ButtonText>
              </Button>
              <Button variant="outline">
                <ButtonText>Contact Us</ButtonText>
              </Button>
            </View>
          </DrawerBody>
          <DrawerFooter>
            <Text size="sm" className="w-full text-center absolute bottom-0">
              Developed by Natnael Sisay
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
