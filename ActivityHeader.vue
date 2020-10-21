<script>
import HeaderBar from '@freedomsex/header-bar';

export default {
  props: ['back', 'caption', 'glass', 'fixed'],
  computed: {
    backButton() {
      if (this.back === false) {
        return false;
      }
      return this.back || this.caption;
    },
  },
  components: {
    HeaderBar,
  },
};
</script>

<template>
  <HeaderBar :glass="glass" :fixed="fixed" :caption="caption">
    <div class="header-bar__wrapper">
      <div class="header-bar__container">
        <div class="header-bar__button caption" @click="$emit('close')">
          <i class="material-icons" v-if="backButton">&#xE5C4;</i>
          <span class="header-bar__title" >
            <slot name="caption">
              {{caption}}
            </slot>
          </span>
        </div>

        <div class="header-bar__navbar">
          <slot name="option"></slot>
        </div>
      </div>
    </div>
  </HeaderBar>
</template>
