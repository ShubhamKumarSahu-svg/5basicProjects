const form = document.querySelector('form');
const content = document.querySelector('.content');
const getDetails = async (showName) => {
    try {
        let res = await axios.get(`https://api.tvmaze.com/search/shows?q=${showName}`);
        return res.data;
    } catch (e) {
        return [];
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    content.innerHTML = "";
    let query = form.elements.query.value.trim();
    form.elements.query.value = "";

    let shows = await getDetails(query);
    if (!shows) {
        content.innerHTML = "<p>⚠️ Error fetching data. Please try again.</p>";
        return;
    }

    if (shows.length === 0) {
        content.innerHTML = "<p>❌ No results found.</p>";
        return;
    }

    for (const show of shows) {
        if (show.show.image) {
            const div = document.createElement('div');
            const a = document.createElement('a');
            a.href = show.show.url;
            a.target = "_blank";
            const img = document.createElement('img');
            img.src = show.show.image.medium;
            img.alt = show.show.name;
            a.append(img);
            const name = document.createElement('h2');
            name.textContent = show.show.name;
            div.append(a);
            div.append(name);
            content.append(div);
            div.classList.add("show-card");
        }
    }
});