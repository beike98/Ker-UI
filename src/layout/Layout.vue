<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const menus = router.options.routes.filter(({name})=> name!=='Root');
</script>

<template>
  <div class="layout">
    <ul class="menu">
      <li
        v-for="{name,path} in menus"
        :key="name"
      >
        <router-link :to="path">
          {{ name }}
        </router-link>
      </li>
    </ul>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;

  .menu {
    width: 100px;
    height: 100vh;
    border-right: 1px solid #abcdef;
    padding: 2px 5px;
  }

  .view {
    margin-left: 2px;
  }
}
</style>