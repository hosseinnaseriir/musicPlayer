import React, { useImperativeHandle, useState } from "react";

const Modal = React.forwardRef(({ test }, ref) => {
  const [show, setShow] = useState(true);

  useImperativeHandle(ref, () => ({ setShow, show }));

  return (
    <div style={{ display: show ? "block" : "none" }}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse aut quidem
      sint delectus sequi, ipsa odit distinctio, autem mollitia non ipsum cum
      ducimus corrupti debitis quam saepe quos praesentium quo?
    </div>
  );
});
export default Modal;
