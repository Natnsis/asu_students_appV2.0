import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { AddIcon } from "@/components/ui/icon";
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

const GPA = () => {
  const [courses, setCourses] = useState<
    { name: string; credit: number; grade?: string }[]
  >([]);
  const [gpa, setGpa] = useState<string | number>("");

  // Fetch courses from AsyncStorage
  const fetchCourses = async () => {
    const storedCourses = await AsyncStorage.getItem("courses");
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  };

  // Use useFocusEffect to fetch courses when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchCourses();
    }, [])
  );

  const handleGradeChange = (id: number, newGrade: string) => {
    const updatedCourses = courses.map((course, index) =>
      index === id ? { ...course, grade: newGrade } : course
    );
    setCourses(updatedCourses);
    AsyncStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const handleDeleteCourse = async (id: number) => {
    const updatedCourses = courses.filter((_, index) => index !== id);
    setCourses(updatedCourses);
    await AsyncStorage.setItem("courses", JSON.stringify(updatedCourses));
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
          <Heading size="lg">GPA Calculator</Heading>
        </View>
        <View>
          <Button
            size="sm"
            variant="solid"
            action="primary"
            className="rounded-full"
            onPress={() => {
              router.push("/(otherScreens)/add-course");
            }}
          >
            <ButtonIcon as={AddIcon} />
            <ButtonText>Add Courses</ButtonText>
          </Button>
        </View>
      </View>

      {/* Body Section */}
      <View className="w-full mt-5">
        <View className="flex-row justify-between items-center w-full px-5">
          <Card className="w-[27vw] bg-white h-[15vh] flex-col items-center justify-center shadow-md">
            <Text size="xs" className="w-full text-center">
              Current GPA
            </Text>
            <Heading size="xl" className="w-full text-center">
              3.77
            </Heading>
          </Card>
          <Card className="w-[27vw] bg-white h-[15vh] flex-col items-center justify-center shadow-md">
            <Text size="xs" className="w-full text-center">
              Target GPA
            </Text>
            <Heading size="xl" className="w-full text-center">
              3.80
            </Heading>
          </Card>
          <Card className="w-[27vw] bg-white h-[15vh] flex-col items-center justify-center shadow-md">
            <Text size="xs" className="w-full text-center ">
              Credits
            </Text>
            <Text size="xs" className="w-full text-center">
              remaining
            </Text>
            <Heading size="xl" className="w-full text-center">
              45
            </Heading>
          </Card>
        </View>
      </View>

      {/* Table Section */}
      <View className="w-full mt-5 px-5">
        <View className="rounded-lg bg-white shadow-md p-5">
          <Heading size="xl" className="mb-3">
            Current Semester
          </Heading>
          <View className="flex-row items-center w-full mb-3">
            <Text size="sm" className="font-medium">
              Projected GPA:{" "}
            </Text>
            <Heading size="md" className="text-3xl text-green-600">
              {gpa}
            </Heading>
          </View>
          <Divider className="my-5" />

          {/* Table Header */}
          <View className="flex-row w-full bg-gray-100 p-3 rounded-t-lg justify-between">
            <Text className="w-[50%] font-bold">Course</Text>
            <Text className="w-[20%] text-center font-bold" size="xs">
              Grade
            </Text>
            <Text className="w-[15%] text-center font-bold" size="xs">
              Action
            </Text>
          </View>

          {/* Table Body */}
          {courses.map((courses, index) => (
            <View
              key={index}
              className="flex-row w-full p-3 border-b border-gray-200 justify-between"
            >
              <Text className="w-[50%]" size="xs" numberOfLines={1}>
                {courses.name || "N/A"}
              </Text>
              <Select
                className="w-14"
                onValueChange={(value) => handleGradeChange(index, value)}
                selectedValue={courses.grade}
              >
                <SelectTrigger>
                  <SelectInput className="flex-1 justify-center h-[30vw]  text-sm w-[30vw] " />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="A+" value="4" />
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

              <View className="w-[16%] text-center">
                <Button
                  size="xs"
                  variant="link"
                  action="negative"
                  onPress={() => handleDeleteCourse(index)}
                >
                  <ButtonText>Remove</ButtonText>
                </Button>
              </View>
            </View>
          ))}
          <Divider className="my-5" />
          <Button onPress={calculateGpa}>
            <ButtonText>Calculate GPA</ButtonText>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default GPA;
