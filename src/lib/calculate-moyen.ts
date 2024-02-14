export const calculateMoyen = (
  FirsteMatiere: string = "0",
  SecondMatiere: string = "0",
  ThirdeMatiere: string = "0",
  MoyenGenerale: string = "0"
) => {
  const MoyenDeOriantation =
    (parseFloat(FirsteMatiere) * 3 +
      parseFloat(SecondMatiere) * 2 +
      parseFloat(ThirdeMatiere) * 1 +
      parseFloat(MoyenGenerale)) /
    7;
  return parseFloat(MoyenDeOriantation.toFixed(2));
};
