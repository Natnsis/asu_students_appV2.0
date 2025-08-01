import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;
    const toast = useToast();
    const [errorMessage, setErrorMessage] = React.useState(0);

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
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
              <ToastTitle className="text-white">Sign-up Error</ToastTitle>
              <ToastDescription className="text-white">
                {errorMessage}
              </ToastDescription>
            </Toast>
          );
        },
      });
    }
  };

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <View className="flex-1 justify-center items-center px-4 bg-white">
        <Text className="text-lg font-semibold mb-4 text-gray-800">
          Verify your email
        </Text>
        <TextInput
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <TouchableOpacity
          onPress={onVerifyPress}
          className="bg-main rounded-lg px-4 py-2"
        >
          <Text className="text-white text-center font-medium">Verify</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 justify-center px-4 bg-white">
      <Text className="text-xl font-bold mb-6 text-center text-main">
        Sign up
      </Text>

      <TextInput
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={(email) => setEmailAddress(email)}
      />
      <TextInput
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />

      <TouchableOpacity
        onPress={onSignUpPress}
        className="bg-main rounded-lg py-3"
      >
        <Text className="text-white text-center font-semibold">Continue</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center mt-6 space-x-1 w-full">
        <Text className="text-gray-600">
          Already have an account?
          <Link href="/sign-in">
            <Text className="text-main font-semibold">Sign in</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}
