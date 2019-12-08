<?php
if (!class_exists('msDeliveryInterface')) {
	require_once MODX_CORE_PATH . 'components/minishop2/model/minishop2/msdeliveryhandler.class.php';
}
//Важно: при изменении названия файла, вот в этом месте также нужно изменить класс
class mscustomdeliveryhandler extends msDeliveryHandler implements msDeliveryInterface {
public function getCost(msOrderInterface $order, msDelivery $delivery, $cost = 0) {
	$cart_weight = $cart['total_weight'];
	$cost += $weight_price * $cart_weight;
	$add_price = $delivery->get('price');

	if (preg_match('/%$/', $add_price)) {
			$add_price = str_replace('%', '', $add_price);
			$add_price = $cost / 100 * $add_price;
	}

  $delivery = 'Индивидуальный рассчет'
	$cost += $add_price;

	return $delivery;
	return $cost;
}
}
