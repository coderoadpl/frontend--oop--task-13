const obj0 = new Object()
const obj1 = {}
const obj2 = { name: 'Mateusz' }
const obj3 = { name: 'Mateusz', lastName: 'Choma' }
const obj4 = { valueOf: () => console.log('I\'m valueOf function!') }
const obj5 = { toString: () => 'toString value' }
const obj6 = {
    name: 'Mateusz',
    lastName: 'Choma',
    toString: function () {
        let string = ''
        for (const property in this) {
            const value = this[property]
            if (typeof value === 'function') continue
            string = string + value + ' '
        }
        return string.slice(0, -1)
    }
}

console.log(Object.prototype === obj0.__proto__) // true, alo for  obj1, obj2, obj3

console.log(Object.prototype)

console.log(Object.prototype.constructor === Object)
console.log(obj0.__proto__.constructor === Object)

console.log('Hello ' + obj0)
console.log('Hello ' + obj5)
console.log('Hello ' + obj6)

console.log(obj6.hasOwnProperty('toString'))
console.log(obj3.hasOwnProperty('toString'))