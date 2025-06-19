import { useLocalSearchParams } from "expo-router";
import { View, ScrollView } from "react-native";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const departmentNames: Record<number, string> = {
  1: "Computer Science",
  2: "Information Technology",
  3: "Information Science",
  4: "Pharmacy",
  5: "Medical Laboratory",
  6: "Law",
  7: "Economics",
  8: "Accounting",
  9: "Journalism",
  10: "Agro Economics",
  11: "Nurse",
};

const departmentCourses: Record<number, string[]> = {
  1: ["Intro to Programming", "Data Structures", "Algorithms"],
  2: ["Networking Basics", "Web Development", "IT Project Management"],
  3: ["Information Systems", "Database Design", "Research Methods"],
  4: ["Pharmacology", "Clinical Pharmacy", "Pharmaceutical Chemistry"],
  5: ["Hematology", "Microbiology", "Clinical Chemistry"],
  6: ["Constitutional Law", "Criminal Law", "Civil Procedure"],
  7: ["Microeconomics", "Macroeconomics", "Econometrics"],
  8: ["Financial Accounting", "Managerial Accounting", "Auditing"],
  9: ["News Writing", "Media Ethics", "Broadcast Journalism"],
  10: ["Agro Economics I", "Agro Economics II", "Farm Management"],
  11: ["Nursing Fundamentals", "Medical-Surgical Nursing", "Pediatrics"],
};

export default function CurriculumInfo() {
  const { id } = useLocalSearchParams();
  const deptId = Number(id);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, alignItems: "center", padding: 20 }}
      className="mt-10"
    >
      <Heading size="xl" className="mb-5">
        {departmentNames[deptId] || "Department"}
      </Heading>
      <Text className="mb-3">Courses:</Text>
      {departmentCourses[deptId]?.map((course, idx) => (
        <View key={idx} className="mb-2 p-3 bg-white rounded-lg w-full">
          <Text>{course}</Text>
        </View>
      ))}
      {!departmentCourses[deptId] && (
        <Text>No courses found for this department.</Text>
      )}
    </ScrollView>
  );
}
