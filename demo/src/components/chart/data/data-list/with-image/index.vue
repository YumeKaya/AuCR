<template>
  <div>
    <card :title="title">
      <div slot="body">
        <div v-if="!dataObjectList || !dataObjectList.length || dataObjectList.length <= 0">
          暂无数据信息
        </div>
        <div v-else>
          <div v-for="(dataObject, index) in dataObjectList" :key="index">
            <div v-if="index % maxColumn == 0">
              <el-row :style="'margin-bottom: ' + marginBottom + 'px; '">
                <data-item
                  :item-image="dataObject.image"
                  :item-key="dataObject.key"
                  :item-value="dataObject.value"
                  :item-width="Math.floor(24 / maxColumn)"
                />
                <div v-for="index_ in maxColumn - 1" :key="index_">
                  <div v-if="index_ + maxColumn < dataObjectList.length">
                    <data-item
                      :item-image="dataObjectList[(parseInt(index) + parseInt(index_))].image"
                      :item-key="dataObjectList[(parseInt(index) + parseInt(index_))].key"
                      :item-value="dataObjectList[(parseInt(index) + parseInt(index_))].value"
                      :item-width="Math.floor(24 / maxColumn)"
                    />
                  </div>
                </div>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
  import card from '../../../../card'
  import dataItem from '../../data-item/with-image'

  export default {
    name: "data-list-image",
    components: {
      card,
      dataItem
    },
    props: {
      title: {
        type: String,
        default: () => {
          return 'unknown'
        }
      },
      dataObjectList: {
        type: Array,
        default: () => {
          return [{}]
        }
      },
      maxColumn: {
        type: Number,
        default: 2
      },
      marginBottom: {
        type: Number,
        default: 30
      }
    },
    data() {
      return {

      }
    },
  }
</script>

<style scoped>

</style>
