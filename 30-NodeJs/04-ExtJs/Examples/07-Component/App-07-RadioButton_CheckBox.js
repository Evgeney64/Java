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
            name: 'veg',
            inputValue: 'beat'
        }, {
            xtype: 'checkbox',
            boxLabel: 'Лук',
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