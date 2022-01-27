let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send()

request.onload = function(){
    console.log("Name of the countries with a Population of less than 2 Lakhs")
    if (request.status==200){
       let a=JSON.parse(request.responseText)
       let k=0;
       let b= 
             a.filter((e)=> e.population<200000)
              .map((e)=>{
                k++;
                console.log(k + ". NAME :  " + e.name.official)
                console.log("    POPULATION :  " + e.population);
              })
    }
    else{
            console.log("onload Error");
    }
}
request.onerror=function(){
    console.log("onerror Error");
}