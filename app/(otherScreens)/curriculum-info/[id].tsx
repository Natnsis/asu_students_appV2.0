import { useLocalSearchParams } from "expo-router";
import { View, ScrollView } from "react-native";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const departmentNames: Record<number, string> = {
  1: "Computer Science",
  2: "Information Technology",
  3: "Information Science",
  4: "Pharmacy",
  5: "Law",
  6: "Economics",
  7: "Accounting",
  8: "Agro Economics",
  9: "Nurse",
  10: "Medical Laboratory",
  11: "Journalism",
};

const departmentCourses: Record<number, string[]> = {
  // Courses for Computer Science (based on Assosa University's College of Computing and Informatics mentions and common CS curricula)
  1: [
    "Introduction to Programming", // General introductory course
    "Data Structures",
    "Algorithms",
    "Fundamentals of Software Engineering I",
    "Fundamentals of Software Engineering II",
    "Software Development Life Cycle",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Application Development",
    "Artificial Intelligence Fundamentals",
    "Discrete Mathematics",
    "Calculus for Computer Science",
    "Computer Architecture and Organization",
    "Compiler Design",
    "Network Security",
    "Human-Computer Interaction",
    "Professional Practice & Ethics",
    "Senior Project/Thesis",
  ],
  // Courses for Information Technology (based on Assosa University's College of Computing and Informatics mentions and common IT curricula)
  2: [
    "Introduction to Information Technology",
    "Networking Basics",
    "Web Development",
    "IT Project Management",
    "Database Systems Administration",
    "System Analysis and Design",
    "Network Security",
    "Cloud Computing",
    "Mobile Application Development",
    "Operating Systems Administration",
    "IT Infrastructure Management",
    "Information Systems Security",
    "Data Communication",
    "IT Ethics and Professionalism",
    "Internship/Practicum",
  ],
  // Courses for Information Science (inferred based on typical Information Science/Library & Information Science curricula)
  3: [
    "Introduction to Information Science",
    "Information Organization and Retrieval",
    "Digital Libraries and Archives",
    "Database Management for Information Professionals",
    "Information Systems Management",
    "Research Methods in Information Science",
    "Knowledge Management",
    "Data Analysis and Visualization",
    "User Experience (UX) Design for Information Systems",
    "Information Policy and Ethics",
    "Records Management",
    "Web Content Management",
    "Information Literacy",
    "Library Automation",
  ],
  // Courses for Pharmacy (based on Assosa University's Pharmacy e-learning portal and typical Pharmacy curricula)
  4: [
    "Pharmacology I",
    "Pharmacology II",
    "Pharmaceutical Chemistry",
    "Pharmaceutics",
    "Clinical Pharmacy",
    "Biochemistry",
    "Human Physiology",
    "Pathophysiology",
    "Medical Microbiology and Immunology",
    "Biostatistics for Pharmacy",
    "Health Service Management",
    "Pharmacognosy",
    "Pharmaceutical Analysis",
    "Community Pharmacy",
    "Hospital Pharmacy",
    "Pharmacoeconomics",
    "Toxicology",
  ],
  // Courses for Law (based on general Law school curricula, as specific Assosa Law curriculum was not detailed online)
  5: [
    "Constitutional Law",
    "Criminal Law",
    "Civil Procedure",
    "Administrative Law",
    "International Law",
    "Commercial Law",
    "Family Law",
    "Legal Ethics",
    "Human Rights Law",
    "Research Methods in Law",
    "Introduction to Law",
    "Property Law",
    "Contract Law",
    "Tort Law",
    "Evidence Law",
    "Environmental Law",
    "Labor Law",
    "Public International Law",
  ],
  // Courses for Economics (based on Assosa University's Business and Economics mentions and common Economics curricula)
  6: [
    "Microeconomics I",
    "Microeconomics II",
    "Macroeconomics I",
    "Macroeconomics II",
    "Econometrics",
    "Mathematical Economics",
    "Statistics for Economics",
    "Development Economics",
    "Public Finance",
    "International Economics",
    "Environmental Economics",
    "Research Methods in Economics",
    "History of Economic Thought",
    "Managerial Economics",
    "Agricultural Economics", // Could be a specialized topic within general economics
    "Monetary Economics",
    "Labor Economics",
  ],
  // Courses for Accounting and Finance (based on Assosa University's Business and Economics mentions and common Accounting & Finance curricula)
  7: [
    "Principles of Accounting I", // Often split into two parts
    "Principles of Accounting II",
    "Financial Accounting I",
    "Financial Accounting II",
    "Managerial Accounting",
    "Auditing Principles and Practices I", // Often split into two parts
    "Auditing Principles and Practices II",
    "Cost Accounting",
    "Taxation",
    "Financial Management I",
    "Financial Management II",
    "Investment Analysis and Portfolio Management",
    "Accounting Information Systems",
    "Public Finance and Taxation",
    "Ethiopian Government Accounting",
    "Banking Principles and Practices",
    "Research Methods in Accounting & Finance",
    "Entrepreneurship",
  ],
  // Courses for Agricultural Economics (based on Assosa University's Agriculture & Natural Resources mentions and common Agricultural Economics curricula)
  8: [
    "Principles of Agricultural Economics",
    "Farm Management",
    "Agricultural Marketing",
    "Rural Development and Agricultural Extension",
    "Agricultural Finance and Credit",
    "Natural Resource and Environmental Economics",
    "Econometrics in Agriculture",
    "Agricultural Policy Analysis",
    "Agricultural Project Planning and Analysis",
    "Food Security and Nutrition",
    "Microeconomics", // Found in general curriculum for related fields
    "Macroeconomics", // Found in general curriculum for related fields
    "Introduction to Statistics",
    "Crop Production & Management",
    "Animal Production and Management",
    "Farming Systems and Livelihood Analysis",
    "Value Chain Analysis and Development",
  ],
  // Courses for Nursing (inferred based on typical Nursing curricula)
  9: [
    "Nursing Fundamentals",
    "Anatomy and Physiology",
    "Medical-Surgical Nursing I",
    "Medical-Surgical Nursing II",
    "Pediatric Nursing",
    "Maternal and Child Health Nursing",
    "Community Health Nursing",
    "Pharmacology for Nurses",
    "Pathology",
    "Professional Ethics in Nursing",
    "Microbiology for Health Sciences",
    "Nutrition",
    "Psychiatric and Mental Health Nursing",
    "Research in Nursing",
    "Nursing Leadership and Management",
    "Clinical Practicum/Internship",
  ],
  // Courses for Medical Laboratory Science (inferred based on typical Medical Laboratory Science curricula)
  10: [
    "General Chemistry",
    "Organic Chemistry",
    "Analytical Chemistry",
    "Biochemistry",
    "Medical Microbiology",
    "Hematology",
    "Immunology and Serology",
    "Clinical Chemistry",
    "Parasitology and Mycology",
    "Urinalysis and Body Fluids",
    "Histopathology",
    "Blood Banking and Transfusion Medicine",
    "Molecular Diagnostics",
    "Laboratory Management and Quality Control",
    "Clinical Practicum/Internship",
  ],
  // Courses for Journalism and Communication (inferred based on typical Journalism and Communication curricula)
  11: [
    "News Writing and Reporting",
    "Media Ethics and Law",
    "Broadcast Journalism",
    "Public Relations Principles",
    "Communication Theories",
    "Digital Journalism",
    "Investigative Journalism",
    "Feature Writing",
    "Media Production (Audio/Video)",
    "Research Methods in Communication",
    "Introduction to Mass Communication",
    "Photojournalism",
    "Editing and Layout",
    "Media Management",
    "Intercultural Communication",
    "Strategic Communication",
  ],
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
