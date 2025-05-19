import { addMonths, differenceInCalendarDays, format } from "date-fns";

export const formatDate = (date: Date, hasTime = true) => {
  return date
    ? format(date, `${hasTime ? "dd.MM.yyyy HH:mm" : "dd.MM.yyyy"}`)
    : "-";
};

export const endDate = (dateStr: string, period: number) => {
  const date = new Date(dateStr);
  return addMonths(date, period);
};

export const getNumDaysFromToday = (date: Date) => {
  const today = new Date();
  return differenceInCalendarDays(today, date);
};

export const getDaysBetweenDates = (startDate: Date, endDate: Date) => {
  return differenceInCalendarDays(startDate, endDate);
};

///////////////////////////////////////////////
export const formatPrice = (price: number) => {
  return `${price.toFixed(2)} RSD`;
};

/////////////////////////////////////////////

/////////////////////////////////////////////

export const createInitials = (firstname: string, lastname: string) => {
  if (!firstname || !lastname) {
    return "NN";
  }
  return `${firstname.at(0)} ${lastname.at(0)}`;
};

///////////////////////////////////////////////////////
export const resizeImage = (
  file: File,
  maxWidth: number,
  maxHeight: number
): Promise<File> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (event) => {
      img.src = event.target?.result as string;
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");

      let width = img.width;
      let height = img.height;

      // Calculate new size maintaining aspect ratio
      if (width > height) {
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = (width * maxHeight) / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Failed to get canvas context");

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const resizedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            resolve(resizedFile);
          } else {
            reject("Image resize failed");
          }
        },
        file.type,
        0.9 // quality
      );
    };

    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
