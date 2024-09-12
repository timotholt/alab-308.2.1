// Tim Otholt
// Jessica Holowach
// Veronika Teplova
// Selena

/*========================================================================
PART 1
==========================================================================*/

console.log("Hello plants Part 1!");

/* Radius of the circle of plants is 5 meters */
let radius = 5;

/* Minimum space required (in m^2) 0.8 meters */
const plantMinSqM = 0.8;

/* Starting # of plants, and growth rate (doubles every week) */
let startNumPlants = 20;
const growthRate = 2;

/* Calculate the size in square meters of the garden */
const PI = 3.1415;
let gardenAreaSqM = PI * radius * radius;

/* Prune at > 80% of the garden area */
const pruneThreshhold = gardenAreaSqM * 0.80;

/* Monitored is between 50% and 80% */
const MonitoredLow  = gardenAreaSqM * 0.50;
const MonitoredHigh = gardenAreaSqM * 0.80;

/* Plant more if < 50%  */
const PlantMore = gardenAreaSqM * 0.50;

/* Week 0 - Calculated numbers */
let currentNumPlants = startNumPlants;
let currentUsedAreaSqM = currentNumPlants * plantMinSqM;
let spaceRemainingAreaSqM = gardenAreaSqM - currentUsedAreaSqM;

console.log(`starting area size = ${gardenAreaSqM}`);
console.log(`# plants after week 0 = ${currentNumPlants}`);
console.log(`current space used in garden = ${currentUsedAreaSqM}`);
console.log(`space remaining after week 0 = ${spaceRemainingAreaSqM}`);

/*==============
week 1
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 1 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

spaceRemainingAreaSqM = gardenAreaSqM - currentUsedAreaSqM;
console.log(`space remaining after week 1 = ${spaceRemainingAreaSqM}`);

/* logic */
if (currentUsedAreaSqM > pruneThreshhold) {
    console.log(`Prune the plants!`);

} else if ((currentUsedAreaSqM >= MonitoredLow) && (currentUsedAreaSqM <= MonitoredHigh)) {
    console.log(`Monitor the plants yo!`);

} else {
    console.log(`plant your shit yo!`);
}

/*==============
week 2
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 2 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

spaceRemainingAreaSqM = gardenAreaSqM - currentUsedAreaSqM;
console.log(`space remaining after week 2 = ${spaceRemainingAreaSqM}`);

/* logic */
if (currentUsedAreaSqM > pruneThreshhold) {
    console.log(`Prune the plants!`);

} else if ((currentUsedAreaSqM >= MonitoredLow) && (currentUsedAreaSqM <= MonitoredHigh)) {
    console.log(`Monitor the plants yo!`);

} else {
    console.log(`plant your shit yo!`);
}

/*==============
week 3
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 3 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

spaceRemainingAreaSqM = gardenAreaSqM - currentUsedAreaSqM;
console.log(`space remaining after week 3 = ${spaceRemainingAreaSqM}`);

/* logic */
if (currentUsedAreaSqM > pruneThreshhold) {
    console.log(`Prune the plants!`);

} else if ((currentUsedAreaSqM >= MonitoredLow) && (currentUsedAreaSqM <= MonitoredHigh)) {
    console.log(`Monitor the plants yo!`);

} else {
    console.log(`plant your shit yo!`);
}

/*========================================================================
PART 2
==========================================================================*/

console.log("==================Hello plants Part 2!=============================");

/* Radius of the circle of plants is 5 meters */
radius = 5;

/* Starting # of plants, and growth rate (doubles every week) */
startNumPlants = 100;

/* Calculate the size in square meters of the garden */
gardenAreaSqM = PI * radius * radius;

/* Week 0 - Calculated numbers */
currentNumPlants = startNumPlants;
currentUsedAreaSqM = currentNumPlants * plantMinSqM;
spaceRemainingAreaSqM = gardenAreaSqM - currentUsedAreaSqM;

console.log(`starting area size = ${gardenAreaSqM}`);
console.log(`# plants after week 0 = ${currentNumPlants}`);
console.log(`current space used in garden = ${currentUsedAreaSqM}`);
console.log(`space remaining after week 0 = ${spaceRemainingAreaSqM}`);

/*==============
week 1
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 1 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

/*==============
week 2
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 2 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

/*==============
week 3
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 3 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

/*==============
week 4
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 4 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

/*==============
week 5
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 5 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

/*==============
week 6
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 6 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

/*==============
week 7
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 7 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

/*==============
week 8
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 8 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

/*==============
week 9
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 9 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM}`);

/*==============
week 10
===============*/

currentNumPlants = currentNumPlants * growthRate;
console.log(`# plants after week 10 = ${currentNumPlants}`);

currentUsedAreaSqM = currentNumPlants * plantMinSqM;
console.log(`current space used in garden = ${currentUsedAreaSqM} square meters.`);

/* Calculate radius: r = √(A / π) */
let newRadiusv1 = Math.sqrt(currentUsedAreaSqM / PI); 
console.log(`Required radius = ${newRadiusv1} meters.`);


/*========================================================================
PART 3
==========================================================================*/

console.log("==================Hello plants Part 3!=============================");

/* Radius of the circle of plants is 5 meters */
radius = 5;

/* Starting # of plants, and growth rate (doubles every week) */
startNumPlants = 100;

/* Calculate the size in square meters of the garden */
gardenAreaSqM = PI * radius * radius;
currentUsedAreaSqM = startNumPlants * plantMinSqM;
spaceRemainingAreaSqM = gardenAreaSqM - currentUsedAreaSqM;

try {
    if (spaceRemainingAreaSqM <= 0)
        throw `Starting with ${startNumPlants} plants exceeds the garden radius of ${radius}`;
} catch(error) {
    console.log(error);
}


