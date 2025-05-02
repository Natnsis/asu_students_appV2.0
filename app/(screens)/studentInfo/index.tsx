import { View } from "react-native";
import React from "react";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetFlatList,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetSectionHeaderText,
  ActionsheetSectionList,
} from "@/components/ui/actionsheet";
import { Link } from "expo-router";
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

const StudentInfo = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  const DATA = [
    {
      title: "Gender",
      data: ["Men", "Women", "Boy", "Girl"],
    },
  ];

  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-white w-[90vw] shadow-md rounded-lg px-3 gap-5 pt-5 pb-10 ">
        <Heading size="xl" className="pb-5">
          Student Information
        </Heading>

        <View>
          <Text size="sm">Full Name</Text>
          <Input variant="rounded">
            <InputField placeholder="john doe" />
          </Input>
        </View>

        <View>
          <Text size="sm" className="w-40">
            Gender
          </Text>
          <Select>
            <SelectTrigger>
              <SelectInput
                placeholder="Select your Gender"
                className="flex-1 py-1"
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
                  label="Select your Gender"
                  value="pink"
                  isDisabled={true}
                />
                <SelectItem label="Male" value="male" />
                <SelectItem label="Female" value="female" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>

        <View>
          <Text size="sm" className="w-40">
            Department
          </Text>
          <Select>
            <SelectTrigger>
              <SelectInput
                placeholder="Select your Department"
                className="flex-1 py-1"
              />
              <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Remedial" value="remedial" />
                <SelectItem label="Fresh" value="fresh" />
                <SelectItem label="Computer Science" value="CS" />
                <SelectItem label="Information Technology" value="IT" />
                <SelectItem label="Law" value="law" />
                <SelectItem label="Information systems" value="IS" />
                <SelectItem label="Electrical Engineering" value="EE" />
                <SelectItem label="Economics" value="economics" />
                <SelectItem label="Journalism" value="journal" />
                <SelectItem label="Others" value="other" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>

        <View>
          <Text size="sm" className="w-40">
            Year
          </Text>
          <Select>
            <SelectTrigger>
              <SelectInput
                placeholder="Select select a year"
                className="flex-1 py-1"
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
                  label="Select your year"
                  isDisabled={true}
                  value=""
                />
                <SelectItem label="Remedial" value="remedial" />
                <SelectItem label="1" value="1" />
                <SelectItem label="2" value="2" />
                <SelectItem label="3" value="3" />
                <SelectItem label="4" value="4" />
                <SelectItem label="5" value="5" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </View>

        <Link href="/(tabs)" asChild>
          <Button size="xl">
            <ButtonText>Submit Information</ButtonText>
          </Button>
        </Link>
      </View>
    </View>
  );
};

export default StudentInfo;
