<template>
  <div id="app">
    <!-- vue-split-panel 组件示例 -->
    <vue-split-panel :sizes="[30, 40, 30]" :min-size="[50, 100]" direction="vertical">
      <template slot="__TOP__">
        <vue-split-panel :sizes="[30, 40, 30]" :min-size="[50, 100]" direction="horizontal">
          <template slot="__TOP_LEFT__">
            <h1>LEFT</h1>
          </template>
          <template slot="__TOP_CENTER__">
            <h1>CENTER</h1>
          </template>
          <template slot="__TOP_RIGHT__">
            <h1>RIGHT</h1>
          </template>
        </vue-split-panel>
      </template>
      <template slot="__MIDDLE__">
        <vue-split-panel :sizes="[50, 50]" :min-size="[0, 0]" direction="horizontal">
          <template slot="__MIDDLE_LEFT__">
            <h1>LEFT</h1>
          </template>
          <template slot="__MIDDLE_RIGHT__">
            <h1>RIGHT</h1>
          </template>
        </vue-split-panel>
      </template>
      <template slot="__BOTTOM__">
        <vue-split-panel :sizes="[50, 50]" :min-size="[0, 0]" direction="vertical">
          <template slot="__BOTTOM_TOP__">
            <h1>LEFT</h1>
          </template>
          <template slot="__BOTTOM_BOTTOM__">
            <h1>RIGHT</h1>
          </template>
        </vue-split-panel>
      </template>
    </vue-split-panel>
  </div>
</template>

<script>
import VueSplitPanel from "./components/split-panel";
export default {
  components: {
    VueSplitPanel,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
}
</style>
