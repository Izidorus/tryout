import { Order } from "../order/Order";

export type Shipment = {
  createdAt: Date;
  id: string;
  order?: Order;
  partner?:
    | "BlueDart"
    | "Delhivery"
    | "Dtdc"
    | "FedEx"
    | "Dhl"
    | "IndiaPost"
    | "Shadowfax"
    | "Xpressbess";
  status?:
    | "initiated"
    | "InProgress"
    | "Delivered"
    | "ReturnInProgress"
    | "Returned";
  trackingId: string;
  updatedAt: Date;
};
