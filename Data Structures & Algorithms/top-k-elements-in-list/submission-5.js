class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap=new Map()
        let res=[]
        for( let num of nums){
            freqMap.set(num, (freqMap.get(num)||0)+1)

        }

        const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1])
        for (let i = 0; i < k; i++) {
            res.push(sorted[i][0])
        }
        return res
    }


}