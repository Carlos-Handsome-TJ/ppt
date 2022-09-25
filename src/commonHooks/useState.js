import * as React from "react";

/**
 * useState的基本介绍
 * @returns {JSX.Element}
 * @constructor
 */
const ShowUseState = () => {
  const [state, setState] = React.useState('测试state')
  const changeState = () => {
    setState('改变state状态')
  }
  return <React.Fragment>
    {state}
    <button onClick={changeState}>改变state</button>
  </React.Fragment>
}

export default ShowUseState