import React, { createContext, useContext, useState } from 'react';

const defaults = {
  activeFilters: [],
  setActiveFilters: () => {},
};

export const FiltersContext = createContext(defaults);

export const FiltersProvider = ({ children }) => {
  const [activeFilters, setActiveFilters] = useState([]);
  return (
    <FiltersContext.Provider
      value={{
        ...defaults,
        activeFilters,
        setActiveFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => useContext(FiltersContext);
