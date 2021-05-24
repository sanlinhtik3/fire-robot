<template>
    <div class="container-fluid cus-navBar">
        <div class="row">
            <div class="col-12 px-0">
                <div class="container">
                    <div class="row">
                        <div class="col-12 px-0">
                            <nav class="navbar navbar-expand-lg navbar-dark">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">Navbar</a>
                                    <button class="navbar-toggler bb toggle-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <div class="icon-bar1"></div>
                                        <div class="icon-bar2"></div>
                                        <div class="icon-bar3"></div>
<!--                                        <i class="fas fa-bars menu-icon"></i>-->
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Navbar",
        mounted() {
            // Rotate Icons class added by jQuery
            // eslint-disable-next-line no-undef
            $(document).ready(function(){
                // eslint-disable-next-line no-undef
                $(".toggle-btn").click(function(){
                    // eslint-disable-next-line no-undef
                    $(this).toggleClass("rotate-icons");
                });
            });
        }
    }
</script>

<style scoped>
    .navbar-toggler:focus {
        text-decoration: none;
        outline: 0;
        box-shadow: 0 0 0 0;
        border: 0;
    }
    /*rotate icon*/
    .toggle-btn {
        cursor: pointer;
        background: none;
        float: right;
        border: none;
    }
    .icon-bar1, .icon-bar2, .icon-bar3 {
        background-color: #fff;
        margin: 8px 0;
        width: 30px;
        height: 2px;
        transition: 0.6s;
    }
    .rotate-icons .icon-bar1 {
        transform: rotate(-45deg) translate(-9px, 6px);
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    }
    .rotate-icons .icon-bar2 {
        opacity: 0;
    }
    .rotate-icons .icon-bar3 {
        transform: rotate(45deg) translate(-8px, -8px);
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
    }
</style>