export const calculateAge = (birthDate: string): number => {
  const [day, month, year] = birthDate.split('/').map(Number);

  const today = new Date();
  const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);

  const age = today.getFullYear() - year;

  return today >= birthdayThisYear ? age : age - 1;
};

