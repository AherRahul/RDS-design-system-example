<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <cds-page-layout
      v-bind="{
        variant: 'red',
        light: true,
        user: {
          name: 'Joana Mendes',
          role: 'Administrator',
          picture: 'https://this-person-does-not-exist.com/img/avatar-gen83fa18cdcd216e7220794a23e76fe0dc.jpg'
        },
        logos: {
          default: 'https://rahulaher.netlify.app/img/logo/word-black-colored.svg',
          collapsed: 'https://rahulaher.netlify.app/img/logo/glyph-black-colored.svg'
        },
        navigationActiveItem: {
          key: 'home',
          label: 'Home',
          route: {
            name: 'home'
          }
        },
        collapsibleSideBar: true,
        sideBarItems: [
          {
            label: 'Start',
            icon: 'home-outline',
            type: 'route',
            route: {
              path: '/',
              name: 'home'
            }
          },
          {
            label: 'Booking Center',
            icon: 'calendar-outline',
            type: 'route',
            route: {
              path: '/about',
              name: 'about'
            }
          },
        ],
        navigationItems: [
          {
            key: 'dashboard',
            label: 'Dashboard',
            route: {
              name: 'home'
            }
          },
          {
            key: 'about',
            label: 'Start',
            route: {
              name: 'about'
            }
          },
        ],
      }"
      @click="true"
    />
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>
</style>
