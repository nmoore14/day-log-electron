<template>
  <div id="app" style="-webkit-app-region: drag" class="flex min-h-screen">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="w-56 bg-grey-darkest text-white border-r border-blackblack fixed min-h-screen">
      This is the sidebar
    </div>
    <router-view/>
  </div>
</template>

<style src="./assets/main.css">
