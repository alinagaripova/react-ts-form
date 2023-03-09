import { IFormCheckElement } from "../models";

export const elements: IFormCheckElement[] = [
  {
    id: 1,
    label: "Оклад за месяц",
    sumDescription: "",
    currencyID: 1,
    salaryCalculation: {
      percent: 13,
    },
    showCalculate: true,
  },
  {
    id: 2,
    label: "МРОТ",
    sumDescription: "",
    currencyID: 1,
    help: {
      isHelp: true,
      description:
        "МРОТ - минимальный размер оплаты труда. Разный для разных регионов",
    },
    showCalculate: false,
  },
  {
    id: 3,
    label: "Оплата за день",
    sumDescription: "в день",
    currencyID: 1,
    showCalculate: true,
  },
  {
    id: 4,
    label: "Оплата за час",
    sumDescription: "в час",
    currencyID: 1,
    showCalculate: true,
  },
];
