import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { IFormCheckElement } from "../../models";
import { elements } from "../../data/checkElements";
import { currencies } from "../../data/currencies";
import Help from "../Help";
import SalaryCalculation from "../SalaryCalculation";
import Switch from "../Switch";
import separateNumber from "../../helpers/separateNumber";
import "./Form.scss";

function FormComponent() {
  const [isToogled, setIsToogled] = useState<boolean>(true);
  const [checkedEl, setCheckedEl] = useState<IFormCheckElement>(elements[0]);
  const [salary, setSalary] = useState<string>("");

  const handleChooseEl = (element: IFormCheckElement): void => {
    setCheckedEl(element);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const formattedValue: string = separateNumber(e.target.value);
    setSalary(formattedValue);
  };

  return (
    <Form>
      <Form.Group className="mb-3 form-radio" controlId="formBasicCheckbox">
        <Form.Text>Сумма</Form.Text>
        {elements.map((element: IFormCheckElement): React.ReactElement => {
          const { label, help, id } = element;
          return (
            <div
              key={label}
              className="form-radio__radio mx-5 d-flex justify-content-start align-items-center"
            >
              <Form.Check
                type="radio"
                name="group1"
                className="px-0"
                label={label}
                onClick={() => handleChooseEl(element)}
                checked={id === checkedEl.id}
                id={`id${id}`}
              />
              {help && <Help description={help.description} />}
            </div>
          );
        })}
      </Form.Group>
      {checkedEl.showCalculate && (
        <Form.Group className="mx-5" controlId="formBasicSwitch">
          <Switch
            isToogled={isToogled}
            handleToogle={() => setIsToogled(!isToogled)}
          />
          <div className="mb-3 form-input">
            <Stack direction="horizontal" gap={2}>
              <Form.Control
                type="text"
                pattern="\d*"
                placeholder="Введите сумму"
                value={salary}
                onChange={handleChange}
              />
              <Form.Text>
                {currencies[checkedEl.currencyID]} {checkedEl.sumDescription}
              </Form.Text>
            </Stack>
          </div>
        </Form.Group>
      )}
      {checkedEl.showCalculate && checkedEl.salaryCalculation && (
        <SalaryCalculation
          salaryValue={salary}
          salaryCalculation={checkedEl.salaryCalculation}
          isToogled={isToogled}
        />
      )}
    </Form>
  );
}

export default FormComponent;
