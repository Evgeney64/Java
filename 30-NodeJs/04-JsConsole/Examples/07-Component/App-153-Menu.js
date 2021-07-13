Ext.onReady(function(){ 
    var menu = Ext.create('Ext.menu.Menu', {
        width: 100,
        height: 100,
        margin: '0 0 10 0',
        renderTo: Ext.getBody(),
        floating: false,
        items: [{
            text: 'JavaScript',
            handler: function(){alert('Выбран JavaScript');}
        },{
            text: 'Java',
            handler: function(){alert('Выбран Java');}
        },{
            xtype: 'button',
            text: 'C/C++'
        }]
    });
});