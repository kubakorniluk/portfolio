<script setup>
</script>

<template>
    <section class="section">
        <div class="container">
            <h3 class="section-title">
                <slot name="title"></slot>
            </h3>
            <div class="section-content">
                <slot name="content"></slot>
            </div> 
        </div>
    </section>
</template>

<style scoped>
    .section {
        width: 100%;
        padding: 2vmin 0 6vmin 0;
        margin: 0;
        display: flex;;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    .section:before {
        content: '';
        border-top: 1px solid #EAE9FC;
        margin-bottom: 4vmin;
        width: 100%;
    }
    .container {
        width: 100%;
        margin: 0;
        display: flex;;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
    .section-title {
        /* display: block; */
        margin: 0;
        /* max-width: 25%; */
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        font-size: 7.5vmin;
        color: #EAE9FC;
    }
    .section-content {
        display: block;
        max-width: 50%;
        margin: 0;
        padding: 0;
        font-family: 'Sarabun', sans-serif;
        font-weight: 400;
        font-size: 2.5vmin;
        color: #EAE9FC;
        flex-wrap: wrap;
        text-align: left;
    }
</style>