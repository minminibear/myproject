import h from "./vdom/createElement";
import { render } from './vdom/render';
import { app } from './vdom/app'

// 初期状態(↓変更不可を明示的にするために全て大文字)
const INITIAL_STATE = {
    accounts: [
        {
            id: 1,
            name: "リオネル・メッシ",
            team: "FCバルセロナ",
            description:
            "アルゼンチンサンタフェ州ロサリオ出身のイタリア系アルゼンチン人サッカー選手。リーガ・エスパニョーラ・FCバルセロナ所属。アルゼンチン代表。ポジションはフォワード (wikipedia)",
            isFollow: false,
        },
        {
            id: 2,
            name: "クリスティアーノ・ロナウド",
            team: "Juventus",
            description:
                "ポルトガル・フンシャル出身のサッカー選手。セリエA・ユヴェントスFC所属。ポルトガル代表。ポジションはフォワード (wikipedia)",
            isFollow: false,
        },
        {
            id: 3,
            name: "ネイマール",
            team: "パリサンジェルマン",
            description:
                "ブラジル・サンパウロ州モジ・ダス・クルーゼス出身のサッカー選手。ブラジル代表。リーグ・アン・パリ・サンジェルマンFC所属。ポジションはフォワード (wikipedia)",
            isFollow: false,
        },
    ],
};

// 動作機能
const actions = {
    toggleFollow(state, id) {
        const accounts = state.accounts.map((f) => {
            if (f.id === id) {
                return { ...f, isFollow: !f.isFollow };
            } else {
                return f;
            }
        });
        return { ...state, accounts };
    },
};

// accountという名称でデータを受け取る。(例）メッシに関する全ての情報)
const accountItem = (account) => {
    return h("div", {
        attrs: {},
        children: [
            h("div", {
                attrs: {
                    class: "account__summary",
                },
                children: [
                    h("div", {
                        attrs: {},
                        children: [
                            // account.nameをpタグ内のテキストとして表示
                            h("p", {
                                attrs: {
                                    class: "account__name",
                                },
                                children: [account.name],
                        }),
                        // account.teamをpタグ内のテキストとして表示
                        h("p", {
                            attrs: {
                                class: "account__team",
                            },
                            children: [account.team],
                        }),
                    ],
                }),
                h("div", {
                    attrs: {},
                    children: [
                        // account.isFollow で class であるisFollow を付与したり、文字列の出しわけをする
                        h("button", {
                            attrs: {
                                type: "button",
                                class: `followBtn ${account.isFollow ? "isFollow" : ""}`,
                                onclick: () => alert(account.name),
                            },
                            children: [account.isFollow ? "フォロー中" : "フォローする"],
                        }),
                    ],
                }),
            ],
        }),
        // account.teamをpタグ内のテキストとして表示
        h("p", {
            attrs: {
                class: "account__description",
            },
            children: [account.description],
        }),
        ],
    });
};

// 仮想DOM
const view = (props, action) => // stateの変更ができないように明示的にpropsという名前にする
    h("ul", {
        attrs: {
            class: "accountList",
        },
        children: props.accounts.map((e) => {
            return h("li", {
                attrs: {
                    class: "accountList__item",
                },
                children: [accountItem(e, action)],
            });
        }),
    });

// const $app = render(view(INITIAL_STATE)); //仮想DOMであるviewをrender関数に渡してリアルDOMを作る
// const el = document.getElementById('app');// src/index.htmlに書かれている <div id="app"></div> を取得
// el.appendChild($app);

app({
    root: "#app",
    initialState: INITIAL_STATE,
    view,
    actions,
});