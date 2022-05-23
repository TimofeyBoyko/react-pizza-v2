import React from "react";
import styled from "styled-components";

import Pizza from "@common/Pizza";

import { IPizza } from "@utils/types";

const StyledPizzaList = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  grid-gap: 50px 20px;

  box-sizing: border-box;
`;

type SectionBodyContentProps = {
  pizzas: IPizza[];
};

const SectionBodyContent: React.FC<SectionBodyContentProps> = ({ pizzas }) => {
  return (
    <StyledPizzaList>
      {pizzas.map((pizza) => (
        <Pizza
          key={pizza.id}
          idProp={pizza.id}
          imageUrl={pizza.imageUrl}
          title={pizza.title}
          types={pizza.types}
          sizes={pizza.sizes}
          price={pizza.price}
          category={pizza.category}
          rating={pizza.rating}
        />
      ))}
    </StyledPizzaList>
  );
};

export default React.memo(SectionBodyContent);
