<template>
  <div>
    <el-col :span="itemWidth">
      <div class="data_item_image_image">
        <img :src="itemImage || defaultData.itemImage"/>
      </div>
      <div class="data_item_image_content">
        <div class="data_item_image_content_key">
          {{ itemKey || defaultData.itemKey }}
        </div>
        <div class="data_item_image_content_value">
          {{ itemValue || defaultData.itemValue }}
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: "data-item-image",
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
      itemWidth: {
        type: Number,
        default: 12
      }
    },
    data() {
      return {
        defaultData: {
          itemImage: require('../../../../../assets/icon/ico_default.png'),
          itemKey: '-',
          itemValue: '-',
        }
      }
    },
  }
</script>

<style scoped>
  .data_item_image_image {
    float: left;
  }

  .data_item_image_image img {
   width: 40px;
   height: 40px;
 }

  .data_item_image_content {
    float: left;
    margin-left: 8px;
  }

  .data_item_image_content_key {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 2px;
  }

  .data_item_image_content_value {
    font-size: 20px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    margin-top: 2px;
  }
</style>
