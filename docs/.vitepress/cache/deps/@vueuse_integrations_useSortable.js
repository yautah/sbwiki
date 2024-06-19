import {
  defaultDocument,
  toValue,
  tryOnMounted,
  tryOnScopeDispose,
  unrefElement
} from "./chunk-WI2ABHI7.js";
import {
  __commonJS,
  __toESM,
  isRef,
  nextTick
} from "./chunk-SGH2JOMC.js";

// optional-peer-dep:__vite-optional-peer-dep:sortablejs:@vueuse/integrations
var require_integrations = __commonJS({
  "optional-peer-dep:__vite-optional-peer-dep:sortablejs:@vueuse/integrations"() {
    throw new Error(`Could not resolve "sortablejs" imported by "@vueuse/integrations". Is it installed?`);
  }
});

// node_modules/@vueuse/integrations/useSortable.mjs
var import_sortablejs = __toESM(require_integrations(), 1);
function useSortable(el, list, options = {}) {
  let sortable;
  const { document = defaultDocument, ...resetOptions } = options;
  const defaultOptions = {
    onUpdate: (e) => {
      moveArrayElement(list, e.oldIndex, e.newIndex);
    }
  };
  const start = () => {
    const target = typeof el === "string" ? document == null ? void 0 : document.querySelector(el) : unrefElement(el);
    if (!target || sortable !== void 0)
      return;
    sortable = new import_sortablejs.default(target, { ...defaultOptions, ...resetOptions });
  };
  const stop = () => {
    sortable == null ? void 0 : sortable.destroy();
    sortable = void 0;
  };
  const option = (name, value) => {
    if (value !== void 0)
      sortable == null ? void 0 : sortable.option(name, value);
    else
      return sortable == null ? void 0 : sortable.option(name);
  };
  tryOnMounted(start);
  tryOnScopeDispose(stop);
  return {
    stop,
    start,
    option
  };
}
function moveArrayElement(list, from, to) {
  const _valueIsRef = isRef(list);
  const array = _valueIsRef ? [...toValue(list)] : toValue(list);
  if (to >= 0 && to < array.length) {
    const element = array.splice(from, 1)[0];
    nextTick(() => {
      array.splice(to, 0, element);
      if (_valueIsRef)
        list.value = array;
    });
  }
}
export {
  moveArrayElement,
  useSortable
};
//# sourceMappingURL=@vueuse_integrations_useSortable.js.map
