
$(document).ready(function() {
    $('#commentForm').on('submit', function(e) {
        e.preventDefault();

        const author = $('#commentAuthor').val();
        const text = $('#commentText').val();

        if(author && text) {
            $('#comments').append(`
                <div class="d-flex align-items-start mb-3">
                    <div class="rounded-circle bg-secondary me-2" style="width: 40px; height: 40px;"></div>
                    <div>
                        <strong class="d-block mb-1">${author}</strong>
                        <small class="comment-ahora">Ahora mismo</small>
                        <p class="text-muted small mt-2 mb-0">${text}</p>
                    </div>
                </div>
            `);

            $('#commentForm')[0].reset();
        }
    });
});
