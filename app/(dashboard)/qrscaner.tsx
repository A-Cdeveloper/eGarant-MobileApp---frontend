import Button from "@/components/ui/Button";
import { CameraView } from "expo-camera";
import { Text, TouchableOpacity, View } from "react-native";

import { useScan } from "@/components/features/scaner/hooks/useScan";
import Headline from "@/components/ui/Headline";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";

const QRScannerPage = () => {
  const {
    permission,
    requestPermission,
    hasScanned,
    error,
    isValid,
    handleBarCodeScanned,
    handleRescan,
    toggleTorch,
    torch,
  } = useScan();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  // main content
  let content = (
    <View className="flex-1 w-full justify-center bg-secondary-light mb-20">
      <View className="relative">
        <CameraView
          barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
          style={{
            width: "100%",
            height: "100%",
            borderColor: "orange",
            borderWidth: 2,
          }}
          facing="back"
          onBarcodeScanned={handleBarCodeScanned}
          enableTorch={torch}
        />
        {/* Torch Toggle Button */}
        <TouchableOpacity
          onPress={toggleTorch}
          className="absolute bottom-4 right-4 p-2 rounded-full bg-white/80 z-50"
        >
          <Ionicons
            name={torch ? "flashlight" : "flashlight-outline"}
            size={30}
            color={torch ? "orange" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (!permission?.granted) {
    content = (
      <View className="px-10 items-center">
        <Text className="text-xl text-center mb-4 w-full">
          Potrebno je odobriti pravo pristupa kameri.
        </Text>
        <Button onPress={() => console.log("test")} className="bg-secondary">
          Odobri pristup
        </Button>
      </View>
    );
  }

  if (hasScanned) {
    if (error) {
      content = (
        <>
          <Text className="my-4 text-lg w-full text-center text-danger">
            {error}
          </Text>
          <Button onPress={handleRescan} className="bg-secondary">
            Pokusaj ponovo
          </Button>
        </>
      );
    } else if (isValid) {
      content = (
        <>
          <Text className="my-4 text-lg w-full text-center text-success">
            Kod je uspešno skeniran.
          </Text>
          <Button onPress={handleRescan} className="bg-success">
            Skeniraj novi račun
          </Button>
        </>
      );
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-background">
      {content}
    </View>
  );
};

export default QRScannerPage;
