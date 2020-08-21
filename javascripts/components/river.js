const makeBearCards = (arr) => {
    $('#bearCards').html('');
    arr.forEach((bear) => {
        $('#bearCards').append(
            `<div class="card m-3 bear--card" style="width: 30%;">
            <img class="card-img-top" src="${bear.image}" alt="${bear.name}">
            <div class="card-body">
              <h5 class="card-title">${bear.name}</h5>
            </div>
          </div>`
        )
    })
}

export { makeBearCards }