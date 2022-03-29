// 仮想DOMツリーを受け取り、リアルDOMとして返す関数
import { isEventAttr } from "./utils";

const setAttrs = (target, attrs) => {
    for (const attr in attrs) {
        if (isEventAttr(attr)) { //イベントかどうかを判定
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

//　文字列でなければrenderElement関数が呼ばれる
// 今回は文字列しか判定していないが、本来はJSで扱えてリアルDOMに表示させる際に数値も扱えるように数値も必要
// vNoudeは投稿の情報一式

const element = () => {
    console.log(renderElement(vNode));
}

// element();

export function render(vNode) {
    if (typeof vNode === "string") {//typeof演算子は指定した値の型を表す文字列を返り値として返す(string,number,function等)
        console.log(vNode);
        return document.createTextNode(vNode);
        // Document.createTextNode():新しいtextノードを生成する
    }
    return renderElement(vNode);
}