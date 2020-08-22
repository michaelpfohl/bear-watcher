import { makeBearCards } from '../components/river.js'

const bears = [];

const createForm = () => {
    $('#bearForm').html(
        `<input id="bearName" class="form-control form-control-lg" type="text" placeholder="Input Bear Name">
        <input id="bearImage" class="form-control form-control-lg mt-3" type="text" placeholder="Input Bear Image URL">
        <div class="d-flex justify-content-center mt-2">
          <div id="emptyFormError" class="error"></div>
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" id="submitBear" class="btn btn-primary btn-lg mt-3">Submit</button>
        </div>`
        )    
}

const submitButtonEvents = () => {
  $('#submitBear').click( () => {
    if ($('bearName').val() !== '' && $('#bearImage').val() !== ''){
      let bearInfo = {};
      bearInfo.name = $('#bearName').val();
      bearInfo.image = $('#bearImage').val();
      bearInfo.fishCaught = 0;
      bearInfo.timestamps = [];
      bears.push(bearInfo);
      clearForm();
      makeBearCards(bears);
    } else {
      $('#emptyFormError').html(`Please enter a bear name and image!`)
    }
    
  });
}

const clearForm = () => {
  $('#bearName').val('');
  $('#bearImage').val('');
  $('#emptyFormError').html('');
}

export { createForm, submitButtonEvents }