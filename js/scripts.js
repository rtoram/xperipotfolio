document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const projectsContainer = document.getElementById('projects');

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const bio = document.getElementById('bio').value;
        const profilePicture = document.getElementById('profile_picture').files[0];

        // Simular salvar dados de usuário no GitHub
        console.log('Usuário cadastrado:', { username, bio, profilePicture });

        // Adicionar projeto do usuário à galeria
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <h3>${username}</h3>
            <p>${bio}</p>
        `;
        projectsContainer.appendChild(projectElement);

        // Limpar formulário
        registrationForm.reset();
    });
});
