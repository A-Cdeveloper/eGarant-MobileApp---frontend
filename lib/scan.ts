export const getScanedDataFunction = async ({ data }: { data: string }) => {
  try {
    const response = await fetch(data, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Fiskalni API odgovor: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw new Error("Greška pri skeniranju.");
  }
};
