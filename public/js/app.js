
$('#app').html(``);


function x(){
$.ajax({
	url:"http://www.omdbapi.com/?t=x-men"
}).done(function(res){
console.log(res);
let html = `
<center>
<font color="black">
<h1>${res.Title } </h1> 
<h3>${res.Plot}</h3>
<img src="${res.Poster}"/>
<h1>${res.Year} </h1>
<h1>${res.Language} </h1>
<h1>${res.Actors} </h1>
<font color ="black">
</center>
`;
$('#app').html(html);
});
}
