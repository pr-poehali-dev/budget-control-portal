import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DocumentStorage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Документы контроля</h2>
      <Card>
        <CardHeader>
          <CardTitle>Функция в разработке</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Здесь будут размещаться акты проверок, предписания и документы
            исполнения.
          </p>
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h4 className="font-medium text-green-900 mb-2">
              Последний документ:
            </h4>
            <p className="text-sm text-green-800">
              КГБУЗ "Шарыповская ЦРБ" - Акт проверки финансово-хозяйственной
              деятельности
            </p>
            <p className="text-xs text-green-600 mt-1">Размещен: 20.01.2024</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentStorage;
