import React from "react";

import SelectionButton from "@components/SelectionButton";

import StyledSizesSelector from "./StyledSizesSelector";

type SizesSelectorProps = {
  sizes: number[];
};

const SizesSelector: React.FC<SizesSelectorProps> = ({ sizes }) => {
  const [activeSize, setActiveSize] = React.useState<string | number>(sizes[0]);

  const changeActiveSize: (value: string | number) => void = React.useCallback(
    (value) => {
      setActiveSize(value);
    },
    []
  );

  console.log(sizes);

  return (
    <StyledSizesSelector>
      <SelectionButton
        text="26 см."
        value={26}
        onClick={changeActiveSize}
        isActive={activeSize === 26}
        isDisabled={!sizes.includes(26)}
      />
      <SelectionButton
        text="30 см."
        value={30}
        onClick={changeActiveSize}
        isActive={activeSize === 30}
        isDisabled={!sizes.includes(30)}
      />
      <SelectionButton
        text="40 см."
        value={40}
        onClick={changeActiveSize}
        isActive={activeSize === 40}
        isDisabled={!sizes.includes(40)}
      />
    </StyledSizesSelector>
  );
};

export default React.memo(SizesSelector);
