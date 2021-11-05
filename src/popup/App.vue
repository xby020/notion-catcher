<template>
  <div class="flex p-2" style="width: 360px; height: 420px">
    <route-view></route-view>
  </div>
</template>

<script setup lang="ts">
const tab = await chrome.tabs.query({ active: true, currentWindow: true });
</script>

<style scoped></style>
