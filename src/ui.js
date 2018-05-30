class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.formState = 'add';
    }

    showPosts(posts) {
       let output = '';
       posts.forEach((post) => {
           output += `
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="edit card-link" data-id="${post.id}">
                        <i class="fa fa-edit"></i>
                    </a>
                    <a href="#" class="delete card-link" data-id="${post.id}">
                        <i class="fa fa-trash"></i>
                    </a>
                </div>
            </div>
           `;
       });
       this.post.innerHTML = output;
    }

    showAlert(message, className) {
        this.clearAlert();
        //Create div
        const div = document.createElement('div');
        //Add classnames
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Insert into DOM
        //Get parent
        const container = document.querySelector('.postsContainer');
        // Get posts div
        const post = document.querySelector('#posts');
        //insert alert div
        container.insertBefore(div, posts);    
    
        //Timeout (clear after 3 sec)
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
       this.titleInput.value = '';
       this.bodyInput.value = ''; 
    }

    //Fill form to edit
    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;

        this.changeFormState('edit');
    }

    clearIdInput() {
        this.idInput.value = '';
    }

    changeFormState(stateType) {
        if (stateType === 'edit') {
            //Change SubmitButton color and text
            this.postSubmit.textContent = 'Update Post!';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';
            //Create CancelButton
            const button = document.createElement('button');
            button.className = 'post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));
            //Get Parent
            const cardForm = document.querySelector('.card-form');
            // element to insert before
            const formEnd = document.querySelector('.form-end');
            //Insert CancelBtn
            cardForm.insertBefore(button, formEnd);
        } else {
            //Change SubmitButton color and text
            this.postSubmit.textContent = 'Post It!';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';
            //Remove CancelButton
            if(document.querySelector('.post-cancel')) {
                document.querySelector('.post-cancel').remove();
            }
            //Clear id from hidden field
            this.clearIdInput();
            //Clear Text fields
            this.clearFields();
        }
    }

    
}

export const ui = new UI();