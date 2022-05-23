import React from "react";

import { fetchPizzas } from "@api/index";

import Section from "@common/Section";

import { IPizza } from "@utils/types";

import SectionFilterContent from "./components/SectionFilterContent";
import SectionBodyContent from "./components/SectionBodyContent";

const Home = () => {
  const [pizzas, setPizzas] = React.useState<IPizza[]>([]);

  const getPizzas: () => void = React.useCallback(async () => {
    const pizzas: IPizza[] = await fetchPizzas();
    setPizzas(pizzas);
  }, []);

  React.useEffect(() => {
    getPizzas();
  }, [getPizzas]);

  return (
    <Section>
      <Section.Filter>
        <SectionFilterContent />
      </Section.Filter>
      {!!pizzas && (
        <Section.Body>
          <SectionBodyContent pizzas={pizzas} />
        </Section.Body>
      )}
    </Section>
  );
};

export default React.memo(Home);
