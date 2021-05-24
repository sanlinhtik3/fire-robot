<template>
    <div class="row vh-100 bg-white justify-content-center align-items-center" id="down">
        <div class="col-12">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-3 mb-md-4">
                        <span>Total Home Protection</span>
                        <h1 class="fw-bold fw-h-m">
                            Next Generation Home <br>
                            Alarm System
                        </h1>
                    </div>
                    <div class="col-12 col-md-7 mb-2 mb-md-3">
                        <div class="card post-thumb">
                            <img src="../assets/img-13.jpg" class="card-img" alt="...">
                            <div class="caption-text">
                                <div class="">
                                    <h5 class="card-title">Easy Installation</h5>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-5 mb-2 mb-md-3">
                        <div class="card post-thumb">
                            <img src="../assets/img-11.jpg" class="" alt="...">
                            <div class="caption-text">
                                <div class="">
                                    <h2 class="">Easy Installation</h2>
                                    <p class="">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-5 mb-2 mb-md-3">
                        <div class="card post-thumb">
                            <img src="../assets/img-12.jpg" class="card-img" alt="...">
                            <div class="caption-text">
                                <div class="">
                                    <h2 class="">Easy Installation</h2>
                                    <p class="">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-7 mb-2 mb-md-3">
                        <div class="card post-thumb">
                            <img src="../assets/img-14.jpg" class="" alt="...">
                            <div class="caption-text">
                                <div class="">
                                    <h2 class="">Easy Installation</h2>
                                    <p class="">Last updated 3 mins ago</p>
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
        name: "AlarmSystem"
    }
</script>

<style scoped>
    .post-thumb {
        float: left;
        position: relative;
        overflow: hidden;
        width: 100%;
        /*max-height: 300px;*/
        font-family: arial;
    }
    .post-thumb:hover .caption-text {
        opacity: 1;
        transform: scale(1.2);
    }
    .post-thumb .caption-text h2,
    .post-thumb .caption-text p {
        width: 100%;
        /*margin: 10px 0px;*/
    }
    /*.post-thumb img{*/
    /*    float: left;*/
    /*}*/
    .caption-text {
        position: absolute;
        opacity: 0;
        transition: all 0.45s ease-in-out;
        background-color: rgb(0 0 0 / 50%);
        width: 100%;
        height: 100%;
        text-align: center;
        color: #ffffff;
        /*padding-top: 120px;*/
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>