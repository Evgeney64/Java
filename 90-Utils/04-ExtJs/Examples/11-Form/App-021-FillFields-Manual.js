Ext.onReady(function(){
var formPanel=Ext.create('Ext.form.Panel',{
        title: 'Форма авторизации',
        width: 300,
        height:200,
        layout: 'anchor',
        defaults: {
            anchor: '80%'
        },
        renderTo: Ext.getBody(),
        items:[{
                xtype: 'textfield',
                fieldLabel: 'Логин',
                name: 'login',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1
               }, {
                xtype: 'textfield',
                fieldLabel: 'Пароль',
                name: 'password',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1
              }],   
        buttons: [{
            text: 'Логин',
            handler: function() {
                var login = formPanel.items.get(0);
                login.setValue('Eugene');
            }
        }]
 });
});