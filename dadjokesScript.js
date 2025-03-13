const txt = document.querySelector('.jokes');
const btn = document.querySelector('.btn');
const config = { headers: { Accept: 'application/json' } };

const getJokes = async()=>{
    try{
        let res = await axios.get('https://icanhazdadjoke.com', config);
        return res.data.joke;
    }catch(e){
        return 'Reload Jokes';
    }
}

btn.onclick = async ()=>{
    txt.innerHTML = "Loading...";
    txt.innerHTML = await getJokes();
}