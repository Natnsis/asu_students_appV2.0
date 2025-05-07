import { ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon, StarIcon } from "@/components/ui/icon";

const index = () => {
  const [courseName, setCourseName] = useState<string>("");
  const [creditHour, setCreditHour] = useState<number | string>("");
  const [courses, setCourses] = useState<{ name: string; credit: number }[]>(
    []
  );

  useEffect(() => {
    const fetchCourses = async () => {
      const storedCourses = await AsyncStorage.getItem("courses");
      if (storedCourses) {
        setCourses(JSON.parse(storedCourses));
      }
    };
    fetchCourses();
  }, []);

  const handleAddCourse = async () => {
    if (!courseName || !creditHour) {
      alert("Please fill in both fields.");
      return;
    }

    const newCourse = { name: courseName, credit: Number(creditHour) };
    const updatedCourses = [...courses, newCourse];
    await AsyncStorage.setItem("courses", JSON.stringify(updatedCourses));
    setCourses(updatedCourses);
    setCourseName("");
    setCreditHour("");
  };

  return (
    <ScrollView>
      <View className="p-5 flex-row justify-between w-full ">
        <Heading size="xl">Add Courses in Current Semester</Heading>
        <Text>📚📑</Text>
      </View>
      <Text className="px-5 text-center w-full ">
        Add all the courses you are taking this semester
      </Text>
      <View className="w-full px-8 gap-5">
        <Card className="bg-white p-5 rounded-lg shadow-md">
          <Text size="sm">Course Name</Text>
          <Input className="bg-white mb-7">
            <InputField
              placeholder="Physics"
              variant="rounded"
              value={courseName}
              onChangeText={(text) => setCourseName(text)}
            />
          </Input>

          <Text size="sm">Credit Hour</Text>
          <Input className="bg-white mb-3" variant="rounded">
            <InputField
              placeholder="3"
              keyboardType="numeric"
              value={creditHour.toString()}
              onChangeText={(text) => setCreditHour(text)}
            />
          </Input>

          <Button onPress={handleAddCourse}>
            <ButtonText>Add Course</ButtonText>
          </Button>
        </Card>

        <Card className="bg-white p-5 rounded-lg shadow-md">
          <Heading>Added Courses</Heading>
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <View key={index} className="flex-row gap-3 items-center my-2">
                <Icon as={StarIcon} size="md" />
                <Text className="w-full">{course.name}</Text>
              </View>
            ))
          ) : (
            <Text className="w-full text-center">No courses added yet</Text>
          )}
        </Card>
      </View>
    </ScrollView>
  );
};

export default index;
