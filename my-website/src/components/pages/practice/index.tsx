import { lazyLoad } from "@/utils/lazyLoad";

export const Practice = lazyLoad(
  () => import("./practice"),
  (module) => module.Practice
);
