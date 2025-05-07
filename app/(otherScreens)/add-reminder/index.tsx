import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import CustomDatePicker from "@/components/CustomDatePicker";

const index = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleAddReminder = async () => {
    if (!title || !description) {
      alert("Please fill in all fields.");
      return;
    }

    const newReminder = {
      title,
      description,
      startDate,
      endDate,
    };

    const storedReminders = await AsyncStorage.getItem("reminders");
    const reminders = storedReminders ? JSON.parse(storedReminders) : [];
    reminders.push(newReminder);

    await AsyncStorage.setItem("reminders", JSON.stringify(reminders));
    setTitle("");
    setDescription("");
    setStartDate(new Date());
    setEndDate(new Date());
  };

  return (
    <ScrollView>
      <View className="p-5 flex-row justify-between w-full ">
        <Heading size="xl">Add Reminders here</Heading>
        <Text>⌚📝</Text>
      </View>

      <View className="w-full px-8 gap-5">
        <Card className="bg-white p-5 rounded-lg shadow-md">
          <Text size="sm">Reminder's Title</Text>
          <Input className="bg-white mb-5">
            <InputField
              placeholder="Physics"
              variant="rounded"
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </Input>

          <Text>Description</Text>
          <Textarea size="md" className="w-full">
            <TextareaInput
              placeholder="Write information about the reminder..."
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
          </Textarea>

          <Text size="sm">End Date and Time</Text>
          <CustomDatePicker />

          <Button onPress={handleAddReminder}>
            <ButtonText>Add Reminder</ButtonText>
          </Button>
        </Card>
      </View>
    </ScrollView>
  );
};

export default index;
