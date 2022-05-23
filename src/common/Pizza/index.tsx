import React from "react";

import TypesSelector from "../TypesSelector";

import Button from "@components/Button";
import Text from "@components/Text";

import {
  StyledPizza,
  StyledPizzaImg,
  StyledPizzaName,
  StyledPizzaSelectors,
  StyledPizzaActions,
} from "./StyledPizza";
import SizesSelector from "@common/SizesSelector";

type PizzaProps = {
  idProp: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

const Pizza: React.FC<PizzaProps> = ({
  idProp,
  imageUrl,
  title,
  types,
  sizes,
  price,
  category,
  rating,
}) => {
  const [count, setCount] = React.useState<number | null>(null);

  const addPizza: () => void = React.useCallback(() => {
    setCount((val: number | null) => (val ? (val = val + 1) : 1));
  }, []);

  return (
    <StyledPizza>
      <StyledPizzaImg src={imageUrl} alt={title} />
      <StyledPizzaName>
        <Text
          text={title}
          fontSize="20px"
          lineHeight="24px"
          isBold
          noUserSelect
        />
      </StyledPizzaName>
      <StyledPizzaSelectors>
        <TypesSelector types={types} />
        <SizesSelector sizes={sizes} />
      </StyledPizzaSelectors>
      <StyledPizzaActions>
        <Text
          text={`от ${price} ₽`}
          fontSize="22px"
          lineHeight="26px"
          isBold
          noUserSelect
        />
        <Button
          type={"base"}
          icon={"/img/plus.svg"}
          label="Добавить"
          isBoldText
          badgeText={count ? `${count}` : undefined}
          onClick={addPizza}
        />
      </StyledPizzaActions>
    </StyledPizza>
  );
};

export default React.memo(Pizza);
