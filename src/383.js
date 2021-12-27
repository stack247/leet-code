/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magArr = [];

    for (let i = 0; i < magazine.length; i++) {
        magArr.push(magazine[i]);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let letter = ransomNote[i];
        let magLetter = magArr.indexOf(letter);

        if (magLetter < 0)
            return false;

        magArr.splice(magLetter, 1);
        console.log(magArr);
    }

    return true;
};

//let note = "a", mag = "b"; // answer is `false`
let note = "aa", mag = "bb"; // answer is `false`
//let note = "aa", mag = "aab"; // answer is `true`
let res = canConstruct(note, mag);
console.log(res);