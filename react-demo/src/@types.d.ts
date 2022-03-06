declare module 'react' {
    interface Attributes {
      styleName?: string;
    }
} 

// 告诉 ts 编译器这是一个模块的声明文件，而不是全局变量的声明文件
export {}
