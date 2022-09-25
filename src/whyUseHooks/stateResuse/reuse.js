import * as React from 'react'
import {useName} from "./diffSolution";

const Reuse = () => {
  const name = useName('iKunn')
  return <React.Fragment>
    这是简单的一个状态复用的例子{name}
  </React.Fragment>
}

export default Reuse