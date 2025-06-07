import { ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { Sidebar } from "@/components/Sidebar";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonIcon } from "@/components/ui/button";
import { GripVerticalIcon } from "@/components/ui/icon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Center } from "@/components/ui/center";

const Index = () => {
  interface UserInfo {
    fullName?: string;
    isInformed?: boolean;
    department?: string;
    gender?: string;
    year?: string;
  }
  const [isStudentStatusFilled, setIsStudentStatusFilled] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const [firstName, setFirstName] = useState("");

  // Check AsyncStorage for student status and user data
  useEffect(() => {
    const checkStudentStatus = async () => {
      const studentStatus = await AsyncStorage.getItem("studentStatus");

      if (studentStatus) {
        setIsStudentStatusFilled(true);
      }
    };

    checkStudentStatus();
  }, []);

  useEffect(() => {
    const checkInformedStats = async () => {
      const userdata = await AsyncStorage.getItem("userData");
      if (userdata) {
        const parsedData = JSON.parse(userdata);
        setUserInfo(parsedData);

        const fullName = parsedData.fullName || "";
        const firstName = fullName.split(" ")[0];

        setFirstName(firstName);

        if (parsedData.isInformed) {
          router.push("/(tabs)");
        } else {
          router.push("/(screens)/studentInfo");
        }
      }
    };

    checkInformedStats();
  }, []);

  const ministyle = "bg-success-50 px-2 text-base rounded-lg text-center w-fit";
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
        <View className="gap-2 flex-row items-center w-full">
          <Sidebar />
          <Heading size="lg">
            ASU Students App{" "}
            <Text className="border border-success-700 text-green-400 py-3 px-1">
              beta
            </Text>
          </Heading>
        </View>
        <Button variant="link">
          <ButtonIcon as={GripVerticalIcon} />
        </Button>
      </View>

      {/* Welcome Section */}
      <View className="bg-white w-[90vw] mt-6 rounded-lg shadow-md p-3">
        <View className="p-5 flex-col gap-3">
          <Heading size="lg">Welcome back, {firstName || "Guest"}</Heading>
          <Text>
            Track your academic progress and campus life all in one place.
          </Text>
          <View className="flex-row justify-between items-center gap-3 px-4">
            <Text className="text-white  rounded-full px-3 py-1 bg-success-700 w-fit">
              {userInfo.department}
            </Text>
            <Text className="text-white bg-success-700 rounded-full px-3 py-1 text-base">
              Year: {userInfo.year}
            </Text>
            <Text className="text-white bg-success-700 rounded-full px-3 py-1">
              {userInfo.gender}
            </Text>
          </View>
        </View>
      </View>
      {/* Sections */}
      <View className="mb-20">
        {/* Curriculum */}
        <Link
          href={
            isStudentStatusFilled
              ? "/(otherScreens)/curriculum"
              : "/(otherScreens)/studentStatus"
          }
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              📚
            </Text>
            <Heading>Curriculum</Heading>
            <Text className="w-full text-center">
              Track your courses and credits
            </Text>
            <View className="flex-row  items-center justify-center gap-3 w-full">
              <Text className="bg-success-50 px-2 rounded-lg text-center w-fit text-base">
                4.0 GPA
              </Text>
              <Text className="bg-success-50 px-2 text-base rounded-lg text-center w-fit">
                96 credits
              </Text>
            </View>
          </Center>
        </Link>

        {/* Campus Map */}
        <Link
          href="/(otherScreens)/campus-map/index.tsx"
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              🗺
            </Text>
            <Heading>Campus Map</Heading>
            <Text className="w-full text-center">
              Navigate your campus with ease
            </Text>
            <View className="flex-row justify-between items-center gap-3">
              <Text className="bg-success-50 px-2 text-base rounded-lg text-center w-fit">
                Building A
              </Text>
              <Text className={ministyle}>Library</Text>
            </View>
          </Center>
        </Link>

        {/* Lounges */}
        <Link
          href="/(otherScreens)/lounges"
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              🪑
            </Text>
            <Heading>Lounges</Heading>
            <Text className="w-full text-center">
              Find study and relaxation spaces
            </Text>
            <View className="flex-row justify-between items-center gap-3">
              <Text className={ministyle}>120 credits</Text>
              <Text className={ministyle}>3 semesters left</Text>
            </View>
          </Center>
        </Link>

        {/* GPA Calculator */}
        <Link
          href={
            isStudentStatusFilled
              ? "/(otherScreens)/gpa-calculator"
              : "/(otherScreens)/studentStatus"
          }
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              🧮
            </Text>
            <Heading>GPA Calculator</Heading>
            <Text className="w-full text-center">Calculate your grades</Text>
            <View className="flex-row justify-between items-center gap-3">
              <Text className={ministyle}>120 credits</Text>
              <Text className={ministyle}>3 semesters left</Text>
            </View>
          </Center>
        </Link>

        {/* Gallery */}
        <Link
          href="/(otherScreens)/gallery"
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              📸
            </Text>
            <Heading>Gallery</Heading>
            <Text className="w-full text-center">
              University photo galleries
            </Text>
            <View className="flex-row justify-between items-center gap-3">
              <Text className={ministyle}>120 credits</Text>
              <Text className={ministyle}>3 semesters left</Text>
            </View>
          </Center>
        </Link>

        {/* Reminders */}
        <Link
          href="/(otherScreens)/remainders"
          className="w-[90vw] bg-white mt-6 rounded-lg shadow-md p-5"
        >
          <Center className="gap-3 w-full">
            <Text className="bg-blue-600 rounded-full px-3 py-1" size="xl">
              ⏰
            </Text>
            <Heading>Reminders</Heading>
            <Text className="w-full text-center">
              Stay on top of your tasks
            </Text>
            <View className="flex-row justify-between items-center gap-3">
              <Text className={ministyle}>120 credits</Text>
              <Text className={ministyle}>3 semesters left</Text>
            </View>
          </Center>
        </Link>
      </View>
    </ScrollView>
  );
};

export default Index;
