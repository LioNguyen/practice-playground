import * as S from "./question-answer.styles";

import {
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Input,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

import { Accordion, SelectOption } from "@/components";
import {
  LocalStorage,
  getFilterList,
  getRandomNumber,
  getSearchParams,
  getUniqueItemList,
  sanitizedData,
  sortListBasedOnProperty,
  upperFirstLetter,
} from "@/utils";
import questionsDb from "./question-answer-db.json";
import questionsHTMLCss from "./question-answer-html-css.json";
import questionInterview from "./question-answer-interview.json";
import questionsJavascript from "./question-answer-javascript.json";
import questionsReact from "./question-answer-react.json";

const originalQuestionList = sortListBasedOnProperty(
  [
    ...questionsDb,
    ...questionsHTMLCss,
    ...questionInterview,
    ...questionsJavascript,
    ...questionsReact,
  ].map((item: any) => {
    if (!item.creationTime) {
      item.creationTime = "2024-01-11T00:00:00.000Z";
    }
    return item;
  }),
  "creationTime"
);

/** LOGIC
 * Always change data on search params first
 * We will base on search params to render data
 */
export function QuestionAnswer() {
  const [questionList, setQuestionList] = useState<any[]>(originalQuestionList);
  const [bookmarkList, setBookmarkList] = useState(() => {
    return LocalStorage.get("bookmark") || [];
  });
  const [searchKeyword, setSearchKeyword] = useState("");
  const [toggleBookmarkList, setToggleBookmarkList] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = getSearchParams(searchParams);

  // START: Get question number, question category, question type data
  const questionNumber = useMemo(() => {
    if (
      !!searchParams &&
      !!searchParams.get("question") &&
      +(searchParams.get("question") as string) > 0 &&
      +(searchParams.get("question") as string) <= questionList.length
    ) {
      return +(searchParams.get("question") as string);
    }

    return 1;
  }, [searchParams, questionList.length]);

  const questionGenerateType = upperFirstLetter(
    searchParams.get("generate") || "Random"
  );

  const questionCategory = upperFirstLetter(
    searchParams.get("category") || "All"
  );

  const questionType = upperFirstLetter(searchParams.get("type") || "All");
  // END: Get question number, question category, question type data

  // START: Handle option list
  const generateType = [
    {
      name: "Numerical",
      value: "Numerical",
    },
    {
      name: "Random",
      value: "Random",
    },
  ];
  const questionCategoryList = getFilterList(
    getUniqueItemList(
      originalQuestionList.map((item) => (item as any).category || "")
    ),
    true,
    originalQuestionList
  );
  const questionTypeList = getFilterList(
    getUniqueItemList(
      originalQuestionList
        .filter((item) => {
          if (questionCategory !== "All") {
            return item.category === questionCategory;
          }

          return !!item;
        })
        .map((item) => (item as any).type || "")
    )
  );
  // END: Handle option list

  const numberOfQuestions = questionList.length || 0;
  const category = questionList[questionNumber - 1]?.category || "";
  const question = questionList[questionNumber - 1]?.question || "";
  const description = questionList[questionNumber - 1]?.description || "";
  const answerReference = questionList[questionNumber - 1]?.reference || "";

  const summary = questionList[questionNumber - 1]?.answer || "";

  const handleSearchParamsChange = (valueOject: {}) => {
    const newSearchParams = {
      ...params,
      ...valueOject,
    };
    setSearchParams(newSearchParams);
  };

  const handleGenerationTypeChange = (generateType: string) => {
    handleSearchParamsChange({
      generate: generateType,
    });
  };

  const handleGenerateQuestion = () => {
    let randomNumber = getRandomNumber(0, questionList.length - 1);
    handleSearchParamsChange({
      question: randomNumber + 1,
    });
  };

  const handleGenerateQuestionByOrder = (question: number) => {
    handleSearchParamsChange({
      question,
    });
  };

  // const handleQuestionNumberChange = (question: number) => {
  //   handleSearchParamsChange({
  //     question,
  //   });
  // };

  const handleCategoryChange = (category: string) => {
    let list = originalQuestionList.filter((item) => {
      if (category !== "All") {
        return item.category === category;
      }
      return !!item;
    });

    if (toggleBookmarkList) {
      list = list.filter((item) => bookmarkList?.includes(item.question));
    }

    if (!!searchKeyword) {
      list = list.filter((item) =>
        item.question?.toLowerCase()?.includes(searchKeyword)
      );
    }

    setQuestionList(list);
    handleSearchParamsChange({
      category: category || questionCategory,
      question: questionNumber,
      type: "All",
    });
  };

  const handleTypeChange = (type: string) => {
    let list = originalQuestionList
      .filter((item) => {
        if (questionCategory !== "All") {
          return item.category === questionCategory;
        }
        return !!item;
      })
      .filter((item) => {
        if (type !== "All") {
          return (item as any).type === type;
        }
        return !!item;
      });

    if (toggleBookmarkList) {
      list = list.filter((item) => bookmarkList?.includes(item.question));
    }

    if (!!searchKeyword) {
      list = list.filter((item) =>
        item.question?.toLowerCase()?.includes(searchKeyword)
      );
    }

    setQuestionList(list);
    handleSearchParamsChange({
      category: questionCategory,
      question: questionNumber,
      type,
    });
  };

  const handleBookmarkClick = (questionTitle: string) => {
    let arr: string[] = [questionTitle];

    if (bookmarkList) {
      if (bookmarkList?.includes(questionTitle)) {
        arr = [...bookmarkList].filter((item) => item !== questionTitle);
      } else {
        arr = [...bookmarkList, questionTitle];
      }
    }

    LocalStorage.set("bookmark", getUniqueItemList(arr));
    setBookmarkList(getUniqueItemList(arr));
  };

  const handleBookmarkToggle = () => {
    setToggleBookmarkList((prev) => !prev);
    handleSearchParamsChange({
      category: "All",
      type: "All",
      question: 1,
    });
  };

  useEffect(() => {
    handleCategoryChange(questionCategory);
    if (questionType) {
      handleTypeChange(questionType);
    }
  }, [questionCategory, questionNumber, searchKeyword, toggleBookmarkList]);

  return (
    <S.QuestionAnswerWrapper>
      <Text variant="title">Questions</Text>
      <Text variant="text">Number of questions: {numberOfQuestions}</Text>

      {/* Question Generation Type */}
      <HStack className="question-generate-type" mt="15px" mb="15px">
        <SelectOption
          optionList={generateType}
          value={questionGenerateType}
          onChange={(e) => {
            handleGenerationTypeChange(e.target.value);
          }}
        />
        {questionGenerateType === "Random" ? (
          <Button width="200px" onClick={handleGenerateQuestion}>
            Generate Question
          </Button>
        ) : (
          <>
            <Button
              width="150px"
              isDisabled={questionNumber <= 1}
              onClick={() => handleGenerateQuestionByOrder(1)}
            >
              Oldest
            </Button>
            <Button
              width="150px"
              isDisabled={questionNumber <= 1}
              onClick={() => handleGenerateQuestionByOrder(questionNumber - 1)}
            >
              Decrease
            </Button>
            <Button
              width="150px"
              isDisabled={questionNumber >= numberOfQuestions}
              onClick={() => handleGenerateQuestionByOrder(questionNumber + 1)}
            >
              Increase
            </Button>
            <Button
              width="150px"
              isDisabled={questionNumber >= numberOfQuestions}
              onClick={() => handleGenerateQuestionByOrder(numberOfQuestions)}
            >
              Newest
            </Button>
          </>
        )}
      </HStack>

      {/* Question Filter */}
      <HStack
        className="question-filter"
        justifyContent="space-between"
        mb="15px"
      >
        <Wrap>
          {/* <Input
            placeholder="Please enter number"
            type="number"
            onChange={(e) => {
              const questionNumber = +e.target.value;
              handleQuestionNumberChange(questionNumber);
            }}
          /> */}
          <Input
            border="none"
            borderBottom="1px solid #CBD5E0"
            borderRadius="unset"
            width="200px"
            _focus={{
              borderColor: "#CBD5E0",
              boxShadow: "none",
              outline: "none",
            }}
            placeholder="Enter keyword"
            onChange={(e) => {
              const keyword = e.target.value;
              setSearchKeyword(keyword);
            }}
          />
        </Wrap>
        <HStack>
          <SelectOption
            className="filter__category"
            optionList={questionCategoryList}
            value={questionCategory}
            onChange={(e) => {
              handleCategoryChange(e.target.value);
            }}
          />
          <SelectOption
            className="filter__type"
            optionList={questionTypeList}
            value={questionType}
            onChange={(e) => {
              handleTypeChange(e.target.value);
            }}
          />
        </HStack>
      </HStack>

      <HStack justifyContent="space-between" margin="20px 0 5px" width="100%">
        {!!category ? (
          <Center
            bg="#EDF2F7"
            borderRadius="4px"
            boxShadow="2px 2px 10px 2px rgba(237, 242, 247, 0.5)"
            fontWeight={700}
            padding="5px 10px"
            width="fit-content"
          >
            {category}
          </Center>
        ) : (
          <div></div>
        )}
        <Button
          bg={toggleBookmarkList ? "#EDF2F7" : "none"}
          border="1px solid #EDF2F7"
          onClick={handleBookmarkToggle}
        >
          Show Bookmarks
        </Button>
      </HStack>

      {/* Question */}
      {questionList.length > 0 && (
        <>
          <HStack alignItems="center" mb="10px">
            <Button bg="none" onClick={() => handleBookmarkClick(question)}>
              {bookmarkList?.includes(question) ? (
                <Icon as={FaBookmark} height={40} />
              ) : (
                <Icon as={FaRegBookmark} height="20px" width="20px" />
              )}
            </Button>

            <Text variant="heading-4" mb={0}>
              {questionNumber}. {question}
            </Text>
          </HStack>

          <S.QuestionBox
            display={!description && !answerReference ? "none" : "flex"}
          >
            {description && (
              <S.Description>
                <S.Title variant="large-text">Description</S.Title>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizedData(description),
                  }}
                />
                <Divider borderColor="default.text" marginY="10px" />
              </S.Description>
            )}

            {answerReference && (
              <S.Answer>
                <S.Title variant="large-text">Reference</S.Title>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizedData(answerReference),
                  }}
                />
              </S.Answer>
            )}
          </S.QuestionBox>

          <S.SummaryBox display={!summary ? "none" : "flex"}>
            <Accordion
              accordionList={[
                {
                  AccordionTitle: "Answer",
                  AccordionPanel: (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: sanitizedData(summary),
                      }}
                    />
                  ),
                  key: "",
                },
              ]}
            />
          </S.SummaryBox>
        </>
      )}
    </S.QuestionAnswerWrapper>
  );
}
