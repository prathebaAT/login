document.getElementById('login').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('createPostForm').style.display = 'block';
    } else {
        alert('Login failed');
    }
});

document.getElementById('signup').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;

    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('Sign up successful! Please log in.');
    } else {
        alert('Sign up failed');
    }
});

document.getElementById('createPost').addEventListener('submit', async function(e) {
    e.preventDefault();
    const content = document.getElementById('postContent').value;

    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    });

    if (response.ok) {
        alert('Post created successfully!');
    } else {
        alert('Failed to create post');
    }
});
