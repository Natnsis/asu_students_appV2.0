import { View, ScrollView, ImageBackground, Linking } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import {
  Icon,
  Building2Icon,
  GraduationCapIcon,
  BookTextIcon,
} from "@/components/ui/icon";
import { SafeAreaView } from "react-native-safe-area-context";

const About = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 20,
        }}
        className="w-full flex-col"
      >
        {/* Header Section */}
        <View className="flex-row justify-between items-center p-4 bg-white w-full shadow-sm">
          <Heading size="lg">About Assosa University</Heading>
          <Button
            size="sm"
            variant="solid"
            className="rounded-full bg-blue-600"
            onPress={() => Linking.openURL("https://asu.edu.et/contact/")}
          >
            <ButtonText>Contact us</ButtonText>
          </Button>
        </View>

        {/* Image Section */}
        <View className="w-full p-4">
          <ImageBackground
            source={{
              uri: "https://images.unsplash.com/photo-1541339907198-e08756c9f70e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            }}
            className="w-full h-56 rounded-xl overflow-hidden shadow-lg"
            resizeMode="cover"
          >
            <View className="flex-1 justify-end p-4">
              <Heading size="xl" className="text-white">
                Shaping Tomorrow's Leaders
              </Heading>
            </View>
          </ImageBackground>
        </View>

        {/* Statistic Cards Section - Updated with Assosa University info */}
        <View className="w-full px-4 flex-row flex-wrap justify-center gap-4">
          <Card className="flex-1 w-full sm:w-[45vw] p-4 shadow-md rounded-xl bg-white min-w-[45vw]">
            <Heading className="w-full text-center" size="2xl">
              2011
            </Heading>
            <Text className="w-full text-center text-gray-500" size="sm">
              Founded
            </Text>
          </Card>
          <Card className="flex-1 w-full sm:w-[45vw] p-4 shadow-md rounded-xl bg-white min-w-[45vw]">
            <Heading className="w-full text-center" size="2xl">
              15000+
            </Heading>
            <Text className="w-full text-center text-gray-500" size="sm">
              Students
            </Text>
          </Card>
          <Card className="flex-1 w-full sm:w-[45vw] p-4 shadow-md rounded-xl bg-white min-w-[45vw]">
            <Heading className="w-full text-center" size="2xl">
              40+
            </Heading>
            <Text className="w-full text-center text-gray-500" size="sm">
              Majors
            </Text>
          </Card>
          <Card className="flex-1 w-full sm:w-[45vw] p-4 shadow-md rounded-xl bg-white min-w-[45vw]">
            <Heading className="w-full text-center" size="2xl">
              8
            </Heading>
            <Text className="w-full text-center text-gray-500" size="sm">
              Colleges
            </Text>
          </Card>
        </View>

        {/* Important Places Section - New Section */}
        <View className="w-full px-4 mt-6">
          <View className="bg-white w-full p-4 rounded-xl shadow-md">
            <Heading size="xl" className="mb-4">
              Important Places
            </Heading>
            <View className="gap-y-4">
              <View className="flex-row gap-4 items-center">
                <Icon as={Building2Icon} size="md" className="text-blue-600" />
                <View>
                  <Heading size="sm">Main Campus</Heading>
                  <Text size="xs" className="text-gray-500">
                    The heart of our university, home to most faculties.
                  </Text>
                </View>
              </View>
              <View className="flex-row gap-4 items-center">
                <Icon as={BookTextIcon} size="md" className="text-blue-600" />
                <View>
                  <Heading size="sm">Central Library</Heading>
                  <Text size="xs" className="text-gray-500">
                    A modern library with a vast collection of resources.
                  </Text>
                </View>
              </View>
              <View className="flex-row gap-4 items-center">
                <Icon
                  as={GraduationCapIcon}
                  size="md"
                  className="text-blue-600"
                />
                <View>
                  <Heading size="sm">Student Union</Heading>
                  <Text size="xs" className="text-gray-500">
                    The center for student activities, clubs, and events.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Accreditation Section */}
        <View className="w-full px-4 mt-6 mb-24">
          <View className="p-4 bg-white rounded-xl shadow-md">
            <Heading size="xl" className="mb-4">
              Accreditation
            </Heading>
            <View className="gap-y-4">
              <View>
                <Heading size="sm">Ministry of Education</Heading>
                <Text size="sm" className="text-gray-500">
                  since 2011
                </Text>
              </View>
              <View>
                <Heading size="sm">National Accreditation Board</Heading>
                <Text size="sm" className="text-gray-500">
                  since 2013
                </Text>
              </View>
              <View>
                <Heading size="sm">Regional Development Authority</Heading>
                <Text size="sm" className="text-gray-500">
                  since 2015
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
