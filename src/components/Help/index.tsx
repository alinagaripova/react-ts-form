import React, { useState, useRef } from 'react';
import cx from 'classnames';
import { Overlay, Popover } from 'react-bootstrap';
import './Help.scss';

interface HelpProps {
  description: string
}

const Help = React.memo(({description}: HelpProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const target = useRef(null);

  const handleClickInfo = ():void => {
    setIsClicked(!isClicked);
  }

  const handleFocusInfo = ():void => {
    if(isClicked) return;
    setIsFocused(!isFocused);
  }

  const popover = (
    <Popover id="popover-basic" placement="bottom-start">
      <Popover.Body style={{ background: 'rgb(121, 85, 237)', color: "white", fontWeight: "bold" }}>
        {description}
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <span 
        onClick={handleClickInfo}
        onMouseEnter={handleFocusInfo}
        onMouseLeave={handleFocusInfo}
        className={cx('ms-1 icon', {
          icon_clicked: isClicked,
        })}
        ref={target} 
        />
      <Overlay target={target.current} show={isClicked || isFocused} placement="bottom-start">
        {popover}
      </Overlay>
    </>
  );
})

export default Help;
