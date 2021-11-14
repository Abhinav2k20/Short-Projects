//This project checks if the given credit card no. is valid in accordance with luhn algorithm.
//It then finds the invalid cards and log the companies that have issued any such card.

//It is a basic project aimed at learning about lunh algorithm using loops


// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred=(array)=>{
    let i=array.length-1;
    let sumOfOdd=0;
    let sumOfEven=0;
    //calculating sum of nos. at odd positions
    for(i;i>=0;i=i-2){
      sumOfOdd=sumOfOdd+array[i];
    }
    
//calculating sum of double of nos. at even position
    let j=array.length-2;
    for(j;j>=0;j=j-2){
      let current= array[j]*2;
//special condition when the doubled no. is of double digit
      if(current>9){
        current=current-9;
      }
      sumOfEven=sumOfEven+current;
    }
//condition for valid credit card
    if((sumOfEven+sumOfOdd)%10===0){
      return true;
    }else
    {
      return false;
    }
}


//This function returns the array of invalid cards
const findInvalidCards=(batch)=>{
  let invalidCards=[];
  for(let i=0;i<batch.length;i++){
    if(validateCred(batch[i])){
      continue;
    }else{
      invalidCards.push(batch[i]);
    }
  }
  return invalidCards;
}


//This function return the array of names of card companies that issued invalid card numbers; 
const idInvalidCardCompanies=(invalidCards)=>{
    let invalidCComp=new Set();
    //used set as the companies name should not be repetitive
    for(let i=0;i<invalidCards.length;i++){
      if(invalidCards[i][0]===3){
        invalidCComp.add('Amex');
      }
      if(invalidCards[i][0]===4){
        invalidCComp.add('Visa');
      }
      if(invalidCards[i][0]===5){
        invalidCComp.add('Mastercard');
      }
      if(invalidCards[i][0]===6){
        invalidCComp.add('Discover');
      }
    }
  
    let array=[];
    for(let item of invalidCComp){
      array.push(item);
    }
    return array;
}

//below code find the invalid cards in batch array and log the companies that issued it
let invalidcards=findInvalidCards(batch);
console.log(idInvalidCardCompanies(invalidcards));




