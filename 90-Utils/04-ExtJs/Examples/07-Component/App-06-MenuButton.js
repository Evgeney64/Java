Ext.onReady(function(){
    Ext.create('Ext.Panel', {
        width:300,
        height:200,
        renderTo: Ext.getBody(),
        items   : [{
                xtype: 'button',
                text : 'Языки программирования',
                margin:'15 0 0 25',
                menu: [
                    {text: 'C#'},
                    {text: 'Java'},
                    {text: 'C++'},
                    {text: 'Basic'}
                ]
            }]
    });
});