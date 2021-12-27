/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let tMap = new Map();
    for (let i = 0; i < t.length; i++) {
        let tVal = tMap.get(t[i]);
        if (tVal == null)
            tMap.set(t[i], 1);
        else
            tMap.set(t[i], tVal + 1);
    }

    for (let i = 0; i < s.length; i++) {
        let tVal = tMap.get(s[i]);
        if (tVal == null)
            return false;
        else
            tMap.set(s[i], tVal - 1);
    }
    
    console.log(tMap);

    //tMap.forEach((v,k) => {
    //    console.log(v);
    //    if (v != 0)
    //        return false;
    //});

    for (let [k, v] of tMap) {
        //console.log(k);
        if (v != 0)
            return false;
    }
    
    return true;
};

//let str = "anagram", txt = "nagaram"; // answer is `true`
//let str = "rat", txt = "car"; // answer is `false`
//let str = "a", txt = "ab"; // answer is `false`
let str = "aa", txt = "a"; // answer is `false`
let res = isAnagram(str, txt);
console.log(res);