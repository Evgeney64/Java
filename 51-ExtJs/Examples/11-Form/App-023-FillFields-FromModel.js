var personalData = {
        FirstName: 'Евгений',
        LastName: 'Попов',
        Age: 28,
        Married: false
    };


Ext.onReady(function(){
    Ext.define('Person', {
        extend: 'Ext.data.Model',
        fields: [
            'FirstName',
            'LastName',
            'Age',
            'Married'
        ]
    });
    var personModel = Ext.create('Person', personalData); //заполнение модели данными
     
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
                cls: 'field-margin',
                flex: 1
               }, {
                xtype: 'textfield',
                fieldLabel: 'Фамилия',
                name: 'LastName',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1
              },{
                xtype: 'numberfield',
                fieldLabel: 'Возраст',
                name: 'Age',
                cls: 'field-margin',
                minValue: 1,
                maxValue: 100,
            },{
                xtype: 'checkbox',
                boxLabel: 'Женат(Замужем)',
                name: 'Married',
                inputValue: 'Married',
                cls: 'field-margin',
                checked:'true',
                }],
        buttons: [{
            text: 'Сброс',
            handler: function() {
                formPanel.getForm().loadRecord(personModel);
            }
        }]
    });

    formPanel.getForm().setValues(personalData);
});