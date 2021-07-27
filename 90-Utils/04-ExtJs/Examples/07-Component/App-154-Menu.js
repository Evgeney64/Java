Ext.onReady(function(){ 
    var menu = Ext.create('Ext.menu.Menu', {
        items: [{
            text: 'JavaScript',
            handler: function(){alert('Выбран JavaScript');}
        },{
            text: 'Java',
        },{
            text: 'C/C++'
        }]
    });
    Ext.create('Ext.panel.Panel', { 
        title: 'Панель с меню',
        width: 200,
        height: 150,
        renderTo: Ext.getBody(),
        tbar: [{                    // тулбар с меню
                xtype: 'splitbutton',
                text: 'Выбрать',     // кнопка с выпадащим меню
                menu:   menu
                }]
    });
});