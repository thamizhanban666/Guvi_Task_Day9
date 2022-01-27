let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload = function(){
    console.log(" All the countries name, capital and flag")
    if (request.status==200){
        let a=JSON.parse(request.responseText)
        let k=0;
        a.forEach((e)=>{
          k++;
          console.log(k + ". NAME :  " + e.name.official);
          console.log("   CAPITAL :  " + e.capital);
          console.log("   FLAG :  " + e.flags.png);
        })
    }
    else{
            console.log("onload Error");
    }
}
request.onerror=function(){
    console.log("onerror Error");
}