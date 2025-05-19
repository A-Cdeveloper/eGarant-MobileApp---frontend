import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DetailsGaranteeForm = () => {
  return (
    <View className="w-full flex-row items-center  p-3 px-2 bg-info/10 gap-2 my-1">
      <View className="flex-row items-center gap-2">
        <Text>Broj meseci garancije:</Text>
        <TextInput
          className="bg-white/80  py-1 w-16 text-md rounded-lg border border-primary-light/30"
          keyboardType="numeric"
        />
      </View>
      <Ionicons name="save-sharp" size={20} color={"#252d3e"} />
    </View>
  );
};

export default DetailsGaranteeForm;

const styles = StyleSheet.create({});
