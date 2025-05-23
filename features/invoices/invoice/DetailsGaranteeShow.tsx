import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProgressBar from "react-native-progress/Bar";
import { Ionicons } from "@expo/vector-icons";
import {
  endDate,
  formatDate,
  getDaysBetweenDates,
  getNumDaysFromToday,
} from "@/lib/utils";

const DetailsGaranteeShow = ({
  gperiod,
  invoice_date,
}: {
  gperiod: number;
  invoice_date: string;
}) => {
  const finalDate = endDate(invoice_date, gperiod);
  const daysUntilfinalDate = getNumDaysFromToday(new Date(invoice_date));
  const daysTotal = getDaysBetweenDates(finalDate, new Date(invoice_date));
  const progressValue = daysUntilfinalDate / daysTotal;

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
          <TouchableOpacity>
            <Ionicons
              name="trash"
              size={22}
              className="-mt-2"
              color={"#d72638"}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DetailsGaranteeShow;

const styles = StyleSheet.create({});
