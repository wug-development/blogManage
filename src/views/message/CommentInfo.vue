<template>
    <div class="comment-info-box">
        <div class="m-list-header">
            <div class="m-list-title">留言详情</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'vue-property-decorator'

@Component
export default class CommentInfo extends Vue {
    private name: string = ''
}
</script>

<style lang="scss">
@import '@/assets/sass/list-header.scss';
.comment-info-box{
    height: 100%;
    overflow: hidden;
    position: relative;
    .m-list-header{
        height: 64px;
    }
}
</style>
