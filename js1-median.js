// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    let jumlah = input.length
    
    if(jumlah>0){
      input.sort((a,b)=>{return a-b})

      let tengah = Math.floor(jumlah/2)

      if(jumlah%2==0) return input[tengah]

      return(input[tengah-1]+input[tengah])/2
  }


}

console.log(result(input));