import React, { useContext, useReducer, useMemo } from 'react'
import { MyContext } from './myContext'
import { StyleContext, IStyleContext } from './styleContext'

interface State {
  lang: 'en_US' | 'zh_CN'
}
export default class ContextDemo extends React.Component<{}, State> {
  state: State = {
    lang: 'zh_CN'
  }
  changeLang = (lang: State['lang']) => {
    this.setState({
      lang
    })
  }
  render() {
      return (
          <MyContext.Provider
              value={{
                lang: this.state.lang, 
                changeLang: this.changeLang
              }}
          >
              <MyNestedClass/>
              <MyNestedFunc/>
              <MyContext.Consumer>
                {(context) => <MyNestedCom lang={context.lang}/>}
              </MyContext.Consumer>
              <ProviderCom/>
          </MyContext.Provider>
      )
  }
}

class MyNestedClass extends React.Component<{}> {
    static contextType = MyContext
    render() {
      return (
        <div>类组件</div>
      );
    }
}

function MyNestedFunc() {
  const myContext = useContext(MyContext)
  
  return (
    <div>函数组件: {myContext.lang}</div>
  )
}

interface Props {
  lang: State['lang']
}
function MyNestedCom(props: Props) {
  return <div>
    用Context.Consumer订阅context {props.lang}
  </div>
}

interface StyleState {
  theme: 'light' | 'dark';
  size: 's' | 'm' | 'l';
}

type Action = { type: 'theme', payload: StyleState['theme'] } | {type: 'size', payload: StyleState['size']}

function reducer(prevState: StyleState, action: Action) {
  switch (action.type) {
    case 'size':
      return {
        ...prevState,
        size: action.payload
      }
    case 'theme':
      return {
        ...prevState,
        theme: action.payload
      }
    default :
      const n: never = action
      throw new Error(n+'is not never')
  }
}

function ProviderCom() {
  const [style, dispatch] = useReducer(reducer, {theme: 'light', size: 'm'})
  // 避免 ContextVal 被频繁新建
  const ContextVal = useMemo<IStyleContext>(() => {
    return {
      theme: style.theme,
      size: style.size,
      changeSize: (size: IStyleContext['size']) => dispatch({type: 'size', payload: size}),
      changeTheme: (theme: IStyleContext['theme']) => dispatch({type: 'theme', payload: theme})
    }
  }, [style.size, style.theme])
  return (
    <StyleContext.Provider value={ContextVal}>
      {/* todo */}
    </StyleContext.Provider>
  )
}