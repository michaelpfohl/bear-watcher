const bears = [];

const createForm = () => {
    $('#bearForm').html(
        `<form id="bearForm">
        <div class="form-group">
          <label for="bearName">Bear Name</label>
          <input type="text" class="form-control" id="bearName" placeholder="Enter bear name">
        </div>
        <div class="form-group">
          <label for="bearImage">Bear Image</label>
          <input type="url" class="form-control" id="bearImage" placeholder="Enter URL of image of bear">
        </div>
        <button type="submit" id="submitBear"class="btn btn-primary">Submit</button>
      </form>`
        )    
}

const submitButtonEvents = () => {
  $('#submitBear').on('click', () => {
    let bearInfo = {};
    bearInfo.name = $('#bearName').val();
    bearInfo.image = $('#bearImage').val();
    bears.push(bearInfo);
  })
}

export { createForm, submitButtonEvents }