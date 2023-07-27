var list=[];
var search=document.querySelector('#search');
var input=document.querySelector('#text');
var movie=document.querySelector('#movie');
var post=document.querySelector('#post');
var body=document.querySelector('#body');
var cur;
      
function handle(e)
{
    let target=e.target;
    console.log(target.id);
    if(target.id=='sear' || target.id=='search')
    {
        let i=input.value;
    $.ajax({
        url:'http://www.omdbapi.com/?t='+ i +'&&apikey=27bac43b',
        method:'GET',
        success:displayimage
    });
    }
    if(target.id=='radio')
    {
        if(cur.fav)
        {
            alert("already added to favorites");
            return;
        }
        cur.fav=true;
        let itemsList=[];
        
        const getCarStorage = localStorage.getItem('data');
        if(getCarStorage){
            itemsList = JSON.parse(localStorage.getItem('data'));
            itemsList.push(cur);
            localStorage.setItem('data', JSON.stringify(itemsList));
        }else{
            itemsList.push(cur);
            localStorage.setItem('data', JSON.stringify(itemsList));
        }
        
        renderlist(cur);
    }
}

    

function renderlist(data)
{
    movie.innerHTML='';
    let li=document.createElement('div');
    li.innerHTML=`
    <div class="title">
    <span> <a>MOVIE : ${data.Title}</a> IMDB RATINGS : ${data.imdbRating} </span>
    <button id="radio">Add to favorites</button>
    <a id="fact" href="/oth.html"> More Information</a>
    </div>
    `;
    movie.append(li);
}
function displayimage(data)
{
    if(data.Response=='False')
    {
        alert('no such movie found');
        input.value='';
        return;
    }
    else
    {
        data.fav=false;
        movie.innerHTML='';
        
        list.push(data);
        cur=data;
        localStorage.setItem('curmovie', JSON.stringify(cur));
        renderlist(cur);
        input.value='';
    }
}
function giveSuggestion()
{
    
}
document.addEventListener('click',handle);