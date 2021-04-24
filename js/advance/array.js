console.log('[array]')

const nums = [10, 30, 20, 4]
const strs = ['Hello', 'dev.', 'You', 'developer!']

console.log(nums)
console.log(nums.length)
console.log(strs)

console.log(nums[0])

console.log(nums.find(e => e > 10))
console.log(strs.find(e => /^d/.test(e)))
console.log(`includes 20 ? : ${nums.includes(20)}`)
console.log(`findIndex 20 ? : ${nums.findIndex(e => e == 20)}`)

console.log(nums.filter(e => e < 20))
console.log(strs.filter(e => /^d/.test(e)))

console.log(nums.concat(strs))
console.log("for each start")
nums.forEach((e, idx, arr) => console.log(e, idx, arr))
console.log("for each end")
console.log(nums.map((e, idx) => {
    return {
        id: idx,
        content: e,
    }
}))

console.log('nums.push(5)')
nums.push(5)
console.log(nums)
console.log('nums.unshift(2)')
nums.unshift(2)
console.log(nums)
console.log('nums.reverse()')
nums.reverse()
console.log(nums)
console.log('nums.splice(1, 2)')
nums.splice(1, 2)
console.log(nums)
console.log('nums.splice(1, 2, ...[101, 102])') // (from, eraseCnt, addList)
nums.splice(1, 2, ...[101, 102])
console.log(nums)
console.log('nums.splice(2, 0, ...[200, 201])') // (from, eraseCnt, addList)
nums.splice(2, 0, ...[200, 201])
console.log(nums)