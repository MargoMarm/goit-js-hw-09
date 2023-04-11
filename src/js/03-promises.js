import Notiflix from 'notiflix';

const formRef = document.querySelector(".form");

formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', onFormSubmit);


const form = {};

function onFormInput(event) {
	form[event.target.name] = Number(event.target.value);
} 


function onFormSubmit(event) {
	event.preventDefault();

	const { delay, step, amount } = form;

	if (delay <= 0 || step <= 0 || amount <= 0) {
	 Notiflix.Report.warning('Oops...', 'Typed number must be greater than 0', 'Got it!');
	return;
	}

	for (let position = 0; position < amount; position+= 1) {
	
		createPromise(position+1, delay + step * position).then(({ position, delay }) => {
		Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
			.catch(({ position, delay }) => {
	  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
	
}


function createPromise(position, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const shouldResolve = Math.random() > 0.3;
			if (shouldResolve) {
				resolve({ position, delay });
			} else {
				reject({ position, delay });
			}
		}, delay);
	});
}
	



