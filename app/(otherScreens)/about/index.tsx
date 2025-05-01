import { View, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { EditIcon, Icon } from "@/components/ui/icon";

const About = () => {
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
          <Heading size="lg">About Our University</Heading>
        </View>
        <View>
          <Button
            size="sm"
            variant="solid"
            action="primary"
            className="rounded-full"
          >
            <ButtonText>Contact us</ButtonText>
          </Button>
        </View>
      </View>

      {/* image section  */}
      <View className="w-full px-5 mb-5">
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
          style={{
            width: "100%",
            height: 300,
          }}
          resizeMode="cover"
        >
          <Heading size="xl" className="text-white mt-10 px-5 ">
            Shaping Tomorrow's Leaders
          </Heading>
        </ImageBackground>
      </View>

      <View className="w-full px-5 gap-5">
        <View className="flex-row gap-5 w-full">
          <Card className="w-[40vw] shadow-md rounded-lg">
            <Heading className="w-full text-center" size="xl">
              1925
            </Heading>
            <Text className="w-full text-center" size="sm">
              Founded
            </Text>
          </Card>
          <Card className="w-[40vw] shadow-md rounded-lg">
            <Heading className="w-full text-center" size="xl">
              10000
            </Heading>
            <Text className="w-full text-center" size="sm">
              Students
            </Text>
          </Card>
        </View>
        <View className="flex-row gap-5 w-full">
          <Card className="w-[40vw] shadow-md rounded-lg">
            <Heading className="w-full text-center" size="xl">
              1925
            </Heading>
            <Text className="w-full text-center" size="sm">
              Founded
            </Text>
          </Card>
          <Card className="w-[40vw] shadow-md rounded-lg">
            <Heading className="w-full text-center" size="xl">
              10000
            </Heading>
            <Text className="w-full text-center" size="sm">
              Students
            </Text>
          </Card>
        </View>
        <View className="flex-row gap-5 w-full">
          <Card className="w-[40vw] shadow-md rounded-lg">
            <Heading className="w-full text-center" size="xl">
              1925
            </Heading>
            <Text className="w-full text-center" size="sm">
              Founded
            </Text>
          </Card>
          <Card className="w-[40vw] shadow-md rounded-lg">
            <Heading className="w-full text-center" size="xl">
              10000
            </Heading>
            <Text className="w-full text-center" size="sm">
              Students
            </Text>
          </Card>
        </View>
      </View>

      <View className="w-full px-5 mt-5">
        <View className="bg-white w-full p-5">
          <Heading size="xl">Our Values</Heading>
          <View className="flex-row gap-3 mt-5 items-center">
            <Icon as={EditIcon} size="md" />
            <View>
              <Heading>Excellence</Heading>
              <Text size="xs">
                Pursuing the highest standard in education and research
              </Text>
            </View>
          </View>
          <View className="flex-row gap-3 mt-5 items-center">
            <Icon as={EditIcon} size="md" />
            <View>
              <Heading>Excellence</Heading>
              <Text size="xs">
                Pursuing the highest standard in education and research
              </Text>
            </View>
          </View>
          <View className="flex-row gap-3 mt-5 items-center">
            <Icon as={EditIcon} size="md" />
            <View>
              <Heading>Excellence</Heading>
              <Text size="xs">
                Pursuing the highest standard in education and research
              </Text>
            </View>
          </View>
          <View className="flex-row gap-3 mt-5 items-center">
            <Icon as={EditIcon} size="md" />
            <View>
              <Heading>Excellence</Heading>
              <Text size="xs">
                Pursuing the highest standard in education and research
              </Text>
            </View>
          </View>
          <View className="flex-row gap-3 mt-5 items-center">
            <Icon as={EditIcon} size="md" />
            <View>
              <Heading>Excellence</Heading>
              <Text size="xs">
                Pursuing the highest standard in education and research
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View className="px-5 w-full mt-10 gap-3">
        <View className="p-5 bg-white rounded-md">
          <Heading>Accreditation</Heading>
          <View>
            <Heading>Higher Education Commission</Heading>
            <Text size="sm">since 2024</Text>
          </View>
          <View>
            <Heading>Engineering Accreditation Board</Heading>
            <Text size="sm">since 2023</Text>
          </View>
          <View>
            <Heading>Business School Association</Heading>
            <Text size="sm">since 2024</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
