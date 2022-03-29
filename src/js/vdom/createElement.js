// 仮想DOMツリーを構築
export default (tagName, {attrs = {}, children =[] }) => {
    const vElement = Object.create(null);
    //　Object.create()メソッドは引数として渡されたプロトタイプを持つオブジェクトを生成する
    // プロトタイプを持っていない→自分専用のプロパティを持てない！(id属性の追加などが出来ない)

    Object.assign(vElement, {
        tagName,
        attrs,
        children,
    });

    return vElement;
};

//  createElement 関数: h()で表示