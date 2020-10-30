<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>

<style lang="scss">
@import '@/assets/sass/public.scss';
#app {
    height: 100%;
    font-size: 14px;
    overflow: hidden;
}
</style>
