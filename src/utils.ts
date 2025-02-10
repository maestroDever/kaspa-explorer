const bottomNumbers = ["", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉"];

export const formatPercentage = (value: number) => {
  if (value === 100) return "100%";
  if (value === 0) return "0%";
  if (value < 0.0000000001) return "0.00%"
  if (value <= 0.0001) {
    const zeros = (String(value).match(/^0\.0*/)?.[0]?.length ?? 2) - 2;
    return `0.0${bottomNumbers[zeros]}1%`;
  }
  
  return `${value.toFixed(2)}%`;
};


