import { lazyLoad } from "@/utils";

export const SelectOption = lazyLoad(
  () => import("./select-option"),
  (module) => module.SelectOption
);
