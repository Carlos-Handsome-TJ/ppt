import * as React from "react";

/**
 * 自定义hooks
 *
 */

export const useName = (params) => {
  //定义一个name和设置name的方法
  const [name, setName] = React.useState('')
  //通过useEffect对name进行处理
  React.useEffect(() => {
    setName(params)
  }, [])
  //通过useMemo生成一个依赖name的message变量
  const message = React.useMemo(() => {
    return `Hello~${name},Welcome to my World`
  }, [name])
  return <React.Fragment>{message}</React.Fragment>
}