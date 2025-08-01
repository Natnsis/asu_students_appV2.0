import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = React.useState("");

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const toast = useToast();

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      const message = err?.errors?.[0]?.message;
      setErrorMessage(message);
      toast.show({
        placement: "top",
        duration: 3000,
        render: ({ id }) => {
          return (
            <Toast
              nativeID={`toast-${id}`}
              action="error"
              variant="solid"
              className="mt-10"
            >
              <ToastTitle className="text-white">Sign-in Error</ToastTitle>
              <ToastDescription className="text-white">
                {errorMessage}
              </ToastDescription>
            </Toast>
          );
        },
      });
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-2xl font-bold text-main mb-6 text-center">
        Sign in
      </Text>

      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={setEmailAddress}
        className="w-full border border-main-0 rounded-md px-4 py-2 mb-4"
      />

      <TextInput
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={setPassword}
        className="w-full border border-main-0 rounded-md px-4 py-2 mb-6"
      />

      <TouchableOpacity
        onPress={onSignInPress}
        className="bg-green-700 rounded-lg py-3 w-full"
      >
        <Text className="text-white text-center font-semibold">Continue</Text>
      </TouchableOpacity>

      <View className="mt-6 w-1/2 flex-row justify-center">
        <Text className="text-gray-600 w-full ">Don't have an account?</Text>
        <Link href="/sign-up">
          <Text className="text-green-700 font-semibold">Sign up</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
