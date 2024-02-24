import { lazyLoad } from "@/utils/lazyLoad";

export const NavMenu = lazyLoad(
  () => import("./nav-menu"),
  (module) => module.NavMenu
);
