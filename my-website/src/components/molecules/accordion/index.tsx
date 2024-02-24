import { lazyLoad } from "@/utils";

export const Accordion = lazyLoad(
  () => import("./accordion"),
  (module) => module.Accordion
);
