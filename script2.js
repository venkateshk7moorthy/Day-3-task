var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v2/all");
req.send();
req.onload = function(){
    var res = JSON.parse(req.response);
console.log(res);

for(a in res){
   console.log(a, res[a].flag);

}
}