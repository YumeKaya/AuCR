<template>
  <div>
    <el-col :span="12">
      <div class="data_item_percentage_image">
        <img :src="itemImage || defaultData.itemImage"/>
      </div>
      <div class="data_item_percentage_content">
        <div class="data_item_percentage_content_key">
          {{ itemKey || defaultData.itemKey }}
        </div>
        <div class="data_item_percentage_content_value">
          {{ itemValue || defaultData.itemValue }}
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: "data-item-percentage",
    props: {
      itemImage: {
        type: String,
        default: ''
      },
      itemKey: {
        type: String,
        default: ''
      },
      itemValue: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        defaultData: {
          itemImage: '../../../../assets/logo.png',
          itemKey: '-',
          itemValue: '-',
        }
      }
    },
  }
</script>

<style scoped>

  .data_item_percentage_image {
    float: left;
  }

  .data_item_percentage_image img {
   width: 40px;
   height: 40px;
 }

  .data_item_percentage_content {
    float: left;
  }

  .data_item_percentage_content_key {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }

  .data_item_percentage_content_value {
    font-size: 20px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
</style>
