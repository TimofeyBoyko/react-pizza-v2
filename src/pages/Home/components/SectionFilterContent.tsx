import React from "react";

import Filter from "@common/Filter";

import { ICategory } from "@utils/types";

const categories: ICategory[] = [
  { key: 0, label: "Все" },
  { key: 1, label: "Мясные" },
  { key: 2, label: "Вегетарианские" },
  { key: 3, label: "Гриль" },
  { key: 4, label: "Острые" },
  { key: 5, label: "Закрытые" },
];

type FilterContentProps = {};

const FilterContent: React.FC<FilterContentProps> = () => {
  return <Filter categories={categories} />;
};

export default React.memo(FilterContent);
