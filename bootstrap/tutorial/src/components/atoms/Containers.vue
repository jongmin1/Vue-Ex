<template>
    <div class="container my-5">
        <h2>normal container</h2>
        <p>Lorem ipsum asdfsdfasldfjkskjdfjsadkfjask asldkjflkdsf alskdjflkjsadfkk</p>
    </div>

    <div class="container-fluid">
        <h2>fluid container</h2>
        <p>sdlkflksadjfk sadlfjlsjdflkjsadfkasl asdljflskdjflk</p>
    </div>

    <div class="contariner-xl my-5">
        <h2>100% width until xl screens, then container</h2>
        <p>saldkflskajdflksdfs saldkjflsadfkjsakfjslakfl sadlkjfalskdjflksaf ;ksadf;lsdf;</p>
    </div>

    <div class="container">
        <div class="row">
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
        </div>
        <div class="row">
            <div class="col-8">col-8</div>
            <div class="col-4">col-4</div>
        </div>
    </div>

    <div class="contariner-lg my-5">
        <h2>column widths</h2>
        <div class="row">
            <div class="col-6">
                <div class="p-5 bg-primary text-light">col 1</div>
            </div>
            <!-- different break point -->
            <div class="col-sm-3 col-lg-3">
                <div class="p-5 bg-primary rext-light">col 2</div>
            </div>
        </div> 
    </div>
</template>