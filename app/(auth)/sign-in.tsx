import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";

/**
 * A styled and functional sign-in page component for a React Native app using Expo Router.
 * This component handles user authentication via email and password using Clerk.
 * It features a clean, centered layout with modern UI elements.
 */
export default function Page() {
  // Use the Clerk `useSignIn` hook to manage the sign-in flow.
  const { signIn, setActive, isLoaded } = useSignIn();

  // Get the router object for app navigation.
  const router = useRouter();

  // State to hold the user's email and password.
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  /**
   * Handles the sign-in form submission by attempting to authenticate the user.
   */
  const onSignInPress = async () => {
    // Exit if the Clerk SDK is not loaded or an attempt is already in progress.
    if (!isLoaded || loading) return;

    setLoading(true);

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // Check if the sign-in was successful.
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(tabs)");
      } else {
        // Log the sign-in attempt if it's not complete for debugging.
        console.error(
          "Sign-in not complete:",
          JSON.stringify(signInAttempt, null, 2)
        );
        // You might want to display a user-friendly error message here.
      }
    } catch (err) {
      // Log and handle authentication errors.
      console.error("Sign-in error:", JSON.stringify(err, null, 2));
      // Display a user-friendly error message, e.g., "Invalid email or password."
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-6 bg-gray-100">
      <View className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
        <Text className="text-4xl font-extrabold text-center mb-2 text-gray-800">
          Welcome Back
        </Text>
        <Text className="text-md text-center mb-8 text-gray-500">
          Sign in to continue
        </Text>

        {/* Email Input Field */}
        <TextInput
          className="w-full p-4 mb-4 bg-gray-50 rounded-xl border border-gray-300 text-base"
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email Address"
          onChangeText={setEmailAddress}
          keyboardType="email-address"
        />

        {/* Password Input Field */}
        <TextInput
          className="w-full p-4 mb-6 bg-gray-50 rounded-xl border border-gray-300 text-base"
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        {/* Sign In Button */}
        <TouchableOpacity
          className="w-full p-4 bg-blue-600 rounded-xl items-center shadow-lg"
          onPress={onSignInPress}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text className="text-white font-bold text-lg">Continue</Text>
          )}
        </TouchableOpacity>

        {/* Link to Sign-up Page */}
        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Don't have an account? </Text>
          <Link href="/sign-up" asChild>
            <TouchableOpacity>
              <Text className="text-blue-600 font-bold">Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
