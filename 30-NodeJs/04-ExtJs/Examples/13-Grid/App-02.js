
Ext.onReady(function(){
Ext.create('Ext.grid.Panel', {
        title: 'Пользователи',
        height: 200,
        width: 400,
        columns: [{
            header: 'Имя',
            dataIndex: 'name'
        }, {
            header: 'Фамилия',
            dataIndex: 'surname'
        }, {
            header: 'Дата рождения',
            dataIndex: 'date',
            xtype:'datecolumn',
            format: 'd/m/Y',
            flex:1
        }, {
            header: 'E-mail',
            dataIndex: 'email',
            flex:1
        }, {
            header: 'Женат/Замужем',
            dataIndex: 'married',
            flex:1
        }],
        renderTo: Ext.getBody()
    });              
});