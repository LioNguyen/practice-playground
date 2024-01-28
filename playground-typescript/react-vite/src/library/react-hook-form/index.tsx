import { lazyLoad } from "@/utils";

export const ReactHookForm = lazyLoad(
  () => import("./react-hook-form"),
  (module) => module.ReactHookForm
);
