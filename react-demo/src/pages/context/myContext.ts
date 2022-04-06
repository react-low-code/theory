import React  from "react";

function throwErrorWhenNotInProvider() {
    throw Error('你必须自己实现这个方法')
}

export interface IMyContext {
    lang: 'en_US' | 'zh_CN';
    changeLang: (lang: IMyContext['lang']) => void
}

export const MyContext = React.createContext<IMyContext>({
    lang: 'zh_CN',
    changeLang: throwErrorWhenNotInProvider
})