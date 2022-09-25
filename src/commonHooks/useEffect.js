import * as React from "react";

/**
 * useEffect的基本介绍
 * @returns {JSX.Element}
 * @constructor
 */

/**
 * 异步get请求
 * @param url
 * @returns {Promise<unknown>}
 */
const asyncAjax = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.timeout = 10000
    xhr.open('GET', url, true)
    xhr.send(null)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        return resolve(xhr.responseText)
      } else {
        return reject(xhr.statusText)
      }
    }
  })
}

const ShowUseEffect = () => {
  //组件在开发者模式下会执行两次（React.Strict模式）。
  const [time, setTime] = React.useState(0)
  React.useEffect(() => {
    asyncAjax('https://pic4.zhimg.com/v2-be9662014800cf15e853361722a878fd_1200x500.jpg')
      .then(res => {
        //....
      })
      .catch(err => console.log(err))
    console.log(time)
  }, [time])
  const changeRenderTime = () => {
    setTime(time + 1)
  }
  return <React.Fragment>
    <button onClick={changeRenderTime}>改变渲染次数</button>
  </React.Fragment>
}

export default ShowUseEffect