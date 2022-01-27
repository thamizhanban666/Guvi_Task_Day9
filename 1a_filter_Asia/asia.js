let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload = function(){
    console.log("Name of the countries from the Asia continent / region")
    if (request.status==200){
       let a=JSON.parse(request.responseText)
       let k=0;
       let b= 
             a.filter((e)=> e.region=="Asia" || e.continents=="Asia")
              .map((e)=>{
                k++;
                console.log(k + ' . ' + e.name.official)
              })
    }
    else{
            console.log("onload Error");
    }
}
request.onerror=function(){
    console.log("onerror Error");
}