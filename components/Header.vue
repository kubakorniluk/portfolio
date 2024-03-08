<script setup>
    const state = reactive({
        transformX: '',
        transformY: '',
        x: 0,
        y: 0
    })
    const transformEmote = (e) => {
        //20 is the number defining how much the emote will transform
        state.transformX = e.clientX * 20 / window.innerWidth  + '%'
        state.transformY = e.clientY * 20 / window.innerHeight + '%'
    }
    const getMouseCords =(e) => {
        state.x = e.clientX
        state.y = e.clientY
    }
    const moveEmote = () => {
        document.addEventListener("mousemove", e => {
            transformEmote(e)
            getMouseCords(e)
        })  
    }
    const rotateAngle = computed(() => {
        // 15 defines how much emote will rotate  
        return Math.atan2(state.y, state.x) * 15 / Math.PI;
    })
    const getX = computed(() => {
        return state.transformX
    })
    const getY = computed(() => {
        return state.transformY
    })
    onMounted(() => {
        moveEmote()
    })
</script>

<template>
    <header class="header">
        <!-- <video autoplay loop ref="video" class="video">
            <source src="~/assets/video/glitch.mp4" type="video/mp4">
        </video>  -->
        <div class="overlay">
            <section class="content">
                <nav class="navbar">
                    <div class="emote">
                        <span :style="{
                            transform: `translate(${ getX }, ${ getY }) rotate(${ rotateAngle }deg)`
                        }">
                            ~_~
                        </span>
                    </div>
                    <div class="social-media">
                        <a href="https://github.com/kubakorniluk" target="_blank">
                            <Icon name="uil:github" size="1.5rem" color="#EAE9FC" />
                        </a>
                        <a href="https://www.linkedin.com/in/kuba-korniluk/" target="_blank">
                            <Icon name="uil:linkedin" size="1.5rem" color="#EAE9FC" />
                        </a>
                    </div> 
                </nav>
                <div class="heading">
                    <h1>Cześć, I'm Kuba</h1>
                </div>
                <div class="bio-container">
                    <div class="bio">
                        <span class="bio-icon">
                            <Icon name="uil:user"></Icon>
                            Front-End Developer
                        </span>
                        <p>
                            ...based in Warsaw, with over a year of experience in building cutting-edge javascript applications.
                            My goal is to provide simple and future-proof solutions to any given project.
                        </p>
                        <div class="link-group">
                            <a href="#">Work with me</a>
                            <a href="#">Download résumé</a>
                        </div>
                    </div>
                </div>
            </section>
        </div> 
    </header>
</template>

<style scope>
    .header {
        position: relative;
        height: 100vh;
        width: 100%;
        margin: 0;
        display: flex;
        background-image: url("~/assets/img/background.jpg");
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
    }
    .overlay {
        position: absolute;
        z-index: 991;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        margin: 0;
        background: linear-gradient(0deg, var(--dark) 5%, rgba(18, 18, 18, .85) 100%);
    }
    .video {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        object-fit: cover;
        z-index: 990;
    }

    .content {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr); 
        grid-row-gap: 1rem;
        height: calc(100% - 4rem);
        width: 100%;

        padding: 1.5rem 2rem;
    }
    .navbar {
        grid-area: 1 / 1 / 2 / 9;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .emote {
            display: block;
            height: 75px;
            width: 100px;
            border-radius: 59% 41% 70% 30% / 44% 60% 40% 56%;
            border: 2px solid rgba(234, 233, 252, .85); 
            animation: rotate 5s infinite;
            
            span {
                display: flex;
                width: 100%;
                height: 100%;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                font-family: var(--heading-f);
                font-size: 1.33rem;
                font-weight: 700;
                color: var(--white-text);
            }
        }
        .social-media {
            grid-area: 1 / 6 / 2 / 7;
            list-style-type: none;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-end;
            margin: 0;
            padding: 0;
            gap: 1.5rem;
            a {
                margin: 0;
                cursor: pointer;
                color: var(--white-text);
            }
        }
    }  

    .heading {
        grid-area: 2 / 1 / 5 / 9; 
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
        h1 {
            display: flex;
            width: 100%;
            align-items: flex-end;
            justify-content: flex-start;
            font-family: var(--text-f);
            font-weight: 900;
            font-size: 3rem;
            text-shadow: 3px 3px var(--dark);
            color: var(--white-text);
        }
        
    } 
    .bio-container {
        grid-area: 5 / 1 / 9 / 9; 
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        margin: 0;
        font-family: var(--text-f);
        font-weight: 400;
        font-size: 1rem;
        color: var(--white-text);
        flex-wrap: wrap;

        .bio {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .bio-icon {
                display: flex;
                align-items: center;
                gap: .5rem;
                font-weight: 700;
                font-family: var(--heading-f);
            }
        }
        .link-group {
            display: flex;
            flex-direction: row;
            gap: 1.5rem;
            a {
                font-family: var(--text-f);
                font-weight: 500;
                color: var(--white-text);
            }   
        }
    }
    @media only screen and (min-width: 390px) {
        .content {
            grid-row-gap: 1.5rem;
            padding: 1.5rem 2rem;
        }
        .heading {
            h1 {
                font-size: 3rem;
            }
        }
        .bio-container {
            font-size: 1.2rem;
            
        }
        p {
            line-height: 2.5rem !important;
        }
    }
    @media only screen and (min-width: 768px) {
        .content {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: repeat(6, 1fr); 
            grid-column-gap: 0px;
            grid-row-gap: 2rem;
        }
        .heading {
            grid-area: 3 / 1 / 4 / 7;
            h1 {
                font-size: 6rem;
            }
        }
        .bio-container {
            grid-area: 4 / 2 / 7 / 6;
            font-size: 1.2rem;
            
        }
    }
    @media only screen and (min-width: 1024px) {
        .content {
            grid-row-gap: 2rem;
        }
        .heading {
            grid-area: 3 / 2 / 5 / 6; 
            h1 {
                font-size: 6rem;
            }
        }
        .bio-container {
            grid-area: 5 / 3 / 7 / 6;
            font-size: 1.2rem;
            .bio {
                gap: 1rem;
            }
        }
    }
    @media only screen and (min-width: 1366px) {
        .content {
            grid-row-gap: 1.5rem;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(8, 1fr);
            padding: 1.5rem 4rem;
        }
        .heading {
            grid-area: 4 / 2 / 6 / 9;
            h1 {
                font-size: 5rem;
  
            }
        }
        .bio-container {
            grid-area: 6 / 2 / 9 / 7;
            font-size: 1.25rem;
        }
    }


    @keyframes rotate {
        0% {
            border-radius: 59% 41% 70% 30% / 44% 60% 40% 56%;
        }
        25% {
            border-radius: 44% 60% 40% 56% / 59% 41% 70% 30%;
        }
        50% {
            border-radius: 33% 67% 70% 30% / 44% 60% 40% 56%;
        }
        75% {
            border-radius: 44% 60% 40% 56% / 59% 41% 70% 30%;
        } 
        100% {
            border-radius: 59% 41% 70% 30% / 44% 60% 40% 56%;
        }
    }
</style>