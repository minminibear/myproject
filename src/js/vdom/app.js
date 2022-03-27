import { render } from "./render";

// 受け取った引数を使用してリアルDOMに反映する
export const app = ({ root, initialState, view, actions }) => {
    const $el = document.querySelector(root);
    let newNode = view(initialState);
    // console.log($el,newNode);

    const renderDom = function () {
        $el.appendChild(render(newNode));
    };

    renderDom();
};