import { createContext, useState } from "react";

type contextFilter = {
  filter: string;
  updateFilter: (filter: string) => void;
};
export const Context = createContext<contextFilter>(null!);

export const Provider = ({ children }: { children: JSX.Element }) => {
  const [filter, setFilter] = useState("");

  const updateFilter = (cateogry: string) => {
    setFilter(cateogry);
  };

  return (
    <Context.Provider value={{ updateFilter, filter }}>
      {children}
    </Context.Provider>
  );
};
