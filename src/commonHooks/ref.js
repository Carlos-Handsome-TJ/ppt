import * as React from 'react'

/**
 * useRef基本介绍
 * @returns {JSX.Element}
 * @constructor
 */
const ShowUseRef = () => {
  //双向数据绑定
  const inputRef = React.useRef('')
  const [state, setState] = React.useState('')
  const handleInputChange = (() => {
    setState(inputRef.current.value)
  })
  return <React.Fragment>
    <input type={'text'} onChange={handleInputChange} ref={inputRef} value={state}/>
  </React.Fragment>
}

export default ShowUseRef