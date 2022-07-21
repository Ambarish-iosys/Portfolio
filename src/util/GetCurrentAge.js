export function getCurrentAge(year) {
  let CurrentDate = new Date();
  return CurrentDate.getUTCFullYear() - year;
}
