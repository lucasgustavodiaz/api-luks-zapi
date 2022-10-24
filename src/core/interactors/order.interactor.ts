import OrderRepository from '../respositories/order.repository';
import { OrderRequestDto, OrderResponseDto } from '../dto/Order';
import { Result } from '../types/response';
import PaymentRepository from '../respositories/payment.repository';
import { Currencies, PaymentItem } from '../dto/mercadopago';

//getOrder - No tendria ninguna dependencia

export const createOrderInteractor =
  (orderRepository: OrderRepository, paymentRepository: PaymentRepository) =>
  async (
    OrderRequestDto: OrderRequestDto
  ): Promise<Result<OrderResponseDto>> => {
    //Creamos la orden
    const newOrder = await orderRepository.createOrder(OrderRequestDto);

    if (!newOrder.success) {
      return newOrder;
    }

    //Creamos el pago
    let paymentItems: PaymentItem[] = [];
    OrderRequestDto.items.forEach((item) => {
      paymentItems.push({
        currency_id: Currencies.ARS,
        unit_price: item.unitPrice,
        title: item.title,
        quantity: item.quantity,
      });
    });

    const preference = await paymentRepository.createPreference({
      external_reference: newOrder.result.id.toString(),
      items: paymentItems,
      shipmentCost: OrderRequestDto.shippingPrice,
    });

    //Restornamos el orderId y el init_point
    return {
      success: true,
      result: { orderId: newOrder.result.id, ...preference },
    };
  };
