import * as React from "react";
import {logDOM} from "@testing-library/react";

/**
 * useMemo的基本介绍 (类似computed属性）
 * @returns {JSX.Element}
 * @constructor
 */
const ShowUseMemo = () => {
  const [time, setTime] = React.useState(0)
  const withoutMemo = () => {
    console.log('useMemo钩子函数', '---withoutMemo---')
  }
  const withMemo = React.useMemo(() => {
    return () => console.log('useMemo钩子函数', '---withMemo---', time)
  }, [time])
  const withCallback = React.useCallback(() => {
      console.log('useCallback钩子函数', '---withCallback', time)
    }
    , [time])
  const changeState = () => {
    setTime(time + 1)
  }

  return <React.Fragment>
    <button onClick={withoutMemo}>没使用useMemo</button>
    <button onClick={withMemo}>使用useMemo</button>
    <button onClick={withCallback}>使用callback</button>
    <button onClick={changeState}>改变state出发函数执行</button>
  </React.Fragment>
}

export default ShowUseMemo