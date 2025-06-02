import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const menuItems = [
    { id: "dashboard", label: "Главная", icon: "Home" },
    { id: "facilities", label: "Медучреждения", icon: "Building2" },
    { id: "document-request", label: "Запрос документов", icon: "FileText" },
    { id: "document-storage", label: "Документы контроля", icon: "FolderOpen" },
    { id: "audit-reasons", label: "Поводы проверок", icon: "AlertTriangle" },
  ];

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Icon name="Shield" size={32} className="text-blue-200" />
            <h1 className="text-xl font-bold">КонтрБюджет</h1>
          </div>

          <div className="flex space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                onClick={() => onSectionChange(item.id)}
                className={`text-white hover:bg-blue-600 ${
                  activeSection === item.id ? "bg-blue-800" : ""
                }`}
              >
                <Icon name={item.icon as any} size={16} />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
