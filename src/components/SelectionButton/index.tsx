import React from "react";

import Text from "../Text";

import StyledSelectionButton from "./StyledSelectionButton";

export type SelectionButtonProps = {
  text: string;
  value: number | string;
  onClick: (value: number | string) => void;
  isActive?: boolean;
  isDisabled?: boolean;
  testId?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const SelectionButton: React.FC<SelectionButtonProps> = ({
  text,
  value,
  onClick,
  isActive,
  isDisabled,
  id,
  className,
  style,
  testId,
}) => {
  const onClickAction: () => void = () => {
    !isDisabled && !isActive && onClick(value);
  };

  return (
    <StyledSelectionButton
      id={id}
      className={className}
      style={style}
      onClick={onClickAction}
      isActive={isActive}
      isDisabled={isDisabled}
      data-testid={testId}
    >
      <Text
        className="selection-button_text"
        text={text}
        fontSize="14px"
        lineHeight="17px"
        noUserSelect
        isBold
      />
    </StyledSelectionButton>
  );
};

export default React.memo(SelectionButton);
