// Q-a.Get all the countries from Asia continent /region using Filter function

// Ans
let request =new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=()=>{
   let a=JSON.parse(request.response)
   var region=a.filter((item)=>item.region==="Asia")
   console.log(region);
}

request.onerror=()=>{
    console.error("Something went wrong")
}




// Q-b:Get all the countries with a population of less than 2 lakhs using Filter function
// Ans:

let request =new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=()=>{
   let a=JSON.parse(request.response)
   let population=a.filter((item)=>item.population<200000);
   console.log(population);
}

request.onerror=()=>{
    console.error("Something went wrong")
}





// Q-c:Print the following details name, capital, flag using forEach function
// Ans:

let request =new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=()=>{
   let a=JSON.parse(request.response)
   a.forEach((element)=>console.log(`Name:${element.name}, Capital:${element.capital}, Flag: ${element.flag}`))
}


request.onerror=()=>{
    console.error("Something went wrong")
}






// Q-d:Print the total population of countries using reduce function

// Ans:

let request =new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=()=>{
   let a=JSON.parse(request.response)
   let total=a.reduce((acc,curr)=>acc+curr.population,0)
   console.log(`Population of countries:${total}`);
}


request.onerror=()=>{
    console.error("Something went wrong")
}






// Q-e:Print the country which uses US Dollars as currency.
// Ans:


let request =new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=()=>{
   let a=JSON.parse(request.response)
   let dollar=a.filter((element)=>{
   for(let i in element.currencies){
    if(element.currencies[i].code==='USD'){
    return true;
    }
    }
    }).map((element)=>element.name);
    console.log(dollar);
   }

request.onerror=()=>{
    console.error("Something went wrong")
}
