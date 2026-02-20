import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

/*
 * Every page is lazy-loaded.
 * Vite splits each import() into its own chunk automatically.
 * Initial JS payload drops from ~3.6 MB → ~350 KB.
 */

// Main Pages
const Home                  = lazy(() => import('./pages/Home'));
const Portfolio             = lazy(() => import('./pages/Portfolio'));
const Contact               = lazy(() => import('./pages/Contact'));

// AI First Pages
const CoreAI                = lazy(() => import('./pages/ai/CoreAI'));
const AgenticAI             = lazy(() => import('./pages/ai/AgenticAI'));
const AISolutionsByIndustry = lazy(() => import('./pages/ai/AISolutionsByIndustry'));

// Service Pages
const EcommerceDevelopment  = lazy(() => import('./pages/services/EcommerceDevelopment'));
const DevOpsCloudSecurity   = lazy(() => import('./pages/services/DevOpsCloudSecurity'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
const ManagedITServices     = lazy(() => import('./pages/services/ManagedITServices'));
const AIMLAutomation        = lazy(() => import('./pages/services/AIMLAutomation'));
const WebMobileDevelopment  = lazy(() => import('./pages/services/WebMobileDevelopment'));
const SaaSProductDevelopment = lazy(() => import('./pages/services/SaaSProductDevelopment'));

// Solution Pages
const WebApplications       = lazy(() => import('./pages/solutions/WebApplications'));
const EnterpriseApplications = lazy(() => import('./pages/solutions/EnterpriseApplications'));
const CRMERPSolutions       = lazy(() => import('./pages/solutions/CRMERPSolutions'));
const MarketplacePlatforms  = lazy(() => import('./pages/solutions/MarketplacePlatforms'));
const CloudMigration        = lazy(() => import('./pages/solutions/CloudMigration'));

// Industry Pages
const Industries            = lazy(() => import('./pages/Industries'));
const IndustryDetail        = lazy(() => import('./pages/IndustryDetail'));
const EcommerceIndustry     = lazy(() => import('./pages/industries/EcommerceIndustry'));
const HealthcareIndustry    = lazy(() => import('./pages/industries/HealthcareIndustry'));
const FintechIndustry       = lazy(() => import('./pages/industries/FintechIndustry'));
const EdtechIndustry        = lazy(() => import('./pages/industries/EdtechIndustry'));
const SaaSIndustry          = lazy(() => import('./pages/industries/SaaSIndustry'));
const RealEstateIndustry    = lazy(() => import('./pages/industries/RealEstateIndustry'));

// Legacy Pages
const CaseStudies           = lazy(() => import('./pages/CaseStudies'));
const CaseStudyDetail       = lazy(() => import('./pages/CaseStudyDetail'));
const About                 = lazy(() => import('./pages/About'));
const Careers               = lazy(() => import('./pages/Careers'));
const CareerDetail          = lazy(() => import('./pages/CareerDetail'));
const Blog                  = lazy(() => import('./pages/Blog'));
const BlogArticle           = lazy(() => import('./pages/BlogArticle'));

/* Minimal fallback — invisible div that holds layout height while chunk loads */
const PageFallback = () => <div style={{ minHeight: '100vh' }} />;

function App() {
  return (
    <Layout>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          {/* Main Routes */}
          <Route path="/"           element={<Home />} />
          <Route path="/portfolio"  element={<Portfolio />} />
          <Route path="/contact"    element={<Contact />} />

          {/* AI First Routes */}
          <Route path="/ai/core-ai"              element={<CoreAI />} />
          <Route path="/ai/core-ai/:slug"        element={<CoreAI />} />
          <Route path="/ai/agentic-ai"           element={<AgenticAI />} />
          <Route path="/ai/agentic-ai/:slug"     element={<AgenticAI />} />
          <Route path="/ai/solutions"            element={<AISolutionsByIndustry />} />
          <Route path="/ai/solutions/:slug"      element={<AISolutionsByIndustry />} />

          {/* Service Routes */}
          <Route path="/services/ecommerce-development"   element={<EcommerceDevelopment />} />
          <Route path="/services/devops-cloud-security"   element={<DevOpsCloudSecurity />} />
          <Route path="/services/digital-transformation"  element={<DigitalTransformation />} />
          <Route path="/services/managed-it-services"     element={<ManagedITServices />} />
          <Route path="/services/ai-ml-automation"        element={<AIMLAutomation />} />
          <Route path="/services/web-mobile-development"  element={<WebMobileDevelopment />} />
          <Route path="/services/saas-product-development" element={<SaaSProductDevelopment />} />

          {/* Solution Routes */}
          <Route path="/solutions/web-applications"       element={<WebApplications />} />
          <Route path="/solutions/enterprise-applications" element={<EnterpriseApplications />} />
          <Route path="/solutions/crm-erp-solutions"      element={<CRMERPSolutions />} />
          <Route path="/solutions/marketplace-platforms"  element={<MarketplacePlatforms />} />
          <Route path="/solutions/cloud-migration"        element={<CloudMigration />} />

          {/* Industry Routes */}
          <Route path="/industries"               element={<Industries />} />
          <Route path="/industries/:id"           element={<IndustryDetail />} />
          <Route path="/industries/ecommerce"     element={<EcommerceIndustry />} />
          <Route path="/industries/healthcare"    element={<HealthcareIndustry />} />
          <Route path="/industries/fintech"       element={<FintechIndustry />} />
          <Route path="/industries/edtech"        element={<EdtechIndustry />} />
          <Route path="/industries/saas"          element={<SaaSIndustry />} />
          <Route path="/industries/real-estate"   element={<RealEstateIndustry />} />

          {/* Legacy Routes */}
          <Route path="/case-studies"      element={<CaseStudies />} />
          <Route path="/case-studies/:id"  element={<CaseStudyDetail />} />
          <Route path="/about"             element={<About />} />
          <Route path="/careers"           element={<Careers />} />
          <Route path="/careers/:id"       element={<CareerDetail />} />
          <Route path="/blog"              element={<Blog />} />
          <Route path="/blog/:id"          element={<BlogArticle />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
