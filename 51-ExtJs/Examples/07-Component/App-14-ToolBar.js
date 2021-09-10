Ext.onReady(function(){ 
    var toolbar=Ext.create('Ext.toolbar.Toolbar', {
        dock: 'top',
        items: [
            {
                text: 'Кнопка'
            },{
                xtype: 'splitbutton',
                text : 'Кнопка с меню'
            },'->',{
                xtype    : 'textfield',
                name     : 'field',
                emptyText: 'Найти'
            }]
    });
    Ext.create('Ext.panel.Panel', { 
        title: 'Панель с тулбаром',
        width: 350,
        height: 150,
        renderTo: Ext.getBody(),
        dockedItems: [toolbar]
    });
});