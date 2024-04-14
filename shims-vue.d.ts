// shims-vue.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // eslint-disable-next-line ts/no-explicit-any
  const component: DefineComponent<object, object, any>;
  export default component;
}
