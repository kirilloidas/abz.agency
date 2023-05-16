<template>
  <div class="user-card">
    <img
      class="user-card__avatar"
      :src="item.photo"
    />

    <p class="user-card__text user-card__text_name p1 ellipsis">{{ item.name }}</p>
    <p class="user-card__text user-card__text_position p1 ellipsis">{{ item.position }}</p>
    <p class="user-card__text user-card__text_email p1 ellipsis">{{ item.email }}</p>
    <p class="user-card__text user-card__text_phone p1 ellipsis">{{ item.phone }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IUser } from '../types'
interface IProps {
  item: IUser
}
defineProps<IProps>()
</script>

<style scoped lang="scss">
.user-card {
  border-radius: 10px;
  padding: 20px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 254px;
  width: 370px;

  &__avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  &__text {
    width: 100%;
    text-align: center;
    &_name {
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 1170px) {
  .user-card {
    width: 282px;
  }
}

@media (max-width: 1023px) {
  .user-card {
    width: 344px;
  }
}

@media (max-width: 767px) {
  .user-card {
    width: 328px;
  }
}
</style>