const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {};
    formData.forEach((name, value) => {
      if (!name || !value) {
        alert('Please fill in the fields');
      } else {
        data[value] = name;
      }
    });
    if (data.email && data.password) {
      console.log(data);
      event.currentTarget.reset();
    }
}