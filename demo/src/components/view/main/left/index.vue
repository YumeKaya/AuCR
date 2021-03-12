<template>
  <div>
    <border_left :drawer-visible="drawerVisible">
      <div slot="body">
        <dataListImage title="数据一览" :data-object-list="dataObjectList" />
      </div>
    </border_left>
  </div>
</template>

<script>
  import border_left from '../../../main/border/left'
  import dataListImage from '../../../chart/data/data-list/with-image'

  export default {
    name: "main-left",
    components: {
      border_left,
      dataListImage,
    },
    props: {
      drawerVisible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        dataObjectList: [
          {
            image: require('../../../../assets/icon/ico_resident.png'),
            key: '住户',
            value: '1111'
          },
          {
            image: require('../../../../assets/icon/ico_staff.png'),
            key: '员工',
            value: '1122'
          },
          {
            image: '',
            key: '车辆',
            value: '2211'
          },
          {
            image: '',
            key: '收费',
            value: '2222'
          },
          {
            image: '',
            key: '单日报警',
            value: '331'
          },
          {
            image: '',
            key: '进出高峰时段',
            value: '11:11-19:19'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
