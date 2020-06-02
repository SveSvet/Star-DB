const getResourse = async(url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url} received ${res.status}`)
    }
    return await res.json();
};

getResourse('https://swapi.dev/api/people/156/')
    .then((body) => {
        console.log(body)
    })
    .catch((err) => {
        console.error('Couls not fetch:', err)
    });