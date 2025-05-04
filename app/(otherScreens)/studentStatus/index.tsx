import { ScrollView, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
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
    <ScrollView className="p-5">
      <View className="p-5 bg-white rounded-lg shadow-md gap-y-3">
        <Heading size="xl" className="text-center">
          Student Academic Information
        </Heading>
        <Text className="text-center" size="sm">
          Fill the following credentials to save your student status.
        </Text>
        <Text className="text-center" size="md">
          Makes it easier to track your progress, so bear with it just once.
          😊✨
        </Text>

        {/* Personal Information */}
        <Card variant="filled">
          <Heading size="md" className="mb-5">
            Personal Information
          </Heading>
          <Text size="sm">Student ID</Text>
          <Input className="bg-white mb-3">
            <InputField
              placeholder="RU1234/56"
              value={studentId}
              onChangeText={setStudentId}
            />
          </Input>
          <Text size="sm">Email</Text>
          <Input className="bg-white">
            <InputField
              placeholder="example@gmail.com"
              value={studentEmail}
              onChangeText={setStudentEmail}
            />
          </Input>
        </Card>

        {/* Academic Details */}
        <Card variant="filled">
          <Heading size="md" className="mb-5">
            Academic Details
          </Heading>
          <Text size="sm">Cumulative GPA</Text>
          <Input className="bg-white">
            <InputField
              placeholder="3.6"
              keyboardType="numeric"
              value={cumulativeGpa}
              onChangeText={setCumulativeGpa}
            />
          </Input>
          <Text size="sm">Semester GPA</Text>
          <Input className="bg-white">
            <InputField
              placeholder="3.6"
              keyboardType="numeric"
              value={semesterGpa}
              onChangeText={setSemesterGpa}
            />
          </Input>
          <Text size="sm">Current Semester</Text>
          <Select
            className="bg-white"
            onValueChange={(value) => setCurrentSemester(value)}
          >
            <SelectTrigger>
              <SelectInput
                placeholder="Select option"
                className="flex-1 justify-center h-[30vw]"
                value={currentSemester}
              />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
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
        </Card>

        {/* Additional Information */}
        <Card variant="filled">
          <Heading className="mb-5">Additional Information</Heading>
          <Text>Housing Status</Text>
          <RadioGroup
            className="mb-5"
            onChange={(value) => setHousingStatus(value)}
          >
            <Radio value="OnCampus">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>OnCampus</RadioLabel>
            </Radio>
            <Radio value="OffCampus">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>OffCampus (local student)</RadioLabel>
            </Radio>
          </RadioGroup>

          <Heading>Country</Heading>
          <RadioGroup className="mb-5" onChange={(value) => setCountry(value)}>
            <Radio value="Ethiopian">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Ethiopian</RadioLabel>
            </Radio>
            <Radio value="Non-Ethiopian">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Not Ethiopian (Sudanese, Somalian, etc.)</RadioLabel>
            </Radio>
          </RadioGroup>
        </Card>

        {/* Buttons */}
        <View className="flex-row justify-end items-center gap-3 mb-10">
          <Button
            className="w-[30%]"
            size="sm"
            variant="solid"
            action="positive"
            onPress={handleSaveStudentStatus}
          >
            <ButtonText>Submit</ButtonText>
          </Button>
          <Button
            className="w-[30%]"
            size="sm"
            variant="solid"
            action="negative"
            onPress={handleClearStudentStatus}
          >
            <ButtonText>Clear</ButtonText>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default StudentStatus;
