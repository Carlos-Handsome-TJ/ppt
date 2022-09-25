import * as React from "react";

/**
 * 类组件写法
 */
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //定义state
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(preState => {
      return {
        ...preState,
        count: preState.count + 1
      }
    })
  }

  render() {
    return <React.Fragment>
      <div>这是类组件中的count： {this.state.count}</div>
      <button onClick={this.handleClick}>点击增加count</button>
    </React.Fragment>
  }
}

export default ExampleComponent