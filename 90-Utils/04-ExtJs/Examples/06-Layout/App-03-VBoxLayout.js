Ext.onReady(function(){
Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 300,
        height: 330,
        padding:10,
        title: 'Приложение Ext JS 4',
        layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [{
                    xtype: 'panel',
                    title: 'Первая панель',
                    height:100
                },{
                    xtype: 'panel',
                    title: 'Вторая панель',
                    height:80
                },{
                    xtype: 'panel',
                    title: 'Третья панель',
                    height:100
                }]
    });
});
