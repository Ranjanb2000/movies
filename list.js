var obj=JSON.parse(localStorage.getItem('data'));
var movies=document.querySelector('#movies');
var radio=document.querySelector('.radio');

var unique = Array.from(new Set(obj.map(a => a.imdbID)))
 .map(id => {
   return obj.find(a => a.imdbID === id)
 });
obj=unique;
localStorage.setItem('data',JSON.stringify(obj));
function Addtolist(movie)
{
    let li=document.createElement('div');
    li.innerHTML=`
    <div class="title">
    <span> <a>MOVIE : ${movie.Title}</a> IMDB RATINGS : ${movie.imdbRating} </span>
    <button class="radio" id=${movie.imdbID}>remove from favorites</button>
    </div>
    `;
    movies.append(li);
}
function renderlist(newobj)
{
    movies.innerHTML='';
    for(var i=0;i<newobj.length;i++)
    {
        if(obj[i].fav)
        {
            Addtolist(obj[i]);
        }
    }
}
for(var i=0;i<obj.length;i++)
{
    if(obj[i].fav)
    {
        Addtolist(obj[i]);
    }
}
function remove(id)
{
    let newobj = obj.filter(function(task){
        return task.imdbID!=id;
    })
    localStorage.setItem('data',JSON.stringify(newobj));
    renderlist(newobj);
    location.reload();
}
document.addEventListener('click',function(e){
    var target=e.target;
    if(target.className=='radio')
    {
        console.log(target.id);
        let id=target.id;
        remove(id);
    }
    
})