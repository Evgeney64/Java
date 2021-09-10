Ext.onReady(function(){
Ext.create('Ext.Panel', {
            title: 'Таблица',
            width: 500,
            height: 200,
            layout:'accordion',
            items: [
                {
                    xtype: 'panel',
                    title: 'Л. Толстой',
                    html: 'Произведения Л. Толстого: ....'
                },
                {
                    xtype: 'panel',
                    title: 'Ф. Достоевский',
                    html: 'Произведения Ф. Достоевского: ...'
                },
                {
                    xtype: 'panel',
                    title: 'И. Тургенев',
                    html: 'Произведения И. Тургенева: ...'
                }],
            renderTo: Ext.getBody()
        });
 });