// 3 cases in a least itteration best case(omega) avg or middle iterations is avg case(theta) and  worscase is is omecron o big o always going to be worst case

// o(n) is a always a straight line it is propotational to no of operations .

function lognitems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

lognitems(10);

//drop constants 2(n)= o(n)

function dropconstants(n) {
  for (i = 0; i < n; i++) {
    console.log(i);
  }
  for (j = 0; j < n; j++) {
    console.log(j);
  }
}

dropconstants(3);

//n*n= n2 nsquare

function ohnsquare(n) {
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
ohnsquare(10); //2 same sets of code on is better with less opetation, o(n2) is efficient

//drop non donimant

function nondominant(n) {
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  for (k = 0; k < n; k++) {
    console.log(k);
  }
}

nondominant(10); //k is non dominant because i and j are dominant

//o(1) is a flat line efiicient straight line with less operation. it is constant

function add(n) {
  return n + n;
}

// o(log(n))  Each step reduces the problem size by a fraction (often by half).  it is very flat  divide and conquer

//o(nlogn) most efficent sorting algorithm.

//differnt terms for input

function ab(a, b) {
  for (i = 0; i < a; i++) {
    for (j = 0; j < b; j++); //a*b  not n*n
  }
}

function apb(a, b) {
  for (i = 0; i < a; i++) {}
  for (j = 0; j < b; j++) {
    // this are a+b not 2n or n+n
  }
}

// push and pop is 0(1) adding and removing
