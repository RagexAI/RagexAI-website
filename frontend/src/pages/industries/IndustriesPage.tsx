import React from "react";
import { useParams, Navigate } from "react-router-dom";
import IndustryPageTemplate from "../../components/templates/IndustryPageTemplate";
import { INDUSTRIES_DATA } from "../../data/industries.content";
import { ROUTE_PATHS } from "../../config/route/routes";


const IndustryPage: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();

  if (!industryId) {
    return <Navigate to={ROUTE_PATHS.NOT_FOUND} replace />;
  }

  const industry = INDUSTRIES_DATA.find(
    (i) => i.id === industryId || i.slug === industryId
  );

  if (!industry) {
    return <Navigate to={ROUTE_PATHS.NOT_FOUND} replace />;
  }

  return <IndustryPageTemplate industry={industry} />;
};

export default IndustryPage;