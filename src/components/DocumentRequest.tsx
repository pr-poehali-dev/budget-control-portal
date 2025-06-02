import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DocumentRequest = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Запрос документов</h2>
      <Card>
        <CardHeader>
          <CardTitle>Функция в разработке</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Этот раздел позволит отправлять запросы документов подведомственным
            учреждениям.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium text-blue-900 mb-2">
              Последний запрос:
            </h4>
            <p className="text-sm text-blue-800">
              КГБУЗ "Шарыповская ЦРБ" - Запрос годовой отчетности за 2024 год
            </p>
            <p className="text-xs text-blue-600 mt-1">Отправлен: 15.01.2024</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentRequest;
