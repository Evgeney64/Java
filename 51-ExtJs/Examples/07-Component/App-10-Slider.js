Ext.onReady(function(){
    var slider=Ext.create('Ext.slider.Single', {
        fieldLabel: 'Громкость',
        width: 400,
        value: 100,
        minValue: 0,
        maxValue: 500,
        increment: 10,
        renderTo: Ext.getBody()
    });
});