  
function CountWords(){
    inputCountWords= document.getElementById('inputHere').value;
    arrayCountWords = inputCountWords.split(' ');
    console.log(arrayCountWords);
    len= arrayCountWords.length;
    console.log(len);
    document.getElementById("result").value = len;}

function Countletters(){
  inputCountLetters=  document.getElementById('inputHere').value;
  newWord = inputCountLetters.split(' ').join('');
  console.log(newWord);
  len = newWord.length;
  console.log(len);
  document.getElementById('result').value = len;}

function CountSpaces(){
    inputSpaces= document.getElementById('inputHere').value;
    arraySpaces = inputSpaces.split(' ');
    console.log(arraySpaces);
    len= arraySpaces.length;
    console.log(len);
    let num1= len;
    let num2= 1;
    spaces= num1 - num2;
    console.log(spaces);
    document.getElementById('result').value= spaces;
  }

function CountNewline(){
const paragraphInput = document.getElementById('inputHere');
const paragraphText = paragraphInput.value;
const numberOfNewlines = paragraphText.split('\n').length - 1;
  document.getElementById("result").value= numberOfNewlines;
}
  
function TitleCase(){
  const inputSentence =document.getElementById("inputHere").value;
  sentence1 = inputSentence.split(' ');
  console.log(sentence1);

  const sentence2 = sentence1.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  console.log(sentence2);

  const sentence3 = sentence2.join(" ");
  console.log(sentence3);

  document.getElementById("result").value = sentence3;
}

function CountVowels(){
  inputCountVowels= document.getElementById('inputHere').value;
  var regex= /[aeiouAEIOU]/gi;
  vowels= inputCountVowels.match(regex);
  document.getElementById('result').value = vowels.length;
}

function CountConsonents(){
  inputCountConsonents= document.getElementById('inputHere').value;
  var regex= /[^aeiouAEIOU]/gi;
  consonents= inputCountConsonents.match(regex);
  document.getElementById('result').value = consonents.length;
}

function SortWords(){
      inputSortWords= document.getElementById('inputHere').value;
      arraySortWords = inputSortWords.split(' ');
      console.log(arraySortWords);
      len= arraySortWords.length;
      
      var one = 0;
      var two = 0;
      var three = 0;
      var four = 0;
      var five = 0;
      var six = 0;
      var seven = 0;
      var eight = 0;
      var nine = 0;
      var ten = 0;
      var eleven = 0;
      var twelve = 0;
  
       for(i=0; i<len ; i++){
           var length = arraySortWords[i].length;
           console.log(arraySortWords[i] + " - " + length);
           if (length ==1){
              one++;
          } else if (length == 2){
             two++;
        }
        else if (length == 3){
             three++;
        }
        else if (length == 4){
             four++;
        }
        else if (length == 5){
             five++;
        }
        else if (length == 6){
             six++;
        }
        else if (length == 7){
             seven++;
        }
        else if (length == 8){
             eight++;
        }
        else if (length == 9){
             nine++;
        }
        else if (length == 10){
             ten++;
        }
        else if (length == 11){
             eleven++;
        }
        else if (length == 12){
             twelve++;
        }
      }
  
  console.log(one +" - "+ "one length word");
  console.log(two +" - "+ "two length word");
  console.log(three +" - "+ "three length word");
  console.log(four +" - "+ "four length word");
  console.log(five +" - "+ "five length word");
  console.log(six +" - "+ "six length word");
  console.log(seven +" - "+ "seven length word");
  console.log(eight +" - "+ "eight length word");
  console.log(nine +" - "+ "nine length word");
  console.log(ten +" - "+ "ten length word");
  console.log(eleven +" - "+ "eleven length word");
  console.log(twelve +" - "+ "twelve length word");
  
  
  final1 ="One letter word"+" - "+one;
  final2 ="Two letter word"+" - "+two;
  final3 ="Three letter word"+" - "+three ;
  final4 = "Four letter word"+" - "+four;
  final5 ="Five letter word"+" - "+five ;
  final6 ="Six letter word"+" - "+six;
  final7 ="Seven letter word"+" - "+seven;
  final8 ="Eight letter word"+" - "+eight;
  final9 ="Nine letter word"+" - "+nine;
  final10 = "Ten letter word"+" - "+ten;
  final11 ="Eleven letter word"+" - "+eleven;
  final12 ="Twelve letter word"+" - "+twelve;
  
  document.getElementById('result').value = final1+("\n")+final2+("\n")+final3+("\n")+final4+("\n")+final5+("\n")+final6+("\n")+final7+("\n")+final8+("\n")+final9+("\n")+final10+("\n")+final11+("\n")+final12;
  }
  
function Capital(){
     inputcap= document.getElementById('inputHere').value;
     newCap= inputcap.toUpperCase();
     document.getElementById('result').value = newCap;
  }
  
function SmallLetter(){
    inputSmall= document.getElementById("inputHere").value;
     newSmall =  inputSmall.toLowerCase();
     document.getElementById("result").value =newSmall;
  }

