import { Stack, chakra, Text } from "@chakra-ui/react";

export const QuestionAnswerWrapper = chakra(Stack, {
  baseStyle: {
    select: {
      height: "40px",
    },
    code: {
      display: "inline-block",
      background: "#E2E8F0",
      borderRadius: "4px",
      color: "palevioletred",
      fontWeight: 600,
      margin: "0 0 10px",
      padding: "5px 20px",
    },
    ".question-generate-type": {
      ".chakra-select__wrapper": {
        width: "150px",
      },
    },
    ".filter__category": {
      minW: "150px",
    },
    ".filter__type": {
      minW: "250px",
    },
  },
});

export const QuestionBox = chakra(Stack, {
  baseStyle: {
    borderRadius: "8px",
    bg: "#eee",
    p: "10px 20px",
    a: {
      textDecoration: "underline",
    },
    ul: {
      paddingLeft: "15px",
    },
  },
});

export const Title = chakra(Text, {
  baseStyle: {
    fontWeight: 500,
  },
});

export const Description = chakra(Stack, {});
export const Answer = chakra(Stack, {});

export const SummaryBox = chakra(Stack, {
  baseStyle: {
    mt: "15px",
    a: {
      textDecoration: "underline",
    },
    ul: {
      paddingLeft: "15px",
    },
    ".chakra-accordion__item": {
      borderBottom: "none",
    },
  },
});
