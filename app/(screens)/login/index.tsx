import { View } from "react-native";
import React from "react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon, StarIcon, SunIcon } from "@/components/ui/icon";
import { Divider } from "@/components/ui/divider";
import { Link } from "expo-router";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <View>
      <Text className="bg-white px-5 py-5 mb-10">
        <Heading size="xl" className="">
          Asu Students App
        </Heading>
      </Text>
      <View className="w-full justify-center items-center">
        <View className="bg-white shadow-md w-[90vw] h-fit p-5 rounded-md gap-y-5">
          <Heading size="xl">Welcome back</Heading>
          <Text size="sm" className="mb-2">
            sign in to access your account
          </Text>
          <Text size="sm">Email address</Text>
          <Input size="lg">
            <InputField placeholder="" />
          </Input>
          <Text size="sm">Password</Text>
          <Input className="text-center">
            <InputField type={showPassword ? "text" : "password"} />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>

          <Button size="lg">
            <ButtonText>
              <Link href="/studentInfo">Sign In</Link>
            </ButtonText>
          </Button>

          <Divider />

          <Button variant="outline" size="lg">
            <ButtonIcon as={StarIcon} className="mr-2" />
            <ButtonText>Continue With Google</ButtonText>
          </Button>

          <Button variant="outline" size="lg">
            <ButtonIcon as={SunIcon} className="mr-2" />
            <ButtonText>Continue With FaceBook</ButtonText>
          </Button>

          <Text size="sm" className="text-center">
            Forgot your password?
          </Text>
          <Text size="sm" className="text-center mb-5">
            Don't have an account?{" "}
            <Link className="text-blue-700" href="/registration">
              Sign Up
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
