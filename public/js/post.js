const messageFormHandler = async (event) => {
    event.preventDefault();
    const post_title = document.querySelector('#post_title').value.trim();
    const post_contents = document.querySelector('#post_contents').value.trim();
    const post_date = document.querySelector('#post_date').value.trim();
    
    if (post_title && post_contents &&  post_date) {
        const response = await fetch('/api/groups', {
            method: 'POST',
            body: JSON.stringify({ post_title, post_contents, post_date, }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            document.querySelector("#post-fail").textContent = "One or more fields has invalid input";
        }
    } else {
        document.querySelector("#post-fail").textContent = "Cannot leave any fields empty";
    }
};


document
.querySelector('#create_group')
.addEventListener('submit', groupFormHandler);