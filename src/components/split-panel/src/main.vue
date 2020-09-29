<template>
  <div :class="'split-panel ' + direction">
    <div v-for="pane in panes" :id="pane" :key="pane">
      <slot :name="pane" />
    </div>
  </div>
</template>

<script>
import Split from "split.js";
export default {
  name: "VueSplitPanel",
  props: {
    sizes: { type: [Number, Array] },
    minSize: { type: [Number, Array] },
    direction: { type: String, default: "vertical" },
    gutterSize: { type: Number, default: 6 },
    // onDragEnd: Function,
  },
  computed: {
    panes() {
      return Object.keys(this.$slots) || [];
    },
  },
  data() {
    return {
      instance: null,
    };
  },
  mounted() {
    // 添加 panel 样式
    this.panes.forEach((item) => {
      let panel = document ? document.querySelector(`#${item}`) : null;
      if (panel) {
        panel.classList.add("panel");
        panel.classList.add(`${this.direction}-panel`);
      }
    });
    // 实例化分隔面板组件
    this.instance = Split([...this.panes.map((item) => `#${item}`)], {
      sizes: this.sizes,
      minSize: this.minSize,
      direction: this.direction,
      gutterSize: this.gutterSize,
      onDragEnd: (sizes) => {
        // if (this.onDragEnd) {
        //   this.onDragEnd({ sizes, split: this.instance });
        // }
        this.$emit("drag-end", { sizes, split: this.instance });
      },
    });
  },
};
</script>

<style lang="stylus">
.split-panel
  height: 100%
  width: 100%
  .panel
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    overflow-y: auto
    overflow-x: hidden
  .gutter
    background-color: #f7f7f7
    background-repeat: no-repeat
    background-position: 50%
.split-panel.vertical
  .gutter.gutter-vertical
    cursor: row-resize
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=")
.split-panel.horizontal
  .horizontal-panel, .gutter.gutter-horizontal
    float: left
    height: 100%
  .gutter.gutter-horizontal
    cursor: col-resize
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==")
</style>
