export function useCheck(activeFilters, setActiveFilters) {

  return onCheck;

  function onCheck({ target }) {
    const { checked, value } = target;
    if (checked) {
      const newFilters = [...activeFilters, value];
      setActiveFilters(newFilters)
    } else {
      const newFilters = activeFilters.filter(val => val !== value);
      setActiveFilters(newFilters);
    }
  }
}
