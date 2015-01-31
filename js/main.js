//Step 5 created presidents objects
var president_obama {
    firstName:"Barack",
    lastName:"Obama",
    termLength:2,
    party:"Democrat",
    yearsOfPresidency:8
};

var president_wbush {
    firstName:"George W.",
    lastName:"Bush",
    termLength:2,
    party:"Republican",
    yearsOfPresidency:8
};

var president_clinton {
    firstName:"Bill",
    lastName:"Clinton",
    termLength:2,
    party:"Democrat",
    yearsOfPresidency:8
};

var president_bush {
    firstName:"George",
    lastName:"Bush",
    termLength:1,
    party:"Republican",
    yearsOfPresidency:4
};

var president_reagan {
    firstName:"Ronald",
    lastName:"Reagan",
    termLength:2,
    party:"Republican",
    yearsofPresidency:8
};

//Put all five objects into array presidents
var presidents = [president_obama, president_wbush, president_clinton, president_wbush, president_reagan];

//Used array notation to call Bill Clinton
console.log(presidents[2].firstName + " " + presidents[2].lastName)