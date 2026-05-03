import { n as noop, h as head, a as attr_style, s as stringify, e as ensure_array_like, b as escape_html, c as attr } from "../../chunks/renderer.js";
import { f as favicon } from "../../chunks/favicon.js";
import { s as state, a as render_effect, b as set, g as get } from "../../chunks/root.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
const now = () => Date.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => noop()
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) ;
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function linear(t) {
  return t;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = (
      /** @type {Array<any>} */
      b.map((bi, i) => {
        return get_interpolator(
          /** @type {Array<any>} */
          a[i],
          bi
        );
      })
    );
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) {
      throw new Error("Object cannot be null");
    }
    if (is_date(a) && is_date(b)) {
      const an = a.getTime();
      const bn = b.getTime();
      const delta = bn - an;
      return (t) => new Date(an + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = (
      /** @type {number} */
      b - /** @type {number} */
      a
    );
    return (t) => a + t * delta;
  }
  return () => b;
}
class Tween {
  #current;
  #target;
  /** @type {TweenOptions<T>} */
  #defaults;
  /** @type {import('../internal/client/types').Task | null} */
  #task = null;
  /**
   * @param {T} value
   * @param {TweenOptions<T>} options
   */
  constructor(value, options = {}) {
    this.#current = state(value);
    this.#target = state(value);
    this.#defaults = options;
  }
  /**
   * Create a tween whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Tween } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const tween = Tween.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {TweenOptions<U>} [options]
   */
  static of(fn, options) {
    const tween = new Tween(fn(), options);
    render_effect(() => {
      tween.set(fn());
    });
    return tween;
  }
  /**
   * Sets `tween.target` to `value` and returns a `Promise` that resolves if and when `tween.current` catches up to it.
   *
   * If `options` are provided, they will override the tween's defaults.
   * @param {T} value
   * @param {TweenOptions<T>} [options]
   * @returns
   */
  set(value, options) {
    set(this.#target, value);
    let {
      delay = 0,
      duration = 400,
      easing = linear,
      interpolate = get_interpolator
    } = { ...this.#defaults, ...options };
    if (duration === 0) {
      this.#task?.abort();
      set(this.#current, value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    let started = false;
    let previous_task = this.#task;
    this.#task = loop((now2) => {
      if (now2 < start) {
        return true;
      }
      if (!started) {
        started = true;
        const prev = this.#current.v;
        fn = interpolate(prev, value);
        if (typeof duration === "function") {
          duration = duration(prev, value);
        }
        previous_task?.abort();
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        set(this.#current, value);
        return false;
      }
      set(this.#current, fn(easing(elapsed / /** @type {number} */
      duration)));
      return true;
    });
    return this.#task.promise;
  }
  get current() {
    return get(this.#current);
  }
  get target() {
    return get(this.#target);
  }
  set target(v) {
    this.set(v);
  }
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    let selectedSize = new Tween(64.38333129882812, { duration: 400, easing: cubicOut });
    let selectedPosition = new Tween(0, { duration: 400, easing: cubicOut });
    let navItems = [
      { url: "/", text: "home" },
      { url: "/about", text: "about" },
      { url: "/projects", text: "projects" },
      { url: "/blog", text: "blog" }
    ];
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="icon"${attr("href", favicon)}/>`);
    });
    $$renderer2.push(`<nav class="svelte-12qhfyh"><div class="selected-page svelte-12qhfyh"${attr_style(`z-index:-1; position:fixed; width:${stringify(selectedSize.current)}px; left:${stringify(selectedPosition.current)}px;`)}></div> <!--[-->`);
    const each_array = ensure_array_like(navItems);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let navItem = each_array[i];
      $$renderer2.push(`<button class="svelte-12qhfyh">${escape_html(navItem.text)}</button>`);
    }
    $$renderer2.push(`<!--]--></nav> `);
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
