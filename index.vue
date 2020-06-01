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
        return 'wrapped-activity';
      }
      if (this.type === 'content') {
        return 'content-activity';
      }
      return 'default-activity';
    },
  },
};
</script>

<template>
  <div>
    <div class="activity__mask" @click.self="$emit('close')"></div>
    <div class="activity-component" :class="style" @click.self="$emit('close')">
      <div class="activity__wrapper">
        <ActivityHeader :caption="caption" :back="true" @close="$emit('close')">
          <template slot="option">
            <slot name="option"></slot>
          </template>
        </ActivityHeader>
        
        <slot name="header"></slot> 
        
        <div class="activity__container">
          <slot></slot>
        </div>
        
        <div class="activity__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div> 
</template>

<style lang="less">
.activity {
  &__mask {
    .fixed-dialog-mask;
  }
  &__title {
    font-weight: bolder;
    line-height: 20px;
  }
  &__wrapper {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: @activity-width;
    @media (min-width: @activity-width) {
      max-height: @activity-height;
    }

    background: @white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  &__container {
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1 1 auto;
    overflow-y: auto;
    padding: @indent-sm @indent-sm @indent-md;
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

.activity-mixin() {
  .fixed-container();

  max-width: @document-width;

  margin: 0 auto;
  overflow: hidden;
}

.default-activity {
  .activity-mixin;
  .activity {
    &__container {
      padding: 0;
    }
  }
}

.wrapped-activity {
  .activity-mixin;
  .activity {
    &__container {
      padding: @indent-sm @indent-sm @indent-md;
    }
  }
}

.content-activity {
  .activity-mixin;

  .activity {
    &__wrapper {
      max-width: 100%;
      max-height: 100%;
    }
    &__container {
      height: calc(~'100% - 50px');
      padding: @indent-sm @indent-sm @indent-xl;
      h1 {
        margin-top: @indent-xs;
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

.activity-section {
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

  .limited-form {
    max-width: 220px;
  }

</style>
