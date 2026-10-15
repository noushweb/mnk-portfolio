import ServiceOfferPage, { getServiceOffer, serviceOfferMetadata } from "@/components/ServiceOfferPage";

const offer = getServiceOffer("saas-product-design");
export const metadata = serviceOfferMetadata(offer);

export default function SaasProductDesignPage() {
  return <ServiceOfferPage offer={offer} />;
}
