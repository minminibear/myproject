// utilsは汎用的な関数をまとめておく役割
// イベントかどうか判定
export const isEventAttr = (attr) => {
    return /^on/.test(attr); //onClickやonChengeなど先頭にonが着くイベントかどうかを判断。
};

export const isNode = (node) => {
    return typeof node !== "string";
};

// patch関数の比較変更する際の判定
export const isTextChild = (node) => {
    return (
        node &&
        node.children &&
        node.children.length > 0 &&
        typeof node.children[0] === "string"
    );
};