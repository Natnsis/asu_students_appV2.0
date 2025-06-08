import { View, Alert } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
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
import { ChevronDownIcon } from "@/components/ui/icon";
import { useRouter } from "expo-router";

const StudentInfo = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async () => {
    try {
      const studentInfo = {
        fullName,
        gender,
        department,
        year,
        isInformed: true,
      };
      await AsyncStorage.setItem("userData", JSON.stringify(studentInfo));
      Alert.alert("Success", "Student information saved successfully!");
      router.push("/(tabs)");
    } catch (error) {
      Alert.alert("Error", "Failed to save student information.");
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-white w-[90vw] shadow-md rounded-lg px-3 gap-5 pt-5 pb-10 shadow-gray-100">
        <Heading size="xl" className="pb-5">
          Student Information
        </Heading>

        {/* Full Name */}
        <View>
          <Text size="sm">Full Name</Text>
          <Input variant="rounded">
            <InputField
              placeholder="john doe"
              value={fullName}
              onChangeText={(fullName) => setFullName(fullName)}
            />
          </Input>
        </View>

        {/* Gender */}
        <View>
          <Text size="sm" className="w-40">
            Gender
          </Text>
          <Select onValueChange={(value) => setGender(value)}>
            <SelectTrigger>
              <SelectInput
                placeholder="Select your Gender"
                className="flex-1 py-1"
                value={gender}
              />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Male" value="male" />
                <SelectItem label="Female" value="female" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>

        {/* Department */}
        <View>
          <Text size="sm" className="w-40">
            Department
          </Text>
          <Select onValueChange={(value) => setDepartment(value)}>
            <SelectTrigger>
              <SelectInput
                placeholder="Select your Department"
                className="flex-1 py-1"
                value={department}
              />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Computer Science" value="CS" />
                <SelectItem label="Information Technology" value="IT" />
                <SelectItem label="Law" value="law" />
                <SelectItem label="Economics" value="economics" />
                <SelectItem label="Others" value="other" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>

        {/* Year */}
        <View>
          <Text size="sm" className="w-40">
            Year
          </Text>
          <Select onValueChange={(value) => setYear(value)}>
            <SelectTrigger>
              <SelectInput
                placeholder="Select a year"
                className="flex-1 py-1"
                value={year}
              />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="1" value="1" />
                <SelectItem label="2" value="2" />
                <SelectItem label="3" value="3" />
                <SelectItem label="4" value="4" />
                <SelectItem label="5" value="5" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>

        <Button
          size="xl"
          onPress={handleSubmit}
          className="bg-success-700 shadow-success-50 shadow-md"
        >
          <ButtonText>Submit Information</ButtonText>
        </Button>
      </View>
    </View>
  );
};

export default StudentInfo;
