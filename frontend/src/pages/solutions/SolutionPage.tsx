import React from "react";
import { useParams, Navigate } from "react-router-dom";
import SolutionPageTemplate from "../../components/templates/SolutionPageTemplate";
import { SOLUTIONS_DATA } from "../../data/solutions.content";
import { ROUTE_PATHS } from "../../config/route/routes";

const SolutionPage: React.FC = () => {
  const { solutionId } = useParams<{ solutionId: string }>();

  if (!solutionId) {
    return <Navigate to={ROUTE_PATHS.NOT_FOUND} replace />;
  }

  const solution = SOLUTIONS_DATA.find(
    (s) => s.id === solutionId || s.slug === solutionId
  );

  if (!solution) {
    return <Navigate to={ROUTE_PATHS.NOT_FOUND} replace />;
  }

  return <SolutionPageTemplate solution={solution} />;
};

export default SolutionPage;