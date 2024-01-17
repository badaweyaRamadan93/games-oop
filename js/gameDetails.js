import { Ui } from "./ui.js";

export class Details {
    constructor(id) {
        this.Ui = new Ui()
        document.getElementById("closeSec").addEventListener('click', () => {
            document.querySelector('.games').classList.remove('d-none')
            document.querySelector('.games-details').classList.add('d-none')

        });
        this.getDetails(id);
    }

    getDetails(idGames) {
        const loading = document.querySelector("#loading")
        loading.classList.remove("d-none");
        let options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c6bf9b28b3mshc59094e6f517dc8p11cd5ejsn9d575a01f963',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
            .then((response) => response.json())
            .then((response) => this.Ui.displayDetails(response))
            .catch((err) => console.error(err))
            .finally(() => {
                loading.classList.add("d-none")
            });
    }
}
