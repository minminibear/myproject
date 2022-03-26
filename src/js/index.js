import h from "./vdom/createElement";
import { render } from './vdom/render';

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
                            h("p", {
                                attrs: {
                                    class: "account__name",
                                },
                                children: [account.name],
                        }),
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
                        h("button", {
                            attrs: {
                                type: "button",
                                class: `followBtn ${account.isFollow ? "isFollow" : ""}`,
                            },
                            children: [account.isFollow ? "フォロー中" : "フォローする"],
                        }),
                    ],
                }),
            ],
        }),
        h("p", {
            attrs: {
                class: "account__description",
            },
            children: [account.description],
        }),
        ],
    });
};

const view = (props) => // stateの変更ができないように明治的にpropsという名前にする
    h("ul", {
        attrs: {
            class: "accountList",
        },
        children: props.accounts.map((e) => {
            return h("li", {
                attrs: {
                    class: "accountList__item",
                },
                children: [accountItem(e)],
            });
        }),
    });

const $app = render(view(INITIAL_STATE)); //仮想DOMであるviewをrender関数に渡してリアルDOMを作る
const el = document.getElementById('app');// src/index.htmlに書かれている <div id="app"></div> を取得
el.appendChild($app);