import { Tab } from './enum'

enum MyEnum {
    one,
    two = Tab.two,
    three = -two,
    four = two + 3,
    five = four << 4,
}

enum computedMember {
    one = Math.random(),
    two = one + 2
}