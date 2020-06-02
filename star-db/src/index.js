// обычный синтаксис fetch
fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
        return res.json();
    })
    .then((body) => {
        console.log(body);
    });

// синтаксис async/await: создаем функцию для возвращения
// тела любых запросов (запросы передаются по url)

const getResourse = async(url) => {
    const res = await fetch(url);
    return await res.text();
};

getResourse('https://swapi.dev/api/people/1/')
    .then((body) => {
        console.log(body)
    });