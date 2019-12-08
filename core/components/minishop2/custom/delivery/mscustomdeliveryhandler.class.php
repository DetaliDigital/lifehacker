
<?php
if (!class_exists('msDeliveryInterface')) {
	require_once MODX_CORE_PATH . 'components/minishop2/model/minishop2/msdeliveryhandler.class.php';
}
//Важно: при изменении названия файла, вот в этом месте также нужно изменить класс
class mscustomdeliveryhandler extends msDeliveryHandler implements msDeliveryInterface {

public function getCost(msOrderInterface $order, msDelivery $delivery, $cost = 0) {
	if (empty($this->ms2)) {
			$this->ms2 = $this->modx->getService('miniShop2');
	}
	if (empty($this->ms2->cart)) {
			$this->ms2->loadServices($this->ms2->config['ctx']);
	}

	if (!$this->modx->loadClass('pdofetch', MODX_CORE_PATH . 'components/pdotools/model/pdotools/', false, true)) {
    return false;
	}

	$cart = $this->ms2->cart->status();
	$product = $this->ms2->cart->get();
	$weight_price = $delivery->get('weight_price');

	$where = array(
    'msProduct.id:IN' => array(),
	);
	foreach ($product as $entry) {
    $where['msProduct.id:IN'][] = $entry['id'];
	}
	$where['msProduct.id:IN'] = array_unique($where['msProduct.id:IN']);

	$pdoFetch = new pdoFetch($this->modx);

	$leftJoin = array(
    'Data' => array(
        'class' => 'msProductData',
    ),
    'Vendor' => array(
        'class' => 'msVendor',
        'on' => 'Data.vendor = Vendor.id',
    ),
	 );

	$select = array(
    'msProduct' => 'id',
    'Vendor' => 'vendor.dtls_shipping',
  );

	$default = array(
    'class' => 'msProduct',
    'leftJoin' => $leftJoin,
    'where' => $where,
    'select' => $select,
    'sortby' => 'msProduct.id',
    'groupby' => 'msProduct.id',
    'limit' => 0,
    'return' => 'data',
  );

	$pdoFetch->setConfig(array_merge($default));
  $tmp = $pdoFetch->run();
	$output = array();
	foreach ($tmp as $key => $item) {
	$output[] = $item['dtls_shipping'];
	}

	$cart_weight = $cart['total_weight'];
	$cost += $weight_price * $cart_weight;
	$add_price = $delivery->get('price');


	if (preg_match('/%$/', $add_price)) {
			$add_price = str_replace('%', '', $add_price);
			$add_price = $cost / 100 * $add_price;
	}

	if(in_array(1, $output)){
		return $cost;
	}

	else {
	$cost += $add_price;
	return $cost;
  }

}
}
