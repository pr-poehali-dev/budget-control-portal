import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import FacilityCard from "@/components/FacilityCard";

interface MedicalFacility {
  id: string;
  name: string;
  type: string;
  address: string;
  headDoctor: string;
  phone: string;
  status: "active" | "check" | "violation";
}

const MedicalFacilitiesList = () => {
  const [selectedFacility, setSelectedFacility] =
    useState<MedicalFacility | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const facilities: MedicalFacility[] = [
    {
      id: "1",
      name: 'КГБУЗ "Красноярская городская клиническая больница №20 имени И.С. Берзона"',
      type: "Городская больница",
      address: "г. Красноярск, ул. Инструментальная, 12",
      headDoctor: "Петров Иван Сергеевич",
      phone: "+7 (391) 264-25-73",
      status: "active",
    },
    {
      id: "2",
      name: 'КГБУЗ "Краевая клиническая больница им. проф. В.Н. Войно-Ясенецкого"',
      type: "Краевая больница",
      address: "г. Красноярск, ул. Партизана Железняка, 3",
      headDoctor: "Сидорова Мария Александровна",
      phone: "+7 (391) 220-14-30",
      status: "check",
    },
    {
      id: "3",
      name: 'КГБУЗ "Ачинская межрайонная больница"',
      type: "Межрайонная больница",
      address: "г. Ачинск, ул. Больничная, 1",
      headDoctor: "Козлов Александр Петрович",
      phone: "+7 (39151) 7-15-03",
      status: "violation",
    },
    {
      id: "4",
      name: 'КГБУЗ "Шарыповская ЦРБ"',
      type: "Центральная районная больница",
      address: "г. Шарыпово, ул. Ленина, 67",
      headDoctor: "Волков Дмитрий Николаевич",
      phone: "+7 (39153) 2-12-34",
      status: "active",
    },
  ];

  const filteredFacilities = facilities.filter(
    (facility) =>
      facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.address.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-600 bg-green-100";
      case "check":
        return "text-orange-600 bg-orange-100";
      case "violation":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Активно";
      case "check":
        return "На проверке";
      case "violation":
        return "Нарушения";
      default:
        return "Неизвестно";
    }
  };

  if (selectedFacility) {
    return (
      <div>
        <Button
          variant="outline"
          onClick={() => setSelectedFacility(null)}
          className="mb-4"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад к списку
        </Button>
        <FacilityCard facility={selectedFacility} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Медицинские учреждения
        </h2>
        <div className="flex items-center space-x-2">
          <Icon name="Search" size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Поиск учреждений..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredFacilities.map((facility) => (
          <Card
            key={facility.id}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedFacility(facility)}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {facility.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Icon name="Building2" size={16} />
                      <span>{facility.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} />
                      <span>{facility.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="User" size={16} />
                      <span>{facility.headDoctor}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(facility.status)}`}
                  >
                    {getStatusText(facility.status)}
                  </span>
                  <Icon
                    name="ChevronRight"
                    size={20}
                    className="text-gray-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MedicalFacilitiesList;
