declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $bus: any
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    bus?: any;
  }
}
