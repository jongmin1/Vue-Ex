<template>
    <section class id="intro">
        <div class="container-lg">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-5 text-center text-md-start">
                    <h1>
                        <div class="display-2">Black-belt</div>
                        <div class="display-5 text-muted">Your Coding Skills</div>
                    </h1>
                    <p class="lead my-4 text-muted">Lorem asldjflksjflk asdjflskdflkasdlkja dsfljk</p>
                    <a href="#pricing" class="btn btn-secondary">Buy now</a>
                    <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#reg-modal">Alert</button>
                </div>
                <div class="col-md-5 d-none d-md-block">
                    <img class="img-fluid" src="../../assets/images/book-cover.webp" alt="ebook-cover">
                </div>
            </div>
        </div>
    </section>

    <div class="modal fade" id="reg-modal" tableindex="-1" aria-labelledby="modal-title"
    aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal-title">Get the Latest Updates</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="close"></button>
                </div>
                <div class="modal-body">
                    <p>sadlkjflksadfljsdlfj</p>
                    <label for="modal-email" class="form-label">your email address:</label>
                    <input type="email" class="form-control" id="modal-email" placeholder="e.g.mario@examole.com">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary">submit</button>
                </div>
            </div>
        </div>
    </div>
</template>