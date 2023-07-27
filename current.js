var curmovie=localStorage.getItem('curmovie');
var cur=JSON.parse(curmovie);
var movie=document.querySelector('#movie');

movie.innerHTML='';
let li=document.createElement('div');
li.innerHTML=`
    <div><img id="poster" src=${cur.Poster}></div>
    <div class="info">Movie : ${cur.Title}</div>
    <div class="info"> Release Date : ${cur.Released}</div>
    <div class="info"> Director : ${cur.Director}</div>
    <div class="info"> Writer : ${cur.Writer}</div>
    <div class="info">Plot :<span id="para"></span> ${cur.Plot}</div>
    <div class="info">  Awards : ${cur.Awards}</div>
    
`;
movie.append(li);