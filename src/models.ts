export interface ISalaryCalculationInfo {
  percent: number
}  
export interface IFormCheckElement {
  id: number
  label: string
  help?: {
    isHelp: boolean,
    description: string
  }
  salaryCalculation?: ISalaryCalculationInfo
  showCalculate: boolean
}