<template>
  <div class="user-card">
    <img
      class="user-card__avatar"
      :src="item.photo"
    />

    <span></span>
  </div>
</template>

<script setup lang="ts">
import type { IUser } from '../types'
interface IProps {
  item: IUser
}
defineProps<IProps>()
</script>