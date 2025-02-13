document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('userWelcome').innerText = document.getElementById('username').value;
});

document.getElementById('createPortfolio').addEventListener('click', function() {
    document.getElementById('portfolioForm').classList.remove('hidden');
});

document.getElementById('portfolioCreationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const bio = document.getElementById('bio').value;
    const skills = document.getElementById('skills').value;
    const projects = document.getElementById('projects').value;

    const portfolioCard = document.createElement('div');
    portfolioCard.classList.add('portfolio-card');
    portfolioCard.innerHTML = `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Bio:</strong> ${bio}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Projects:</strong> ${projects}</p>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;
    
    document.getElementById('portfolioCards').appendChild(portfolioCard);
    document.getElementById('portfolioForm').classList.add('hidden');
    document.getElementById('portfolioDisplay').classList.remove('hidden');
    
    portfolioCard.querySelector('.delete').addEventListener('click', function() {
        portfolioCard.remove();
    });
    
    portfolioCard.querySelector('.edit').addEventListener('click', function() {
        document.getElementById('fullName').value = fullName;
        document.getElementById('bio').value = bio;
        document.getElementById('skills').value = skills;
        document.getElementById('projects').value = projects;
        document.getElementById('portfolioForm').classList.remove('hidden');
        portfolioCard.remove();
    });
});

document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('portfolioForm').classList.add('hidden');
    document.getElementById('portfolioDisplay').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
});