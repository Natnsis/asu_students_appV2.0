import { ScrollView, View } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";

const index = () => {
  return (
    <ScrollView>
      <View className="p-5 flex-row justify-between w-full ">
        <Heading size="xl">GPA Calculator</Heading>
        <Text>📚📑</Text>
      </View>
      <View className="w-full px-8 gap-5">
        <Card className="bg-white p-5 rounded-lg shadow-md">
          <Text size="sm">Course Name</Text>
          <Input className="bg-white mb-7">
            <InputField placeholder="Physics" variant="rounded" />
          </Input>

          <Text size="sm">Credit Hour </Text>
          <Input className="bg-white mb-3" variant="rounded">
            <InputField placeholder="3" keyboardType="numeric" />
          </Input>

          <Button>
            <ButtonText>Add Course</ButtonText>
          </Button>
        </Card>

        <Card className="bg-white p-5 rounded-lg shadow-md">
          <Heading>Added Courses</Heading>
          <Text className="w-full text-center ">no courses added yet</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

export default index;
