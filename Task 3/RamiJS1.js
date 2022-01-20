function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

var n = prompt("Enter string of characters: ");
var ch = prompt("Enter character to check:");
console.log(char_count(n,ch));
document.write(char_count(n,ch));