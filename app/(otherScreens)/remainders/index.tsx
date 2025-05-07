import { View, ScrollView } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { AddIcon, CheckIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
} from "@/components/ui/checkbox";
import { router } from "expo-router";

const Reminders = () => {
  const reminders = [
    {
      id: 1,
      title: "Database Project Submission",
      description: "Complete and submit the final database design project.",
      dueDate: "2024-02-19 11:00",
      status: "Due soon",
    },
    {
      id: 2,
      title: "Team Meeting",
      description: "Attend the weekly team meeting to discuss project updates.",
      dueDate: "2024-02-20 14:00",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Submit Assignment",
      description: "Submit the assignment for the Data Structures course.",
      dueDate: "2024-02-21 09:00",
      status: "Upcoming",
    },
  ];

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
          <Heading size="lg">Reminders</Heading>
        </View>
        <View>
          <Button
            size="sm"
            variant="solid"
            action="primary"
            className="rounded-full"
            onPress={() => router.push("/(otherScreens)/add-reminder")}
          >
            <ButtonIcon as={AddIcon} />
            <ButtonText>Add Reminder</ButtonText>
          </Button>
        </View>
      </View>

      {/* Search Section */}
      <View className="w-full px-5 mb-5">
        <Input
          variant="outline"
          size="md"
          className="bg-white mt-5 rounded-full"
        >
          <InputField placeholder="Search reminders..." />
        </Input>
      </View>

      {/* Reminders Section */}
      <View className="w-full px-5 mb-5">
        {reminders.map((reminder) => (
          <View
            key={reminder.id}
            className="w-full p-5 flex-row bg-white rounded-lg shadow-sm gap-5 mb-5"
          >
            {/* Checkbox */}
            <View className="w-[10%]">
              <Checkbox size="md" value={""} className="mt-10">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} size="lg" />
                </CheckboxIndicator>
              </Checkbox>
            </View>

            {/* Reminder Content */}
            <View className="w-[90%]">
              <Heading>{reminder.title}</Heading>
              <Text size="sm" className="mt-3 text-gray-600">
                {reminder.description}
              </Text>
              <View className="flex-row gap-5 my-5">
                <Text>⏰ {reminder.dueDate}</Text>
                <Text>⌛ {reminder.status}</Text>
              </View>
              <View>
                <Button
                  size="sm"
                  variant="solid"
                  action="negative"
                  className="w-[40%]"
                >
                  <ButtonText>Delete</ButtonText>
                </Button>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Reminders;
