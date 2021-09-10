Ext.onReady(function(){
Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 300,
        height: 230,
        padding:10,
        title: 'Основной контейнер',
        items: [
            {
                xtype: 'panel',
                title: 'Внутренняя панель 1',
                height: 100,
                width: '100%'
            },
            {
                xtype: 'panel',
                title: 'Внутренняя панель 2',
                height: 100,
                width: '100%'
            }
        ]
    });
});
