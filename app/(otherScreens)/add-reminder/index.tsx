import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import CustomDatePicker from "@/components/CustomDatePicker";
import { SafeAreaView } from "react-native-safe-area-context";

const AddReminder = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState("");

  const handleAddReminder = async () => {
    if (!title || !description || !endDate) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const newReminder = {
        id: Date.now(), // Unique ID for the reminder
        title,
        description,
        endDate: endDate.toISOString(), // Save the end date as an ISO string
      };

      // Fetch existing reminders from AsyncStorage
      const storedReminders = await AsyncStorage.getItem("reminders");
      const reminders = storedReminders ? JSON.parse(storedReminders) : [];

      // Add the new reminder
      reminders.push(newReminder);

      // Save the updated reminders back to AsyncStorage
      await AsyncStorage.setItem("reminders", JSON.stringify(reminders));

      // Reset the form fields and clear any errors
      setTitle("");
      setDescription("");
      setEndDate(null);
      setError("");

      // You could add a success message here, e.g., a toast notification
      console.log("Reminder added successfully!");
    } catch (error) {
      console.error("Error saving reminder:", error);
      setError("Failed to save the reminder. Please try again.");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="w-full bg-white shadow-sm pb-4">
        <View className="flex-row items-center justify-start px-4 pt-4">
          <Heading size="lg">Add Reminder</Heading>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 100,
        }}
        className="w-full flex-col px-4 pt-4"
      >
        <Card className="bg-white p-6 rounded-xl shadow-lg">
          <Heading size="md" className="font-bold text-blue-700 mb-2">
            Create a New Reminder
          </Heading>
          <Text size="sm" className="text-gray-500 mb-4">
            Enter the details for your new reminder.
          </Text>

          <Text size="sm" className="font-medium text-gray-700">
            Reminder Title
          </Text>
          <Input className="bg-white my-2 rounded-lg">
            <InputField
              placeholder="e.g., Project Deadline"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </Input>

          <Text size="sm" className="font-medium text-gray-700 mt-4">
            Description
          </Text>
          <Textarea size="md" className="w-full my-2 rounded-lg">
            <TextareaInput
              placeholder="Write information about the reminder..."
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </Textarea>

          <Text size="sm" className="font-medium text-gray-700 mt-4">
            End Date
          </Text>
          <CustomDatePicker date={endDate} setDate={setEndDate} />

          {error ? (
            <Text size="sm" className="text-red-500 text-center mt-4">
              {error}
            </Text>
          ) : null}

          <Button
            onPress={handleAddReminder}
            className="mt-6 bg-blue-600 rounded-lg"
          >
            <ButtonText className="text-white font-bold">
              Add Reminder
            </ButtonText>
          </Button>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddReminder;
