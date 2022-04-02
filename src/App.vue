<script setup lang="ts"></script>

<template>
  <div class="layout">
    <ul class="menu">
      <li>
        <router-link to="/tree">
          Tree
        </router-link>
      </li>
      <li>
        <router-link to="/table">
          Table
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.layout {
  display: flex;
}
.menu {
  width: 100px;
  height: 100vh;
  border-right: 1px solid #abcdef;
}
</style>
