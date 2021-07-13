Ext.onReady(function(){
Ext.create('Ext.Panel', {
            title: 'Таблица',
            width: 500,
            height: 100,
            padding: 10,
            layout:'column',
            items: [
                {
                    xtype: 'panel',
                    title: 'Первый столбец',
                    html: 'Поле 1',
                    width: 200
                },
                {
                    xtype: 'panel',
                    title: 'Второй столбец',
                    html: 'Поле 2',
                    columnWidth:.4
                },
                {
                    xtype: 'panel',
                    title: 'Третий столбец',
                    html: 'Поле 3',
                    columnWidth:.6
                }],
            renderTo: Ext.getBody()
        });
});
