import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVButton = () => {
  const handleViewCV = () => {
    window.open("/Portefolio/cv.pdf", "_blank");
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={handleViewCV}
        className="flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
        title="Visualiser mon CV"
      >
        <FileText className="w-4 h-4" />
        <span>CV</span>
      </Button>
    </div>
  );
};

export default CVButton;
