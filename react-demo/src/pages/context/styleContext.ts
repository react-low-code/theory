import React from 'react'

function throwErrorWhenNotInProvider() {
    throw Error('你必须自己实现这个方法')
}

export interface IStyleContext {
    theme: 'light' | 'dark';
    size: 's' | 'm' | 'l';
    changeTheme: (theme: 'light' | 'dark') => void;
    changeSize: (size: 's' | 'm' | 'l') => void;
}

export const StyleContext = React.createContext<IStyleContext>({
    theme: 'light',
    size: 'm',
    changeTheme: throwErrorWhenNotInProvider,
    changeSize: throwErrorWhenNotInProvider
})