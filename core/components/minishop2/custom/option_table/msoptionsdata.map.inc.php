<?php
return array(
    'fields' => array(
        'dtls_url' => 0,
        'dtls_rules' => NULL,
        'dtls_page' => NULL,
    ),
    'fieldMeta' => array(
        'dtls_url' => array(
          'dbtype' => 'tinyint',
				  'precision' => '1',
				  'attributes' => 'unsigned',
				  'phptype' => 'boolean',
				  'default' => 0,
        ),
        'dtls_rules' => array(
          'dbtype' => 'int',
          'precision' => '10',
          'attributes' => 'unsigned',
          'phptype' => 'integer',
          'null' => false,
        ),
        'dtls_page' => array(
          'dbtype' => 'int',
          'precision' => '10',
          'attributes' => 'unsigned',
          'phptype' => 'integer',
          'null' => false,
        ),
    ),
);
