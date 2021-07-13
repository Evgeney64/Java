Ext.onReady(function(){
    var radioGroupAutoLayout = Ext.create('Ext.form.Panel', {
        title: 'Переключатели',
        width: 400,
        autoHeight: true,
        bodyPadding: 5,
        items: [{
            xtype: 'radiogroup',
            fieldLabel: 'Пол',
            items: [{
            boxLabel: 'Мужской',
            name: 'gender',
            inputValue: 'male'
            }, {
            boxLabel: 'Женский',
            name: 'gender',
            inputValue: 'female'
            }]
        }],
        renderTo: Ext.getBody(),
        style: 'margin: 10px'
    });
});