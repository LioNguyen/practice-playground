import * as S from "./select-option.styles";

import { SelectProps } from "@chakra-ui/react";
import { ReactNode, forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Option {
  name: ReactNode | string;
  value: string;
}

interface SelectOptionProps extends SelectProps {
  optionList: Option[];
  register?: UseFormRegisterReturn<any>;
}

export const SelectOption = forwardRef<typeof S.Wrapper, SelectOptionProps>(
  ({ optionList, register, ...props }: SelectOptionProps, ref) => {
    if (!optionList.length) {
      return null;
    }

    return (
      <S.Wrapper {...props} {...register} ref={ref}>
        {optionList.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </S.Wrapper>
    );
  }
);
