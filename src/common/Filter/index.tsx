import React from "react";

import { ICategory } from "@utils/types";

import StyledFilter from "./StyledFilter";
import FilterButton from "@components/FilterButton";

type FilterProps = {
  categories: ICategory[];
};

const Filter: React.FC<FilterProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] =
    React.useState<string | number>(0);

  const changeActiveCategory: (value: string | number) => void =
    React.useCallback((value) => {
      setActiveCategory(value);
    }, []);

  return (
    <StyledFilter>
      {categories.map((category: ICategory) => (
        <FilterButton
          className="Filter_button"
          key={category.key}
          label={category.label}
          value={category.key}
          onClick={changeActiveCategory}
          isActive={category.key === activeCategory}
        />
      ))}
    </StyledFilter>
  );
};

export default React.memo(Filter);
