import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const stories = [
  {
    id: 1,
    title: 'محمد وحلمه الكبير',
    excerpt: 'كان الشمس العنقاء إرج يإلبيس تسل مل في العينوة',
    category: 'إلهام',
    readTime: '5 دقائق',
    date: '2024-03-15',
  },
  {
    id: 2,
    title: 'رحلة التغيير',
    excerpt: 'قصة ملهمة عن التحول والنمو الشخصي في مواجهة التحديات',
    category: 'تطوير',
    readTime: '7 دقائق',
    date: '2024-03-12',
  },
  {
    id: 3,
    title: 'قوة الإصرار',
    excerpt: 'كيف يمكن للإصرار والعزيمة أن يحولا المستحيل إلى واقع',
    category: 'نجاح',
    readTime: '6 دقائق',
    date: '2024-03-10',
  },
  {
    id: 4,
    title: 'أحلام بلا حدود',
    excerpt: 'استكشف عالمًا من الإمكانيات اللامحدودة وحقق أحلامك',
    category: 'إلهام',
    readTime: '4 دقائق',
    date: '2024-03-08',
  },
];

const Index = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50" dir="rtl">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 gradient-wave opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 gradient-wave opacity-20 rounded-full blur-3xl"></div>
      </div>

      <header className="relative z-10 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="BookOpen" size={20} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                متاي العينوغ
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#stories" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                القصص
              </a>
              <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                عن المدونة
              </a>
              <a href="#subscribe" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                اشترك
              </a>
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-16 space-y-20">
        <section className="text-center space-y-6 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            اكتشف عالم القصص
            <br />
            <span className="bg-gradient-to-l from-primary via-secondary to-accent bg-clip-text text-transparent">
              الملهمة والممتعة
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            منصة لمشاركة القصص والتجارب التي تلهم وتحفز على التغيير الإيجابي
          </p>
        </section>

        <section id="stories" className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold text-foreground">أحدث القصص</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="hover:bg-primary/10">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-primary/10">
                <Icon name="Filter" size={20} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {stories.map((story, index) => (
              <Card
                key={story.id}
                className="group hover:shadow-2xl transition-all duration-300 animate-scale-in overflow-hidden border-2 hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    <div className="absolute inset-0 gradient-wave opacity-50"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                      {story.category}
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      <Icon name="Clock" size={16} />
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {story.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-muted-foreground">{story.date}</span>
                      <Button className="bg-secondary hover:bg-secondary/90 gap-2">
                        اقرأ المزيد
                        <Icon name="ChevronLeft" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="subscribe" className="relative animate-fade-in">
          <Card className="bg-gradient-to-br from-primary to-secondary text-white border-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="gradient-wave w-full h-full"></div>
            </div>
            <CardContent className="relative z-10 p-12 text-center space-y-6">
              <Icon name="Bell" size={48} className="mx-auto text-white/90" />
              <h3 className="text-4xl font-bold">اشترك في النشرة البريدية</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                احصل على أحدث القصص والمقالات الملهمة مباشرة إلى بريدك الإلكتروني
              </p>
              
              {subscribed ? (
                <div className="flex items-center justify-center gap-3 text-white bg-white/20 backdrop-blur-sm py-4 px-6 rounded-2xl max-w-md mx-auto animate-scale-in">
                  <Icon name="CheckCircle" size={24} />
                  <span className="text-lg font-medium">تم الاشتراك بنجاح!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm text-lg py-6"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-white text-primary hover:bg-white/90 font-bold text-lg py-6 px-8"
                  >
                    اشترك الآن
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {[
            { icon: 'BookOpen', title: 'قصص ملهمة', desc: 'محتوى غني ومتنوع يلامس القلوب' },
            { icon: 'Users', title: 'مجتمع نشط', desc: 'انضم لآلاف القراء المتفاعلين' },
            { icon: 'Sparkles', title: 'تحديثات دورية', desc: 'محتوى جديد كل أسبوع' },
          ].map((feature, index) => (
            <Card
              key={index}
              className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Icon name={feature.icon as any} size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.desc}</p>
            </Card>
          ))}
        </section>
      </main>

      <footer className="relative z-10 bg-foreground/5 border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="BookOpen" size={20} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">متاي العينوغ</h3>
              </div>
              <p className="text-muted-foreground">منصة لمشاركة القصص الملهمة والمحتوى الهادف</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg">روابط سريعة</h4>
              <nav className="flex flex-col gap-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</a>
                <a href="#stories" className="text-muted-foreground hover:text-primary transition-colors">القصص</a>
                <a href="#subscribe" className="text-muted-foreground hover:text-primary transition-colors">اشترك</a>
              </nav>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg">تواصل معنا</h4>
              <div className="flex gap-4">
                {['Twitter', 'Facebook', 'Instagram', 'Mail'].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <Icon name={social as any} size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 متاي العينوغ. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
