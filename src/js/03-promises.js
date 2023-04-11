import Notiflix from 'notiflix';


const btnSubmitRef = document.querySelector('button[type="submit"]');
const formRef = document.querySelector(".form");

btnSubmitRef.addEventListener('click', onbtnSubmit);
formRef.addEventListener('input', onFormInput);

const form = {};

function onFormInput(event) {
	form[event.target.name] = Number(event.target.value);
} 


function onbtnSubmit(event) {
	event.preventDefault();

	const { delay, step, amount } = form;

	for (let i = 1; i <= amount; i ++) {
	
		createPromise(i, delay + step * i).then(({ position, delay }) => {
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
	



