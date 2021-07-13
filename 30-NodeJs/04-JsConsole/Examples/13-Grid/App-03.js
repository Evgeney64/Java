
Ext.onReady(function(){
Ext.create('Ext.grid.Panel', {
        title: 'Пользователи',
        height: 250,
        width: 500,
        store: store,
        columns: [{
           xtype:'rownumberer'
          },{
           text:'Имя',
           xtype:'templatecolumn',
           flex:1,
           dataIndex:'name',
           tpl:'<b>{name} {surname} </b>'
      },{
            header: 'Дата рождения',
            dataIndex: 'date',
            xtype:'datecolumn',
            format: 'd/m/Y',
            flex:1
        }, {
            header: 'E-mail',
            dataIndex: 'email',
            flex:1
        },{
            text:'Женат (Замужем)',
            xtype:'booleancolumn',
            width:80,
            dataIndex:'married',
            trueText:'Да',
            falseText:'Нет'
        },{
            xtype:'actioncolumn',
            width:40,
            items:[{
                    icon:'del.png',
                    handler:function (grid, rowIndex, colIndex) {
                    store.removeAt(rowIndex);
                 }
                }]
        }],
        renderTo: Ext.getBody()
    });
});