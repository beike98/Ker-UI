<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const menus = router.options.routes;
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
    <router-view />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
}
.menu {
  width: 100px;
  height: 100vh;
  border-right: 1px solid #abcdef;
}
</style>