<template>
    <div class="">

        <div class="container-fluid bg-dark">

            <!-- ********** section-1 *************-->
            <HomeSecurity></HomeSecurity>

            <div class="position-absolute bottom-0 start-0">
                <div class="d-flex flex-column social-media bg-danger">
                    <a href="" class="p-1 p-md-3"><i class="fab fa-google text-white"></i></a>
                    <a href="" class="p-1 p-md-3"><i class="fab fa-twitter text-white"></i></a>
                    <a href="" class="p-1 p-md-3"><i class="fab fa-facebook text-white"></i></a>
                </div>
            </div>

            <div class="position-absolute bottom-0 end-0">
                <div class="_scroll">
                    <a href="#down" class="p-1 p-md-3 text-white text-decoration-none small"><i class="fas fa-minus"></i><i class="fas fa-minus pe-2"></i> Scroll</a>
                </div>
            </div>

            <!--********** section-2 *************-->
            <AlarmSystem></AlarmSystem>

            <!--*********** section-3 *************-->
            <Automation></Automation>

            <!-- ********** Plans start ************-->
            <Plan></Plan>

            <!--Control From Everywhere start-->
            <Freedom></Freedom>

            <!-- ************ This is Footer start *********** -->
            <Footer></Footer>
            <!-- ************ This is Footer end *********** -->

        </div>
    </div>
</template>

<script>
    import Plan from "./Plan";
    import Footer from "./Footer";
    import Freedom from "./Freedom";
    import Automation from "./Automation";
    import AlarmSystem from "./AlarmSystem";
    import HomeSecurity from "./HomeSecurity";
    export default {
        name: "Home",
        components: {HomeSecurity, AlarmSystem, Automation, Freedom, Footer, Plan},
        mounted() {
            // eslint-disable-next-line no-undef
            $('.responsive').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
                            cssEase: 'linear'
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });

            // eslint-disable-next-line no-undef
            $(document).ready((function () {
                // eslint-disable-next-line no-unused-vars,no-undef
                let screenHeight = $(window).height();
                console.log(screenHeight);

                // eslint-disable-next-line no-undef
                $(window).scroll(function () {
                    // eslint-disable-next-line no-unused-vars,no-undef
                    let currentPosition = $(window).scrollTop();
                    console.log(currentPosition);
                    if(currentPosition > screenHeight-100){
                        // eslint-disable-next-line no-undef
                        $(".cus-navBar").addClass("cus-navBar-scroll");
                    }else {
                        // eslint-disable-next-line no-undef
                        $(".cus-navBar").removeClass("cus-navBar-scroll");
                    }

                });
            }));
        }
    }

</script>

<style>

</style>