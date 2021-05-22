<template>
    <div class="container-fluid bg-dark">
        <div class="row vh-100 bg">
            <div class="col-12 p-0">
                <div class="bg-left">
                    <img src="../assets/Path.svg" class="w-100" alt="">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12 position-relative">
                            <Navbar></Navbar>
<!--                            <div class="">-->
<!--                                <img src="../assets/Group.svg" class="w-100" alt="">-->
<!--                            </div>-->
                        </div>
                    </div>
                    <HomeContent></HomeContent>
<!--                    <div class="row vh-100">-->
<!--                        <div class="col-12"></div>-->
<!--                    </div>-->
                </div>
            </div>
        </div>

        <div class="position-absolute bottom-0 start-0">
            <div class="d-flex flex-column social-media bg-danger">
                <a href="" class="p-1 p-md-3"><i class="fab fa-google text-white"></i></a>
                <a href="" class="p-1 p-md-3"><i class="fab fa-twitter text-white"></i></a>
                <a href="" class="p-1 p-md-3"><i class="fab fa-facebook text-white"></i></a>
            </div>
        </div>

        <div class="position-absolute bottom-0 end-0">
            <div class="_scroll">
                <a href="" class="p-1 p-md-3 text-white text-decoration-none small"><i class="fas fa-minus"></i><i class="fas fa-minus pe-2"></i> Scroll</a>
            </div>
        </div>



        <div class="row vh-100 bg-white justify-content-center align-items-center">
            <div class="col-12">
                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-md-4">
                            <span>Total Home Protection</span>
                            <h1 class="fw-bold">
                                Next Generation Home <br>
                                Alarm System
                            </h1>
                        </div>
                        <div class="col-12 col-md-8 mb-2 mb-md-3">
                            <div class="card bg-dark text-white">
                                <img src="../assets/img-13.jpg" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Easy Installation</h5>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-2 mb-md-3">
                            <div class="card bg-dark text-white">
                                <img src="../assets/img-11.jpg" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Easy Installation</h5>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 mb-2 mb-md-3">
                            <div class="card bg-dark text-white">
                                <img src="../assets/img-12.jpg" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Easy Installation</h5>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-8 mb-2 mb-md-3">
                            <div class="card bg-dark text-white">
                                <img src="../assets/img-14.jpg" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Easy Installation</h5>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row vh-100 bg-white justify-content-center align-items-center background-1">
            <div class="col-12">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-6 mb-md-4 mb-5 mb-md-5 mb-md-0">
                            <span class="text-white-50 fs-small">How Things Work!</span>
                            <h1 class="text-white">
                                Home Automation <br> and Integrations
                            </h1>
                            <p class="text-white-50 fs-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at autem blanditiis cum ducimus esse est et explicabo illo in, iusto libero natus optio pariatur possimus sint sit veniam voluptates!
                            </p>
                            <div class="flex-fill text-white mb-2 mb-md-4">
                                <div class="">
                                    <img src="../assets/integrate-01.svg" class="me-4 mb-2 mb-md-3 img-sm-1" alt="">
                                    <img src="../assets/integrate-02.svg" class="me-4 mb-2 mb-md-3 img-sm-1" alt="">
                                    <img src="../assets/integrate-03.svg" class="me-4 mb-2 mb-md-3 img-sm-1" alt="">
                                    <img src="../assets/integrate-04.svg" class="me-4 mb-2 mb-md-3 img-sm-2" alt="">
                                    <img src="../assets/integrate-05.svg" class="me-4 mb-2 mb-md-3 img-sm-2" alt="">
                                </div>
                            </div>
                            <div class="">
                                <p class="text-white fs-sm">Download Our app!</p>
                                <div class="">
                                    <img src="../assets/play-store.svg" class="me-2 w-25" alt="">
                                    <img src="../assets/app-store.svg" class="w-25" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-6 mb-md-4">
                            <div class="d-flex justify-content-center align-items-center">
                                <img src="../assets/integration-home.svg" class="w-100 home" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";
    import HomeContent from "../components/HomeContent";
    export default {
        name: "Home",
        components: {HomeContent, Navbar}
    }
</script>

<style scoped>
    .bg{
        background-image: url("../assets/Group.svg");
        background-position: 800px;
        background-size: 1000px;
        background-repeat: no-repeat;
    }
    .bg-left{
        position: absolute;
        width:400px;
        top: -140px;
        left: -120px;
    }
    ._scroll{
        transform: rotate(-90deg);
        margin-bottom: 40px;
    }
    .social-media{
        border-radius: 0 10px 10px 0;
    }

    .background-1{
        background-image: url("../assets/background-1.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    /*mobile*/
    @media screen and (max-width: 576px) {
        .home{
            width: 80%!important;
        }
        .bg{
            background-position: -80px;
            background-size: 630px;
        }
        .social-media{
            margin-bottom: 399px;
        }
        ._scroll{
            margin-right: -20px;
        }
        .fs-small{
            font-size: 11px;
        }
        .fs-sm{
            font-size: 12px;
        }
        .img-sm-1{
            width: 50px;
        }
        .img-sm-2{
            width: 150px;
        }
    }

    /*ipad*/
    @media screen and (min-width: 768px){
        .home{
            width: 75%!important;
        }
        .social-media{
            margin-bottom: 140px;
        }
    }
    /*lg*/
    @media screen and (min-width: 992px){
        .home{
            width: 100%!important;
        }
        .social-media{
            margin-bottom: 95px;
        }
        .bg{
            background-position: 390px;
        }
    }
    /*xl*/
    @media screen and (min-width: 1200px){
        .social-media{
            margin-bottom: 100px;
        }
        .bg{
            background-position: 600px;
        }
    }

    /*xxl*/
    @media screen and (min-width: 1400px){
        .bg{
            background-position: 920px;
        }
    }
</style>