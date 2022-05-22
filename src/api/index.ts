import axios from "axios";

import { IPizza } from "@utils/types";

export const fetchPizzas: () => Promise<IPizza[]> = async () => {
  const pizzas = await axios.get(
    "https://6288c93810e93797c15ef9cd.mockapi.io/api/v2/pizzas"
  );

  return pizzas.data;
};
