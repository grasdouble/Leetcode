var distanceList = 20;
const ladderLength = function(beginWord, endWord, wordList) {
    distanceList = 20;
    let begIdx = wordList.indexOf(beginWord);
    let endIdx = wordList.indexOf(endWord);
    if(endWord.length == 1){
        return wordList.length - (begIdx+1);
    }else if(endIdx != -1){
        let wordListRev = endWord.length > 1 ? wordList.reverse() : wordList;
        let begIdx2 = wordListRev.indexOf(beginWord);
        if(begIdx2 != -1){
            wordListRev.splice(begIdx2, 1);
        }
        let result = begIdx == -1 ? 1 : 1;
        let search= beginWord;
        let dico = {search:beginWord, endWord, previous: [beginWord], wordListRev, distance: 1};
        let counter = 0;
        
        
        compare(dico);
        return distanceList == 20 ? 0 : distanceList;
    }else{
        return 0;
    } 
}

const compare = function(dico){
    const previous = dico.previous;
    const search = dico.search;
    const endWord = dico.endWord;
    const wordListRev = dico.wordListRev;
    let distance = dico.distance;
    let result = [];
    let maxSame = 0;
    if(distanceList < distance){
        //console.log('ooops1',distance,distanceList);
    }else if(search == endWord && (distanceList > distance)){
        //console.log('ooops5',distance,distanceList, search, endWord);
        distanceList = Math.min(distanceList, distance);
    }else{
        wordListRev.forEach((item, itemIdx) => {
                let sameSearch = 0;
                let same = 0;
                let match = false;
                item.split('').forEach((char, idx) =>{
                    sameSearch = char == search[idx] ? sameSearch : sameSearch + 1;
                    same = char == endWord[idx] ? same : same + 1;
                    if( search[idx] != char){
                        match = true;
                    }
                });
                
                maxSame = maxSame< same ? same : maxSame;

                if((sameSearch > 0 && match)){
                    let temp = [...wordListRev];
                    temp.splice(itemIdx, 1);
                    const newPrevious = [...previous, item];
                    result.push({
                        same:same,
                        data: {search: item, endWord, previous: newPrevious, wordListRev: temp, distance: distance+1 }
                    });

                }
        });    
    }
    result.forEach((node,idx) => {
        if(maxSame == node.same){
            compare(node.data, distanceList);
        }
    })
}

module.exports = ladderLength;