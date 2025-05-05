import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import curriculum from "@/data/curriculum.json";
import { Divider } from "@/components/ui/divider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Curriculum = () => {
  const [cgpa, setCgpa] = useState(0);
  const [courses, setCourses] = useState<
    {
      code: string;
      title: string;
      description: string;
      credit: number;
      room: string;
    }[]
  >([]);
  const [semester, setSemester] = useState("-");
  const [courseCount, setCourseCount] = useState(0);
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

  // Fetch user data for department
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

  // Update courses and course count based on semester and department
  useEffect(() => {
    switch (semester) {
      case "RM":
        setCourseCount(5);
        const rmCurriculum = curriculum.find((item) => item.RM);
        setCourses(rmCurriculum?.RM || []);
        break;
      case "Y1S1":
        setCourseCount(6);
        const y1s1Curriculum = curriculum.find((item) => item.Y1S1);
        setCourses(y1s1Curriculum?.Y1S1 || []);
        break;
      case "Y1S2":
        setCourseCount(7);
        const y1s2Curriculum = curriculum.find((item) => item.Y1S2);
        setCourses(
          Array.isArray(y1s2Curriculum?.Y1S2) ? y1s2Curriculum.Y1S2 : []
        );
        break;
      case "Y2S1":
        setCourseCount(6);
        const y2s1Curriculum = curriculum.find((item) => item.Y2S1);
        setCourses(
          Array.isArray(y2s1Curriculum?.Y2S1) ? y2s1Curriculum.Y2S1 : []
        );
        break;
      case "Y2S2":
        setCourseCount(5);
        const y2s2Curriculum = curriculum.find((item) => item.Y2S2);
        setCourses(
          Array.isArray(y2s2Curriculum?.Y2S2)
            ? y2s2Curriculum.Y2S2
            : y2s2Curriculum?.Y2S2?.[
                department as keyof typeof y2s2Curriculum.Y2S2
              ] || []
        );
        break;
      case "Y3S1":
        setCourseCount(6);
        const y3s1Curriculum = curriculum.find((item) => item.Y3S1);
        setCourses(
          Array.isArray(y3s1Curriculum?.Y3S1)
            ? y3s1Curriculum.Y3S1
            : y3s1Curriculum?.Y3S1?.[
                department as keyof typeof y3s1Curriculum.Y3S1
              ] || []
        );
        break;
      case "Y3S2":
        setCourseCount(4);
        const y3s2Curriculum = curriculum.find((item) => item.Y3S2);
        setCourses(
          Array.isArray(y3s2Curriculum?.Y3S2)
            ? y3s2Curriculum.Y3S2
            : y3s2Curriculum?.Y3S2?.[
                department as keyof typeof y3s2Curriculum.Y3S2
              ] || []
        );
        break;
      case "Y4S1":
        setCourseCount(3);
        const y4s1Curriculum = curriculum.find((item) => item.Y4S1);
        setCourses(
          Array.isArray(y4s1Curriculum?.Y4S1)
            ? y4s1Curriculum.Y4S1
            : y4s1Curriculum?.Y4S1?.[
                department as keyof typeof y4s1Curriculum.Y4S1
              ] || []
        );
        break;
      case "Y4S2":
        setCourseCount(6);
        const y4s2Curriculum = curriculum.find((item) => item.Y4S2);
        if (department.toLowerCase() === "law") {
          setCourses(y4s2Curriculum?.Y4S2?.["Law Department"] || []);
        } else {
          setCourses(y4s2Curriculum?.Y4S2?.["Computer Science"] || []);
        }
        break;
      default:
        setCourseCount(0);
        setCourses([]);
    }
  }, [semester, department]);

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
                  {course.credit} Credits
                </ButtonText>
              </Button>
            </View>

            <View className="my-2 w-full">
              <Heading>{course.title}</Heading>
              <Text className="w-4/5">{course.description}</Text>
            </View>

            <Divider className="my-5" />

            <View className="flex-row items-center mb-5 ">
              <Text>
                Room: <Text className="font-extrabold">{course.room}</Text>
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Curriculum;
