import React  from "react";

function throwErrorWhenNotInProvider() {
    throw Error('你必须自己实现这个方法')
}

export interface IGlobalContext {
    lang: string;
    changeLang: (lang: string) => void
}

export const GlobalContext = React.createContext<IGlobalContext>({
    lang: 'zh_CN',
    changeLang: throwErrorWhenNotInProvider
})