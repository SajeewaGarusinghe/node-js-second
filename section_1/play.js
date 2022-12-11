const printing = (i) => {
  setTimeout(() => {
    console.log('async code' + i);
  }, 1100);
};

for (let i = 0; i < 7; i++) {
  printing(i);
}

console.log('my code');
  