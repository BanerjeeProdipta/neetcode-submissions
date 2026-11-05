class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let charMap=new Map()
        for(let str of strs)
        {
            const key=str.split('').sort().join('')
            if(!charMap.has(key)) charMap.set(key,[])
            charMap.get(key).push(str)
        }
        console.log(charMap)
       return [...charMap.values()];
        }

}
