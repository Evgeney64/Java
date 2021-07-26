Ext.onReady(function(){
var panel= Ext.create('Ext.Panel', {
            title: 'Компоновка Anchor',
            width: 300,
            height: 200,
            layout:'anchor',
            items: [
                {
                    xtype: 'panel',
                    title: 'Л. Толстой',
                    html: 'Произведения Л. Толстого: "Война и мир", "Воскресение", "Крейцерова соната"',
                    anchor: '60% 85%'
                }],
            renderTo: Ext.getBody()
        });
 });