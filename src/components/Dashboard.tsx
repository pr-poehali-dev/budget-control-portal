import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Dashboard = () => {
  const stats = [
    {
      title: "Медучреждений",
      value: "247",
      icon: "Building2",
      color: "text-blue-600",
    },
    {
      title: "Активных проверок",
      value: "12",
      icon: "Search",
      color: "text-orange-600",
    },
    {
      title: "Документов на контроле",
      value: "89",
      icon: "FileText",
      color: "text-green-600",
    },
    {
      title: "Выявленных нарушений",
      value: "5",
      icon: "AlertTriangle",
      color: "text-red-600",
    },
  ];

  const recentActivity = [
    {
      type: "request",
      facility: 'КГБУЗ "Красноярская ГКБ №20"',
      action: "Запрос финансовой отчетности",
      time: "2 часа назад",
    },
    {
      type: "document",
      facility: 'КГБУЗ "ККБ им. В.Н. Ждановой"',
      action: "Размещен акт проверки",
      time: "4 часа назад",
    },
    {
      type: "violation",
      facility: 'КГБУЗ "Ачинская городская больница"',
      action: "Выявлено нарушение финансовой дисциплины",
      time: "6 часов назад",
    },
    {
      type: "request",
      facility: 'КГБУЗ "Шарыповская ЦРБ"',
      action: "Предоставлен отчет о движении средств",
      time: "8 часов назад",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Панель управления</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <Icon
                  name={stat.icon as any}
                  size={24}
                  className={stat.color}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Activity" size={20} />
              <span>Последняя активность</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <Icon
                    name={
                      activity.type === "request"
                        ? "FileText"
                        : activity.type === "document"
                          ? "Upload"
                          : "AlertCircle"
                    }
                    size={16}
                    className="text-gray-500"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {activity.facility}
                    </p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={20} />
              <span>Статистика проверок</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium">Плановые проверки</span>
                <span className="text-2xl font-bold text-green-600">8</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span className="text-sm font-medium">
                  Внеплановые проверки
                </span>
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium">
                  Завершенные проверки
                </span>
                <span className="text-2xl font-bold text-blue-600">23</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
