import { lazyLoad } from "@/utils";

export const VirtualDom = lazyLoad(
  () => import("./virtual-dom"),
  (module) => module.VirtualDom
);
