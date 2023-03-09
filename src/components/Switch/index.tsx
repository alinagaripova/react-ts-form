import React from "react";
import cx from "classnames";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

interface SwitchProps {
  handleToogle: () => void;
  isToogled: boolean;
}

const Switch = React.memo(({ handleToogle, isToogled }: SwitchProps) => {
  return (
    <Form.Group className="mb-3 form-switcher" controlId="formBasicSwitch">
      <Stack direction="horizontal" gap={2}>
        <Form.Text
          className={cx("mt-0 text", {
            text_checked: !isToogled,
          })}
        >
          Указать с НДФЛ
        </Form.Text>
        <Form.Check
          onChange={handleToogle}
          checked={isToogled}
          type="switch"
          id="custom-switch"
        />
        <Form.Text
          className={cx("mt-0 text", {
            text_checked: isToogled,
          })}
        >
          Без НДФЛ
        </Form.Text>
      </Stack>
    </Form.Group>
  );
});

export default Switch;
