<template>
  <section class="users-section">
    <h2 class="users-section__title h1">Working with GET request</h2>

    <div class="list-block">
      <ul 
        class="user-list"
      >
        <li 
          class="user-list__item"
          v-for="item of users"
          :key="item.id"
        >
          <UserCard
            :item="item"
          />
        </li>
      </ul>
    </div>

    <CustomButton 
      class="users-section__btn"
      :disabled="isAllUsers"
      @click="showMore"
    >
      Show more
    </CustomButton>
  </section>
</template>

<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue';
import UserCard from './components/UserCard.vue';
import { useUsersSection } from './composables/useUserSection';

const {
  users,
  isAllUsers,
  showMore,
} = useUsersSection()
</script>

<style scoped lang="scss">
.users-section {
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin-bottom: 50px;
    text-align: center;
  }

  &__btn {
    margin-top: 54px;
  }

  .list-block {
    .user-list {
      display: flex;
      flex-wrap: wrap;
      gap: 29px;
      justify-content: center;
    }
  }
}
</style>