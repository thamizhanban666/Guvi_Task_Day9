let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload = function(){
    console.log("Total population of all the countries")
    if (request.status==200){
       let a=JSON.parse(request.responseText)
       let k=0;
       let total =  a.reduce((t,e) => ({population: t.population + e.population}))
       console.log(total.population);
    }
    else{
            console.log("onload Error");
    }
}
request.onerror=function(){
    console.log("onerror Error");
}