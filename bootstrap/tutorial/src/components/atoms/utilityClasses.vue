<template>
    <div class="bg-primary m-1">small margin and primary</div>
    <div class="bg-primary m-5 p-5">large margin</div>
    
    <div class="bg-secondary">line</div>
    <div class="bg-primary my-1 px-1">margin in y direction, padding in x direction</div>
    <div class="bg-secondary">line</div>
    <div class="bg-primary my-3 px-5">margin in y direction, padding in x direction</div>
    <div class="bg-secondary">line</div>
    <!-- padding: ?. margin: 줄간격? -->
    <!-- ps:padding start, pt: top, pe:end, pb: bottom -->
    <!-- mt: margin top ... -->
    <div class="bg-primary ms-5 me-5 mb-4 pt-1 ps-5 ">margin & padding</div>
    <div class="bg-secondary">line</div>
    

    <div class="m-3 p-3 border">default border</div>
    <div class="m-3 p-3 border-top border-end"></div>
    <div class="m-3 p-3 border-start border-danger border-5"></div>
    <div class="m-3 p-3 rounded border border-5">rounded crner</div>
    <div class="m-3 p-3 rounded-pill border border-5">rounded crner</div>

    <!-- + box shadow -->

    <p class="fw-bold">bold text</p>
    <p class="fw-bolder">bolder text</p>
    <p>normal text</p>
    <p class="fw-light">light text</p>
    <p class="fst-italic">italic text</p>
    <p class="fst-italic fw-light">italic light text</p>
</template>