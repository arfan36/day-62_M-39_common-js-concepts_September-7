function greeting(greetingHandler, name) {
    greetingHandler(name);
}

// const name = 'Halim mama';
// const number= [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name);
}

function greetNight(name){
    console.log('Good Night', name);
}

greeting(greetingHandler, 'arfan');
greeting(greetingHandler, 'Tom Brady');
greeting(greetEvening, 'Solaiman')
greeting(greetEvening, 'Tom Solaiman')
greeting(greetNight, 'Tom Solaiman')