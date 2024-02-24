import { lazyLoad } from "@/utils";

export const Home = lazyLoad(
  () => import("./home"),
  (module) => module.Home
);
