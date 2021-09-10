Ext.onReady(function(){ 
    var menu = Ext.create('Ext.menu.Menu', {
        width: 100,
        height: 100,
        margin: '0 0 10 0',
        renderTo: Ext.getBody(),
        floating: false,
        items: [{
            text: 'JavaScript',
            checked:true,
            group: 'langs'
        },{
            text: 'Java',
            checked: false,
            group: 'langs'
        },{
            text: 'C/C++',
            checked: false,
            group: 'langs'
        }]
    });
});