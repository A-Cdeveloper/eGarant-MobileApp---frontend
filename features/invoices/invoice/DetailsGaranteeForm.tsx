import ErrorPage from "@/components/Error";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSetGuarantee } from "../hooks/useSetGuarantee";

const DetailsGaranteeForm = ({
  iid,
  pid,
  setShowGaranteeForm,
}: {
  iid: string;
  pid: string;
  setShowGaranteeForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [gperiod, setGperiod] = useState("");
  const {
    mutateAsync: setGuaranteeMutation,
    isPending,
    error,
  } = useSetGuarantee(iid, pid);

  if (error) {
    return <ErrorPage error={error.message} />;
  }

  const handleSetGuarantee = async () => {
    await setGuaranteeMutation(+gperiod);
    setShowGaranteeForm(false);
  };

  return (
    <View className="w-full flex-row items-center  p-3 px-2 bg-info/10 gap-2 my-1">
      <View className="flex-row items-center gap-2">
        <Text>Broj meseci garancije:</Text>
        <TextInput
          className="bg-white/80  py-1 w-16 text-md rounded-lg border border-primary-light/30"
          keyboardType="numeric"
          value={gperiod}
          onChangeText={(text) => setGperiod(text)}
        />
      </View>
      <TouchableOpacity onPress={handleSetGuarantee}>
        <Ionicons name="save-sharp" size={20} color={"#252d3e"} />
      </TouchableOpacity>
      {isPending && <ActivityIndicator size="small" color={"#252d3e"} />}
    </View>
  );
};

export default DetailsGaranteeForm;
