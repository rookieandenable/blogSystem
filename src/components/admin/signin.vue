<template>
  <div id="sign_wrap">
    <h1>后台管理</h1>
    <el-input v-model="name" placeholder="请输入用户名"></el-input>
    <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
    <router-link to="/admin/signup"><el-button>注册</el-button></router-link>
    <el-button type="primary" @click="signin">登录</el-button>
  </div>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {
      name: "",
      password: "",
      hasName: false // 用户名被占
    };
  },
  mounted: function() {},
  methods: {
    // signup: function() {
    //   let that = this;
    //   if (this.name.length < 6) {
    //     this.$message.error("用户名不为空或小于六个字符");
    //     return;
    //   }

    //   if (this.password.length < 6) {
    //     this.$message.error("密码不为空或小于六个字符");
    //     return;
    //   }

    //   this.$http.get("/aip/admin/getUser/" + this.name).then(
    //     response => {
    //       if (response.body.name === that.name) {
    //         that.$message.error("该用户已存在");
    //         that.name = "";
    //       } else {
    //         let obj = {
    //           name: that.name,
    //           password: that.password
    //         };

    //         that.$http.post("/api/admin/signup", {
    //             userInfo: obj
    //           })
    //           .then(
    //             response => {
    //               that.$message({
    //                 message: "注册成功",
    //                 type: "success"
    //               });
    //             },
    //             response => {
    //              that.$message.error('注册失败')
    //             }
    //           );
    //       }
    //     },
    //     response => {
    //       console.log(response);
    //     }
    //   );
    // },
   signin: function () {
        let _this = this;
        if (this.name.length < 6) {
          this.$message.error('用户名不能为空或小于六个字符')
          return
        }

        if (this.password.length < 6) {
          this.$message.error('密码不能为空或小于六个字符')
          return
        }

        this.$http.get('/api/admin/getUser/' + this.name).then(
          response => {
            if (_this.password !== response.body.password) {
              _this.$message.error('用户名或密码不正确')
            } else {
              let obj = {
                name: _this.name,
                password: _this.password
              }
              _this.$http.post('/api/admin/signin', {
                userInfo: obj
              }).then(
                response => {
                  _this.$message({
                    message: '登录成功' + '---你好,' + _this.name,
                    type: 'success'
                  })
                  delete _this.password;
                  _this.$router.go(-1)
                },
                response => _this.$message('登录失败')
              )
            }
          },
          response => {
            _this.$message.error('该用户不存在')
            return
          }
        )
      }
  }
};
</script>

<style>
#sign_wrap {
  width: 300px;
  margin: 200px auto;
}

#sign_wrap h1 {
  color: #383a42;
  padding: 10px;
}

#sign_wrap div {
  padding-bottom: 20px;
}
</style>