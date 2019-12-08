Ext.override(miniShop2.grid.Vendor, {
    getFields: function () {
        return [
            'id', 'name', 'resource', 'country', 'email', 'logo', 'pagetitle',
            'address', 'phone', 'fax', 'dtls_introtext', 'dtls_active', 'dtls_shipping', 'description', 'actions'
        ];
    },
});


Ext.override (miniShop2.window.CreateVendor, {
    getFields: function (config) {
        return [
            {xtype: 'hidden', name: 'id', id: config.id + '-id'},
            {
                layout: 'column',
                items: [{
                    columnWidth: .6,
                    layout: 'form',
                    defaults: {msgTarget: 'under'},
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_name'),
                        name: 'name',
                        anchor: '99%',
                        id: config.id + '-name'
                    }],
                }, {
                    columnWidth: .4,
                    layout: 'form',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_country'),
                        name: 'country',
                        anchor: '99%',
                        id: config.id + '-country'
                    }],
                }]
            }, {
                layout: 'column',
                items: [{
                    columnWidth: .4,
                    layout: 'form',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_email'),
                        name: 'email',
                        anchor: '99%',
                        id: config.id + '-email'
                    }],
                }, {
                    columnWidth: .6,
                    layout: 'form',
                    items: [{
                        xtype: 'minishop2-combo-resource',
                        fieldLabel: _('ms2_resource'),
                        name: 'resource',
                        anchor: '99%',
                        id: config.id + '-resource'
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
                fieldLabel: _('ms2_address'),
                name: 'address',
                anchor: '99%',
                id: config.id + '-address'
            }, {
                layout: 'column',
                items: [{
                    columnWidth: .5,
                    layout: 'form',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_phone'),
                        name: 'phone',
                        anchor: '99%',
                        id: config.id + '-phone'
                    }],
                }, {
                    columnWidth: .5,
                    layout: 'form',
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_fax'),
                        name: 'fax',
                        anchor: '99%',
                        id: config.id + '-fax'
                    }],
                }]
            }

            , {
                xtype: 'textarea',
                fieldLabel: _('ms2_dtls_introtext'),
                name: 'dtls_introtext',
                anchor: '99%',
                id: config.id + '-dtls_introtext'
            }


            , {
                xtype: 'textarea',
                fieldLabel: _('ms2_description'),
                name: 'description',
                anchor: '99%',
                id: config.id + '-description'
            }
            ,
            {
                xtype: 'xcheckbox',
                boxLabel: _('ms2_dtls_active'),
                name: 'dtls_active',
                anchor: '99%',
                id: config.id + '-dtls_active',

            },
            {
                xtype: 'xcheckbox',
                boxLabel: _('ms2_dtls_shipping'),
                name: 'dtls_shipping',
                anchor: '99%',
                id: config.id + '-dtls_shipping',

            }
        ];
    }
});
