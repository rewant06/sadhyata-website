import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Foundation from "./pages/Foundation";

const SadhyataInfra = lazy(() => import("./pages/subsidiaries/SadhyataInfra"));
const SadhyataMines = lazy(() => import("./pages/subsidiaries/SadhyataMines"));
const SadhyataEnergy = lazy(() => import("./pages/subsidiaries/SadhyataEnergy"));
const SadhyataBharat = lazy(() => import("./pages/subsidiaries/SadhyataBharat"));
const SadhyataCapital = lazy(() => import("./pages/subsidiaries/SadhyataCapital"));
const SadhyataInvestment = lazy(() => import("./pages/subsidiaries/SadhyataInvestment"));
const SadhyataBroking = lazy(() => import("./pages/subsidiaries/SadhyataBroking"));
const SadhyataHotels = lazy(() => import("./pages/subsidiaries/SadhyataHotels"));
const SadhyataAgrotech = lazy(() => import("./pages/subsidiaries/SadhyataAgrotech"));
const SadhyataBrands = lazy(() => import("./pages/subsidiaries/SadhyataBrands"));
const SadhyataConsultancy = lazy(() => import("./pages/subsidiaries/SadhyataConsultancy"));
const SadhyataFashion = lazy(() => import("./pages/subsidiaries/SadhyataFashion"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-navy font-serif text-xl animate-pulse">Loading...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/businesses/infra" element={<SadhyataInfra />} />
            <Route path="/businesses/mines" element={<SadhyataMines />} />
            <Route path="/businesses/energy" element={<SadhyataEnergy />} />
            <Route path="/businesses/bharat" element={<SadhyataBharat />} />
            <Route path="/businesses/capital" element={<SadhyataCapital />} />
            <Route path="/businesses/investment" element={<SadhyataInvestment />} />
            <Route path="/businesses/broking" element={<SadhyataBroking />} />
            <Route path="/businesses/hotels" element={<SadhyataHotels />} />
            <Route path="/businesses/agrotech" element={<SadhyataAgrotech />} />
            <Route path="/businesses/brands" element={<SadhyataBrands />} />
            <Route path="/businesses/consultancy" element={<SadhyataConsultancy />} />
            <Route path="/businesses/fashion" element={<SadhyataFashion />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
