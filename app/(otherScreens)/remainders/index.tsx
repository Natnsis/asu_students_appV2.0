import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native"; // Import useFocusEffect
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { AddIcon, StarIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

const Reminders = () => {
  const [reminders, setReminders] = useState<
    {
      id: number;
      title: string;
      description: string;
      endDate: string; // Use endDate as the due date
      status: string; // Status will show days left
    }[]
  >([]);

  // Fetch reminders from AsyncStorage
  const fetchReminders = async () => {
    const storedReminders = await AsyncStorage.getItem("reminders");
    if (storedReminders) {
      const parsedReminders = JSON.parse(storedReminders);

      // Calculate status for each reminder
      const updatedReminders = parsedReminders.map((reminder: any) => {
        const currentDate = new Date();
        const dueDate = new Date(reminder.endDate); // Parse the ISO string into a Date object
        const timeDifference = dueDate.getTime() - currentDate.getTime();
        const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days

        let status = "";
        if (daysLeft > 0) {
          status = `${daysLeft} day(s) left`;
        } else if (daysLeft === 0) {
          status = "Due today";
        } else {
          status = "Overdue";
        }

        return { ...reminder, status }; // Add status to the reminder
      });

      setReminders(updatedReminders);
    }
  };

  // Use useFocusEffect to fetch reminders when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      fetchReminders();
    }, [])
  );

  // Handle deleting a reminder
  const handleDeleteReminder = async (id: number) => {
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(updatedReminders);
    await AsyncStorage.setItem("reminders", JSON.stringify(updatedReminders));
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

      {/* Sticky Add Reminder Button at Bottom */}
      <View
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          zIndex: 10,
        }}
      >
        <Button
          size="lg"
          variant="solid"
          action="primary"
          className="rounded-full flex-row items-center mb-10"
          onPress={() => router.push("/(otherScreens)/add-reminder")}
        >
          <ButtonIcon as={AddIcon} />
          <ButtonText>Add Reminder</ButtonText>
        </Button>
      </View>

      {/* Header */}
      <SafeAreaView className="w-full bg-white h-24 px-5 mb-5">
        <View className="flex-row justify-between items-center w-full h-full">
          <View className="gap-2 flex-row pt-5 items-center">
            <Heading size="lg" className="h-[30px]">
              Reminders
            </Heading>
          </View>
        </View>
      </SafeAreaView>

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
        {reminders.length > 0 ? (
          reminders.map((reminder) => (
            <View
              key={reminder.id}
              className="w-full p-5 flex-row bg-white rounded-lg shadow-sm gap-5 mb-5"
            >
              <View className="flex items-center justify-center bg-blue-100 p-3 rounded-full">
                <StarIcon width={24} height={24} color="#2563eb" />
              </View>

              {/* Reminder Content */}
              <View className="w-[90%]">
                <Heading>{reminder.title}</Heading>
                <Text size="sm" className="mt-3 text-gray-600">
                  {reminder.description}
                </Text>
                <View className="flex-col gap-5 my-5">
                  <Text>
                    ⏰ Due: {new Date(reminder.endDate).toLocaleString()}
                  </Text>
                  <Text>⌛ {reminder.status}</Text>
                </View>
                <View>
                  <Button
                    size="sm"
                    variant="solid"
                    action="negative"
                    className="w-[40%]"
                    onPress={() => handleDeleteReminder(reminder.id)}
                  >
                    <ButtonText>Delete</ButtonText>
                  </Button>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text className="text-center text-gray-500">No reminders found.</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Reminders;
