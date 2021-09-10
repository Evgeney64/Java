Ext.onReady(function(){
    var numberField=Ext.create('Ext.Panel', {
        width:280,
        height:120,
        items:
        [{
            xtype: 'numberfield',
            fieldLabel: 'Выберите число',
            minValue: -5,
            maxValue: 100,
            allowDecimals: true,
            decimalPrecision: 1,
            step: 0.5
        }],
        renderTo: Ext.getBody()
    });
});