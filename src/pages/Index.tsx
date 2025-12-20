import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface EquipmentItem {
  id: number;
  name: string;
  type: string;
  status: 'working' | 'warning' | 'critical';
  location: string;
  lastMaintenance: string;
  nextMaintenance: string;
  responsible: string;
}

interface ClassRating {
  id: number;
  className: string;
  rating: number;
  totalQuestions: number;
  positiveAnswers: number;
  needsAttention: number;
}

interface Review {
  id: number;
  author: string;
  role: string;
  date: string;
  rating: number;
  equipmentId: number;
  equipmentName: string;
  comment: string;
}

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('equipment');
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

  const equipmentData: EquipmentItem[] = [
    { id: 1, name: 'Рабочая станция #01', type: 'Компьютер', status: 'working', location: 'Класс №1', lastMaintenance: '15.11.2024', nextMaintenance: '15.02.2025', responsible: 'Иванов И.И.' },
    { id: 2, name: 'Рабочая станция #02', type: 'Компьютер', status: 'working', location: 'Класс №1', lastMaintenance: '20.10.2024', nextMaintenance: '20.01.2025', responsible: 'Иванов И.И.' },
    { id: 3, name: 'Рабочая станция #03', type: 'Компьютер', status: 'warning', location: 'Класс №2', lastMaintenance: '05.09.2024', nextMaintenance: '05.12.2024', responsible: 'Петров П.П.' },
    { id: 4, name: 'Монитор Dell #12', type: 'Монитор', status: 'critical', location: 'Класс №2', lastMaintenance: '12.08.2024', nextMaintenance: '12.11.2024', responsible: 'Петров П.П.' },
    { id: 5, name: 'Сервер #01', type: 'Сервер', status: 'working', location: 'Серверная', lastMaintenance: '01.12.2024', nextMaintenance: '01.03.2025', responsible: 'Сидоров С.С.' },
    { id: 6, name: 'Принтер HP LaserJet', type: 'Периферия', status: 'warning', location: 'Класс №3', lastMaintenance: '10.10.2024', nextMaintenance: '10.01.2025', responsible: 'Иванов И.И.' },
    { id: 7, name: 'Проектор Epson', type: 'Проектор', status: 'working', location: 'Класс №1', lastMaintenance: '25.11.2024', nextMaintenance: '25.02.2025', responsible: 'Иванов И.И.' },
    { id: 8, name: 'Интерактивная доска', type: 'Периферия', status: 'working', location: 'Класс №2', lastMaintenance: '18.11.2024', nextMaintenance: '18.02.2025', responsible: 'Петров П.П.' },
  ];

  const classRatings: ClassRating[] = [
    { id: 1, className: 'Компьютерный класс №1', rating: 87, totalQuestions: 15, positiveAnswers: 13, needsAttention: 2 },
    { id: 2, className: 'Компьютерный класс №2', rating: 72, totalQuestions: 15, positiveAnswers: 11, needsAttention: 4 },
    { id: 3, className: 'Компьютерный класс №3', rating: 65, totalQuestions: 15, positiveAnswers: 10, needsAttention: 5 },
  ];

  const reviews: Review[] = [
    { id: 1, author: 'Смирнов А.В.', role: 'Преподаватель', date: '18.12.2024', rating: 5, equipmentId: 1, equipmentName: 'Рабочая станция #01', comment: 'Отличное состояние, работает стабильно. Студенты не испытывают проблем.' },
    { id: 2, author: 'Козлова М.И.', role: 'Преподаватель', date: '17.12.2024', rating: 3, equipmentId: 3, equipmentName: 'Рабочая станция #03', comment: 'Периодически зависает, требуется проверка. Мешает проведению занятий.' },
    { id: 3, author: 'Новиков Д.С.', role: 'Администратор', date: '15.12.2024', rating: 2, equipmentId: 4, equipmentName: 'Монитор Dell #12', comment: 'Монитор мерцает, срочно требуется замена. Студенты жалуются на усталость глаз.' },
    { id: 4, author: 'Федорова Н.П.', role: 'Преподаватель', date: '14.12.2024', rating: 5, equipmentId: 7, equipmentName: 'Проектор Epson', comment: 'Изображение чёткое, звук хороший. Отлично подходит для презентаций.' },
    { id: 5, author: 'Морозов В.Л.', role: 'Техник', date: '12.12.2024', rating: 4, equipmentId: 5, equipmentName: 'Сервер #01', comment: 'Работает стабильно, но требуется обновление ПО в ближайшее время.' },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      working: { label: 'Работает', className: 'bg-green-100 text-green-800 border-green-200' },
      warning: { label: 'Требует внимания', className: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
      critical: { label: 'Критично', className: 'bg-red-100 text-red-800 border-red-200' },
    };
    const variant = variants[status as keyof typeof variants] || variants.working;
    return <Badge className={variant.className}>{variant.label}</Badge>;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Icon
            key={star}
            name="Star"
            size={16}
            className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header className="border-b pb-6">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="ClipboardList" className="text-black" size={36} />
            <h1 className="text-4xl font-bold text-black">
              Система учёта оборудования
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Управление техникой компьютерных классов
          </p>
        </header>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100">
            <TabsTrigger value="equipment">
              <Icon name="Monitor" size={18} className="mr-2" />
              Таблица оборудования
            </TabsTrigger>
            <TabsTrigger value="ratings">
              <Icon name="BarChart" size={18} className="mr-2" />
              Оценки классов
            </TabsTrigger>
            <TabsTrigger value="reviews">
              <Icon name="MessageSquare" size={18} className="mr-2" />
              Отзывы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="equipment" className="mt-6">
            <Card className="border border-gray-200">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-black">Оборудование</h2>
                <p className="text-gray-600 mb-6">Полный список оборудования с информацией о техническом обслуживании</p>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-bold text-black">№</TableHead>
                        <TableHead className="font-bold text-black">Название</TableHead>
                        <TableHead className="font-bold text-black">Тип</TableHead>
                        <TableHead className="font-bold text-black">Статус</TableHead>
                        <TableHead className="font-bold text-black">Расположение</TableHead>
                        <TableHead className="font-bold text-black">Последнее ТО</TableHead>
                        <TableHead className="font-bold text-black">Следующее ТО</TableHead>
                        <TableHead className="font-bold text-black">Ответственный</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {equipmentData.map((item) => (
                        <TableRow key={item.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{item.id}</TableCell>
                          <TableCell className="font-medium text-black">{item.name}</TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                          <TableCell>{item.location}</TableCell>
                          <TableCell>{item.lastMaintenance}</TableCell>
                          <TableCell>{item.nextMaintenance}</TableCell>
                          <TableCell>{item.responsible}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="ratings" className="mt-6">
            <Card className="border border-gray-200">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-black">Оценки классов</h2>
                <p className="text-gray-600 mb-6">Результаты опроса по 15 вопросам для каждого класса</p>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-bold text-black">Класс</TableHead>
                        <TableHead className="font-bold text-black">Рейтинг</TableHead>
                        <TableHead className="font-bold text-black">Всего вопросов</TableHead>
                        <TableHead className="font-bold text-black">Положительных ответов</TableHead>
                        <TableHead className="font-bold text-black">Требует внимания</TableHead>
                        <TableHead className="font-bold text-black">Процент</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {classRatings.map((classRoom) => (
                        <TableRow key={classRoom.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium text-black">{classRoom.className}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold">{classRoom.rating}</span>
                              <span className="text-gray-500">/100</span>
                            </div>
                          </TableCell>
                          <TableCell>{classRoom.totalQuestions}</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              {classRoom.positiveAnswers}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                              {classRoom.needsAttention}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-black h-2 rounded-full" 
                                  style={{ width: `${classRoom.rating}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium">{classRoom.rating}%</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-lg mb-3 text-black">Ключевые выводы</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Класс №1</strong> показывает лучшие результаты (87%) - ведётся регулярный учёт</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertCircle" className="text-yellow-600 flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Класс №2</strong> требует улучшения системы обслуживания (72%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertTriangle" className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                      <span><strong>Класс №3</strong> нуждается в срочных мерах (65%) - нерегулярная чистка и ТО</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="grid gap-6">
              <Card className="border border-gray-200">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-black">Отзывы о состоянии оборудования</h2>
                  <p className="text-gray-600 mb-6">Мнения преподавателей и технического персонала</p>
                  
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <Card key={review.id} className="border border-gray-200 bg-gray-50">
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center gap-3 mb-1">
                                <span className="font-bold text-black">{review.author}</span>
                                <Badge variant="outline" className="text-xs">{review.role}</Badge>
                              </div>
                              <div className="text-sm text-gray-600">
                                {review.equipmentName} • {review.date}
                              </div>
                            </div>
                            {renderStars(review.rating)}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Оставить отзыв</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black">Оценка</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setNewReview({ ...newReview, rating: star })}
                            className="transition-colors"
                          >
                            <Icon
                              name="Star"
                              size={32}
                              className={star <= newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-yellow-200'}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black">Комментарий</label>
                      <Textarea
                        placeholder="Опишите состояние оборудования, проблемы или предложения..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        className="min-h-24"
                      />
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить отзыв
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <footer className="text-center text-gray-500 text-sm pt-8 border-t">
          <p>© 2024 Система учёта оборудования компьютерных классов</p>
        </footer>
      </div>
    </div>
  );
}
