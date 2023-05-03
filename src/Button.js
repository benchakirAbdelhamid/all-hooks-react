// usecallback ==> يمنع اعادة تحميل الصفحة لكي لا يتغير اللون مرة تانية
import React from "react";

const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} style={{ background: randomColour() }}>
        {props.children}
      </button>
    </div>
  );
}

export default React.memo(Button);
