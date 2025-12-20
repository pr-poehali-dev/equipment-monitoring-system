import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface ClassData {
  id: number;
  name: string;
  score: number;
  rating: 'A' | 'B' | 'C';
  totalEquipment: number;
  working: number;
  needsMaintenance: number;
  critical: number;
}

interface EquipmentItem {
  id: number;
  name: string;
  type: string;
  status: 'working' | 'warning' | 'critical';
  wearLevel: number;
  lastMaintenance: string;
  predictedReplacement: string;
  daysUntilReplacement: number;
}

export default function Index() {
  const [selectedTab, setSelectedTab] = useState('rating');

  const classesData: ClassData[] = [
    { id: 1, name: 'Компьютерный класс №1', score: 87, rating: 'A', totalEquipment: 25, working: 23, needsMaintenance: 2, critical: 0 },
    { id: 2, name: 'Компьютерный класс №2', score: 72, rating: 'B', totalEquipment: 20, working: 16, needsMaintenance: 3, critical: 1 },
    { id: 3, name: 'Компьютерный класс №3', score: 65, rating: 'B', totalEquipment: 30, working: 20, needsMaintenance: 7, critical: 3 },
  ];

  const equipmentData: EquipmentItem[] = [
    { id: 1, name: 'Рабочая станция #01', type: 'Компьютер', status: 'working', wearLevel: 35, lastMaintenance: '15.11.2024', predictedReplacement: '2026 Q2', daysUntilReplacement: 520 },
    { id: 2, name: 'Рабочая станция #02', type: 'Компьютер', status: 'working', wearLevel: 42, lastMaintenance: '20.10.2024', predictedReplacement: '2026 Q1', daysUntilReplacement: 430 },
    { id: 3, name: 'Рабочая станция #03', type: 'Компьютер', status: 'warning', wearLevel: 68, lastMaintenance: '05.09.2024', predictedReplacement: '2025 Q4', daysUntilReplacement: 180 },
    { id: 4, name: 'Монитор Dell #12', type: 'Монитор', status: 'critical', wearLevel: 89, lastMaintenance: '12.08.2024', predictedReplacement: '2025 Q2', daysUntilReplacement: 45 },
    { id: 5, name: 'Сервер #01', type: 'Сервер', status: 'working', wearLevel: 28, lastMaintenance: '01.12.2024', predictedReplacement: '2027 Q1', daysUntilReplacement: 740 },
    { id: 6, name: 'Принтер HP LaserJet', type: 'Периферия', status: 'warning', wearLevel: 72, lastMaintenance: '10.10.2024', predictedReplacement: '2025 Q3', daysUntilReplacement: 120 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'working': return 'text-[#00F0FF]';
      case 'warning': return 'text-[#F97316]';
      case 'critical': return 'text-[#ef4444]';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'working': return 'bg-[#00F0FF]/10 border-[#00F0FF]/30';
      case 'warning': return 'bg-[#F97316]/10 border-[#F97316]/30';
      case 'critical': return 'bg-[#ef4444]/10 border-[#ef4444]/30';
      default: return 'bg-gray-800/10';
    }
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'A': return 'bg-[#00F0FF] text-[#0A0E1A]';
      case 'B': return 'bg-[#8B5CF6] text-white';
      case 'C': return 'bg-[#F97316] text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen cyber-grid p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <header className="text-center space-y-4 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Icon name="Cpu" className="text-[#00F0FF] glow" size={40} />
            <h1 className="text-5xl md:text-6xl font-black text-[#00F0FF] glow tracking-wider">
              ТЕХКОНТРОЛЬ
            </h1>
          </div>
          <p className="text-lg text-[#00F0FF]/70 font-light tracking-wide">
            Система учёта и мониторинга оборудования компьютерных классов
          </p>
        </header>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-[#0A0E1A]/60 border border-[#00F0FF]/20 p-1">
            <TabsTrigger 
              value="rating" 
              className="data-[state=active]:bg-[#00F0FF] data-[state=active]:text-[#0A0E1A] data-[state=active]:glow-border"
            >
              <Icon name="Trophy" size={18} className="mr-2" />
              Рейтинг
            </TabsTrigger>
            <TabsTrigger 
              value="statistics"
              className="data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white data-[state=active]:glow-border"
            >
              <Icon name="BarChart3" size={18} className="mr-2" />
              Статистика
            </TabsTrigger>
            <TabsTrigger 
              value="equipment"
              className="data-[state=active]:bg-[#00F0FF] data-[state=active]:text-[#0A0E1A] data-[state=active]:glow-border"
            >
              <Icon name="HardDrive" size={18} className="mr-2" />
              Оборудование
            </TabsTrigger>
            <TabsTrigger 
              value="reports"
              className="data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white data-[state=active]:glow-border"
            >
              <Icon name="FileText" size={18} className="mr-2" />
              Отчёты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rating" className="space-y-6 mt-8">
            <div className="grid gap-6">
              {classesData.map((classRoom, index) => (
                <Card 
                  key={classRoom.id} 
                  className="bg-[#0A0E1A]/80 border-[#00F0FF]/20 p-6 hover:border-[#00F0FF]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-4">
                        <Badge className={`text-2xl font-black px-4 py-2 ${getRatingColor(classRoom.rating)} glow-border`}>
                          {classRoom.rating}
                        </Badge>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{classRoom.name}</h3>
                          <p className="text-[#00F0FF]/60 text-sm">Рейтинг: {classRoom.score}/100</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Общий показатель эффективности</span>
                          <span className="text-[#00F0FF] font-bold">{classRoom.score}%</span>
                        </div>
                        <Progress value={classRoom.score} className="h-3 bg-gray-800/50" />
                      </div>
                    </div>

                    <div className="flex gap-6 md:flex-col md:items-end">
                      <div className="text-center">
                        <div className="text-3xl font-black text-[#00F0FF] glow">{classRoom.working}</div>
                        <div className="text-xs text-gray-400">Работает</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-[#F97316]">{classRoom.needsMaintenance}</div>
                        <div className="text-xs text-gray-400">Требует ТО</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-[#ef4444] animate-glow-pulse">{classRoom.critical}</div>
                        <div className="text-xs text-gray-400">Критично</div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="statistics" className="space-y-6 mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[#0A0E1A]/80 border-[#00F0FF]/20 p-6 hover:border-[#00F0FF]/50 transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Icon name="CheckCircle2" className="text-[#00F0FF]" size={32} />
                    <span className="text-4xl font-black text-[#00F0FF] glow">78%</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">Работоспособность</h4>
                  <p className="text-sm text-gray-400">59 из 75 единиц оборудования</p>
                </div>
              </Card>

              <Card className="bg-[#0A0E1A]/80 border-[#8B5CF6]/20 p-6 hover:border-[#8B5CF6]/50 transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Icon name="Clock" className="text-[#8B5CF6]" size={32} />
                    <span className="text-4xl font-black text-[#8B5CF6] glow">16%</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">Требует обслуживания</h4>
                  <p className="text-sm text-gray-400">12 единиц в ближайшие 30 дней</p>
                </div>
              </Card>

              <Card className="bg-[#0A0E1A]/80 border-[#ef4444]/20 p-6 hover:border-[#ef4444]/50 transition-all animate-glow-pulse">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Icon name="AlertTriangle" className="text-[#ef4444]" size={32} />
                    <span className="text-4xl font-black text-[#ef4444] glow">5%</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">Критическое состояние</h4>
                  <p className="text-sm text-gray-400">4 единицы требуют срочной замены</p>
                </div>
              </Card>
            </div>

            <Card className="bg-[#0A0E1A]/80 border-[#00F0FF]/20 p-6">
              <h3 className="text-2xl font-bold text-[#00F0FF] mb-6 glow">Анализ результатов опроса</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Ведение журнала учёта</span>
                      <span className="text-[#00F0FF] font-bold">100%</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-800/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Регулярная чистка от пыли</span>
                      <span className="text-[#F97316] font-bold">33%</span>
                    </div>
                    <Progress value={33} className="h-2 bg-gray-800/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Фиксация поломок</span>
                      <span className="text-[#8B5CF6] font-bold">67%</span>
                    </div>
                    <Progress value={67} className="h-2 bg-gray-800/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Инструктаж пользователей</span>
                      <span className="text-[#00F0FF] font-bold">100%</span>
                    </div>
                    <Progress value={100} className="h-2 bg-gray-800/50" />
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="equipment" className="space-y-6 mt-8">
            <div className="grid gap-4">
              {equipmentData.map((item, index) => (
                <Card 
                  key={item.id}
                  className={`bg-[#0A0E1A]/80 border p-6 hover:shadow-lg transition-all duration-300 animate-slide-up ${getStatusBg(item.status)}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="md:col-span-2 space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon name="HardDrive" className={getStatusColor(item.status)} size={24} />
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white">{item.name}</h4>
                          <p className="text-sm text-gray-400">{item.type}</p>
                          <Badge className={`mt-2 ${getStatusBg(item.status)} ${getStatusColor(item.status)}`}>
                            {item.status === 'working' && 'Работает'}
                            {item.status === 'warning' && 'Требует внимания'}
                            {item.status === 'critical' && 'Критично'}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm text-gray-400">Износ: <span className={`font-bold ${getStatusColor(item.status)}`}>{item.wearLevel}%</span></div>
                      <Progress value={item.wearLevel} className="h-2 bg-gray-800/50" />
                      <div className="text-xs text-gray-500">Последнее ТО: {item.lastMaintenance}</div>
                    </div>

                    <div className="space-y-1 text-right">
                      <div className="text-sm text-gray-400">Прогноз замены</div>
                      <div className="text-lg font-bold text-[#8B5CF6]">{item.predictedReplacement}</div>
                      <div className={`text-xs font-bold ${item.daysUntilReplacement < 100 ? 'text-[#ef4444]' : 'text-[#00F0FF]'}`}>
                        через {item.daysUntilReplacement} дней
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6 mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#0A0E1A]/80 border-[#00F0FF]/20 p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="TrendingUp" className="text-[#00F0FF]" size={32} />
                    <h3 className="text-xl font-bold text-white">Эффективность системы</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    По результатам опроса, только <strong className="text-[#ef4444]">0% респондентов</strong> подтвердили, 
                    что система учёта реально снижает количество срывов занятий из-за поломок.
                  </p>
                  <div className="p-4 bg-[#F97316]/10 border border-[#F97316]/30 rounded-lg">
                    <p className="text-[#F97316] text-sm font-bold">
                      ⚠️ Рекомендация: требуется пересмотр процессов техобслуживания и внедрение превентивных мер
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-[#0A0E1A]/80 border-[#8B5CF6]/20 p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Target" className="text-[#8B5CF6]" size={32} />
                    <h3 className="text-xl font-bold text-white">Ключевые проблемы</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Icon name="AlertCircle" className="text-[#F97316] flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-300">Нерегулярная чистка оборудования (только 33% классов)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertCircle" className="text-[#F97316] flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-300">Недостаточный анализ программных сбоев (33% классов)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertCircle" className="text-[#F97316] flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-gray-300">Отсутствие тестирования нового оборудования в 33% случаев</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="bg-[#0A0E1A]/80 border-[#00F0FF]/20 p-6 md:col-span-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Lightbulb" className="text-[#00F0FF]" size={32} />
                    <h3 className="text-xl font-bold text-white">Рекомендации по улучшению</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#00F0FF]/5 border border-[#00F0FF]/20 rounded-lg space-y-2">
                      <Icon name="Calendar" className="text-[#00F0FF]" size={24} />
                      <h4 className="font-bold text-white">Регулярное ТО</h4>
                      <p className="text-xs text-gray-400">Внедрить график плановых чисток каждые 3 месяца</p>
                    </div>
                    <div className="p-4 bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded-lg space-y-2">
                      <Icon name="Shield" className="text-[#8B5CF6]" size={24} />
                      <h4 className="font-bold text-white">Мониторинг ПО</h4>
                      <p className="text-xs text-gray-400">Автоматизировать сбор логов программных ошибок</p>
                    </div>
                    <div className="p-4 bg-[#F97316]/5 border border-[#F97316]/20 rounded-lg space-y-2">
                      <Icon name="Wrench" className="text-[#F97316]" size={24} />
                      <h4 className="font-bold text-white">Превентивная замена</h4>
                      <p className="text-xs text-gray-400">Планировать замену при износе 70%+</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <footer className="text-center text-gray-500 text-sm pt-8">
          <p>© 2024 ТЕХКОНТРОЛЬ — Система мониторинга оборудования</p>
        </footer>
      </div>
    </div>
  );
}
