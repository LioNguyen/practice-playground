import { lazyLoad } from "@/utils/lazyLoad";

export const QuestionAnswer = lazyLoad(
  () => import("./question-answer"),
  (module) => module.QuestionAnswer
);
