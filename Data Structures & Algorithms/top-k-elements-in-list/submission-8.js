class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap=new Map()
        for( let num of nums){
            freqMap.set(num, (freqMap.get(num)||0)+1)
        }

        // bracket array
        const freqCount= Array.from({length:nums.length+1},()=>[])
        for (let [num, count] of freqMap) {
            freqCount[count].push(num)
        }

        const res=[];
        for(let i=freqCount.length-1;i>=0;i--){
            for(const n of freqCount[i]){
                res.push(n)
                if(res.length===k)return res
            }
        }

        
        
    }


}