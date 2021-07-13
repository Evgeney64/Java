Ext.onReady(function(){
Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 300,
        height: 230,
        padding:10,
        title: 'Основной контейнер',
        layout: 'fit',
        items: {
                title: 'Внутренняя панель',
                html: 'Внутренняя панель при Fit Layout',
                padding: 2,
                border: true
            }
    });
});