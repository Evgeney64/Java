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

var radioGroupAutoLayout = Ext.create('Ext.form.Panel', {
        title: 'Переключатели',
        width: 300,
        autoHeight: true,
        bodyPadding: 5,
        items: [{
            xtype: 'radiogroup',
            columns: 2,
            vertical: true,
            items: [{
            boxLabel: 'Капуста',
            name: 'veg',
            inputValue: 'cabbage'
            }, {
            boxLabel: 'Морковь',
            name: 'veg',
            inputValue: 'carrot'
            }, {
            boxLabel: 'Свекла',
            name: 'veg',
            inputValue: 'beat'
            }, {
            boxLabel: 'Лук',
            name: 'veg',
            inputValue: 'onion'
            }]
        }],
        renderTo: Ext.getBody(),
        style: 'margin: 10px'
    });

    var checkboxGroup = new Ext.form.CheckboxGroup({
        columns: 1,
        fieldLabel: 'Овощи',
        name: 'veg',
        style: {
        padding: '5px 10px 5px 10px'
        },
        items: [{
            xtype: 'checkbox',
            boxLabel: 'Капуста',
            name: 'veg',
            inputValue: 'cabbage',
            checked:'true',
        }, {
            xtype: 'checkbox',
            boxLabel: 'Морковь',
            name: 'veg',
            inputValue: 'carrot'
        }, {
            xtype: 'checkbox',
            boxLabel: 'Свекла',
            labelAlign: 'left',
            name: 'veg',
            inputValue: 'beat'
        }, {
            xtype: 'checkbox',
            boxLabel: 'Лук',
            labelAlign: 'right',
            name: 'veg',
            inputValue: 'onion'
        }]
        });
        var panel = new Ext.Panel({
            renderTo: Ext.getBody(),
            title: 'Овощи',
            width:200,
            height:150,
            items: [checkboxGroup]
    });

});