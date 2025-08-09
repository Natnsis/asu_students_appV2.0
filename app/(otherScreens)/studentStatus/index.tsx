import { ScrollView, View, Alert } from "react-native";
import React, { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
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
import { ChevronDownIcon, CircleIcon } from "@/components/ui/icon";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import { Button, ButtonText } from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const StudentStatus = () => {
  const [studentId, setStudentId] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [cumulativeGpa, setCumulativeGpa] = useState("");
  const [semesterGpa, setSemesterGpa] = useState("");
  const [currentSemester, setCurrentSemester] = useState("");
  const [housingStatus, setHousingStatus] = useState("");
  const [country, setCountry] = useState("");

  // Save student status to AsyncStorage
  const handleSaveStudentStatus = async () => {
    try {
      if (
        !studentId ||
        !studentEmail ||
        !cumulativeGpa ||
        !semesterGpa ||
        !currentSemester ||
        !housingStatus ||
        !country
      ) {
        Alert.alert("Error", "Please fill in all the fields.");
        return;
      }
      const studentStatus = {
        studentId,
        studentEmail,
        cumulativeGpa,
        semesterGpa,
        currentSemester,
        housingStatus,
        country,
      };

      await AsyncStorage.setItem(
        "studentStatus",
        JSON.stringify(studentStatus)
      );
      Alert.alert("Success", "Student status saved successfully!");
      router.push("/(tabs)");
    } catch (error) {
      Alert.alert("Error", "Failed to save student status.");
    }
  };

  // Clear all fields and AsyncStorage
  const handleClearStudentStatus = async () => {
    try {
      await AsyncStorage.removeItem("studentStatus");
      setStudentId("");
      setStudentEmail("");
      setCumulativeGpa("");
      setSemesterGpa("");
      setCurrentSemester("");
      setHousingStatus("");
      setCountry("");
    } catch (error) {
      Alert.alert("Error", "Failed to clear student status.");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
        className="px-4 py-4"
      >
        <Card className="w-full p-6 bg-white rounded-xl shadow-lg">
          <View className="items-center mb-6">
            <Heading size="xl" className="text-center font-bold text-blue-700">
              Student Academic Information
            </Heading>
            <Text className="text-center mt-2 text-gray-500">
              Fill the following credentials to save your student status.
            </Text>
            <Text className="text-center mt-1 text-gray-500">
              Makes it easier to track your progress, so bear with it just once.
              😊✨
            </Text>
          </View>

          {/* Personal Information */}
          <View className="mb-6">
            <Heading size="md" className="mb-4 font-bold">
              Personal Information
            </Heading>
            <Text size="sm" className="mb-2 text-gray-700">
              Student ID
            </Text>
            <Input className="bg-gray-50 rounded-lg">
              <InputField
                placeholder="RU1234/56"
                value={studentId}
                onChangeText={setStudentId}
              />
            </Input>
            <Text size="sm" className="mb-2 mt-4 text-gray-700">
              Email
            </Text>
            <Input className="bg-gray-50 rounded-lg">
              <InputField
                placeholder="example@gmail.com"
                value={studentEmail}
                onChangeText={setStudentEmail}
              />
            </Input>
          </View>

          {/* Academic Details */}
          <View className="mb-6">
            <Heading size="md" className="mb-4 font-bold">
              Academic Details
            </Heading>
            <Text size="sm" className="mb-2 text-gray-700">
              Cumulative GPA
            </Text>
            <Input className="bg-gray-50 rounded-lg">
              <InputField
                placeholder="3.6"
                keyboardType="numeric"
                value={cumulativeGpa}
                onChangeText={setCumulativeGpa}
              />
            </Input>
            <Text size="sm" className="mb-2 mt-4 text-gray-700">
              Semester GPA
            </Text>
            <Input className="bg-gray-50 rounded-lg">
              <InputField
                placeholder="3.6"
                keyboardType="numeric"
                value={semesterGpa}
                onChangeText={setSemesterGpa}
              />
            </Input>
            <Text size="sm" className="mb-2 mt-4 text-gray-700">
              Current Semester
            </Text>
            <Select
              className="bg-gray-50 rounded-lg"
              onValueChange={(value) => setCurrentSemester(value)}
              selectedValue={currentSemester}
            >
              <SelectTrigger className="h-10 px-3">
                <SelectInput placeholder="Select option" className="text-sm" />
                <SelectIcon as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="Remedial" value="RM" />
                  <SelectItem label="Year 1 Semester 1" value="Y1S1" />
                  <SelectItem label="Year 1 Semester 2" value="Y1S2" />
                  <SelectItem label="Year 2 Semester 1" value="Y2S1" />
                  <SelectItem label="Year 2 Semester 2" value="Y2S2" />
                  <SelectItem label="Year 3 Semester 1" value="Y3S1" />
                  <SelectItem label="Year 3 Semester 2" value="Y3S2" />
                  <SelectItem label="Year 4 Semester 1" value="Y4S1" />
                  <SelectItem label="Year 4 Semester 2" value="Y4S2" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </View>

          {/* Additional Information */}
          <View className="mb-6">
            <Heading size="md" className="mb-4 font-bold">
              Additional Information
            </Heading>
            <Text className="text-gray-700 mb-2">Housing Status</Text>
            <RadioGroup
              className="mb-5 flex-col gap-2"
              onChange={(value) => setHousingStatus(value)}
              value={housingStatus}
            >
              <Radio value="OnCampus">
                <RadioIndicator className="bg-gray-100">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>OnCampus</RadioLabel>
              </Radio>
              <Radio value="OffCampus">
                <RadioIndicator className="bg-gray-100">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>OffCampus (local student)</RadioLabel>
              </Radio>
            </RadioGroup>

            <Text className="text-gray-700 mb-2">Country</Text>
            <RadioGroup
              className="mb-5 flex-col gap-2"
              onChange={(value) => setCountry(value)}
              value={country}
            >
              <Radio value="Ethiopian">
                <RadioIndicator className="bg-gray-100">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Ethiopian</RadioLabel>
              </Radio>
              <Radio value="Non-Ethiopian">
                <RadioIndicator className="bg-gray-100">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>
                  Not Ethiopian (Sudanese, Somalian, etc.)
                </RadioLabel>
              </Radio>
            </RadioGroup>
          </View>
        </Card>

        {/* Buttons */}
        <View className="flex-row justify-end items-center gap-3 mt-6">
          <Button
            className="flex-1 bg-gray-300 rounded-lg"
            size="sm"
            variant="solid"
            action="negative"
            onPress={handleClearStudentStatus}
          >
            <ButtonText className="text-gray-800">Clear</ButtonText>
          </Button>
          <Button
            className="flex-1 bg-blue-600 rounded-lg"
            size="sm"
            variant="solid"
            action="positive"
            onPress={handleSaveStudentStatus}
          >
            <ButtonText className="text-white">Submit</ButtonText>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentStatus;
