import ClassComponent from ".";

const elementBuildIn = {
    type: 'div',
    props: {
        children: 'Hello'
    },
    key: null
}

const elementCustom = {
    type: ClassComponent,
    props: {
        children: 'Hello'
    },
    key: null
}

export {}