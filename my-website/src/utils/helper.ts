import { format } from "date-fns";

const currentTime = new Date();

export const log = ({
  name,
  value,
  type,
}: {
  name?: string;
  value?: any;
  type?: "divider";
}) => {
  if (type === "divider") {
    console.log("----------");
    return;
  }

  console.log(
    `[${format(currentTime, "yyyy-MM-dd HH:mm")}][LOG] ~ ${name || ""}`,
    value || ""
  );
};

export class LocalStorage {
  static get = (key: string) => {
    const value = localStorage.getItem(key);

    if (!value) {
      return undefined;
    }

    return JSON.parse(value);
  };

  static set = <T>(key: string, value: T) => {
    const valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
  };

  static remove = (key: string) => {
    localStorage.removeItem(key);
  };
}
