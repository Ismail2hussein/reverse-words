function reverseWords(sentence) {
  let words = sentence.split(" ");
  words.reverse();
  let reversedSentence = words.join(" ");
  return reversedSentence;
}
console.log(reverseWords("fikrcamp bootcamp")); // Output: "bootcamp fikrcamp"
console.log(reverseWords("hello there!")); // Output: "there! hello"
console.log(reverseWords("welcome to my city")); // Output: "city my to welcome"
