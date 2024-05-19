var mostWordsFound = function(sentences){
    let count = 0;
    for(let i=0;i<sentences.length;i++){
       let  wordcount = sentences[i].split(" ").length;
        if(wordcount>count){
            count = wordcount
        }
    }
    return count
    }