// Code your solution in this file!
const x = 42;
function distanceFromHqInBlocks (y) {
return Math.abs(x - y);
  }
 distanceFromHqInBlocks (43);
 distanceFromHqInBlocks (50);
 distanceFromHqInBlocks (34);


  function distanceFromHqInFeet (y) {
let blocks = distanceFromHqInBlocks (y); 
  return blocks * 264;

 }

distanceFromHqInFeet (43);
distanceFromHqInFeet (50);
distanceFromHqInFeet (34);

 
function distanceTravelledInFeet (start, destination) {
return Math.abs((start - destination) * 264);
}

distanceTravelledInFeet (43, 48);
distanceTravelledInFeet (50, 60);
distanceTravelledInFeet (34, 28);

function calculatesFarePrice (start, destination) {
let feet = distanceTravelledInFeet (start, destination);
if (feet <=400);
 {
  return `gives customers a free sample`;
} 
else if (feet >400) {
  return (feet - 400) * 0.02; 
}
}

calculatesFarePrice (43, 44);
calculatesFarePrice (34, 32);
calculatesFarePrice (50, 58);
calculatesFarePrice (34, 24);