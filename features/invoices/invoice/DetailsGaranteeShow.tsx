import {
  endDate,
  formatDate,
  getDaysBetweenDates,
  getNumDaysFromToday,
} from "@/lib/utils";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { useSetGuarantee } from "../hooks/useSetGuarantee";

const DetailsGaranteeShow = ({
  gperiod,
  invoice_date,
  iid,
  pid,
  removeGuarantee,
}: {
  gperiod: number;
  invoice_date: string;
  removeGuarantee: boolean;
  iid: string;
  pid: string;
}) => {
  const {
    mutateAsync: setGuaranteeMutation,
    isPending,
    error,
  } = useSetGuarantee(iid, pid);

  const handleSetGuarantee = async () => {
    await setGuaranteeMutation(0);
  };

  const finalDate = endDate(invoice_date, gperiod); //17.7.2025
  const daysFromToday = getNumDaysFromToday(new Date(invoice_date)); // 7 // 24.05.2025.
  const daysTotal = getDaysBetweenDates(finalDate, new Date(invoice_date)); // 61 days to
  const progressValue = daysFromToday / daysTotal;

  const progressColor =
    progressValue <= 0.5
      ? "#12A336"
      : progressValue > 0.5 && progressValue < 0.8
      ? "#f2b705"
      : "#d72638";

  return (
    <View className="w-full p-1.5 px-2 bg-info/10 gap-1 my-1">
      <Text className="font-semibold opacity-60">
        {progressValue >= 1
          ? `Garancija je istekla ${formatDate(finalDate, false)}`
          : `Garancija važi do: ${formatDate(finalDate, false)}`}
      </Text>
      {progressValue < 1 && (
        <View className="flex-row items-center justify-between">
          <ProgressBar
            progress={progressValue}
            width={280}
            color={progressColor}
            unfilledColor="#d3d3d3"
            borderWidth={0}
            height={10}
          />
          {removeGuarantee && (
            <TouchableOpacity>
              <Ionicons
                name="remove-circle"
                size={22}
                className="-mt-2"
                color={"#d72638"}
                onPress={handleSetGuarantee}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default DetailsGaranteeShow;
