const makeBearCards = (array) => {
    $('#bearCards').html('');
    array.forEach((item, index) => {
        $('#bearCards').append(
            `<div class="card m-3 bear--card" style="width: 30%;">
            <img class="card-img-top" src="${item.image}" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <div class="d-flex justify-content-around">
                <button type="button" id="attempt-${index}" class="btn inner--button btn-lg mt-3">Attempt</button>
                <button type="button" id="catch-${index}" class="btn inner--button btn-lg mt-3">Catch</button>
              </div>
              <div id="attemptsAndCatchesContainer-${index}" class="mt-3"></div>
              <div id="catchCounter-${index}" class="catch--counter mx-2">Fish Caught: ${item.fishCaught}</div> 
            </div>
          </div>`)
        totalCatches(index, item, array);
		attemptsAndCatchesButtons(index, item, array);
		timestampPrinter(item, index);
    });
};

const totalCatches = (index, item, array) => {
	$(`#catch-${index}`).on('click', () => {
		item.fishCaught += 1;
		makeBearCards(array);
	});
};

const attemptsAndCatchesButtons = (index, item, array) => {
    $(`#attempt-${index}`).on('click', () => {
        item.timestamps.push(`<div class="Attempt p-1 m-2">Attempt: ${Date()}</div>`)
        makeBearCards(array)
    })
    $(`#catch-${index}`).on('click', () => {
        item.timestamps.push(`<div class="Catch p-1 m-2">Catch: ${Date()}</div>`)
        makeBearCards(array)
    });
};

const timestampPrinter = (item, index) => {
    item.timestamps.forEach((timestampItem) => {
        $(`#attemptsAndCatchesContainer-${index}`).append(timestampItem)
    });
};

export { makeBearCards }

