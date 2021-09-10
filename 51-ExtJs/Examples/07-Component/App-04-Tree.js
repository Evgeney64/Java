Ext.onReady(function(){
     Ext.create('Ext.tree.Panel', {
        title: 'Страны СНГ',
        width: 200,
        height: 200,
        rootVisible: true,
        renderTo: Ext.getBody(),
        root: {
            text: 'Страны СНГ',
            expanded: true,
            children:
            [{
                text: "Россия",
                children: [{
                    text: "Москва",
                    leaf: true
                }, {
                    text: "Санкт-Петербург",
                    leaf: true
                }, {
                    text: "Волгоград",
                    leaf: true
                }],
                leaf: false,
                "expanded": true
            },
            {
                text: "Украина",
                leaf: false
            },
            {
                text: "Белоруссия"
            }]
        }
    });
});