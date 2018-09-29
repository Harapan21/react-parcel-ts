import * as React from "react";
import * as ReactDOM from "react-dom";
const style = require("./style/all.scss");


const Index: React.StatelessComponent<{}> = () => {
  return <div className={style.container}>hello</div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));
