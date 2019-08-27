<template>
  <div class="main_menu">
    <div id="left_menu">
      <div class="menu_name">
        <h1>RookieSun.blog</h1>
        <h5>不如吃茶去</h5>
      </div>
      <nav>
        <ul>
          <router-link to="/article">
            <li class="nav">
              <span>首页</span>
            </li>
          </router-link>
          <router-link to="/about">
            <li class="nav">
              <span>关于</span>
            </li>
          </router-link>
          <router-link to="/admin/signin">
            <li class="nav">
              <span>登录</span>
            </li>
          </router-link>
          <router-link to="/admin/articleList">
            <li class="nav">
              <span>管理</span>
            </li>
          </router-link>
          <router-link to="/admin/articleEdit">
            <li class="nav">
              <span>写文章</span>
            </li>
          </router-link>
        </ul>
      </nav>
      <div class="info">
        <img src="../assets/head.jpg" alt="head" />
        <div class="info_name">rookieSun</div>
        <div class="archive">
          <ul>
            <router-link to="/article">
              <li>
                <span class="archive_count">{{ articleNumber }}</span>
                <span class="archive_name">日志</span>
              </li>
            </router-link>
          </ul>
        </div>
        <ul class="communication">
          <li class="communication_item">
            <a href="#">
              <span>GitHub</span>
            </a>
          </li>
          <li class="communication_item">
            <a href="#">
              <span>知乎</span>
            </a>
          </li>
          <li class="communication_item">
            <a href="#">
              <span>vue.js</span>
            </a>
          </li>
          <li class="communication_item">
            <a href="#">
              <span>node菜鸟教程</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right_menu">
      <div class="main">
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="blog管理" name="second"><tab-article/></el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import article from './article'

export default {
  name: "sidebar",
  components: {
    tabArticle:article
  },
  data() {
    return {
      articleNumber: "",
      activeName: 'second',
    };
  },
  mounted: function() {},

  methods: {
    handleClick(tab, event) {
      console.log(this.activeName)
    }
  }
};
</script>

<style>
.main_menu {
  display: flex;
  flex-direction: row;
}

.el-tabs__item {
  padding: 60px 136px 80px 136px !important;
  /* background: #40a9fd; */
  /* color: #2c3e50 !important; */
}
#tab-first:hover {
  background: #40a9fd;
  color: #fff;
}
#tab-second:hover {
  background: #40a9fd;
  color: #fff;
}
#tab-third:hover {
  background: #40a9fd;
  color: #fff;
}

#tab-fourth:hover {
  background: #40a9fd;
  color: #fff;
}

#left_menu {
  width: 290px;
  margin-right: 20px;
}

@media (max-width: 767px) {
  #left_menu {
    display: none;
  }
}

#left_menu a:hover {
  color: #222;
  background: #f5f7f9;
}

.menu_name {
  background: rgb(38, 42, 48);
  color: white;
  padding: 10px 0;
}

nav {
  background: white;
  padding: 20px 0;
}

.nav {
  padding: 8px 20px;
  text-align: center;
}

.info {
  margin-top: 10px;
  padding: 20px;
  background: white;
}

.info_name {
  font-weight: 600;
  padding: 5px;
}

.info img {
  width: 120px;
  height: 120px;
}

.archive {
  padding-top: 20px;
}

.archive .archive_count {
  display: block;
  color: #222;
  font-weight: 600;
  font-size: 16px;
}

.archive .archive_name {
  display: block;
  color: #999;
  font-size: 14px;
}

.communication {
  padding-top: 20px;
}

.communication_item {
  margin: 10px auto;
  width: 40%;
  font-size: 14px;
  font-weight: 600;
  padding: 5px;
}
</style>