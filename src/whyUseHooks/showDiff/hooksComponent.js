import * as React from "react";

/**
 * Hooks写法
 * @returns {JSX.Element}
 * @constructor
 */
const HooksComponent = () => {
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount(() => count + 1)
  }
  return <React.Fragment>
    <div>这是函数组件中的count： {count}</div>
    <button onClick={handleClick}>点击增加count</button>
  </React.Fragment>
}

export default HooksComponent