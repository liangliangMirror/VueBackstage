<template>
  <nav class="navbar">
    <div class="navbar-header">
      <a
        :class="acolor ? 'navbar-brand':'navbar-brand acolor'"
        @mouseenter="isokt"
        @mouseleave="isokf"
        href="index.html"
      >
        <b>掌</b>上弥勒
      </a>
    </div>

    <ul class="headnavul">
      <li class="dropdown" v-for="item in 4" :key="item">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
          <i class="fa fa-envelope fa-fw"></i>
          <i class="fa fa-caret-down"></i>
        </a>

        <!-- /.dropdown-messages -->
      </li>
      <!-- /.dropdown -->
      <!-- <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
          <i class="fa fa-tasks fa-fw"></i>
          <i class="fa fa-caret-down"></i>
      </a>-->

      <!-- /.dropdown-tasks -->
      <!-- </li> -->
      <!-- /.dropdown -->
      <!-- <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
          <i class="fa fa-bell fa-fw"></i>
          <i class="fa fa-caret-down"></i>
      </a>-->

      <!-- /.dropdown-alerts -->
      <!-- </li> -->
      <!-- /.dropdown -->
      <!-- <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
          <i class="fa fa-user fa-fw"></i>
          <i class="fa fa-caret-down"></i>
        </a>
      </li>-->
    </ul>
  </nav>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      acolor: true
    };
  },
  //   directives: {
  //     hover(el) {
  //       el.onmouseover = function() {
  //         console.log(this.acolor);
  //       };
  //       el.onmousout = function() {
  //         console.log("移出" + this.acolor);
  //       };
  //     }
  //   },
  methods: {
    isokt() {
      this.acolor = false;
    },
    isokf() {
      this.acolor = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
  .navbar-header {
    .navbar-brand {
      color: #fff;
      width: 260px;
      text-align: left;
      height: 60px;
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 30px;
      background: #32323a;
      display: inline-block;
      padding: 15px 15px;
      box-sizing: border-box;
      text-align: center;
      b {
        color: #2dafcb;
      }
    }
    .acolor {
      color: #2dafcb;
    }
  }
  .headnavul {
    // flex: 1;
    display: flex;
    justify-content: space-around;
    margin-right: -15px;
    .dropdown {
      //   flex: 1;
      a {
        position: relative;
        display: block;
        padding: 20px;
        color: #ffffff;
        margin: 0px;
        i {
          margin-right: 2px;
        }
      }
    }
  }
}
</style>
