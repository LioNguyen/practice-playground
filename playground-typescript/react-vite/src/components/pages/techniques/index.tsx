import { lazyLoad } from "@/utils/lazyLoad";

export const Techniques = lazyLoad(
  () => import("./techniques"),
  (module) => module.Techniques
);
