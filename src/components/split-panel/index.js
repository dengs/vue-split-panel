import SplitPanel from "./src/main";

/* istanbul ignore next */
SplitPanel.install = function(Vue) {
  Vue.component(SplitPanel.name, SplitPanel);
};

export default SplitPanel;
