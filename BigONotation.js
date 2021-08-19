// day 1 onboarding (August, 14th 2021 1 pm WIB)

/**
 *
 Review Material from each others perspective :
- focusing on Time and Space complexity in algorithms
- array : constant, On = once iteration, On2 = twice iteration
- focusing on dominant
- RnD (reseach and development engineer) most likely provide the structure
- how to standarize the code sih sebenernya (gabisa diitung lewat time taken karena processor tiap orang beda)

We try to implement by solving the problem!

Problem : https://www.hackerrank.com/challenges/simple-array-sum/problem

Mas Idrus
function simpleArraySum(ar) {
    return ar.reduce((prev, curr) => prev + curr);
}

Mba Yeyen
func simpleArraySum(ar []int32) int32 {
    // Write your code here

    var result int32

    for i:= 0 ; i < len(ar) ; i ++ {
        result += ar[i]
    }
    return result
}

Mas Izal
function simpleArraySum(ar: number[]): number {
    // Write your code here
    return ar.reduce((a, b) => a + b, 0)
}

Dini (the most mainstream answer I think lol)
function simpleArraySum(ar) {
    // Write your code here
    var sum = 0;
    for (var i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    return(sum);
}

Mas Ikhda
func simpleArraySum(ar []int32) int32 {
  // Write your code here
  totalLength := len(ar)
  isOdd := false
  if totalLength % 2 != 0 {
    isOdd = true
  }

  var result int32 = 0
  for i := 0; i < totalLength/2; i++ {
    result += ar[i]
    result += ar[totalLength - i - 1]
  }

  if isOdd {
    result += ar[totalLength / 2]
  }

  return result;
}
 */