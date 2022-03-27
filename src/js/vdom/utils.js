// utilsは汎用的な関数をまとめておく役割
// イベントかどうか判定
export const isEventAttr = (attr) => {
    return /^on/.test(attr); //onClickやonChengeなど先頭にonが着くイベントかどうかを判断。
};