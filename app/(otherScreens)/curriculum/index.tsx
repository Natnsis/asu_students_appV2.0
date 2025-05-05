import { View, ScrollView } from "react-native";
import React, { useEffect, useState, useMemo } from "react";
import { Heading } from "@/components/ui/heading";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import { Divider } from "@/components/ui/divider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Curriculum = () => {
  const [cgpa, setCgpa] = useState(0);
  const [semester, setSemester] = useState("-");
  const [courseCount, setCourseCount] = useState(0);
  const [gpa, setGpa] = useState(0);

  // Memoize the courses array to prevent re-creation on every render
  const courses = useMemo(
    () => [
      {
        code: "CS301",
        title: "Data Structure & Algorithm",
        description:
          "Advanced data structures and algorithms design techniques.",
        credit: 4,
        instructor: "Dr. Sarah Chen",
        progress: 75,
        materials: 12,
        assignments: 8,
        due: "Binary Trees Quiz",
        schedule: "Mon, Wed 10:00-11:30",
        room: "CS Lab-2",
      },
      {
        code: "CS302",
        title: "Operating Systems",
        description:
          "Introduction to operating systems and process management.",
        credit: 3,
        instructor: "Dr. John Doe",
        progress: 60,
        materials: 10,
        assignments: 6,
        due: "Memory Management Assignment",
        schedule: "Tue, Thu 12:00-1:30",
        room: "CS Lab-1",
      },
    ],
    []
  );

  // Fetch data from AsyncStorage
  useEffect(() => {
    const fetchData = async () => {
      const data = await AsyncStorage.getItem("studentStatus");
      const parsedData = data ? JSON.parse(data) : null;
      if (parsedData) {
        setCgpa(parsedData.cumulativeGpa);
        setSemester(parsedData.currentSemester);
        setGpa(parsedData.semesterGpa);
      } else {
        console.log("No data found");
      }
    };
    fetchData();
  }, []);

  // Update course count based on semester
  useEffect(() => {
    switch (semester) {
      case "RM":
        setCourseCount(5);
        break;
      case "Y1S1":
        setCourseCount(6);
        break;
      case "Y1S2":
        setCourseCount(7);
        break;
      case "Y2S1":
        setCourseCount(6);
        break;
      case "Y2S2":
        setCourseCount(5);
        break;
      case "Y3S1":
        setCourseCount(4);
        break;
      case "Y3S2":
        setCourseCount(4);
        break;
      case "Y4S1":
        setCourseCount(3);
        break;
      case "Y4S2":
        setCourseCount(6);
        break;
      default:
        setCourseCount(0);
    }
  }, [semester]);

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
          <Card className="w-[20%] bg-white">
            <Text size="xs" className="w-full text-center">
              GPA
            </Text>
            <Heading size="xl" className="w-full text-center">
              {gpa}
            </Heading>
          </Card>
          <Card className="w-fit bg-white">
            <Text size="xs">Courses</Text>
            <Heading size="xl" className="w-full text-center">
              {courseCount}
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
          <InputField placeholder="Search Courses..." />
        </Input>
      </View>

      {/* Courses Section */}
      <View className="px-5 w-full mt-10 mb-10">
        {courses.map((course, index) => (
          <View key={index} className="w-full bg-white rounded-md p-5 mb-5">
            <View className="flex-row items-center w-full">
              <Heading size="md" className="mr-3">
                {course.code}
              </Heading>
              <Button
                size="xs"
                variant="solid"
                action="secondary"
                className="rounded-full"
                isDisabled={true}
              >
                <ButtonText className="text-primary-950">
                  Hello World!
                </ButtonText>
              </Button>
            </View>

            <View className="my-2 w-full">
              <Heading>{course.title}</Heading>
              <Text className="w-4/5">{course.description}</Text>
            </View>

            <View className="flex-row items-center w-full mb-10">
              <Text className="mr-5">
                Credit: <Text className="font-extrabold">{course.credit}</Text>
              </Text>
              <Text>
                Instructor:{" "}
                <Text className="font-extrabold">{course.instructor}</Text>
              </Text>
            </View>

            <View className="flex-row items-center mb-4">
              <Text className="mr-3">
                Progress:{" "}
                <Text className="font-extrabold">{course.progress}%</Text>
              </Text>
              <Text className="mr-3">
                Materials:{" "}
                <Text className="font-extrabold">{course.materials}</Text>
              </Text>
              <Text className="mr-3">
                Assignments:{" "}
                <Text className="font-extrabold">{course.assignments}</Text>
              </Text>
            </View>

            <View>
              <Text className="text-red-500 text-right w-full mb-1">
                Due: {course.due}
              </Text>
              <Progress
                value={course.progress}
                size="sm"
                orientation="horizontal"
              >
                <ProgressFilledTrack />
              </Progress>
            </View>

            <Divider className="my-5" />

            <View className="flex-row items-center mb-5 ">
              <Text>
                Schedule:{" "}
                <Text className="font-extrabold">{course.schedule}</Text>
              </Text>
              <Text>
                Rooms: <Text className="font-extrabold">{course.room}</Text>
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Curriculum;
