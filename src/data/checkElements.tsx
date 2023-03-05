import { IFormCheckElement } from "../models";

export const elements: IFormCheckElement[] = [
  {
    id: 1,
    label: "Оклад за месяц",
    salaryCalculation: {
      percent: 13
    },
    showCalculate: true
  },
  {
    id: 2,
    label: "МРОТ",
    help: {
      isHelp: true,
      description: "МРОТ - минимальный размер оплаты труда. Разный для разных регионов"
    },
    showCalculate: false   
  },
  {
    id: 3,
    label: "Оклад за день",
    showCalculate: true 
  },
  {
    id: 4,
    label: "Оклад за час",
    showCalculate: true 
  },
]