import throttle from "lodash.throttle";

const FEEDBACK_KEY = "feedback-email-state";

const form = document.querySelector('.feedback-form');

const formData = {};
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateImput();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();

    localStorage.removeItem(FEEDBACK_KEY);
}

function onFormInput(e) {
    // const message = e.target.value;
    formData[e.target.name] = e.target.value;

    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function populateImput() {
    const saveImputData = localStorage.getItem(FEEDBACK_KEY);

    const parsedData = JSON.parse(saveImputData);

    if (parsedData) {
        form.elements.email = parsedData.email;
        form.elements.message = parsedData.message;
    }
};

// refs.form.addEventListener('input', throttle(e => {
//     // console.log('поле', e.target.name);
//     // console.log('значення', e.target.value);

//     formData[e.target.name] = e.target.value;

//     // console.log(formData);
//     localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));

//     const saveImputData = localStorage.getItem(FEEDBACK_KEY);
//     const parsedData = JSON.parse(saveImputData);
    
//     if (parsedData) {
//         refs.form.elements.value = parsedData;
//     }

// }), 500);

