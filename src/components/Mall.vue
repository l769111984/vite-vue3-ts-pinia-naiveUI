<template>
  <div>
    <div>商品详情页面</div>
    <n-table
      :bordered="false"
      :single-line="false"
    >
      <thead>
        <tr>
          <th>商品id</th>
          <th>商品名称</th>
          <th>商品地址</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in mallList"
          :key="item.id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.url }}</td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>

<script setup lang="ts">
interface IMall {
name: string;
id: string;
url: string;
}
const mallList = ref<IMall[]>([{
  name: 'apple',
  id: '1-1',
  url: 'http:www.baidu.com'
}, {
  name: 'huawei',
  id: '2-1',
  url: 'http:www.baidu.com'
}])

</script>

<style scoped>

</style>
