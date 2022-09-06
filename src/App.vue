<template>
  <div>
    <!-- header -->
    <mt-header>
      <div slot="left">
        <img class="logo" src="@/assets/logo.png" alt="" />
      </div>
      <div slot="right">
        <div class="search">
          <input type="text" />
          <span>搜索</span>
        </div>
        <div class="login">
          <span>登录</span>
          <span>注册</span>
        </div>
      </div>
    </mt-header>

    <!-- 主显示区 -->
    <router-view />

    <!-- 底部导航tabbar -->
    <mt-tabbar v-model="tabselected">
      <mt-tab-item id="1">首页</mt-tab-item>
      <mt-tab-item id="2">风格</mt-tab-item>
      <mt-tab-item id="3">广场</mt-tab-item>
      <mt-tab-item id="4">我的</mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabselected: "1",
    };
  },
};
</script>

<style lang="scss" scoped>
// logo 开始
.logo {
  display: block;
  width: 75px;
  height: 40px;
}
.mint-header {
  background-color: rgb(229, 225, 222);
}

// header 开始
.mint-header-button.is-right {
  > div {
    user-select: none;
    display: flex;
    line-height: 40px;
    font-size: 14px;
    color: rgb(119, 91, 68);
    .search {
      margin-right: 5px;
      > input {
        height: 26px;
        width: 150px;
        // input首行缩进
        text-indent: 10px;
        border-radius: 15px;
        margin-right: 3px;
        outline: none;
        border: 1px solid rgb(229, 225, 222);
      }
    }
    .login {
      > span {
        padding-left: 13px;
      }
    }
  }
}

// tabbar开始

//字体颜色
.mint-tabbar {
  color: rgb(119, 91, 68);
}
//active颜色
.mint-tabbar > .mint-tab-item.is-selected {
  color: rgb(253, 188, 112);
}
// 固定tabbar在底部
.mint-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
