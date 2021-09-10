Ext.onReady(function(){
var panel= Ext.create('Ext.Panel', {
            title: 'Слайды писателей',
            width: 400,
            height: 200,
            layout:'card',
            items: [
                {
                    xtype: 'panel',
                    title: 'Л. Толстой',
                    html: 'Произведения Л. Толстого: "Война и мир", "Воскресение", "Крейцерова соната"'
                },
                {
                    xtype: 'panel',
                    title: 'Ф. Достоевский',
                    html: 'Произведения Ф. Достоевского: "Преступление и наказание", "Братья Карамазовы", "Идиот"'
                },
                {
                    xtype: 'panel',
                    title: 'И. Тургенев',
                    html: 'Произведения И. Тургенева: "Отцы и дети", "Рудин", "Вешние воды"'
                }],
                bbar: ['->', {
                    xtype: 'button',
                    text: 'Предыдущее',
                    handler: function(but){
                        var layout=panel.getLayout();
                        if(layout.getPrev()){
                            layout.prev();
                        }
                    }
                }, {
                    xtype: 'button',
                    text: 'Далее',
                    handler: function(but){
                        var layout=panel.getLayout();
                        if(layout.getNext()){
                            layout.next();
                        }
                    }
                }],
            renderTo: Ext.getBody()
        });
 });