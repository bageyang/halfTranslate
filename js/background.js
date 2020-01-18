chrome.contextMenus.create({
    title: '翻译：%s', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(params)
    {
        // 注意不能使用location.href，因为location是属于background的window对象
        console.log(params.selectorText)
    }
});
