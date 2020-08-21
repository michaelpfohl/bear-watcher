
import { createForm, submitButtonEvents } from './components/bearForm.js'

const init = () => {
    createForm();
    submitButtonEvents();
    getBears();
}

init()