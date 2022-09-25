/**
 * 三种不同的组件状态复用方式（复用state，操作state的方法）
 * 1.mixins混入： Mixins 引入了隐式依赖关系，组件中的方法和数据的来源不明确，不利于维护
 *                Mixins 导致名称冲突
 * 2.HOC（高阶组件）：高阶组件内部创建一个组件，在这个组件中提供复用的状态逻辑代码，
 *                  通过prop 将复用的状态传递给被包装组件（with开头：withRouter）
 * 3.render-props模式：创建组件，通过render属性，将状态参数传递给组件
 */


/**
 * 简单的状态复用Hooks的例子
 */
import * as React from 'react'

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