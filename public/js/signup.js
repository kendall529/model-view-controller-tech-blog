const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        document.querySelector('#signup-fail').textContent = "One or more fields has invalid input";
        document.querySelector('#username-signup').value = "";
        document.querySelector('#password-signup').value = "";
      }
    } else {
      document.querySelector('#signup-fail').textContent = "One or more fields are empty";
      document.querySelector('#username-signup').value = "";
      document.querySelector('#password-signup').value = "";
    }
  };

  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);