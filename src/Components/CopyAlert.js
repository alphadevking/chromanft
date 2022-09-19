import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { BiCopy } from 'react-icons/bi';

function CopyAlert() {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  setTimeout(async() => {
    const copy = document.getElementById('overlay-example')
    copy.style.display = 'none'
  }, 2000 );
  
  return (
    <>
      <button className='border-0 bg-light p-2' ref={target} onClick={() => setShow(!show)}><BiCopy className='mb-1' style={{fontSize: `20px`}} /></button>
      <Overlay target={target} show={show} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Copied
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

export default CopyAlert;