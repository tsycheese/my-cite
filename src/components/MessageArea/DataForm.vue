<template>
  <form ref="form" class="data-form-container" @submit.prevent="handleSubmit">
    <div class="form-item name">
      <input
        type="text"
        placeholder="用户昵称"
        maxlength="10"
        v-model="formData.nickname"
      />
      <span class="limit-hint">{{ formData.nickname.length }}/10</span>
      <span class="error">{{ error.nickname }}</span>
    </div>
    <div class="form-item text">
      <textarea
        name="content"
        placeholder="输入内容"
        maxlength="300"
        v-model="formData.content"
      ></textarea>
      <span class="limit-hint">{{ formData.content.length }}/300</span>
      <span class="error">{{ error.content }}</span>
    </div>
    <div class="form-item submit">
      <button :disabled="isSubmitting">提交</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        nickname: '',
        content: '',
      },
      error: {
        nickname: '',
        content: '',
      },
      isSubmitting: false,
    };
  },
  methods: {
    handleSubmit(e) {
      this.error.nickname = this.formData.nickname ? '' : '昵称不能为空';
      this.error.content = this.formData.content ? '' : '内容不能为空';

      if (this.error.nickname || this.error.content) {
        return;
      }
      this.isSubmitting = true;
      this.$emit('submit', this.formData, (content) => {
        this.$showMessage({
          content: content,
          type: 'success',
          container: this.$refs.form,
          callback: () => {
            this.formData.content = '';
            this.isSubmitting = false;
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

input,
textarea {
  font-family: '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue',
    '微软雅黑', sans-serif;
  background-color: transparent;
  border: 1px dashed #ccc;
  border-radius: 4px;
  outline: none;
  padding: 5px 10px;
}

.form-item {
  margin-bottom: 30px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  .limit-hint {
    position: absolute;
    font-size: 12px;
    color: @lightWords;
  }

  .error {
    position: absolute;
    font-size: 12px;
    color: @warn;
    left: 0;
    bottom: -20px;
  }

  &.name {
    width: 50%;
    height: 30px;

    input {
      width: 100%;
      height: 100%;
    }

    .limit-hint {
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &.text {
    width: 100%;
    height: 100px;

    textarea {
      width: 100%;
      height: 100%;
      resize: none;
      line-height: 1.5em;
    }

    .limit-hint {
      right: 5px;
      bottom: 5px;
    }
  }

  &.submit {
    button {
      width: 100px;
      height: 30px;
      outline: none;
      background-color: @primary;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: darken(@primary, 5%);
      }

      &:active {
        background-color: darken(@primary, 10%);
      }

      &:disabled {
        background-color: lighten(@primary, 20%);
        cursor: not-allowed;
      }
    }
  }
}
</style>
