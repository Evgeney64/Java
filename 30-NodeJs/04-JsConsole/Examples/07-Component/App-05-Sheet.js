Ext.onReady(function(){
Ext.create('Ext.tab.Panel', {
    title: 'Панель вкладок',
    width: 300,
    height: 200,
    items:[{
        title: 'C#',
        html: 'WPF, ASP.NET, MVC, Windows Forms'
    },{
        title: 'Java',
        html: 'JSP, Java FX, Swing, AWT'
    }],
    renderTo: Ext.getBody()
});
});