Ext.onReady(function(){
var window = Ext.create('Ext.window.Window', {
    title: 'Приложение',
    width: 300,
    height: 200,
    items:[{
        xtype: 'button',
        text: 'Кнопка 1',
        style:'margin-left:100px; margin-top:70px;',
    }]
});
window.show();
});