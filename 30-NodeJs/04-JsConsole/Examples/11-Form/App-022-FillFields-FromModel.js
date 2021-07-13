Ext.onReady(function(){

var personalData = {
        FirstName: 'Евгений',
        LastName: 'Попов',
        Age: 28,
        Married: false
    };


    var formPanel=Ext.create('Ext.form.Panel',{
        title: 'Данные',
        width: 300,
        height:250,
        layout: 'anchor',
    defaults: {
        anchor: '80%'
    },
        renderTo: Ext.getBody(),
        items:[{
                xtype: 'textfield',
                fieldLabel: 'Имя',
                name: 'FirstName',
                labelAlign: 'top',
                flex: 1
               }, {
                xtype: 'textfield',
                fieldLabel: 'Фамилия',
                name: 'LastName',
                labelAlign: 'top',
                flex: 1
              },{
                xtype: 'numberfield',
                fieldLabel: 'Возраст',
                name: 'Age',
                minValue: 1,
                maxValue: 100,
            },{
                xtype: 'checkbox',
                boxLabel: 'Женат(Замужем)',
                name: 'Married',
                inputValue: 'Married',
                checked:'true',
                }],
        buttons: [{
            text: 'Оправить',
            handler: function() {
                // действие отмены
            }
        }, {
            text: 'Сброс',
            handler: function() {
                formPanel.getForm().setValues(personalData);
            }
        }]
    });

    formPanel.getForm().setValues(personalData);
});