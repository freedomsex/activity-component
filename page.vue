<script>
import ActivityHeader from './ActivityHeader';
import ActivityBehavior from './activity-behavior';

export default {
  name: 'DefaultActivity',
  props: ['caption', 'type'],
  extends: ActivityBehavior,
  data: () => ({

  }),
  components: {
    ActivityHeader,
  },
  computed: {
    style() {
      if (this.type === 'wrapped') {
        return 'wrapped-page';
      }
      if (this.type === 'content') {
        return 'content-page';
      }
      return 'default-page';
    },
  },
};
</script>

<template>
  <div class="activity-page">
    <ActivityHeader :caption="caption" :back="true" :fixed="true" @close="$emit('close')">
      <template #caption>
        <slot name="caption"/>
      </template>
      <template #option>
        <slot name="option"/>
      </template>
    </ActivityHeader>

    <div :class="style" @click.self="$emit('close')">
      <div class="activity-page__wrapper">
        <slot name="header"/>

        <div class="activity-page__container">
          <slot></slot>
        </div>

        <div class="activity-page__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.activity {
  &-section {
    margin-bottom: @indent-lg;

    &__title {
      margin-bottom: @indent-sm;
      font-size: 20px;
    }
    &__tile {
      margin-bottom: @indent-xs;
      color: @carbon;
    }
    // &__link {
    //   display: inline-block;
    //   padding: @indent-xs 0;
    //   .link_simple;
    // }
  }

  &__title {
    font-weight: bolder;
    line-height: 20px;
  }
  &__content {
    padding: @indent-sm @indent-sm @indent-md;
  }
  &__loader {
    color: @gray;
  }
  &__splitter {
    height: @indent-sm;
  }
  &__footer {
    flex: 0 1 auto;
  }
}

.activity-page {
  flex: 1 1 auto;

  &__wrapper {
    max-width: @activity-width;
    // min-height: @activity-height;
    margin: 0 auto;
    background: @white;
    // box-shadow: 0 0px 1px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
  }
  &__container {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    flex: 1 1 auto;
    overflow-y: auto;
    padding: @indent-sm @indent-sm @indent-md;
  }

  .activity-page-mixin() {
    height: 100%;
    max-width: @document-width;
    margin: 0 auto;
    padding-top: @menu-bar-height;
  }

  .default-page {
    .activity-page-mixin;
    .activity-page {
      &__container {
        padding: 0;
      }
    }
  }

  .wrapped-page {
    .activity-page-mixin;
    .activity-page {
      &__container {
        padding: @indent-sm @indent-sm @indent-xl;
      }
    }
  }

  .content-page {
    .activity-page-mixin;
    .activity-page {
      &__container {
        h1 {
          margin-top: @indent-xs;
        }
      }
    }
  }

}

.hint-info {
  background: @light;
  //border: 1px solid @gray-light;
  color: @dark;
  // margin-bottom: 10px;
  padding: 10px 15px;
}

.context-info {
// margin-top: 10px;
  //border: 1px solid @gray-light;
  color: @gray;
}

.limited-form {
  max-width: 220px;
}

</style>
