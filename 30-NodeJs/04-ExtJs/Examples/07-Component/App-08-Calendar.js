Ext.onReady(function(){

    var dateField1=Ext.create('Ext.form.field.Date', {
        fieldLabel: 'Выбрать дату',
        format: 'd/m/Y',
        renderTo: Ext.getBody()
    });

    var dateField2=Ext.create('Ext.form.field.Date', {
        fieldLabel: 'Выбрать дату',
        format: 'd/m/Y',
        maxValue: new Date(2012, 11, 21),
        minValue: new Date(2011, 11, 21),
        disabledDates: ['25/11/2012', '22/11/2012'],
        renderTo: Ext.getBody()
    });

    var dateField3=Ext.create('Ext.form.field.Date', {
        fieldLabel: 'Выбрать дату',
        padding: 10,
        format: 'd/m/Y',
        altFormats: 'd m Y|d.m.Y',
        renderTo: Ext.getBody()
    });
});