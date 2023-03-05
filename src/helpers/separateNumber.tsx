export default function separateNumber(numberByString: string): string{
  return numberByString.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, " "); // Remove non-numeric characters and format number with space separator
}