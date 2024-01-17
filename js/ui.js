export class Ui {
    displayGameData(data) {
        let box = ``
        for (let i = 0; i < data.length; i++) {
            box +=`
            <div class="col-lg-3 col-sm-6">
            <div class="card" data-id=${data[i].id}>
              <img src="${data[i].thumbnail}" class="m-3 rounded-2 h-100 object-fit-cover" alt="game-image">
              <div class="card-body d-flex justify-content-between align-items-center">
                <h6 class="card-text text-white">${data[i].title}</h6>
                <span class="badge text-bg-primary">free</span>
              </div>
              <p class="text-white text-center mx-3">${data[i].short_description.split(" ",8)}</p>
              <div class="card-footer d-flex justify-content-between">
                <span class="text-white badge text-bg-dark">${data[i].genre}</span>
                <span class="text-white badge text-bg-dark">${data[i].platform}</span>
              </div>
            </div>
          </div>
            `
        }
        document.getElementById("gameRow").innerHTML = box;
    }
    displayDetails(data) {
        const content = `
        <div class="col-md-4">
            <img src="${data.thumbnail}" alt="game-details-img" class="w-100"/>
        </div>
        <div class="col-md-8">
            <h3 class="text-white fst-italic">Title: ${data.title}</h3>
            <p class="text-white fst-italic"> Category : <span class="badge text-bg-info">${data.genre}</span></p>
            <p class="text-white fst-italic"> Platform : <span class="badge text-bg-info">${data.platform}</span></p>
            <p class="text-white fst-italic"> Status : <span class="badge text-bg-info">${data.status}</span></p>
            <p class="paraghraph text-white">${data.description}</p>
            <a href="${data.game_url}" class="btn btn-outline-warning" target="_blank"> show game</a>
      </div>
        `
        document.getElementById("detailsContent").innerHTML = content
    }
}