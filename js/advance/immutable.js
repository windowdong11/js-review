import _ from 'lodash'
console.log('[immutable]')

const immObj = {
    num: 1,
    str: 'string',
    arr: [1, 2, 3],
    obj: {
        num: 1,
        str: 'string',
        arr: [1, 2, 3]
    }
}
function printImm(){
    console.log(">immObj")
    console.log(immObj)
    console.log(immObj.arr)
    console.log(immObj.obj)
    console.log(immObj.obj.arr)
}
printImm()
const copyObj = immObj
copyObj.num = copyObj.num + 1
copyObj.str = 'new' + copyObj.str
copyObj.arr = [...copyObj.arr, copyObj.arr.length + 1]
copyObj.obj = {
    num: copyObj.obj.num + 1,
    str: 'new' + copyObj.obj.str,
    arr: [...copyObj.obj.arr, copyObj.obj.arr.length + 1],
}
printImm()

function addObj(obj){
    obj.num = obj.num + 1
    obj.str = 'new' + obj.str
    obj.arr = [...obj.arr, obj.arr.length + 1]
    obj.obj = {
        num: obj.obj.num + 1,
        str: 'new' + obj.obj.str,
        arr: [...obj.obj.arr, obj.obj.arr.length + 1],
    }
}

addObj(copyObj)
printImm()

const dcopyObj = Object.assign({}, immObj)
const dcopyObj2 = {...immObj}
const dcopyObj3 = _.cloneDeep(immObj)
console.log('copy')
console.log(immObj === copyObj)
console.log(immObj.obj === copyObj.obj)
console.log('Object.assign deep copy')
console.log(immObj === dcopyObj)
console.log(immObj.obj === dcopyObj.obj)
console.log('spread deep copy')
console.log(immObj === dcopyObj2)
console.log(immObj.obj === dcopyObj2.obj)
console.log('lodash.cloneDeep deep copy')
console.log(immObj === dcopyObj3)
console.log(immObj.obj === dcopyObj3.obj)

addObj(dcopyObj)
addObj(dcopyObj2)
addObj(dcopyObj3)
printImm()