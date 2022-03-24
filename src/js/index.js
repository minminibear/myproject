import h from "./vdom/createElement";
import { render } from './vdom/render';

const view = h("p", {
    attrs: {},
    children: ["仮想DOMの学習スタート!"],
});

const $app = render(view); //仮想DOMであるviewをrender関数に渡してリアルDOMを作る
const el = document.getElementById('app');// src/index.htmlに書かれている <div id="app"></div> を取得
el.appendChild($app)