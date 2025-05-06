import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { AddIcon, ChevronDownIcon } from "@/components/ui/icon";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";

const gpa = () => {
  const [courses, setCourses] = useState([
    { id: 1, course: "Data Structures and Algorithms", credits: 3, grade: "A" },
    { id: 2, course: "Operating Systems", credits: 4, grade: "B+" },
    { id: 3, course: "Database Systems", credits: 3, grade: "A-" },
  ]);
  const handleGradeChange = (id: number, newGrade: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, grade: newGrade } : course
      )
    );
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
            <Heading size="md" className="text-primary-600">
              3.74
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
          {courses.map((course) => (
            <View
              key={course.id}
              className="flex-row w-full p-3 border-b border-gray-200 justify-between"
            >
              <Text className="w-[50%]" size="xs">
                {course.course}
              </Text>
              <Select className="w-14">
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
                <Button size="xs" variant="link" action="negative">
                  <ButtonText>Remove</ButtonText>
                </Button>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View className="w-full mt-5 px-5">
        <View className="bg-white p-4 rounded-md shadow-md">
          <Heading>Previous Semester</Heading>
          <Divider className="my-5" />
          <View className="flex-row items-center justify-between w-full mb-5">
            <Text className="w-[50%]">Fall 2023</Text>
            <Text>GPA:3.85</Text>
          </View>
          <View className="flex-row items-center w-full gap-3 mb-3">
            <Card
              variant="filled"
              className="rounded-md px-2 py-3 w-[50%] h-25 "
            >
              <Heading size="md" className="mb-2">
                Programming Fundamentals
              </Heading>
              <Text size="xs">Grade: A</Text>
            </Card>
            <Card
              variant="filled"
              className="rounded-md px-2 py-3 w-[50%] h-25"
            >
              <Heading size="md" className="mb-2">
                Programming Fundamentals
              </Heading>
              <Text size="xs">Grade: A</Text>
            </Card>
          </View>
          <View className="flex-row items-center w-full gap-3 mb-3">
            <Card
              variant="filled"
              className="rounded-md px-2 py-3 w-[50%] h-25 "
            >
              <Heading size="md" className="mb-2">
                Programming Fundamentals
              </Heading>
              <Text size="xs">Grade: A</Text>
            </Card>
            <Card
              variant="filled"
              className="rounded-md px-2 py-3 w-[50%] h-25"
            >
              <Heading size="md" className="mb-2">
                Programming Fundamentals
              </Heading>
              <Text size="xs">Grade: A</Text>
            </Card>
          </View>
          <Divider className="my-5" />
          <View className="flex-row items-center justify-between w-full mb-5">
            <Text className="w-[50%]">Fall 2023</Text>
            <Text>GPA:3.85</Text>
          </View>
          <View className="flex-row items-center w-full gap-3 mb-3">
            <Card
              variant="filled"
              className="rounded-md px-2 py-3 w-[50%] h-25 "
            >
              <Heading size="md" className="mb-2">
                Programming Fundamentals
              </Heading>
              <Text size="xs">Grade: A</Text>
            </Card>
            <Card
              variant="filled"
              className="rounded-md px-2 py-3 w-[50%] h-25"
            >
              <Heading size="md" className="mb-2">
                Programming Fundamentals
              </Heading>
              <Text size="xs">Grade: A</Text>
            </Card>
          </View>
          <View className="flex-row items-center w-full gap-3 mb-3">
            <Card
              variant="filled"
              className="rounded-md px-2 py-3 w-[50%] h-25 "
            >
              <Heading size="md" className="mb-2">
                Programming Fundamentals
              </Heading>
              <Text size="xs">Grade: A</Text>
            </Card>
            <Card
              variant="filled"
              className="rounded-md px-2 py-3 w-[50%] h-25"
            >
              <Heading size="md" className="mb-2">
                Programming Fundamentals
              </Heading>
              <Text size="xs">Grade: A</Text>
            </Card>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default gpa;
