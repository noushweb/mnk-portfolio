import ServiceOfferPage, { getServiceOffer, serviceOfferMetadata } from "@/components/ServiceOfferPage";

const offer = getServiceOffer("design-system-consultant");
export const metadata = serviceOfferMetadata(offer);

export default function DesignSystemConsultantPage() {
  return <ServiceOfferPage offer={offer} />;
}
