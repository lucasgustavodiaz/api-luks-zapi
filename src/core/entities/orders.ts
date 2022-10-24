export interface OrderItems {
  id?: number;
  quantity: number;
  unitPrice: number;
  ordersId?: number;
  productsId: number;
}

export interface Order {
  id: number;
  paymentId: string | null;
  merchanOrderId: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  statusId: number;
}
