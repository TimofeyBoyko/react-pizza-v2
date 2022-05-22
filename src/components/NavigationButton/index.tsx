import React from "react";

import Text from "../Text";

import StyledNavigationButton from "./StyledNavigationButton";

export type NavigationButtonProps = {
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

const NavigationButton: React.FC<NavigationButtonProps> = ({
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
    <StyledNavigationButton
      id={id}
      className={className}
      style={style}
      isActive={isActive}
      isDisabled={isDisabled}
      onClick={onClickAction}
      data-testid={testId}
    >
      <Text
        className="navigation-button_text"
        text={label}
        isBold
        fontSize="18px"
        lineHeight="22px"
        noUserSelect
      />
    </StyledNavigationButton>
  );
};

export default React.memo(NavigationButton);
