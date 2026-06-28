import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Foundation from "./pages/Foundation";
import ScrollToHash from "./components/ScrollToHash";

// --- Subsidiary pages (lazy-loaded for performance) ---
const SadhyataInfra       = lazy(() => import("./pages/subsidiaries/SadhyataInfra"));
const SadhyataMines       = lazy(() => import("./pages/subsidiaries/SadhyataMines"));
const SadhyataEnergy      = lazy(() => import("./pages/subsidiaries/SadhyataEnergy"));
const SadhyataBharat      = lazy(() => import("./pages/subsidiaries/SadhyataBharat"));
const SadhyataCapital     = lazy(() => import("./pages/subsidiaries/SadhyataCapital"));
const SadhyataInvestment  = lazy(() => import("./pages/subsidiaries/SadhyataInvestment"));
const SadhyataBroking     = lazy(() => import("./pages/subsidiaries/SadhyataBroking"));
const SadhyataHotels      = lazy(() => import("./pages/subsidiaries/SadhyataHotels"));
const SadhyataAgrotech    = lazy(() => import("./pages/subsidiaries/SadhyataAgrotech"));
const SadhyataBrands      = lazy(() => import("./pages/subsidiaries/SadhyataBrands"));
const SadhyataConsultancy = lazy(() => import("./pages/subsidiaries/SadhyataConsultancy"));
const SadhyataFashion     = lazy(() => import("./pages/subsidiaries/SadhyataFashion"));

// --- New dedicated pages ---
const Leadership = lazy(() => import("./pages/Leadership"));
const Investors  = lazy(() => import("./pages/Investors"));
const Careers    = lazy(() => import("./pages/Careers"));

const queryClient = new QueryClient();

// Loading screen with a 10-second timeout fallback.
// Without a timeout, users on poor connections see "Loading..." forever.
const Loading = () => {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTimedOut(true), 10_000);
    return () => clearTimeout(t);
  }, []);

  if (timedOut) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-4">
            This is taking longer than expected.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-navy text-primary-foreground text-sm font-medium uppercase tracking-wider hover:bg-navy-light transition-colors"
          >
            Reload
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-navy font-serif text-xl animate-pulse">Loading…</div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Core pages */}
            <Route path="/"             element={<Index />} />
            <Route path="/leadership"   element={<Leadership />} />
            <Route path="/foundation"   element={<Foundation />} />
            <Route path="/investors"    element={<Investors />} />
            <Route path="/careers"      element={<Careers />} />

            {/* Subsidiary pages */}
            <Route path="/businesses/infra"       element={<SadhyataInfra />} />
            <Route path="/businesses/mines"       element={<SadhyataMines />} />
            <Route path="/businesses/energy"      element={<SadhyataEnergy />} />
            <Route path="/businesses/bharat"      element={<SadhyataBharat />} />
            <Route path="/businesses/capital"     element={<SadhyataCapital />} />
            <Route path="/businesses/investment"  element={<SadhyataInvestment />} />
            <Route path="/businesses/broking"     element={<SadhyataBroking />} />
            <Route path="/businesses/hotels"      element={<SadhyataHotels />} />
            <Route path="/businesses/agrotech"    element={<SadhyataAgrotech />} />
            <Route path="/businesses/brands"      element={<SadhyataBrands />} />
            <Route path="/businesses/consultancy" element={<SadhyataConsultancy />} />
            <Route path="/businesses/fashion"     element={<SadhyataFashion />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
