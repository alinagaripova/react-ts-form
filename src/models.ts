export interface ISalaryCalculationInfo {
  percent: number
}
export interface IFormCheckElement {
  id: number
  label: string
  sumDescription: string
  help?: {
    isHelp: boolean,
    description: string
  }
  currencyID: number
  salaryCalculation?: ISalaryCalculationInfo
  showCalculate: boolean
}

export interface StringMap {
  [key: string]: string
}