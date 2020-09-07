<script>
import ActivityTypes from './src/mixin/activity-types';
export default {
  name: 'PageSimple',
  extends: ActivityTypes,
};
</script>

<template>
  <div class="page-simple">
    <ActivityHeader :caption="caption" :back="true" :fixed="true" @close="$emit('close')">
      <template #caption>
        <slot name="caption"/>
      </template>
      <template #option>
        <slot name="option"/>
      </template>
    </ActivityHeader>

    <div :class="style" @click.self="$emit('close')">
      <div class="page-simple__wrapper">
        <slot name="header"/>

        <div class="page-simple__container">
          <slot></slot>
        </div>

        <div class="page-simple__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "./src/styles/mixin";
@import "./src/styles/common";

.page-simple {

  .types-mixin();

  .page-simple-mixin() {
    .page-mixin();
  }

  .default-page {
    .page-simple-mixin();
    .page-simple {
      &__container {
        .default-type();
      }
    }
  }
  .wrapped-page {
    .page-simple-mixin();
    .page-simple {
      &__container {
        .wrapped-type();
      }
    }
  }
  .content-page {
    .page-simple-mixin();
    .page-simple {
      &__container {
        .content-type();
      }
    }
  }
}
</style>
