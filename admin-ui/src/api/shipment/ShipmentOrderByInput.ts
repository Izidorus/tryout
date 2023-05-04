import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  partner?: SortOrder;
  status?: SortOrder;
  trackingId?: SortOrder;
  updatedAt?: SortOrder;
};
