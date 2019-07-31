<template>
  <div class="leftnav">
    <a-menu
      :defaultSelectedKeys="[0]"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
      @click="click"
    >
      <a-menu-item :key="idx" v-for="(item,idx) in title">
        <a-icon :type="item.icon" />
        <span>{{item.text}}</span>
      </a-menu-item>
      <!-- <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="mail" />
          <span>Navigation One</span>
        </span>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>-->
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      title: [
        {
          icon: "home",
          text: "首页",
          path: "main"
        },
        {
          icon: "desktop",
          text: "内容",
          path: "content"
        },
        {
          icon: "user",
          text: "用户",
          path: "user"
        },
        {
          icon: "shopping-cart",
          text: "商品",
          path: "commodity"
        },
        {
          icon: "file-done",
          text: "任务",
          path: "eee"
        }
      ]
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    click(obj) {
      this.$router.push({
        path: `` + this.title[obj.key].path
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.leftnav {
  width: 260px;
  height: 100%;
  background: #32323a;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background: #2dafcb;
}
.ant-menu-dark,
.ant-menu-dark .ant-menu-sub {
  background: #32323a;
}
</style>
