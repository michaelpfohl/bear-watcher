const catches = [];

const makeBearCards = (arr) => {
    $('#bearCards').html('');
    arr.forEach((bear, index) => {
        $('#bearCards').append(
            `<div class="card m-3 bear--card" style="width: 30%;">
            <img class="card-img-top" src="${bear.image}" alt="${bear.name}">
            <div class="card-body">
              <h5 class="card-title">${bear.name}</h5>
              <div class="d-flex justify-content-around">
                <button type="button" id="attempt-${index}" class="btn inner--button btn-lg mt-3">Attempt</button>
                <button type="button" id="catch-${index}" class="btn inner--button btn-lg mt-3">Catch</button>
              </div>
              <div id="attemptsAndCatchesContainer-${index}" class="mt-3"></div>
            </div>
          </div>`
        )
    })
    catchAttemptButtonEvents(arr);
}

const attemptButtonClick = (arr) => {
    arr.forEach((bear, index) => {
        $(`#attempt-${index}`).click(() => {
            let attemptInfo = {};
            attemptInfo.timeStamp = Date();
            attemptInfo.type = 'Attempt';
            $(`#attemptsAndCatchesContainer-${index}`).append(
                `<div class="${attemptInfo.type} m-2">
                    <div>${attemptInfo.type}: ${attemptInfo.timeStamp}</div>
                </div>`
            )
        })
    })
}

const catchButtonClick = (arr) => {
    arr.forEach((bear, index) => {
        $(`#catch-${index}`).click(() => {
            let catchInfo = {};
            catchInfo.timeStamp = Date();
            catchInfo.type = 'Catch';
            catchInfo.bearNumber = index;
            catches.push(catchInfo);
            $(`#attemptsAndCatchesContainer-${index}`).append(
                `<div class="${catchInfo.type} m-2">
                    <div>${catchInfo.type}: ${catchInfo.timeStamp}</div>
                </div>`
            )
        })
    })
}

const catchAttemptButtonEvents = (arr) => {
    attemptButtonClick(arr);
    catchButtonClick(arr);
}

export { makeBearCards }