const colorPickerOptions = [
    {label: 'red', color: '#F44336'},
    {label: 'green', color: '#4CAF50'},
    {label: 'blue', color: '#2196F3'},
    {label: 'grey', color: '#607D8B'},
    {label: 'pink', color: '#E91E63'},
    {label: 'indigo', color: '#3F51B5'},

];


const colorPickerOptionsEl = document.querySelector('.js-color-picker');

const buttonEl = document.createElement('button');
buttonEl.type = 'button';

const option = colorPickerOptions[0];
console.log(option);

buttonEl.textContent  = option.label;
buttonEl.style.backgroundColor = option.color;
console.log(buttonEl);

// const buttons = colorPickerOptions.map(function(option){
// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent  = option.label;
// buttonEl.style.backgroundColor = option.color;

//     console.log(buttonEl); // 6 
//     return buttonEl
// })



const createBtnEl = function (options){
   return options.map(function(option){
        const buttonEl = document.createElement('button');
        buttonEl.type = 'button';
        buttonEl.classList = 'color-picker_option'
        buttonEl.textContent  = option.label;
        buttonEl.style.backgroundColor = option.color;
        
            console.log(buttonEl); // 6 
            return buttonEl
        })
}
const btns = createBtnEl(colorPickerOptions);
colorPickerOptionsEl.append(...btns)