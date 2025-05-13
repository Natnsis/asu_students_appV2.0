import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";

const Curriculum = () => {
  const [cgpa, setCgpa] = useState(0);
  interface Course {
    code: string;
    credit: number;
    title: string;
    description: string;
    room: string;
  }

  const [semester, setSemester] = useState("-");
  const [gpa, setGpa] = useState(0);
  const [department, setDepartment] = useState("");

  // Fetch student status data
  useEffect(() => {
    const fetchStudentStatus = async () => {
      const data = await AsyncStorage.getItem("studentStatus");
      const parsedData = data ? JSON.parse(data) : null;
      if (parsedData) {
        setCgpa(parsedData.cumulativeGpa);
        setSemester(parsedData.currentSemester);
        setGpa(parsedData.semesterGpa);
      } else {
        console.log("No student status data found");
      }
    };
    fetchStudentStatus();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await AsyncStorage.getItem("userData");
      const parsedData = data ? JSON.parse(data) : null;
      if (parsedData) {
        setDepartment(parsedData.department);
      } else {
        console.log("No user data found");
      }
    };
    fetchUserData();
  }, []);

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
          <Heading size="lg">Curriculum</Heading>
        </View>
        <View>
          <Avatar className="bg-blue-600 rounded-full ">
            <AvatarFallbackText className="text-white font-extrabold">
              Alex
            </AvatarFallbackText>
          </Avatar>
        </View>
      </View>

      {/* Body Section */}
      <View className="w-full mt-5">
        <View className="flex-row justify-between items-center w-full px-5">
          <Card className="w-fit bg-white">
            <Text size="xs">CGPA</Text>
            <Heading size="xl" className="w-full text-center">
              {cgpa}
            </Heading>
          </Card>
          <Card className="w-fit bg-white">
            <Text size="xs">Semester</Text>
            <Heading size="xl" className="w-full text-center">
              {semester}
            </Heading>
          </Card>
          <Card className="w-fit bg-white">
            <Text size="xs">Dep't</Text>
            <Heading size="xl" className="w-full text-center">
              16
            </Heading>
          </Card>
          <Card className="w-[20%] bg-white">
            <Text size="xs" className="w-full text-center">
              GPA
            </Text>
            <Heading size="xl" className="w-full text-center">
              {gpa}
            </Heading>
          </Card>
        </View>
      </View>

      {/* Search Section */}
      <View className="w-full px-5">
        <Input
          variant="outline"
          size="md"
          className="bg-white mt-5 rounded-full"
        >
          <InputField placeholder="Search Department..." />
        </Input>
      </View>

      {/* Departments Section */}
      <View className="px-5 w-full mt-10 mb-10">
        <View className="p-5 bg-white ">
          <Text className="mb-3">Departments:</Text>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> 💻 Computer Science</Heading>
            </ButtonText>
          </Button>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> 📡 Information Technology</Heading>
            </ButtonText>
          </Button>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> 📝 Information Science</Heading>
            </ButtonText>
          </Button>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> 💊 Pharmacy</Heading>
            </ButtonText>
          </Button>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> 🔬 Medical Laboratory</Heading>
            </ButtonText>
          </Button>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> 💉 Nurse</Heading>
            </ButtonText>
          </Button>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> ⚖ Law</Heading>
            </ButtonText>
          </Button>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> 💹 Economics</Heading>
            </ButtonText>
          </Button>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> 🧮 Accounting</Heading>
            </ButtonText>
          </Button>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> 📰 Journalism</Heading>
            </ButtonText>
          </Button>
          <Button variant="outline" className="mb-5">
            <ButtonText className="w-full gap-1">
              <Heading> 🌱 Agro Economics</Heading>
            </ButtonText>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Curriculum;
