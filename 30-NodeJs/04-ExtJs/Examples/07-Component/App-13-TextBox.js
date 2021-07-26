Ext.onReady(function(){

    var formPanel1 = Ext.create('Ext.Panel', {
                    title: 'Форма ввода',
                    width: 250,
                    autoHeight: true,
                    bodyPadding: 10,
                    defaults: {
                        labelWidth: 100
                    },
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Ваше имя:',
                        name: 'name'
                    }],
                    renderTo: Ext.getBody()
                });
     
    var formPanel2 = Ext.create('Ext.Panel', {
                    title: 'Форма ввода',
                    width: 250,
                    autoHeight: true,
                    bodyPadding: 10,
                    defaults: {
                        labelWidth: 100
                    },
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Ваше имя:',
                        allowBlank:false,
                        emptyText: 'введите текст', //подсказка в текстовом поле
                        minLength: 3,
                        maxLength: 15,
                        name: 'name'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Номер счета:',
                        allowBlank:false,
                        maskRe:/[1-9]/i, //только числа
                        name: 'account'
                    }],
                    renderTo: Ext.getBody()
        });

    var formPanel3 = Ext.create('Ext.Panel', {
                    title: 'Форма ввода',
                    width: 250,
                    autoHeight: true,
                    bodyPadding: 10,
                    defaults: {
                        labelWidth: 100
                    },
                    items: [{
                        xtype: 'textareafield',
                        grow      : true,
                        fieldLabel: 'Введите сообщение:',
                        allowBlank:false,
                        emptyText: 'введите текст сообщения',
                        name: 'text'
                    }],
                    renderTo: Ext.getBody()
                });
});