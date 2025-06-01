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
          <div className="flex items-center space-x-2 text-blue-600">
            <Icon name="Clock" size={16} />
            <span className="text-sm">Ожидается в следующем обновлении</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentStorage;
