const drivers =['Antonia', 'Nuru', 'Amari', 'Mo'];
 function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);

 }
 console.log(drivers);
 function returnLastTwoDrivers(drivers){
    return drivers.slice(2,4);

 }
 console.log(drivers)

 let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 console.log(selectingDrivers)

 function createFareMultiplier(fareQuintupler){
     return function(fareMultiplier){
  fareQuintupler = 5;
 fareMultiplier = 2;
    

    return fareQuintupler ** fareMultiplier;
   }
 }
 console.log(createFareMultiplier())

 function fareDoubler(fare){
    return fare * 2;
 }
 console.log(fareDoubler)

 function fareTripler(fare){
  return fare * 3 ;
 }
 console.log(fareTripler)


 function selectDifferentDrivers(drivers, arrayOfDrivers){
return arrayOfDrivers(drivers)
 }
 console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
 console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))
     


    
 




