import ServiceOfferPage, { getServiceOffer, serviceOfferMetadata } from "@/components/ServiceOfferPage";

const offer = getServiceOffer("ux-audit");
export const metadata = serviceOfferMetadata(offer);

export default function UxAuditPage() {
  return <ServiceOfferPage offer={offer} />;
}
