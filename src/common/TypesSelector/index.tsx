import React from "react";

import SelectionButton from "@components/SelectionButton";

import StyledTypesSelector from "./StyledTypesSelector";

type TypesSelectorProps = {
  types: number[];
};

const TypesSelector: React.FC<TypesSelectorProps> = ({ types }) => {
  const [activeType, setActiveType] = React.useState<string | number>(types[0]);

  const changeActiveType: (value: string | number) => void = React.useCallback(
    (value) => {
      setActiveType(value);
    },
    []
  );

  return (
    <StyledTypesSelector>
      <SelectionButton
        text="тонкое"
        value={0}
        onClick={changeActiveType}
        isActive={activeType === 0}
        isDisabled={!types.includes(0)}
      />
      <SelectionButton
        text="традиционное"
        value={1}
        onClick={changeActiveType}
        isActive={activeType === 1}
        isDisabled={!types.includes(1)}
      />
    </StyledTypesSelector>
  );
};

export default React.memo(TypesSelector);
