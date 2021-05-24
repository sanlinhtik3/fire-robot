<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler bb" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars menu-icon"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Feature</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Plan
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Content</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

    export default {
        name: "Navbar",
        mounted() {
            // eslint-disable-next-line no-undef
            $(document).ready(function () {
                // eslint-disable-next-line no-undef
                $(".navbar-toggler").click(function () {
                    // eslint-disable-next-line no-unused-vars,no-undef
                    setTimeout(function () {
                        // eslint-disable-next-line no-undef
                        let result = $(".navbar-collapse").hasClass("show");
                        console.log(result);
                        if(result){
                            // eslint-disable-next-line no-undef
                            $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
                        }else {
                            // eslint-disable-next-line no-undef
                            $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
                        }
                    },400)

                });
            });
        }
    }
</script>

<style scoped>

    .menu-icon{
        transition: 0.4s!important;
    }
    .navbar-toggler:focus {
        text-decoration: none;
        outline: 0;
        box-shadow: 0 0 0 0;
        border: 0;
    }
    .navbar-toggler{
        animation: dog 0.5s;
    }
    .collapsed{
        animation: cat 0.5s;
    }
    @keyframes cat {
        from{transform: rotate(600deg)}
        to{transform: rotate(0deg)}
    }
    @keyframes dog {
        from{transform: rotate(0deg)}
        to{transform: rotate(600deg)}
    }
</style>