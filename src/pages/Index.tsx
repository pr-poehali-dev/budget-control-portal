import { useState } from "react";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";
import MedicalFacilitiesList from "@/components/MedicalFacilitiesList";
import DocumentRequest from "@/components/DocumentRequest";
import DocumentStorage from "@/components/DocumentStorage";
import AuditReasons from "@/components/AuditReasons";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "facilities":
        return <MedicalFacilitiesList />;
      case "document-request":
        return <DocumentRequest />;
      case "document-storage":
        return <DocumentStorage />;
      case "audit-reasons":
        return <AuditReasons />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="container mx-auto px-4 py-6">{renderContent()}</main>
    </div>
  );
};

export default Index;
