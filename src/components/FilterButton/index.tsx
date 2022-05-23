import React from "react";

import Text from "../Text";

import StyledFilterButton from "./StyledFilterButton";

export type FilterButtonProps = {
  label: string;
  value: string | number;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: (value: string | number) => void;
  testId?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

const FilterButton: React.FC<FilterButtonProps> = ({
  value,
  label,
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
    <StyledFilterButton
      id={id}
      className={className}
      style={style}
      isActive={isActive}
      isDisabled={isDisabled}
      onClick={onClickAction}
      data-testid={testId}
    >
      <Text
        className="filter-button_text"
        text={label}
        isBold
        fontSize="18px"
        lineHeight="22px"
        noUserSelect
      />
    </StyledFilterButton>
  );
};

export default React.memo(FilterButton);
