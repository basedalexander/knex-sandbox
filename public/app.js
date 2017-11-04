const CreateUser = document.querySelector('.CreateUser');

CreateUser.addEventListener('submit', (e) => {
  e.preventDefault();

  const fullName = CreateUser.querySelector('.fullname').value;
  const email = CreateUser.querySelector('.email').value;
  const password = CreateUser.querySelector('.password').value;

  post('/createUser', { fullName, email, password })
});

function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}