import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, InputField } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Curriculum = () => {
  const [cgpa, setCgpa] = useState(0);
  const [semester, setSemester] = useState("-");
  const [gpa, setGpa] = useState(0);
  const [department, setDepartment] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
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
    { id: 1, name: "Computer Science", emoji: "💻" },
    { id: 2, name: "Information Technology", emoji: "📡" },
    { id: 3, name: "Information Science", emoji: "📝" },
    { id: 4, name: "Pharmacy", emoji: "💊" },
    { id: 5, name: "Law", emoji: "⚖" },
    { id: 6, name: "Economics", emoji: "💹" },
    { id: 7, name: "Accounting", emoji: "🧮" },
    { id: 8, name: "Agro Economics", emoji: "🌱" },
    { id: 9, name: "Nursing", emoji: "💉" },
    { id: 10, name: "Medical Laboratory", emoji: "🔬" },
    { id: 11, name: "Journalism", emoji: "📰" },
  ];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDepartmentPress = (id: number) => {
    router.push(`/curriculum-info/${id}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <View className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-start px-4 pt-4">
          <Heading size="lg">My Curriculum</Heading>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
        }}
        className="w-full flex-col px-4 pt-4"
      >
        {/* Student Status Cards */}
        <View className="flex-row justify-between w-full gap-2 mb-6">
          <Card className="flex-1 bg-white p-4 rounded-xl shadow-lg items-center">
            <Text size="xs" className="text-gray-500">
              CGPA
            </Text>
            <Heading size="xl" className="mt-1">
              {cgpa}
            </Heading>
          </Card>
          <Card className="flex-1 bg-white p-4 rounded-xl shadow-lg items-center">
            <Text size="xs" className="text-gray-500">
              Semester
            </Text>
            <Heading size="xl" className="mt-1">
              {semester}
            </Heading>
          </Card>
          <Card className="flex-1 bg-white p-4 rounded-xl shadow-lg items-center">
            <Text size="xs" className="text-gray-500">
              GPA
            </Text>
            <Heading size="xl" className="mt-1">
              {gpa}
            </Heading>
          </Card>
        </View>

        {/* Search Section */}
        <View className="w-full mb-6">
          <Input
            variant="rounded"
            size="md"
            className="bg-white rounded-full shadow-md"
          >
            <InputField
              placeholder="Search departments..."
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
          </Input>
        </View>

        {/* Departments Section */}
        <View className="w-full gap-4">
          <Heading size="md" className="font-bold text-gray-700">
            Departments:
          </Heading>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <TouchableOpacity
                key={course.id}
                onPress={() => handleDepartmentPress(course.id)}
                activeOpacity={0.7}
              >
                <Card className="bg-white p-5 rounded-xl shadow-lg flex-row items-center gap-3">
                  <Text className="text-xl">{course.emoji}</Text>
                  <Heading size="md" className="font-bold text-blue-700">
                    {course.name}
                  </Heading>
                </Card>
              </TouchableOpacity>
            ))
          ) : (
            <Text className="text-center text-gray-500 mt-4">
              No departments found.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Curriculum;
