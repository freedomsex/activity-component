import ActivityBehavior from './src/mixin/activity-behavior';
import ActivityHeader from './ActivityHeader';

export default {
  props: ['caption', 'type'],
  extends: ActivityBehavior,
  data: () => ({ }),
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
