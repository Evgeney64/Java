Ext JS Kitchen Sink
Examples
Search
DetailsPremium
/**
 * This example shows how to zoom in on the selected node with an animation
 * in the 'd3-sunburst' component. Here, the visibility of the nodes is controlled
 * by the zoom level, not the `expanded` property. For this, we set
 * `expandEventName` config to false.
 */
Ext.define('KitchenSink.view.d3.SunburstZoom', {
    extend: 'Ext.panel.Panel',
    xtype: 'd3-view-sunburst-zoom',
    controller: 'sunburst-zoom',

    requires: [
        'KitchenSink.view.d3.TreeViewModel',
        'Ext.d3.hierarchy.partition.Sunburst'
    ],

    width: 1200,
    height: 700,

    layout: 'border',

    viewModel: {
        type: 'tree'
    },

    items: [
        {
            xtype: 'breadcrumb',
            region: 'north',

            bind: {
                store: '{store}',
                selection: '{selection}'
            },

            publishes: 'selection'
        },
        {
            region: 'center',

            xtype: 'panel',
            layout: 'fit',

            items: {
                xtype: 'd3-sunburst',
                reference: 'd3',
                padding: 20,
                bind: {
                    store: '{store}',
                    selection: '{selection}'
                },
                transitions: {
                    select: false
                },
                listeners: {
                    selectionchange: 'onSelectionChange'
                },
                expandEventName: false
            }
        }
    ]
});
()