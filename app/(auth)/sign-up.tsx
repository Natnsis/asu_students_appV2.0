import * as React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";

/**
 * A styled and functional sign-up page component for a React Native app using Expo Router.
 * This component handles both the initial sign-up form and the email verification form,
 * featuring a clean and consistent modern UI.
 */
export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  /**
   * Handles the submission of the initial sign-up form.
   * This function creates a new user and sends a verification email.
   */
  const onSignUpPress = async () => {
    if (!isLoaded || loading) return;

    setLoading(true);

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err) {
      console.error("Sign-up error:", JSON.stringify(err, null, 2));
      // Display a user-friendly error message here.
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles the submission of the email verification form.
   * This function attempts to verify the user with the provided code.
   */
  const onVerifyPress = async () => {
    if (!isLoaded || loading) return;

    setLoading(true);

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/(tabs)");
      } else {
        console.error(
          "Verification not complete:",
          JSON.stringify(signUpAttempt, null, 2)
        );
        // Display a user-friendly error message here.
      }
    } catch (err) {
      console.error("Verification error:", JSON.stringify(err, null, 2));
      // Display a user-friendly error message here.
    } finally {
      setLoading(false);
    }
  };

  if (pendingVerification) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center p-6 bg-gray-100">
        <View className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
          <Text className="text-2xl font-extrabold text-center mb-2 text-gray-800">
            Verify Your Email
          </Text>
          <Text className="text-md text-center mb-8 text-gray-500">
            A verification code has been sent to your email.
          </Text>
          <TextInput
            className="w-full p-4 mb-6 bg-gray-50 rounded-xl border border-gray-300 text-base text-center tracking-widest font-mono"
            value={code}
            placeholder="Enter code"
            onChangeText={setCode}
            keyboardType="number-pad"
          />
          <TouchableOpacity
            className="w-full p-4 bg-blue-600 rounded-xl items-center shadow-lg"
            onPress={onVerifyPress}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text className="text-white font-bold text-lg">Verify</Text>
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-6 bg-gray-100">
      <View className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
        <Text className="text-4xl font-extrabold text-center mb-2 text-gray-800">
          Create an Account
        </Text>
        <Text className="text-md text-center mb-8 text-gray-500">
          Sign up to get started
        </Text>

        <TextInput
          className="w-full p-4 mb-4 bg-gray-50 rounded-xl border border-gray-300 text-base"
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email Address"
          onChangeText={setEmailAddress}
          keyboardType="email-address"
        />
        <TextInput
          className="w-full p-4 mb-6 bg-gray-50 rounded-xl border border-gray-300 text-base"
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          className="w-full p-4 bg-blue-600 rounded-xl items-center shadow-lg"
          onPress={onSignUpPress}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text className="text-white font-bold text-lg">Sign Up</Text>
          )}
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Already have an account? </Text>
          <Link href="/sign-in" asChild>
            <TouchableOpacity>
              <Text className="text-blue-600 font-bold">Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
