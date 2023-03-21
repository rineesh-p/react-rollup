
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { s as styleInject, R as React } from './index.js';

var css_248z = ".DynamicButton-module_button__lsiyP {\r\n    background-color: red;\r\n    border: 2px solid blue;\r\n}";
var styles = {"button":"DynamicButton-module_button__lsiyP"};
styleInject(css_248z);

function DynamicButton({
  children
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: styles.button
  }, children);
}

export { DynamicButton as default };
