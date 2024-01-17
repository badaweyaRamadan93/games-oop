import { Details } from "./gameDetails.js";
import { Ui } from "./ui.js";


export class Games {
    constructor() {
        this.getGames("mmorpg")
        document.querySelectorAll(".navbar-nav a").forEach((link) => {
            link.addEventListener('click', (e) => {
                document.querySelector('.navbar-nav .active').classList.remove('active')
                e.target.classList.add('active')
                this.getGames(e.target.getAttribute('data-category'))
            })
        })
        this.Ui = new Ui()
    }
    async getGames(Category) {
        let loading = document.querySelector('#loading')
        loading.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c6bf9b28b3mshc59094e6f517dc8p11cd5ejsn9d575a01f963',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        };


        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Category}`, options);
        const result = await response.json();
        this.Ui.displayGameData(result)
        this.startEvent();
        loading.classList.add('d-none')
    }
    startEvent() {
        document.querySelectorAll('.card').forEach((item) => {
            item.addEventListener('click', () => {
                let id = item.dataset.id
                this.showDetails(id)
            })
        })
    }
    showDetails(idGame) {
        let details = new Details(idGame)
        document.querySelector('.games').classList.add('d-none')
        document.querySelector('.games-details').classList.remove('d-none')
    }
}