export default (tagName, {attrs = {}, children =[] }) => {
    const vElement = Object.create(null);

    Object.assign(vElement, {
        tagName,
        attrs,
        children,
    });

    return vElement;
};

//  createElement 関数: h()で表示