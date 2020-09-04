<script>
import ActivityTypes from './src/mixin/activity-types';
export default {
  name: 'PageFlex',
  extends: ActivityTypes,
};
</script>

<template>
  <div class="page-flex">
    <ActivityHeader :caption="caption" :back="true" :fixed="true" @close="$emit('close')">
      <template #caption>
        <slot name="caption"/>
      </template>
      <template #option>
        <slot name="option"/>
      </template>
    </ActivityHeader>

    <div :class="style" @click.self="$emit('close')">
      <div class="page-flex__wrapper">
        <slot name="header"/>

        <div class="page-flex__container">
          <slot></slot>
        </div>

        <div class="page-flex__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "./src/styles/mixin";
@import "./src/styles/common";

.page-flex {
  display: flex;
  flex-direction: column;

  .section-mixin();

  .types-mixin();

  // &__wrapper {
  //   display: flex;
  //   flex-direction: column;
  // }
  &__container {
    flex: 1 1 auto;
  }

  .page-flex-mixin() {
    .page-mixin();

  }

  .default-page {
    .page-flex-mixin();
    .page-flex {
      &__container {
        .default-type();
      }
    }
  }
  .wrapped-page {
    .page-flex-mixin();
    .page-flex {
      &__container {
        .wrapped-type();
      }
    }
  }
  .content-page {
    .page-flex-mixin();
    .page-flex {
      &__container {
        .content-type();
      }
    }
  }
}
</style>
