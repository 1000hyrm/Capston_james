<template>
    <vue-scroll-snap>
        <div class="item" id="item1">#1

        </div>
        <div class="item" id="item2">#2

        </div>
        <div class="item" id="item3">#3

        </div>
        <div class="item" id="item4">#4

        </div>
        <div class="item" id="item5">#5
            
        </div>
    </vue-scroll-snap>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";

export default {
    components: { VueScrollSnap },
};
</script>

<style>
.item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    max-height: 500px;
}

.scroll-snap-container {
    height: 500px;
    /* width: 100%; */
}
#item1 {
    background-color: red;
    height: 500px;
}

#item2 {
    background-color: green;
    height: 500px;
}

#item3 {
    background-color: blue;
    height: 500px;
}

#item4 {
    background-color: cyan;
    height: 500px;
}

#item5 {
    background-color: magenta;
    height: 500px;
}
</style>