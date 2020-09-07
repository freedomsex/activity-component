<script>
import ActivityTypes from './src/mixin/activity-types';
export default {
  name: 'PageBoard',
  extends: ActivityTypes,
};
</script>

<template>
  <div class="page-board">
    <ActivityHeader :caption="caption" :back="true" :fixed="true" @close="$emit('close')">
      <template #caption>
        <slot name="caption"/>
      </template>
      <template #option>
        <slot name="option"/>
      </template>
    </ActivityHeader>

    <div :class="style" @click.self="$emit('close')">
      <div class="page-board__wrapper">
        <slot name="header"/>

        <div class="page-board__container">
          <slot></slot>
        </div>

        <div class="page-board__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "./src/styles/mixin";
@import "./src/styles/common";

.page-board {
  height: 100%;
  max-height: 100%;
  overflow: hidden;

  .types-mixin();

  &__wrapper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
  }
  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1 1 auto;
    overflow-y: auto;
  }

  .page-board-mixin() {
    .page-mixin();

    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
  }

  .default-page {
    .page-board-mixin();
    .page-board {
      &__container {
        .default-type();
      }
    }
  }
  .wrapped-page {
    .page-board-mixin();
    .page-board {
      &__container {
        .wrapped-type();
      }
    }
  }
  .content-page {
    .page-board-mixin();
    .page-board {
      &__container {
        .content-type();
      }
    }
  }
}
</style>
