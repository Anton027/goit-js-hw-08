import throttle from "lodash.throttle";

const FEEDBACK_KEY = "feedback-email-state";
// const FEEDBACK_TXT_KEY = "feedback-message-state";




const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    // message: document.querySelector('.feedback-form textarea')
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
    // const message = e.target.value;
    formData[e.target.name] = e.target.value;

    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}


// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object


function populateImput() {
    const saveImputData = localStorage.getItem(FEEDBACK_KEY);
    const parsedData = JSON.parse(saveImputData);
    console.log(parsedData);
    if (parsedData) {
        
        refs.input.value = parsedData;
    }
}

// function populateTextarea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY);

//     if (savedMessage) {
//         refs.textarea.value = savedMessage;
//     }
// }
// refs.form.addEventListener('input',throttle( e => {
//     // console.log('поле', e.target.name);
//     // console.log('значення', e.target.value);

//     formData[e.target.name] = e.target.value;

//     console.log(formData);

// }), 500);

