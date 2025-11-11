import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorValues, setCalculatorValues] = useState({
    area: 100,
    type: 'residential',
    complexity: 1
  });

  const projects = [
    {
      id: 1,
      title: 'Жилой комплекс "Сосновый бор"',
      type: 'residential',
      area: '15,000 м²',
      duration: '18 месяцев',
      image: 'https://cdn.poehali.dev/projects/c61c3e08-801d-455e-8e88-f9a5b4887bdf/files/aee0b416-0560-4119-8ecc-b0cec8f4c7c0.jpg'
    },
    {
      id: 2,
      title: 'Логистический центр "Транзит"',
      type: 'warehouse',
      area: '25,000 м²',
      duration: '12 месяцев',
      image: 'https://cdn.poehali.dev/projects/c61c3e08-801d-455e-8e88-f9a5b4887bdf/files/15e423ae-f049-4503-951a-ed9778158bff.jpg'
    },
    {
      id: 3,
      title: 'Бизнес-центр "Горизонт"',
      type: 'commercial',
      area: '8,500 м²',
      duration: '14 месяцев',
      image: 'https://cdn.poehali.dev/projects/c61c3e08-801d-455e-8e88-f9a5b4887bdf/files/0c2b84a4-6434-4b90-a019-0ef2b3824919.jpg'
    }
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Жилые дома',
      description: 'Строительство коттеджей, таунхаусов и многоквартирных домов'
    },
    {
      icon: 'Warehouse',
      title: 'Склады и ангары',
      description: 'Проектирование и возведение складских помещений любой площади'
    },
    {
      icon: 'Building2',
      title: 'Коммерческая недвижимость',
      description: 'Торговые центры, офисы, бизнес-центры'
    },
    {
      icon: 'Factory',
      title: 'Промышленные объекты',
      description: 'Производственные комплексы и цеха'
    }
  ];

  const technologies = [
    'Монолитное строительство',
    'Каркасная технология',
    'Модульное строительство',
    'Энергоэффективные решения',
    'BIM-моделирование',
    'Умные системы управления'
  ];

  const calculatePrice = () => {
    const basePrice = calculatorValues.type === 'residential' ? 50000 :
                      calculatorValues.type === 'warehouse' ? 35000 : 60000;
    const complexityMultiplier = 1 + (calculatorValues.complexity * 0.2);
    return Math.round(basePrice * calculatorValues.area * complexityMultiplier);
  };

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" size={32} className="text-accent" />
            <span className="text-2xl font-bold">СтройМастер</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">Проекты</a>
            <a href="#technologies" className="hover:text-accent transition-colors">Технологии</a>
            <a href="#calculator" className="hover:text-accent transition-colors">Калькулятор</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            Получить консультацию
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 animate-fade-in" variant="secondary">
            <Icon name="Award" size={16} className="mr-2" />
            15 лет на рынке строительства
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Строим объекты <br />
            <span className="text-accent">любой сложности</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Жилые дома, склады, ангары и коммерческая недвижимость. 
            Полный цикл строительства от проектирования до сдачи объекта.
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="FileText" size={20} className="mr-2" />
              Наши проекты
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Виды строительных работ</h2>
            <p className="text-muted-foreground text-lg">Реализуем проекты любой сложности</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                    <Icon name={service.icon} size={32} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Портфолио проектов</h2>
            <p className="text-muted-foreground text-lg">Более 200 реализованных объектов</p>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
              className={activeFilter === 'all' ? 'bg-accent hover:bg-accent/90' : ''}
            >
              Все проекты
            </Button>
            <Button 
              variant={activeFilter === 'residential' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('residential')}
              className={activeFilter === 'residential' ? 'bg-accent hover:bg-accent/90' : ''}
            >
              Жилые дома
            </Button>
            <Button 
              variant={activeFilter === 'warehouse' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('warehouse')}
              className={activeFilter === 'warehouse' ? 'bg-accent hover:bg-accent/90' : ''}
            >
              Склады
            </Button>
            <Button 
              variant={activeFilter === 'commercial' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('commercial')}
              className={activeFilter === 'commercial' ? 'bg-accent hover:bg-accent/90' : ''}
            >
              Коммерция
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Icon name="Ruler" size={16} />
                      {project.area}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {project.duration}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">15 лет создаём надёжные объекты</h2>
              <p className="text-lg text-muted-foreground mb-6">
                СтройМастер — команда профессионалов с многолетним опытом в строительной отрасли. 
                Мы реализовали более 200 объектов различной сложности по всей России.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
              <Button className="bg-accent hover:bg-accent/90">
                <Icon name="Users" size={20} className="mr-2" />
                Познакомиться с командой
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6">
                <Icon name="Shield" size={40} className="text-accent mb-4" />
                <h3 className="font-bold mb-2">Гарантия качества</h3>
                <p className="text-sm text-muted-foreground">5 лет гарантии на все виды работ</p>
              </Card>
              <Card className="p-6">
                <Icon name="TrendingDown" size={40} className="text-accent mb-4" />
                <h3 className="font-bold mb-2">Прозрачная смета</h3>
                <p className="text-sm text-muted-foreground">Никаких скрытых платежей</p>
              </Card>
              <Card className="p-6">
                <Icon name="Calendar" size={40} className="text-accent mb-4" />
                <h3 className="font-bold mb-2">Точные сроки</h3>
                <p className="text-sm text-muted-foreground">Соблюдаем договорные сроки</p>
              </Card>
              <Card className="p-6">
                <Icon name="Headphones" size={40} className="text-accent mb-4" />
                <h3 className="font-bold mb-2">Поддержка 24/7</h3>
                <p className="text-sm text-muted-foreground">Всегда на связи с клиентом</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Используемые технологии</h2>
            <p className="text-muted-foreground text-lg">Современные методы строительства</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all hover:border-accent group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Icon name="Zap" size={24} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg">{tech}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-muted-foreground text-lg">Узнайте примерную стоимость строительства</p>
          </div>
          
          <Card className="p-8 shadow-xl">
            <CardContent className="space-y-8 p-0">
              <div>
                <label className="text-sm font-medium mb-4 block">Тип объекта</label>
                <Tabs 
                  value={calculatorValues.type} 
                  onValueChange={(value) => setCalculatorValues({...calculatorValues, type: value})}
                >
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="residential">Жилой дом</TabsTrigger>
                    <TabsTrigger value="warehouse">Склад</TabsTrigger>
                    <TabsTrigger value="commercial">Коммерция</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div>
                <label className="text-sm font-medium mb-4 block">
                  Площадь: <span className="text-accent">{calculatorValues.area} м²</span>
                </label>
                <Slider
                  value={[calculatorValues.area]}
                  onValueChange={([value]) => setCalculatorValues({...calculatorValues, area: value})}
                  min={50}
                  max={5000}
                  step={50}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-4 block">
                  Сложность проекта: <span className="text-accent">
                    {calculatorValues.complexity === 0 ? 'Простой' : 
                     calculatorValues.complexity === 1 ? 'Средний' : 'Сложный'}
                  </span>
                </label>
                <Slider
                  value={[calculatorValues.complexity]}
                  onValueChange={([value]) => setCalculatorValues({...calculatorValues, complexity: value})}
                  min={0}
                  max={2}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="bg-accent/10 rounded-2xl p-8 text-center">
                <div className="text-sm text-muted-foreground mb-2">Примерная стоимость</div>
                <div className="text-4xl font-bold text-accent mb-2">
                  {calculatePrice().toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-sm text-muted-foreground">
                  {Math.round(calculatePrice() / calculatorValues.area).toLocaleString('ru-RU')} ₽/м²
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Получить точный расчёт
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">Готовы ответить на все ваши вопросы</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@stroymaster.ru</p>
                  <p className="text-muted-foreground">sales@stroymaster.ru</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Адрес офиса</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Строительная, 15</p>
                  <p className="text-muted-foreground">БЦ "Архитектор", офис 301</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Время работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб-Вс: по договорённости</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} className="text-accent" />
                <span className="text-xl font-bold">СтройМастер</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Строительная компания полного цикла. Качество, надёжность, профессионализм.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Жилые дома</li>
                <li>Склады и ангары</li>
                <li>Коммерческая недвижимость</li>
                <li>Промышленные объекты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>О нас</li>
                <li>Команда</li>
                <li>Карьера</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Лицензии</li>
                <li>Сертификаты</li>
                <li>Политика конфиденциальности</li>
                <li>Договор оферты</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            © 2024 СтройМастер. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
