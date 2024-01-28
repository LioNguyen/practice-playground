import { lazyLoad } from "@/utils";

export const ReactFeatures = lazyLoad(
  () => import("./react-feature"),
  (module) => module.ReactFeatures
);
