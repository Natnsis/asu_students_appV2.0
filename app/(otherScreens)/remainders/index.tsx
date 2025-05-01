import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { AddIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";

const Reminders = () => {
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
          >
            <ButtonIcon as={AddIcon} />
            <ButtonText>Add Reminder</ButtonText>
          </Button>
        </View>
      </View>

      {/* Search Section */}
      <View className="w-full px-5">
        <Input
          variant="outline"
          size="md"
          className="bg-white mt-5 rounded-full"
        >
          <InputField placeholder="Search locations..." />
        </Input>
      </View>
    </ScrollView>
  );
};

export default Reminders;
