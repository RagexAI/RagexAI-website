import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ServicePageTemplate from "../../components/templates/ServicePageTemplate";
import { SERVICES_DATA } from "../../data/services.content";
import { ROUTE_PATHS } from "../../config/route/routes";

const ServicePage: React.FC = () => {
   const { serviceId } = useParams<{ serviceId: string }>();

  if (!serviceId) {
    return <Navigate to={ROUTE_PATHS.NOT_FOUND} replace />;
  }

  const service = SERVICES_DATA.find(
    (s) => s.id === serviceId || s.slug === serviceId
  );

  if (!service) {
    return <Navigate to={ROUTE_PATHS.NOT_FOUND} replace />;
  }

  return <ServicePageTemplate service={service} />;
};

export default ServicePage;