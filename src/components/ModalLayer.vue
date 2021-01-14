<template>
    <div class="modal-layer-box">
        <a-modal v-model="value" :title="title" :closable='false'>
            <template slot="footer">
                <a-button key="back" @click="handleCancel">取消</a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">保存</a-button>
            </template>
            <slot></slot>
        </a-modal>
    </div>
</template>

<script lang="ts">
import {Vue, Provide, Prop, Component} from 'vue-property-decorator'

@Component
export default class ModalLayer extends Vue {
    @Prop() value: boolean = false
    @Prop() loading: boolean = false
    @Prop() title: string = ''

    handleOk () {
        this.$emit('submit', true)
    }

    handleCancel () {
        this.$emit('input', false)
    }
}
</script>

<style>
</style>