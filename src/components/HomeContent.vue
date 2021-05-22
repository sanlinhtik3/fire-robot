<template>
    <div class="row vh-100 justify-content-center justify-md-content-between align-items-center flex-column-reverse flex-md-row">
        <div class="col-12 col-md-6 col-lg-6 mb-m">
            <div class="text-white">
                <h1 class="fw-bold mb-mb-0">World's <span class="text-danger">Smartest</span> <br>
                    Home Security
                </h1>
                <p class="my-mb-4 fs-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci animi architecto asperiores autem cum ducimus exercitationem facere itaque magni numquam provident quia, sint ullam vel! Aliquid cumque porro qui.
                </p>
                <button class="btn alert-danger border-danger rounded-pill fw-bold px-5 py-2 mt-mb-2">Visit Shop</button>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
            <div class="d-flex justify-content-end align-items-center">
                <img src="../assets/robot.svg" class="w-50 robot-img" alt="">
            </div>
        </div>

        <div class="position-absolute bottom-0 start-0">
            <div class="container-fluid px-0">
                <div class="row">
                    <div class="col-1 bg-white px-0"></div>
                    <div class="col-8 px-0">
                        <div class="container px-0">
                            <div class="row">
                                <div class="col-6 col-md-3 px-0">
                                    <div class="bg-white p-1 p-md-3">
                                        <span class="text-dark mb-0 fw-lighter fs-small">How many Home?</span>
                                        <h6 class="text-dark fs-sm">Number of Home</h6>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 px-0">
                                    <div class="bg-white p-1 p-md-3 mb-rounded-1">
                                        <span class="text-dark mb-0 fw-lighter fs-small">How many Home?</span>
                                        <h6 class="text-dark fs-sm">Number of Home</h6>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 px-0">
                                    <div class="bg-white p-1 p-md-3">
                                        <span class="text-dark mb-0 fw-lighter fs-small">How many Home?</span>
                                        <h6 class="text-dark fs-sm">Number of Home</h6>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3 px-0">
                                    <div class="bg-danger p-1 p-md-2 h-100 d-flex justify-content-center align-items-center mb-rounded">
                                        <h6 class="text-white fs-sm mb-0">Quick Start <i class="fa fa-arrow-right"></i></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "HomeContent"
    }
</script>

<style scoped>
/*mobile*/
@media screen and (max-width: 576px) {
    .robot-img{
        width: 40%!important;
    }
    .mb-m{
        margin-top: -70px;
    }
    .mb-rounded-1{
        border-radius: 0 20px 0 0;
    }
    .mb-rounded{
        border-radius: 0!important;
    }
}

/*ipad*/
@media screen and (min-width: 768px){
    .robot-img{
        width: 85%!important;
    }
}
/*lg*/
@media screen and (min-width: 992px){
    .robot-img{
        width: 70%!important;
    }
}
/*xl*/
@media screen and (min-width: 1200px){
    .robot-img{
        width: 50%!important;
    }
}

/*xxl*/
@media screen and (min-width: 1400px){
    .robot-img{
        width: 50%!important;
    }
}

    .fs-small{
        font-size: 11px;
    }
    .fs-sm{
        font-size: 12px;
    }
    .mb-rounded{
        border-radius: 0 20px 0 0;
    }
</style>