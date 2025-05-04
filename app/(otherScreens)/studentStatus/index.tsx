import { ScrollView, View } from "react-native";
import React from "react";
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

const index = () => {
  return (
    <ScrollView className="p-5">
      <View className="p-5 bg-white rounded-lg shadow-md gap-y-3">
        <Heading size="xl" className="text-center">
          Student Academic Information
        </Heading>
        <Text className="text-center" size="sm">
          fill the following credentials to save your student status.
        </Text>
        <Text className="text-center" size="md">
          makes it easier to track your progress so bear with it just once.😊✨
        </Text>

        <Card variant="filled">
          <Heading size="md">Personal Information</Heading>
          <Text size="sm">Student ID</Text>
          <Input className="bg-white">
            <InputField placeholder="RU1234/56" />
          </Input>
          <Text size="sm">Email</Text>
          <Input className="bg-white">
            <InputField placeholder="example@gmail.com" />
          </Input>
        </Card>

        <Card variant="filled">
          <Heading size="md">Academic Details</Heading>
          <Text size="sm">Cumulative GPA</Text>
          <Input className="bg-white">
            <InputField placeholder="3.6" />
          </Input>
          <Text size="sm">Semester GPA</Text>
          <Input className="bg-white">
            <InputField placeholder="3.6" />
          </Input>
          <Text size="sm">Current Semester</Text>
          <Select className="bg-white">
            <SelectTrigger>
              <SelectInput
                placeholder="Select option"
                className="flex-1 justify-center h-[30vw]"
              />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem
                  label="Select One of the following"
                  value="RM"
                  isDisabled={true}
                />
                <SelectItem label="Remedial" value="RM" />
                <SelectItem label="fresh?" value="Y1S1" />
                <SelectItem label="Year 1 Semester 2" value="Y1S2" />
                <SelectItem label="Year 1 Semester 2" value="Y1S2" />
                <SelectItem label="Year 2 Semester 1" value="Y2S1" />
                <SelectItem label="Year 2 Semester 2" value="Y2S2" />
                <SelectItem label="Year 3 Semester 1" value="Y3S1" />
                <SelectItem label="Year 3 Semester 2" value="Y3S2" />
                <SelectItem label="Year 4 Semester 1" value="Y4S1" />
                <SelectItem label="Year 4 Semester 2" value="Y4S2" />
                <SelectItem label="Year 5 Semester 1" value="Y5S1" />
                <SelectItem label="Year 5 Semester 2" value="Y5S2" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </Card>

        <Card variant="filled">
          <Heading>Additional Information</Heading>
          <Text>Housing Status</Text>
          <RadioGroup>
            <Radio value="Credit Card">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>OnCampus</RadioLabel>
            </Radio>
            <Radio value="Cash On Delivery">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel className="w-full">
                OffCampus(local student)
              </RadioLabel>
            </Radio>
          </RadioGroup>

          <Heading>Country</Heading>
          <RadioGroup>
            <Radio value="Credit Card">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Ethiopian</RadioLabel>
            </Radio>
            <Radio value="Cash On Delivery">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel className="w-full">
                not Ethiopian (Sudanese, Somalian etc....)
              </RadioLabel>
            </Radio>
          </RadioGroup>
        </Card>
        <View className="flex-row justify-end items-center gap-3 mb-10">
          <Button
            className="w-[30%]"
            size="sm"
            variant="solid"
            action="positive"
          >
            <ButtonText>Submit</ButtonText>
          </Button>
          <Button
            className="w-[30%]"
            size="sm"
            variant="solid"
            action="negative"
          >
            <ButtonText>Clear</ButtonText>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;
