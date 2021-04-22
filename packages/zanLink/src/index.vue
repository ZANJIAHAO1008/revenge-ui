<template>
  <!-- 用传过来 href 进行跳转 -->
  <!-- 用传过来的 type 修改颜色 -->
  <a
    :href="href || undefined"
    :class="[`zan-link-${type}`]"
    :style="{
      'text-decoration': underline ? 'underline' : 'none',
    }"
  >
    <!-- 使用默认插槽来填充文本 -->
    <slot />
  </a>
</template>

<script>
export default {
  // 等下 index.js 里面要用到
  name: "zanLink",
  props: {
    // 限制类型
    href: String,
    underline: Boolean,
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style lang="scss" scoped>
// 定义链接字体颜色
.zan-link-default {
  color: #606266;
}
.zan-link-primary {
  color: #409eff;
}
.zan-link-success {
  color: #67c23a;
}
.zan-link-warning {
  color: #e6a23c;
}
.zan-link-danger {
  color: #f56c6c;
}
</style>
