function foo() {
    console.log('hello default default')
}

function sayName() {
    return 'hell'
}

export var count = 0

export function changeCount() {
	count++
}

export var obj = {
    name: '33'
}

export { foo as default, sayName }