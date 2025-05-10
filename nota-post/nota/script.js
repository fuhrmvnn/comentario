document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const author = document.getElementById('commentAuthor').value;
    const text = document.getElementById('commentText').value;

    if(author && text) {
        const commentSection = document.getElementById('comments');

        commentSection.innerHTML += `
            <div class="d-flex align-items-start mb-3">
                <div class="rounded-circle bg-secondary me-2" style="width: 40px; height: 40px;"></div>
                <div>
                    <strong class="d-block mb-1">${author}</strong>
                    <small class="comment-ahora">Ahora mismo</small>
                    <p class="text-muted small mt-2 mb-0">${text}</p>
                </div>
            </div>
        `;

        // Limpiar formulario
        document.getElementById('commentForm').reset();
    }
});
