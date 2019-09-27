/** 给定区间[0, N), 以及一个黑名单B，实现一个函数，随机返回区间内且不在黑名单中的数字
 * @param {number} N
 * @param {number[]} blacklist
 */
var Solution = function(N, blacklist) {

}

Solution.prototype.createNew = function(N, blacklist) {
    const map = Object.create(null)
    const randomTop = N - blacklist.length
    let index = N - 1
    blacklist.map(item => {
        if (item < random_top) {
            map[item] = numberOverRange()
        }
    })

    function numberOverRange() {
        while(blacklist[index--])
        return index
    }

    this.randomTop = randomTop
    this.map = map

    return this
}

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
    let randomNum = Math.floor(Math.random(0, this.randomTop) * this.randomTop)
    return this.map[randomNum] ? this.map[randomNum] : randomNum
};


var obj = Object.create(Solution.prototype).createNew(1, [])
console.log(obj.pick())


