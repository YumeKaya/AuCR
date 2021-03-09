<template>
  <div>
    <el-form ref="form" label-width="120px">
      <el-form-item label="云渲染服务地址">
        <el-input disabled v-model="this.cloudUrl"></el-input>
      </el-form-item>
      <el-form-item label="场景id">
        <el-input disabled v-model="this.projectId"></el-input>
      </el-form-item>
      <el-form-item label="账号">
        <el-input disabled v-model="this.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input disabled v-model="this.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="medium" type="primary" @click="start">开始</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        cloudUrl: state => state.init.cloudUrl,
        projectId: state => state.init.projectId,
        username: state => state.init.username,
        password: state => state.init.password,
      })
    },
    data() {
      return {

      }
    },
    methods: {
      start() {
        this.$store.commit('SetInit', true)
        this.$router.push('/main')
      }
    }
  }
</script>
