<?php
return array(
    'fields' => array(
        'dtls_introtext' => NULL,
        'dtls_active' => 0,
        'dtls_shipping' => 0,
    ),
    'fieldMeta' => array(
        'dtls_introtext' => array(
          'dbtype' => 'text',
          'phptype' => 'string',
          'null' => NULL,
        ),
        'dtls_active' => array(
          'dbtype' => 'tinyint',
          'precision' => '1',
          'attributes' => 'unsigned',
          'phptype' => 'boolean',
          'default' => 0,
        ),
        'dtls_shipping' => array(
          'dbtype' => 'tinyint',
          'precision' => '1',
          'attributes' => 'unsigned',
          'phptype' => 'boolean',
          'default' => 0,
        ),
    ),
);
