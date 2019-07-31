<template>
  <div>
    <HeadNav />
    <div class="homemain">
      <LeftNav />
      <router-view class="rigthmain" />
    </div>
  </div>
</template>

<script>
import HeadNav from "../../components/home/HeadNav";
import LeftNav from "../../components/home/leftnav";
export default {
  components: {
    HeadNav,
    LeftNav
  }
};
</script>

<style lang="scss" scoped>
.homemain {
  padding-top: 60px;
  display: flex;
  height: 100%;

  .rigthmain {
    flex: 1;
    background: #f5f5f5;
    padding: 15px 30px;
  }
}
</style>
