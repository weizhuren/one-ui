<template>
  <div class="one-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'oneRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // 组件接收到了value值，我们需要触发这个组件的input事件
    // provide 与 inject  用来做祖孙之间得组件通讯
    value: null
  }
}
</script>
