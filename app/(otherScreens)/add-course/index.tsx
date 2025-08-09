import { ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "@/components/ui/divider";

const Curriculum = () => {
  const [courseName, setCourseName] = useState("");
  const [creditHour, setCreditHour] = useState("");
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const storedCourses = await AsyncStorage.getItem("courses");
        if (storedCourses) {
          setCourses(JSON.parse(storedCourses));
        }
      } catch (e) {
        console.error("Failed to load courses from storage", e);
      }
    };
    fetchCourses();
  }, []);

  const handleAddCourse = async () => {
    if (!courseName || !creditHour) {
      setError("Please fill in all fields.");
      return;
    }

    const newCourse = { name: courseName, credit: Number(creditHour) };
    const updatedCourses = [...courses, newCourse];

    try {
      await AsyncStorage.setItem("courses", JSON.stringify(updatedCourses));
      setCourses(updatedCourses);
      setCourseName("");
      setCreditHour("");
      setError(""); // Clear error on success
    } catch (e) {
      console.error("Failed to save course to storage", e);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-start px-4 pt-4">
          <Heading size="lg">My Curriculum</Heading>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100, // Ensure content is above the tab bar
        }}
        className="w-full flex-col px-4 pt-4"
      >
        <Card className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <Heading size="md" className="font-bold text-blue-700 mb-2">
            Add a New Course
          </Heading>
          <Text size="sm" className="text-gray-500 mb-4">
            Enter the course name and credit hours for this semester.
          </Text>

          <Text size="sm" className="font-medium text-gray-700">
            Course Name
          </Text>
          <Input className="bg-white my-2 rounded-lg">
            <InputField
              placeholder="e.g., Data Structures"
              value={courseName}
              onChangeText={(text) => setCourseName(text)}
            />
          </Input>

          <Text size="sm" className="font-medium text-gray-700 mt-4">
            Credit Hour
          </Text>
          <Input className="bg-white my-2 rounded-lg">
            <InputField
              placeholder="e.g., 3"
              keyboardType="numeric"
              value={creditHour.toString()}
              onChangeText={(text) => setCreditHour(text)}
            />
          </Input>

          {error ? (
            <Text size="sm" className="text-red-500 text-center mt-2">
              {error}
            </Text>
          ) : null}

          <Button
            onPress={handleAddCourse}
            className="mt-6 bg-blue-600 rounded-lg"
          >
            <ButtonText className="text-white font-bold">Add Course</ButtonText>
          </Button>
        </Card>

        <Card className="bg-white p-6 rounded-xl shadow-lg">
          <Heading size="md" className="font-bold text-blue-700 mb-4">
            Added Courses
          </Heading>
          {courses.length > 0 ? (
            <View className="gap-y-3">
              {courses.map((course, index) => (
                <View key={index}>
                  <View className="flex-row items-center gap-3">
                    <Text className="text-xl">📚</Text>
                    <View>
                      <Text className="font-medium text-gray-800">
                        {course.name}
                      </Text>
                      <Text size="xs" className="text-gray-500">
                        {course.credit} Credit Hour(s)
                      </Text>
                    </View>
                  </View>
                  {index < courses.length - 1 && <Divider className="my-3" />}
                </View>
              ))}
            </View>
          ) : (
            <Text className="w-full text-center text-gray-500">
              No courses added yet.
            </Text>
          )}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Curriculum;
