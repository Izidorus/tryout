import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
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
  trackingId?: StringFilter;
};
