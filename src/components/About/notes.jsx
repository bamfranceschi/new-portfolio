import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Collapse } from "antd";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Header = (props) => {
  console.log(props);
  if (props.selected) {
    return <p style={{ color: "red" }}>{props.short}</p>;
  }

  return <p>{props.long}</p>;
};

function Test() {
  const [state, setState] = useState([
    { short: "title A", long: "title A long version", selected: false },
    { short: "title B", long: "title B long version", selected: false },
    { short: "title C", long: "title C long version", selected: false },
  ]);

  const callback = (keys) => {
    setState((prevState) => {
      const newState = prevState.map((h) => {
        h.selected = false;
        return h;
      });

      keys.forEach((k) => (newState[k].selected = true));
      return newState;
    });
  };

  return (
    <Collapse onChange={callback}>
      {state.map((h, idx) => (
        <Panel header={<Header {...h} />} key={idx}>
          {text}
        </Panel>
      ))}
    </Collapse>
  );
}

ReactDOM.render(<Test />, document.getElementById("container"));

/**
 * {/* <Panel header={state[0]} key={0}>
        <p>{text}</p>
      </Panel>
      <Panel header={state[1]} key={1}>
        <p
        // style={{
        //   overflow: "hidden",
        //   textOverflow: "ellipsis",
        //   whiteSpace: "nowrap"
        // }}
        >
          {text}
        </p>
      </Panel>
      <Panel header={state[2]} key={2}>
        <p>{text}</p>
      </Panel> }
 */
