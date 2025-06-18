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
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleAddReminder = async () => {
    if (!title || !description || !endDate) {
      alert("Please fill in all fields.");
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

      // Reset the form fields
      setTitle("");
      setDescription("");
      setEndDate(null);

      alert("Reminder added successfully!");
    } catch (error) {
      console.error("Error saving reminder:", error);
      alert("Failed to save the reminder. Please try again.");
    }
  };

  return (
    <SafeAreaView>
      <View className="p-5 flex-row justify-between w-full">
        <Heading size="xl">Add Reminder</Heading>
      </View>

      <View className="w-full px-8 gap-5">
        <Card className="bg-white p-5 rounded-lg shadow-md">
          <Text size="sm">Reminder Title</Text>
          <Input className="bg-white mb-5">
            <InputField
              placeholder="Enter title"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </Input>

          <Text>Description</Text>
          <Textarea size="md" className="w-full mb-5">
            <TextareaInput
              placeholder="Write information about the reminder..."
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </Textarea>

          <Text size="sm">End Date</Text>
          <CustomDatePicker date={endDate} setDate={setEndDate} />

          <Button onPress={handleAddReminder} className="mt-5">
            <ButtonText>Add Reminder</ButtonText>
          </Button>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default AddReminder;
