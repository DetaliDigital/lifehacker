$(document).ready(function() {
miniShop2.Order.deliveryCost = '#ms2_delivery_cost';

miniShop2.Callbacks.add('Order.getcost.response.success','getcost_response_success', function(response) {
  var rdc = response.data['delivery_cost'];
  var rdic = response.data['deliveryIndividualCost'];
  if (rdic == 1)
  {
    $(miniShop2.Order.deliveryCost, miniShop2.Order.order).text('Индивидуальный рассчет');
  }
  else {
  if (rdc) $(miniShop2.Order.deliveryCost, miniShop2.Order.order).html(miniShop2.Utils.formatPrice(rdc) + " руб");
  else $(miniShop2.Order.deliveryCost, miniShop2.Order.order).text('Бесплатно');
  }
  console.log(rdc);
  console.log(rdic);
});

miniShop2.Callbacks.add('Order.getcost.response.error', 'getcost_response_error', function(response) {
  var cost = response.data['cost'];
  var rdic = response.data['deliveryIndividualCost'];
  $(miniShop2.Order.orderCost).text(miniShop2.Utils.formatPrice(cost));
  $(miniShop2.Order.deliveryCost, miniShop2.Order.order).text('0');
  console.log(rdc);
  console.log(rdic);
});

miniShop2.Callbacks.add('Order.add.response.success', 'add_response_success' , function(response) {
  miniShop2.Order.getcost();
});

  $('.qty').on('click', '.input_count_action', function(e) {

    var $input = $(this).closest("div").find('input');
    var count = parseInt($input.val());

    if ($(this).hasClass("plus")) {
      count = count + 1;
    } else if ($(this).hasClass("minus")) {
      count = count - 1;
    }

    $input.val(count);
    $input.change();

    return false;
  });

  $('div.count').click(function(e) {
    var v = $(this).parent().find('input#product_price').val(),
      k = $(this).parent().find('input[name="key"]').val();

    if (($(this).hasClass('minus') || $(this).hasClass('plus')) && v > 0) {

      $.post("", {
        ms2_action: 'cart/change',
        key: k,
        count: v
      }, function(response) {

        if (typeof response.success !== "undefined") {

          if (response.success) {
            miniShop2.Order.getcost();
            miniShop2.Cart.status(response.data);
          }
        }
      }, "json");

    }
  });

	miniShop2.Callbacks.Cart.change.before = function() {
		var $field = $(miniShop2.sendData.$form[0]).find(miniShop2.Cart.countInput);
		var count = +$field.val();
		if (count < 1) {
			$field.val('1');
			miniShop2.Message.error('Ошибка! Нельзя ставить кол-во меньше 1!');
			return false;
		}
		return true;
	}
});
