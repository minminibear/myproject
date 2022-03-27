import { render } from "./render";

// 受け取った引数を使用してリアルDOMに反映する
export const app = ({ root, initialState, view, actions }) => {
    const $el = document.querySelector(root);
    let newNode = view(initialState);
    // console.log($el,newNode);

    let state = initialState; //アカウント一覧を代入する

    // action(今回の場合、toggleFollow)にstateの更新とリアルDOMの更新がされるようにする
    const dispatcher = function (actions) {
        const dispatchedActions = {}; //空のオブジェクトを作成

        //　actionの関数を追加していく作業をループ処理
        // actions：index.jsに定義したactionsのこと
        for (const key in actions ) { 
            const action = actions[key];

            dispatchedActions[key] = (option) => {
                setState(action(state, option));
                renderDom();
            };
        }
        return dispatchedActions;
    };

    const setState = function (newState) {
        if (state !== newState) {
            state = newState;
        }
    };

    const renderDom = function () {
        $el.appendChild(render(newNode));
    };

    renderDom();
};