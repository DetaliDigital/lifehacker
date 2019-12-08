Ext.override(miniShop2.grid.Delivery, {

    getFields: function () {
        return [
            'id', 'name', 'price', 'weight_price', 'distance_price', 'rank', 'payments',
            'logo', 'active', 'class', 'description', 'dev_manager_cost', 'requires', 'actions'
        ];
    },
});

Ext.override(miniShop2.window.CreateDelivery, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id'
        }, {
            layout: 'column',
            items: [{
                columnWidth: .7,
                layout: 'form',
                defaults: {msgTarget: 'under'},
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('ms2_name'),
                    name: 'name',
                    anchor: '99%',
                    id: config.id + '-name'
                }]
            }, {
                columnWidth: .3,
                layout: 'form',
                defaults: {msgTarget: 'under'},
                items: [{
                    xtype: 'textfield',
                    fieldLabel: _('ms2_add_cost'),
                    name: 'price',
                    description: _('ms2_add_cost_help'),
                    anchor: '99%',
                    id: config.id + '-price'
                }],
            }]

        }, {
            layout: 'column',
            items: [{
                columnWidth: .5,
                layout: 'form',
                defaults: {msgTarget: 'under'},
                items: [{
                    xtype: 'numberfield',
                    fieldLabel: _('ms2_weight_price'),
                    description: _('ms2_weight_price_help'),
                    name: 'weight_price',
                    decimalPrecision: 2,
                    anchor: '99%',
                    id: config.id + '-weight-price'
                }, {
                    xtype: 'textfield',
                    fieldLabel: _('ms2_order_requires'),
                    description: _('ms2_order_requires_help'),
                    name: 'requires',
                    anchor: '99%',
                    id: config.id + '-requires'
                }]
            }, {
                columnWidth: .5,
                layout: 'form',
                defaults: {msgTarget: 'under'},
                items: [{
                    xtype: 'numberfield',
                    fieldLabel: _('ms2_distance_price'),
                    description: _('ms2_distance_price_help'),
                    name: 'distance_price',
                    decimalPrecision: 2,
                    anchor: '99%',
                    id: config.id + '-distance-price'
                }, {
                    xtype: 'minishop2-combo-classes',
                    type: 'delivery',
                    fieldLabel: _('ms2_class'),
                    name: 'class',
                    anchor: '99%',
                    id: config.id + '-class'
                }],
            }]
        }, {
            xtype: 'minishop2-combo-browser',
            fieldLabel: _('ms2_logo'),
            name: 'logo',
            anchor: '99%',
            id: config.id + '-logo'
        }, {
            xtype: 'textarea',
            fieldLabel: _('ms2_description'),
            name: 'description',
            anchor: '99%',
            id: config.id + '-description'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('ms2_active'),
            hideLabel: true,
            name: 'active',
            id: config.id + '-active'
        },
        {
            xtype: 'xcheckbox',
            boxLabel: _('ms2_dev_manager_cost'),
            hideLabel: true,
            name: 'dev_manager_cost',
            id: config.id + '-dev_manager_cost'
        }
        ];
    },
});
