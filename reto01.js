//const giftIds = [2, 1, 3, 5, 3, 2]
const giftIds = [5,1]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)

function findFirstRepeated(gifts) {
    
    let ind2pos = gifts.length

    for(let i = 0; i < gifts.length-1; i++){
        if (gifts.includes(gifts[i], i+1)){
            for(let j = i + 1; j <gifts.length; j++ ){
                if (gifts[i] === gifts[j]){
                    if (ind2pos > j) ind2pos = j  
                }
            }
        }
    }
    return ind2pos !== gifts.length ? gifts[ind2pos] :  -1
}



  