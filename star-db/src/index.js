class SwapiServise {
    _apiBase = 'https://swapi.dev/api';

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url} received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResourse(`/people/`);
        return res.results;
    };
    getPerson(id) {
        return this.getResourse(`/people/${id}`)
    };

    async getAllPlanets() {
        const res = await this.getResourse(`/planets/`);
        return res.results;
    };
    getPlanets(id) {
        return this.getResourse(`/planets/${id}`)
    };

    async getAllPStarships() {
        const res = await this.getResourse(`/starships/`);
        return res.results;
    };
    getStarship(id) {
        return this.getResourse(`/starships/${id}`)
    };
};

const swapi = new SwapiServise();
swapi.getAllPeople().then((people) => {
   people.forEach((p) => {
       console.log(p.name)
   })
});

swapi.getPerson(7).then((p) => {
    console.log(p.name)
});

swapi.getAllPlanets().then((planets) => {
    console.log(planets)
});
