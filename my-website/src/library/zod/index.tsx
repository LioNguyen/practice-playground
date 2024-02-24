import { lazyLoad } from "@/utils";

export const Zod = lazyLoad(
  () => import("./zod"),
  (module) => module.Zod
);
