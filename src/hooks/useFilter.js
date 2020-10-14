import { useState, useEffect } from "react";

export function useFilter({ activeFilters, itemsList, value = 'tags' }) {
  const [items, setItems] = useState(itemsList)

  useEffect(onActiveFiltersChange, [activeFilters]);

  return items;

  function onActiveFiltersChange() {
    if (activeFilters.length < 1) setItems(itemsList);
    if (activeFilters.length > 0) {
      const filteredList = itemsList.filter(filterItem);
      setItems(filteredList)
    }
  }

  function filterItem(singleItem) {
    const tags = singleItem[value];
    const overlap = tags.filter(tag => activeFilters.includes(tag)).length;
    return overlap === activeFilters.length;
  }
}
