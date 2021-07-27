Ext.onReady(function(){
    var west=Ext.create('Ext.Panel', {
            title: 'Правая панель',
            width: 150,
            region: 'west',
        });
    var viewport = Ext.create('Ext.container.Viewport', {
        layout : 'border',
        items : [west,
        {
            title:'Контейнер Viewport',
            region : 'north',
        },
        {
            xtype : 'panel',
            region : 'center',
            title:'Центральная панель'
        }]
    });
});