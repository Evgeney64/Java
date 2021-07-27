Ext.onReady(function(){
Ext.create('Ext.panel.Panel', {
    title: 'Приложение',
    width: 400,
    height: 200,
    bodyPadding: 5,
    html: 'Привет мир!',
    style: 'margin: 20px',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
        text: 'Файл',
        handler: function(){alert('Привет!');}
    }, '->', 'Верхний тулбар']
    }, {
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
        xtype: 'button',
        text: 'Кнопка 1'
    }, '-',{
        xtype: 'button',
        text: 'Кнопка 2'
    }, '-',{
        xtype: 'button',
        text: 'Кнопка 3'
    },'->', 'Нижний тулбар']
    }],
    renderTo: Ext.getBody()
});
});