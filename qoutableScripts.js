const txt = document.querySelector('.qoutes');
const txt2 = document.querySelector('.testimonial');
const btn = document.querySelector('.btn');
const config = { headers: { Accept: 'application/json' } };

const getJokes = async()=>{
    try{
        let res = await axios.get('https://api.quotable.io/random', config);
        return [res.data.content,res.data.author];
    }catch(e){
        return 'Reload Qoutes';
    }
}

btn.onclick = async ()=>{
    txt.innerHTML = "Loading...";
    txt2.innerHTML = '- ';
    let data = await getJokes();
    txt.innerHTML = data[0];
    txt2.innerHTML += data[1];
}