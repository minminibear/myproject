import { isEventAttr } from "./utils";

const setAttrs = (target, attrs) => {
    for (const attr in attrs) {
        if (isEventAttr(attr)) {
            target.addEventListener(attr.slice(2), attrs[attr]);
        } else {
            target.setAttribute(attr, attrs[attr]);
        }
    }
};

function renderElement({ tagName, attrs, children }) {
    // tagNameを元にリアルDOM要素を作成。今回の場合はpなので<p></p>
    const $el = document.createElement(tagName);

    setAttrs($el, attrs);

    // $elに class や id、type などの属性を付与 <p class="hoge"></p>などができる
    // for (const [k, v] of Object.entries(attrs)) {
    //     $el.setAttribute(k, v);
    // }

    // children 要素があるならば一つ一つを要素 $el に appendChild する　<p>ここに追加すること</p >
    for (const child of children) {
        $el.appendChild(render(child));
    }

    return $el;
}

export function render(vNode) {
    if (typeof vNode === "string") { //文字列でなければrenderElement関数が呼ばれる
        return document.createTextNode(vNode);
    }
    return renderElement(vNode);
}