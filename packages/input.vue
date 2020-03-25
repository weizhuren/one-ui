<template>
 <div class="one-input" :class="{'one-input_suffix':showSuffix}">
   <input
   class="one-input_inner"
   :class="{'is-disabled': disabled}"
   :placeholder="placeholder"
   :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
   :name="name"
   :value="value"
   @input="handleInput"
   :disabled=disabled>
  <span class="one-input_suffix">
   <i class="on-input_icon one-icon-cancel" v-if="clearable && value" @click="clear"></i>
   <i class="on-input_icon one-icon-visible" v-if="showPassword && type=='password'" @click="handlePassword"></i>
 </span>
 </div>
</template>
<script>
export default {
  name: 'oneInput',
  components: {
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  watch: {},
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  data () {
    return {
      // 显示是否显示密码框
      passwordVisible: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>
<style lang="scss" scoped>
  .one-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .one-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;

      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
  // 后面加suffix的意思是后面如果有后缀的话，触发该样式
  .one-input_suffix{
    .one-input_inner{
      padding-right: 30px;
    }
    .one-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
</style>
