<template>
    <div class="addproject-box">
        <div class="mproject-header">
            <div class="mproject-title">添加项目</div>
            <div class="mph-search-body">
                <div class="mph-search-box">
                    <input type="text" class="txt" placeholder="请输入项目名称" maxlength="50">
                    <div class="btn">搜索</div>
                    <a-button type="primary" icon="plus" class="btn-add" @click="toEdit" :size="size">新增</a-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
@import '@/assets/sass/base.scss';
.addproject-box{

}
</style>
