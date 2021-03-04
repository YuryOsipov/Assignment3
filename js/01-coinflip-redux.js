let coinFlip;
let x;
let coin = prompt("How many flips?");
for (x = 0; x < coin; x++) {
    coinFlip = Math.round(Math.random());
    console.log(coinFlip);
} if (coinFlip < 1) {
    console.log(coinFlip + " Heads");
} else  {
    console.log(coinFlip + " Tails")
}
