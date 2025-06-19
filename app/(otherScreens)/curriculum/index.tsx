import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Curriculum = () => {
  const [cgpa, setCgpa] = useState(0);
  const [semester, setSemester] = useState("-");
  const [gpa, setGpa] = useState(0);
  const [department, setDepartment] = useState("");
  const router = useRouter();

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

  const courses = [
    { id: 1, name: "💻 Computer Science" },
    { id: 2, name: "📡 Information Technology" },
    { id: 3, name: "📝 Information Science" },
    { id: 4, name: "💊 Pharmacy" },
    { id: 5, name: "⚖ Law" },
    { id: 6, name: "💹 Economics" },
    { id: 7, name: "🧮 Accounting" },
    { id: 8, name: "🌱 Agro Economics" },
    { id: 9, name: "💉 Nurse" },
    { id: 10, name: "🔬 Medical Laboratory" },
    { id: 11, name: "📰 Journalism" },
  ];

  const handleDepartmentPress = (id: number) => {
    router.push(`/curriculum-info/${id}`);
  };

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
      <SafeAreaView className="w-full bg-white h-24 px-5 mb-5">
        <View className="flex-row justify-between items-center w-full">
          <View className="gap-2 flex-row w-full pt-5 items-center">
            <Heading size="lg" className="h-[30px] pl-10">
              Curriculum
            </Heading>
          </View>
        </View>
      </SafeAreaView>

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
              {department}
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
          {courses.map((course) => (
            <Button
              key={course.id}
              variant="link"
              className="mb-5 bg-success-50"
              onPress={() => handleDepartmentPress(course.id)}
            >
              <ButtonText className="w-full gap-1 py-1 px-2">
                <Heading> {course.name}</Heading>
              </ButtonText>
            </Button>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Curriculum;
