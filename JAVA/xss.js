
    //DOM Elements
    const commentForm = document.getElementById('commentForm');
    const authorInput = document.getElementById('authorInput');
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');



    //Load existing comments from localStorage or Initialize empty array
    let comments = JSON.parse(localStorage.getItem('web_comments')) || [];

    // App Init
    displayComments();

    //Event listener for form submisson
    commentForm.addEventListner('submit', function(e){
        e.preventDefault(); // Stop page reload

        const newComment = {
            id: Date.new(), // Unique ID using timestamp
            author: authorInput.value.trim(),
            text: commentInput.value.trim(),
            date: new Date().toLocalString()
        };

        comments.push(newComments);
        saveAndRender();

        // Clear Input fields
        commentForm.reset();
    });

    // Funtion to render comments to the screen 
    function displayComments(){
        commentsList.innerHTML = ''; //clear current UI list

        if (comments.length === 0){
            commentsList.innerHTML = '<p class="no-comments"> No comments yet. Be the first to leave one!</p>';
            return;
        }

        // Loop Backwards to show the newst comments at the top
        for (let i = comments.length - 1; i >=0; i--){
            const comment = comments[i];

            const card = document.createElement('div');
            card.className = 'comment-card';

            card.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${escapeHTML(comment.author)}</span>
                <span class="comment-time">${comment.date}</span>
            </div>
            <p class="comment-text">${ecapeHTML(comment.text)}</p>
            <button class="delete-btn" onclick="deleteComment(${comment.id})">Delete</button>
            `;
            
            commentsList.appendChild(card);
        }
    }

    // Function to delete a comment
    function deleteComment(id) {
        comments = comments.filter(comment => comment.id !== id);
        saveAndRender();
    }

    // Helper to update localStorage and sync the visual UI
    function saveAndRender(){
        localStorage.setItem('web_comments', JSON.stringify(comments));
        displayComments();
    }

    // Securtiy feature: Helper to prevent XSS attacks by sanitizing user input
    function escapeHTML(str){
        return str.replace(/[&<>'"]/g,
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt',
                "'": '&#39;',
                '"': '&quot;'
            } [tag] || tag)
        );
    } 



    ///<!---COMMENT BOX-->
  /<div class="comment-container">
    <h2>Comments</h2>

    <!-- Form to add comments -->
     <form class="comment-form" id="commentForm">
        <input type="text" id="authorInput" class="input-field" placeholder="Your Name" required>
        <textarea id="commentInput" class="input-field" placeholder="Write a comment..." required></textarea>
        <button type="submit" class="submit-btn">Post Comment</button>
     </form>

     <!---Container where comments will show up-->
     <div id="commentsList" class="cpmment-list">
        <!---Dynamic comments will be injected here-->
     </div>

  </div>/

  