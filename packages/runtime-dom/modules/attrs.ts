export function setAttribute(el: Element, key: string, value: any) {
  el.setAttribute(key, value);
}

export function removeAttribute(el: Element, key: string) {
  el.removeAttribute(key);
}

export function patchAttr(el: Element, key: string, value: any) {
  if (value == null) {
    removeAttribute(el, key);
  } else {
    setAttribute(el, key, value);
  }
}
