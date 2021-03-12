<template>
  <div class="card_container">
    <div class="card_title" :style="'background: url(' + defaultData.titleImage + ') no-repeat; '">
    <span class="card_title_text">
      {{ title || defaultData.title }}
    </span>
    </div>
    <div class="card_body">
      <slot name="body"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "card",
    props: {
      title: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        defaultData: {
          titleImage: require('../../assets/bg/bg_card_title.png'),
          title: '-'
        }
      }
    }
  }
</script>

<style scoped>
  .card_container {
    padding: 30px;
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border: 0;
  }

  .card_title {
    width: 100%;
    height: 46px;
  }

  .card_title_text {
    line-height: 46px;
    margin-left: 36px;
    font-size: 18px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }

  .card_body {
    height: calc(100% - 46px - 60px);
    width: calc(100% - 60px);
    margin: 30px;
  }
</style>
