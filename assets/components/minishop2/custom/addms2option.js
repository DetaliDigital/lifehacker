Ext.override (miniShop2.window.CreateOption, {
  getForm: function (config) {
      return [
          {xtype: 'hidden', name: 'id', id: config.id + '-id'},
          {xtype: 'hidden', name: 'categories', id: config.id + '-categories'},
          {
              layout: 'column',
              items: [{
                  columnWidth: .5,
                  layout: 'form',
                  defaults: {msgTarget: 'under'},
                  items: [{
                      xtype: 'textfield',
                      fieldLabel: _('ms2_ft_name'),
                      name: 'key',
                      //allowBlank: false,
                      anchor: '99%',
                      id: config.id + '-name'
                  }]
              }, {
                  columnWidth: .5,
                  layout: 'form',
                  defaults: {msgTarget: 'under'},
                  items: [{
                      xtype: 'textfield',
                      fieldLabel: _('ms2_ft_caption'),
                      name: 'caption',
                      //allowBlank: false,
                      anchor: '99%',
                      id: config.id + '-caption'
                  }]
              }]
          }, {
              xtype: 'minishop2-combo-option-types',
              anchor: '99%',
              id: config.id + '-types',
              listeners: {
                  select: {fn: this.onSelectType, scope: this},
              }
          }, {
              xtype: 'panel',
              anchor: '99%',
              id: config.id + '-properties-panel',
          }, {
              layout: 'column',
              items: [{
                  columnWidth: .5,
                  layout: 'form',
                  defaults: {msgTarget: 'under'},
                  items: [{
                      xtype: 'textfield',
                      fieldLabel: _('ms2_ft_measure_unit'),
                      name: 'measure_unit',
                      allowBlank: true,
                      anchor: '99%',
                      id: config.id + '-measure-unit',
                  }]
              }, {
                  columnWidth: .5,
                  layout: 'form',
                  defaults: {msgTarget: 'under'},
                  items: [{
                      xtype: 'modx-combo-category',
                      fieldLabel: _('ms2_ft_group'),
                      name: 'category',
                      anchor: '99%',
                      id: config.id + '-category',
                  }]
              }]
          },
           {
              xtype: 'textarea',
              fieldLabel: _('ms2_ft_description'),
              name: 'description',
              anchor: '99%',
              id: config.id + '-description'
          },

          {
              layout: 'column',
              title: _('ms2_ft_title_sf_dtls'),
              items: [{
                  columnWidth: .5,
                  layout: 'form',
                  defaults: {msgTarget: 'under'},
                  items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_ft_dtls_rules'),
                        name: 'dtls_rules',
                        anchor: '99%',
                        id: config.id + '-dtls_rules'
                    }]
              }, {
                  columnWidth: .5,
                  layout: 'form',
                  defaults: {msgTarget: 'under'},
                  items: [{
                        xtype: 'textfield',
                        fieldLabel: _('ms2_ft_dtls_page'),
                        name: 'dtls_page',
                        anchor: '99%',
                        id: config.id + '-dtls_page'
                    }]
              }]
          },
          {
                        xtype: 'xcheckbox',
                        boxLabel: _('ms2_ft_dtls_url'),
                        name: 'dtls_url',
                        anchor: '99%',
                        id: config.id + '-dtls_url'
                    }
      ];
  },

  onSelectType: function (combo, row) {
      var panel = Ext.getCmp(this.config.id + '-properties-panel');
      if (panel) {
          panel.getEl().update('');
      }
      if (!row.data || !row.data['xtype']) {
          return;
      }

      MODx.load({
          xtype: row.data['xtype'],
          renderTo: this.config.id + '-properties-panel',
          record: this.record,
          name: 'properties',
      });
  },
});
