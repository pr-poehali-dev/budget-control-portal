import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AuditReasons = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Поводы для проверок</h2>
      <Card>
        <CardHeader>
          <CardTitle>Функция в разработке</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Раздел для отслеживания поводов проведения ведомственных проверок.
          </p>
          <div className="bg-orange-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium text-orange-900 mb-2">
              Последний повод:
            </h4>
            <p className="text-sm text-orange-800">
              КГБУЗ "Шарыповская ЦРБ" - Плановая проверка использования
              бюджетных средств
            </p>
            <p className="text-xs text-orange-600 mt-1">
              Назначена: 10.02.2024
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditReasons;
