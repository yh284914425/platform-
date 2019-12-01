<template>
  <!-- <div>
    <el-form :model="userForm" status-icon :rules="rules" ref="LoginForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="test" v-model="userForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>-->
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div class="manage_tip">
          <p>组内平台</p>
        </div>
        <el-form :model="userForm" :rules="rules" ref="LoginForm">
          <el-form-item prop="username">
            <el-input v-model="userForm.username" placeholder="用户名">
              <span>用户名</span>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="userForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
import User from "../model/user";
import { async } from "q";
export default {
  data() {
    return {
      userForm: {
        username: "root",
        password: "root1234"
      },
      rules: {
        username: [
          { require: true, message: "用户名不能为空", trigger: "blur" },
          { max: 10, min: 3, message: "用户名为3到10位", trigger: "blur" }
        ],
        password: [
          { require: true, message: "密码不能为空", trigger: "blur" },
          { max: 10, min: 3, message: "密码为3到10位", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async submitForm() {
      this.$refs["LoginForm"].validate(async valid => {
        if (!valid) {
          alert("error submit!!");
          return false;
        }
        try {
          let { status } = await User.authenticate(this.userForm);
          if (status != 200) {
            return this.$msg.error("请求失败");
          }
        } catch (error) {
          return this.$msg.error("请求失败");
        }
        this.$msg.success("请求成功");
      });
    },
    resetForm() {
      User.createUser({ ...this.userForm, friendly_name: "333" });
    }
  }
};
</script>

<style lang='less' scoped>
@import url(../assets/style/mixin);
.login_page {
  background-color: #324057;
}
.manage_tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p {
    font-size: 34px;
    color: #fff;
  }
}
.form_contianer {
  .wh(320px, 160px);
  .ctp(320px, 210px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
}
.tip {
  font-size: 12px;
  color: red;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>