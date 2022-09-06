<template>
  <div>
    <!-- navbar -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全屋</mt-tab-item>
      <mt-tab-item id="2">客厅</mt-tab-item>
      <mt-tab-item id="3">卧室</mt-tab-item>
      <mt-tab-item id="4">厨房</mt-tab-item>
      <mt-tab-item id="5">书房</mt-tab-item>
      <mt-tab-item id="6">儿童房</mt-tab-item>
    </mt-navbar>

    <!-- 内容区域 -->
    <button @click="getData">获取数据</button>

    <div class="main" v-if="data">
      <div class="list" v-for="item in data.data" :key="item.pid">
        <h3>{{ item.pname }}</h3>
        <div class="img">
          <img :src="`/img/${item.pimg}`" alt="" />
        </div>
        <div>
          <span>{{ item.rname }}</span>
          <span>{{ item.sname }}</span>
          <span>￥:{{ item.price }}</span>
        </div>
        <p>{{ item.psubname }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      data: null,
    };
  },
  methods: {
    getData() {
      let url = "http://localhost:3000/product/list?rname=客厅";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// navbbar开始
// navbar 查看到具体的颜色为inherit（继承父级）所以选择父元素.mint-navbar ，否则不生效（亲测多次）
.mint-navbar {
  color: rgb(119, 91, 68);
}
// 选中时active的颜色修改
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid rgb(253, 188, 112);
  color: rgb(253, 188, 112);
}

// 主显示区
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #eee;
  > .list {
    display: flex;
    flex-direction: column;
    width: 130px;
    background-color: white;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    > h3 {
      font-size: 14px;
      margin: 0 0 5px 0;
      font-weight: 600;
    }
    .img {
      width: 130px;
      height: 100px;
      > img {
        display: block;
        width: 100%;
        margin-bottom: 20px;
      }
    }
    > div {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      > span {
        padding: 5px;
        border-radius: 2px;
        background-color: rgb(200, 233, 101);
      }
    }
    > p {
      font-size: 12px;
    }
  }
}
</style>