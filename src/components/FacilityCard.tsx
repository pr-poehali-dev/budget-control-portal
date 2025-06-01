import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface MedicalFacility {
  id: string;
  name: string;
  type: string;
  address: string;
  headDoctor: string;
  phone: string;
  status: "active" | "check" | "violation";
}

interface FacilityCardProps {
  facility: MedicalFacility;
}

const FacilityCard = ({ facility }: FacilityCardProps) => {
  const facilityDetails = {
    inn: "2461024156",
    kpp: "246101001",
    headAccountant: "Иванова Елена Викторовна",
    website: "https://gkb20.ru",
    email: "info@gkb20.ru",
    ogrn: "1022401810090",
    okpo: "02068056",
  };

  const financialDocs = [
    {
      name: "Бухгалтерский баланс",
      period: "2024 г.",
      status: "Предоставлен",
      date: "15.01.2024",
    },
    {
      name: "Отчет о финансовых результатах",
      period: "2024 г.",
      status: "Запрошен",
      date: "10.01.2024",
    },
    {
      name: "Отчет о движении денежных средств",
      period: "2023 г.",
      status: "Предоставлен",
      date: "20.12.2023",
    },
  ];

  const regulatoryDocs = [
    { name: "Устав организации", status: "Действует", date: "01.03.2020" },
    {
      name: "Лицензия на медицинскую деятельность",
      status: "Действует",
      date: "15.06.2022",
    },
    {
      name: "Лицензия на фармацевтическую деятельность",
      status: "Действует",
      date: "20.08.2021",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Icon name="Building2" size={24} className="text-blue-600" />
            <span>{facility.name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">
                Основная информация
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">ИНН:</span>
                  <span className="font-medium">{facilityDetails.inn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">КПП:</span>
                  <span className="font-medium">{facilityDetails.kpp}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ОГРН:</span>
                  <span className="font-medium">{facilityDetails.ogrn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ОКПО:</span>
                  <span className="font-medium">{facilityDetails.okpo}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">
                Контактная информация
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-gray-500" />
                  <span>{facility.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-gray-500" />
                  <span>{facility.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} className="text-gray-500" />
                  <span>{facilityDetails.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Globe" size={16} className="text-gray-500" />
                  <a
                    href={facilityDetails.website}
                    className="text-blue-600 hover:underline"
                  >
                    {facilityDetails.website}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Руководство</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">Главный врач:</span>
                  <p className="font-medium">{facility.headDoctor}</p>
                </div>
                <div>
                  <span className="text-gray-600">Главный бухгалтер:</span>
                  <p className="font-medium">
                    {facilityDetails.headAccountant}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="financial" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="financial">Финансовые документы</TabsTrigger>
          <TabsTrigger value="accounting">Бухгалтерские документы</TabsTrigger>
          <TabsTrigger value="regulatory">Правоустанавливающие</TabsTrigger>
        </TabsList>

        <TabsContent value="financial">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Финансовые документы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {financialDocs.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-sm text-gray-600">
                        Период: {doc.period}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          doc.status === "Предоставлен"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {doc.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{doc.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accounting">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Бухгалтерские документы</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Раздел в разработке. Здесь будет отображаться бухгалтерская
                отчетность.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regulatory">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Правоустанавливающие документы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {regulatoryDocs.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{doc.name}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        {doc.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{doc.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FacilityCard;
