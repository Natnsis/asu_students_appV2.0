import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { AddIcon, TrashIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { Badge, BadgeText } from "@/components/ui/badge";

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  // Helper function to get the correct badge for the reminder status
  const getStatusBadge = (status) => {
    if (status.includes("Overdue")) {
      return (
        <Badge action="error" variant="solid" className="bg-red-500">
          <BadgeText>{status}</BadgeText>
        </Badge>
      );
    } else if (status.includes("Due today")) {
      return (
        <Badge action="warning" variant="solid" className="bg-yellow-500">
          <BadgeText>{status}</BadgeText>
        </Badge>
      );
    } else {
      return (
        <Badge action="success" variant="solid" className="bg-green-500">
          <BadgeText>{status}</BadgeText>
        </Badge>
      );
    }
  };

  // Fetch reminders from AsyncStorage and calculate status
  const fetchReminders = async () => {
    try {
      const storedReminders = await AsyncStorage.getItem("reminders");
      if (storedReminders) {
        const parsedReminders = JSON.parse(storedReminders);

        const updatedReminders = parsedReminders.map((reminder) => {
          const currentDate = new Date();
          const dueDate = new Date(reminder.endDate);
          const timeDifference = dueDate.getTime() - currentDate.getTime();
          const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

          let status = "";
          if (daysLeft > 0) {
            status = `${daysLeft} day(s) left`;
          } else if (daysLeft === 0) {
            status = "Due today";
          } else {
            status = "Overdue";
          }

          return { ...reminder, status };
        });

        setReminders(updatedReminders);
      }
    } catch (e) {
      console.error("Failed to fetch reminders from storage", e);
    }
  };

  // Use useFocusEffect to fetch reminders when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchReminders();
    }, [])
  );

  // Handle deleting a reminder
  const handleDeleteReminder = async (id) => {
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(updatedReminders);
    try {
      await AsyncStorage.setItem("reminders", JSON.stringify(updatedReminders));
    } catch (e) {
      console.error("Failed to delete reminder from storage", e);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <View className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-start px-4 pt-4">
          <Heading size="lg">Reminders</Heading>
        </View>
      </View>

      {/* Floating Add Reminder Button */}
      <View className="absolute bottom-20 right-5 z-10">
        <Button
          size="lg"
          variant="solid"
          action="primary"
          className="rounded-full flex-row items-center h-16 w-16 p-0 justify-center bg-blue-600 shadow-lg"
          onPress={() => router.push("/(otherScreens)/add-reminder")}
        >
          <ButtonIcon as={AddIcon} size="xl" className="text-white" />
        </Button>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100, // Ensure content is above the tab bar
        }}
        className="w-full flex-col px-4 pt-4"
      >
        {/* Search Section */}
        <View className="w-full mb-6">
          <Input
            variant="rounded"
            size="md"
            className="bg-white rounded-full shadow-md"
          >
            <InputField placeholder="Search reminders..." />
          </Input>
        </View>

        {/* Reminders Section */}
        <View className="w-full gap-4">
          {reminders.length > 0 ? (
            reminders.map((reminder) => (
              <Card
                key={reminder.id}
                className="w-full p-5 bg-white rounded-xl shadow-lg"
              >
                <View className="flex-row justify-between items-start mb-3">
                  <Heading
                    size="md"
                    className="font-bold text-blue-700 flex-1 pr-4"
                  >
                    {reminder.title}
                  </Heading>
                  {getStatusBadge(reminder.status)}
                </View>

                <Text size="sm" className="mt-1 text-gray-700">
                  {reminder.description}
                </Text>

                <Divider className="my-4" />

                <View className="flex-row items-center justify-between">
                  <Text className="text-sm text-gray-500">
                    ⏰ Due: {new Date(reminder.endDate).toLocaleString()}
                  </Text>
                  <Button
                    size="xs"
                    variant="link"
                    action="negative"
                    onPress={() => handleDeleteReminder(reminder.id)}
                  >
                    <ButtonIcon as={TrashIcon} size="md" />
                  </Button>
                </View>
              </Card>
            ))
          ) : (
            <Text className="text-center text-gray-500 mt-4">
              No reminders found.
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reminders;
