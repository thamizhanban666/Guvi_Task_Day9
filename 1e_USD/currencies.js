let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload = function(){
    console.log("Name of the countries which uses US Dollars as currency")
    if (request.status==200){
       let a=JSON.parse(request.responseText)
       let k=0; 
             a.filter((e)=> e.currencies)
              .filter((e)=> e.currencies.USD)
              .map((e)=>{
                k++;
                console.log(k + ' . ' + e.name.official)
                console.log("   CURRENCIES : " + Object.keys(e.currencies));
               })
    }
    else{
            console.log("onload Error");
    }
}
request.onerror=function(){
    console.log("onerror Error");
}