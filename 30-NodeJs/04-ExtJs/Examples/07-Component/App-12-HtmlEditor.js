Ext.onReady(function(){
    var formPanel = Ext.create('Ext.Panel', {
        title: 'Редактор текста',
        width: 350,
        height:200,
        layout: 'fit',
        items: [{
        xtype: 'htmleditor',
            enableColors: false,
            enableLinks: false,
            fontFamilies: ["Arial", "Tahoma", "Verdana"]
        }],
        renderTo: Ext.getBody()
    });
});