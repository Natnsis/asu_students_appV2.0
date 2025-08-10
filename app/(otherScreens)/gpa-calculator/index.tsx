import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { AddIcon, TrashIcon } from "@/components/ui/icon";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const GPA = () => {
  const [courses, setCourses] = useState([]);
  const [gpa, setGpa] = useState("0.00");

  // Fetch courses from AsyncStorage when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      const fetchCourses = async () => {
        try {
          const storedCourses = await AsyncStorage.getItem("courses");
          if (storedCourses) {
            setCourses(JSON.parse(storedCourses));
          }
        } catch (e) {
          console.error("Failed to fetch courses from storage", e);
        }
      };
      fetchCourses();
    }, [])
  );

  const handleGradeChange = async (indexToUpdate, newGrade) => {
    const updatedCourses = courses.map((course, index) =>
      index === indexToUpdate ? { ...course, grade: newGrade } : course
    );
    setCourses(updatedCourses);
    try {
      await AsyncStorage.setItem("courses", JSON.stringify(updatedCourses));
    } catch (e) {
      console.error("Failed to save updated courses to storage", e);
    }
  };

  const handleDeleteCourse = async (indexToDelete) => {
    const updatedCourses = courses.filter(
      (_, index) => index !== indexToDelete
    );
    setCourses(updatedCourses);
    try {
      await AsyncStorage.setItem("courses", JSON.stringify(updatedCourses));
    } catch (e) {
      console.error("Failed to delete course from storage", e);
    }
  };

  const calculateGpa = () => {
    let totalWeightedGrade = 0;
    let totalCredits = 0;

    courses.forEach((course) => {
      if (course.grade) {
        const gradeValue = parseFloat(course.grade);
        totalWeightedGrade += gradeValue * (course.credit || 0);
        totalCredits += course.credit || 0;
      }
    });

    const calculatedGpa =
      totalCredits > 0
        ? (totalWeightedGrade / totalCredits).toFixed(2)
        : "0.00";
    setGpa(calculatedGpa);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <View className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-between w-full px-4 pt-4">
          <Heading size="lg">GPA Calculator</Heading>
          <Button
            size="sm"
            variant="solid"
            action="primary"
            className="rounded-full flex-row items-center h-auto min-h-0 py-2 px-3 bg-blue-600"
            onPress={() => {
              router.push("/(otherScreens)/add-course");
            }}
          >
            <ButtonIcon as={AddIcon} className="text-white" />
            <ButtonText className="text-white">Add Courses</ButtonText>
          </Button>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100, // Ensure content is above the tab bar
        }}
        className="w-full flex-col px-4 pt-4"
      >
        {/* GPA Status Cards */}
        <View className="flex-row justify-between w-full gap-2 mb-6">
          <Card className="flex-1 bg-white p-4 rounded-xl shadow-lg items-center">
            <Text size="xs" className="text-gray-500">
              Current GPA
            </Text>
            <Heading size="xl" className="mt-1">
              3.77
            </Heading>
          </Card>
          <Card className="flex-1 bg-white p-4 rounded-xl shadow-lg items-center">
            <Text size="xs" className="text-gray-500">
              Target GPA
            </Text>
            <Heading size="xl" className="mt-1">
              3.80
            </Heading>
          </Card>
          <Card className="flex-1 bg-white p-4 rounded-xl shadow-lg items-center">
            <Text size="xs" className="text-gray-500">
              Credits
            </Text>
            <Heading size="xl" className="mt-1">
              45
            </Heading>
          </Card>
        </View>

        {/* Table Section */}
        <Card className="w-full p-6 bg-white rounded-xl shadow-lg">
          <Heading size="md" className="font-bold text-blue-700 mb-4">
            Current Semester
          </Heading>
          <View className="flex-row items-center w-full mb-3">
            <Text size="sm" className="font-medium text-gray-700">
              Projected GPA:{" "}
            </Text>
            <Heading size="xl" className="text-green-600">
              {gpa}
            </Heading>
          </View>
          <Divider className="my-3" />

          {/* Table Header */}
          <View className="flex-row w-full bg-gray-100 p-3 rounded-lg justify-between items-center mb-2">
            <Text className="w-1/2 font-bold text-gray-800">Course</Text>
            <Text className="w-1/4 text-center font-bold text-gray-800">
              Grade
            </Text>
            <Text className="w-1/4 text-center font-bold text-gray-800">
              Action
            </Text>
          </View>

          {/* Table Body */}
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <View
                key={index}
                className="flex-row w-full py-3 border-b border-gray-200 justify-between items-center"
              >
                <Text className="flex-1 text-gray-700 pr-2" numberOfLines={1}>
                  {course.name || "N/A"}
                </Text>
                <Select
                  className="w-1/4 min-w-[70px]"
                  onValueChange={(value) => handleGradeChange(index, value)}
                  selectedValue={course.grade}
                >
                  <SelectTrigger className="w-full bg-gray-100 rounded-lg h-10 px-2">
                    <SelectInput className="text-sm" />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="A" value="4" />
                      <SelectItem label="A-" value="3.75" />
                      <SelectItem label="B+" value="3.5" />
                      <SelectItem label="B" value="3" />
                      <SelectItem label="B-" value="2.75" />
                      <SelectItem label="C+" value="2.5" />
                      <SelectItem label="C" value="2" />
                      <SelectItem label="D" value="1" />
                      <SelectItem label="F" value="0" />
                    </SelectContent>
                  </SelectPortal>
                </Select>

                <View className="w-1/4 items-center">
                  <Button
                    size="xs"
                    variant="link"
                    action="negative"
                    onPress={() => handleDeleteCourse(index)}
                  >
                    <ButtonIcon as={TrashIcon} size="md" />
                  </Button>
                </View>
              </View>
            ))
          ) : (
            <Text className="text-center text-gray-500 mt-4">
              No courses added yet.
            </Text>
          )}

          <Button
            onPress={calculateGpa}
            className="mt-6 bg-blue-600 rounded-lg"
          >
            <ButtonText className="text-white font-bold">
              Calculate GPA
            </ButtonText>
          </Button>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GPA;
