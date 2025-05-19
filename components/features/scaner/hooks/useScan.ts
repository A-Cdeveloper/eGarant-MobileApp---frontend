import { useCameraPermissions } from "expo-camera";
import { useState } from "react";

import { useRouter } from "expo-router";
import { getScanedDataFunction } from "../../../../lib/scan";

export const useScan = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [hasScanned, setHasScanned] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [torch, setTorch] = useState(false);

  const router = useRouter();

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    if (hasScanned) return;

    setHasScanned(true);
    setError(null);

    try {
      await getScanedDataFunction({ data });
      setIsValid(true); // ✅ Only show success if the scan was valid
    } catch {
      setError("Greška. Nije moguće očitati račun.");
    }
  };

  const handleRescan = () => {
    setHasScanned(false);
    setError(null);
    setIsValid(false);
    router.replace("/qrscaner");
  };
  const toggleTorch = () => setTorch((prev) => !prev);

  return {
    permission,
    requestPermission,
    hasScanned,
    error,
    isValid,
    handleBarCodeScanned,
    handleRescan,
    toggleTorch,
    torch,
  };
};
