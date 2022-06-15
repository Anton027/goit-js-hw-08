import throttle from "lodash.throttle";

const FEEDBACK_KEY = "feedback-email-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textArea: document.querySelector('.feedback-form textarea')
}

const formData = {};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateImput();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();

    localStorage.removeItem(FEEDBACK_KEY);
}

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function populateImput() {
    const saveImputData = localStorage.getItem(FEEDBACK_KEY);
    const parsedData = JSON.parse(saveImputData);
    if (parsedData) {
        refs.input.value = parsedData.email;
        refs.textArea.value = parsedData.message;
    }
};

