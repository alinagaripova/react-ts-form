import React from "react";
import { ISalaryCalculationInfo } from "../../models";
import separateNumber from "../../helpers/separateNumber";
import "./SalaryCalculation.scss";

interface SalaryCalculationProps {
  salaryCalculation: ISalaryCalculationInfo;
  salaryValue: string;
  isToogled: boolean;
}

function SalaryCalculation({
  salaryCalculation,
  salaryValue = "",
  isToogled,
}: SalaryCalculationProps) {
  let salaryValueNumber: number = salaryValue
    ? parseInt(salaryValue.replace(/\s/g, ""))
    : 0; // remove separated sign and make number
  let salary: number = 0;
  let tax: number = 0;
  let finishSalary: number = 0;

  if (isToogled) {
    salary = salaryValueNumber;
    finishSalary = Math.round((salaryValueNumber * 100) / 87);
    tax = Math.round((finishSalary * salaryCalculation?.percent) / 100);
  } else {
    salary = Math.round((salaryValueNumber * 87) / 100);
    finishSalary = salaryValueNumber;
    tax = Math.round((finishSalary * salaryCalculation?.percent) / 100);
  }

  return (
    <div className="salary-data">
      <div className="salary-data__el">
        <span>{separateNumber(salary.toString())} ₽</span> сотрудник будет
        получать на руки
      </div>
      <div className="salary-data__el">
        <span>{separateNumber(tax.toString())} ₽</span> НДФЛ,{" "}
        {salaryCalculation?.percent}% от оклада
      </div>
      <div className="salary-data__el">
        <span>{separateNumber(finishSalary.toString())} ₽</span> за сотрудника в
        месяц
      </div>
    </div>
  );
}

export default SalaryCalculation;
