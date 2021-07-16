Ext.onReady(function(){



var yourData = [
     [1, 'JavaScript'],
    [2, 'PHP'],
    [3, 'RUBY']
];

    Ext.create('Ext.Panel', {
        width:500,
        height:120,
        items: [{
            xtype: 'combobox',
            fieldLabel: 'Выберите язык',
            store: new Ext.data.SimpleStore({
                 id:0,
                fields:
                [
                    'myId',   //числовое значение - номер элемента
                    'myText' //текст
                ],
                data:yourData
            }),
            valueField:'myId',
            displayField:'myText',
            queryMode:'local'
        }],
        renderTo: Ext.getBody()
    });

    var store2 = Ext.create('Ext.data.Store', {
        fields: ['name'],
        data:[
             {name: 'JavaScript'},
            {name: 'PHP'},
            {name: 'RUBY'},
            {name: 'Python'},
            {name: 'C (ANSI)'},
            {name: 'C++'},
            {name: 'C#'}
        ]
    });
    Ext.create('Ext.form.ComboBox', {
        fieldLabel: 'Выбрать язык',
        store: store2,
        queryMode: 'local',
        displayField: 'name',
        valueField: 'name',
        typeAhead: true,
        typeAheadDelay: 100,
        hideTrigger: true,
        renderTo: Ext.getBody()
    });


    var store3 = Ext.create('Ext.data.Store', {
        fields: ['position', 'title', 'rate'],
        data:[{
                    position: 1,
                    title: 'C',
                    rate: '19.224'
                }, {
                    position: 2,
                    title: 'Java',
                    rate: '17.455'
                }, {
                    position: 3,
                    title: 'Objective-C',
                    rate: '10.383'
                }, {
                    position: 4,
                    title: 'C++',
                    rate: '9.689'
                }, {
                    position: 5,
                    title: 'PHP',
                    rate: '5.732'
                }]
    });
    Ext.create('Ext.Panel', {
        title: 'Рейтинг TIOBE',
        width: 400,
        autoHeight: true,
        bodyPadding: 10,
        items: [{
            xtype: 'combobox',
            fieldLabel: 'Выбрать язык',
            displayField: 'title',
            store: store3,
            queryMode: 'local',
            anchor: '100%',
            listConfig: {
                getInnerTpl: function(){
                return '<h3>{title} ({position})</h3>' +
                '<div class="rate">Текущее значение: {rate}</div>';
                }
            }
        }],
        renderTo: Ext.getBody()
    });
});