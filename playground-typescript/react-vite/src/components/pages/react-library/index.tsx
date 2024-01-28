import { lazyLoad } from "@/utils/lazyLoad";

export const ReactLibrary = lazyLoad(
  () => import("./react-library"),
  (module) => module.ReactLibrary
);
