import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  BookOpen, 
  Heart, 
  Sparkles, 
  Users, 
  ShoppingCart,
  Download,
  Printer,
  CheckCircle2,
  Star,
  Shield,
  Gift,
  Clock,
  Eye,
  MessageCircle,
  Flame,
  Award,
  ArrowRight,
  X
} from "lucide-react";

import heroImage from "@assets/1_1763753113080.webp";
import previewImage1 from "@assets/6_1763753113081.webp";
import previewImage2 from "@assets/5_1763753113081.webp";
import previewImage3 from "@assets/4_1763753113081.webp";
import previewImage4 from "@assets/3_1763753113082.webp";
import previewImage5 from "@assets/2_1763753113082.webp";
import previewImage6 from "@assets/1 (1)_1763753113082.webp";
import includedImage from "@assets/7_1763753113082.webp";
import whyWorksImage from "@assets/9_1763753113082.webp";

export default function Home() {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const previewImages = [previewImage1, previewImage2, previewImage3, previewImage4, previewImage5, previewImage6];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge 
                className="mb-6 bg-yellow-accent text-gray-900 font-semibold"
                data-testid="badge-special-offer"
              >
                Oferta Especial por Tiempo Limitado
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4" data-testid="text-hero-title">
                Súper Pack de <span className="text-coral">35</span> Libros Cristianos para Colorear
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-semibold mb-4" data-testid="text-hero-subtitle">
                100% Imprimibles • Actividades Cristianas • Para Niños de 3 a 12 Años
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground mb-8" data-testid="text-hero-description">
                Transforma el tiempo de tus hijos en momentos de fe, creatividad y conexión con Dios.
              </p>
              
              <Button 
                size="lg"
                className="bg-green-600 text-white font-bold w-full sm:w-auto"
                onClick={scrollToCTA}
                data-testid="button-cta-hero"
              >
                <ShoppingCart className="mr-2 h-5 w-5 flex-shrink-0" />
                <span className="whitespace-normal">¡Quiero el Super Pack Ahora!</span>
              </Button>
              
              <div className="flex flex-wrap gap-6 mt-6 justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="flex items-center gap-2" data-testid="text-instant-access">
                  <Download className="h-4 w-4" />
                  <span>Acceso inmediato</span>
                </div>
                <div className="flex items-center gap-2" data-testid="text-secure-purchase">
                  <Shield className="h-4 w-4" />
                  <span>Compra segura</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={heroImage}
                alt="35 Libros Cristianos para Colorear"
                className="rounded-lg shadow-2xl max-w-full h-auto"
                data-testid="img-hero-product"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-coral py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div data-testid="stat-books">
              <div className="text-4xl md:text-5xl font-bold mb-2">35</div>
              <div className="text-sm md:text-base opacity-90">Libros Únicos</div>
            </div>
            <div data-testid="stat-pages">
              <div className="text-4xl md:text-5xl font-bold mb-2">1,200+</div>
              <div className="text-sm md:text-base opacity-90">Páginas para Imprimir</div>
            </div>
            <div data-testid="stat-bonuses">
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-sm md:text-base opacity-90">Bonos Gratuitos</div>
            </div>
            <div data-testid="stat-age">
              <div className="text-4xl md:text-5xl font-bold mb-2">3-12</div>
              <div className="text-sm md:text-base opacity-90">Años de Edad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-benefits-heading">
            Ayuda a tus pequeños a:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover-elevate" data-testid="card-benefit-1">
              <div className="w-16 h-16 rounded-full bg-blue-light flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-medium" />
              </div>
              <h3 className="font-bold text-lg mb-2">Aprender Historias Bíblicas</h3>
              <p className="text-sm text-muted-foreground">
                Cada página cuenta una historia que acerca a tus hijos a Dios
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-elevate" data-testid="card-benefit-2">
              <div className="w-16 h-16 rounded-full bg-blue-light flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-medium" />
              </div>
              <h3 className="font-bold text-lg mb-2">Desarrollar Valores Cristianos</h3>
              <p className="text-sm text-muted-foreground">
                Enseña amor, fe, esperanza y bondad de forma divertida
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-elevate" data-testid="card-benefit-3">
              <div className="w-16 h-16 rounded-full bg-blue-light flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-blue-medium" />
              </div>
              <h3 className="font-bold text-lg mb-2">Mejorar la Concentración</h3>
              <p className="text-sm text-muted-foreground">
                Colorear desarrolla habilidades motoras y atención
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-elevate" data-testid="card-benefit-4">
              <div className="w-16 h-16 rounded-full bg-blue-light flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-medium" />
              </div>
              <h3 className="font-bold text-lg mb-2">Reducir Tiempo de Pantallas</h3>
              <p className="text-sm text-muted-foreground">
                Una alternativa saludable y educativa para tus hijos
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24 px-6 bg-blue-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Star className="h-12 w-12 text-yellow-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-target-heading">
              ¿Para quién es este súper pack?
            </h2>
            <p className="text-lg text-muted-foreground mt-4">Perfecto para:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Mamás cristianas',
              'Maestras de primaria',
              'Profesoras de Escuela Dominical',
              'Líderes de Ministerio Infantil',
              'Iglesias y catequistas',
              'Abuelitas que quieren actividades sanas para sus nietos'
            ].map((audience, index) => (
              <Card key={index} className="p-4 flex items-center gap-3 hover-elevate" data-testid={`card-audience-${index + 1}`}>
                <CheckCircle2 className="h-6 w-6 text-coral flex-shrink-0" />
                <span className="font-medium">{audience}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-included-heading">
              ¿Qué incluye exactamente este Súper Pack?
            </h2>
            <p className="text-lg text-muted-foreground">35 Libros Cristianos para Colorear</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <img 
                src={includedImage}
                alt="Preview de los libros"
                className="rounded-lg shadow-lg max-w-full h-auto"
                data-testid="img-product-preview"
              />
            </div>
            
            <div>
              <p className="text-muted-foreground mb-6">
                Historias bíblicas, personajes, valores, virtudes cristianas y versículos. Incluye títulos como:
              </p>
              
              <div className="space-y-2 max-h-96 overflow-y-auto pr-4" data-testid="list-books">
                {[
                  'La Creación del Mundo',
                  'Adán y Eva',
                  'El Arca de Noé (1 y 2)',
                  'La Verdadera Pascua',
                  'La Vida de Jesús',
                  'Colorindo con Jesús (1 y 2)',
                  'Virtudes Cristianas',
                  'Frutos del Espíritu',
                  'Héroes de la Fe',
                  'Mujeres de la Biblia',
                  'David y Goliat (1 y 2)',
                  'Versículos (1, 2, 3)',
                  'Jesús calma la tormenta',
                  'Moisés',
                  'Pedro discípulo',
                  '...y muchos más'
                ].map((book, index) => (
                  <div key={index} className="flex items-start gap-2" data-testid={`book-item-${index}`}>
                    <CheckCircle2 className="h-5 w-5 text-coral flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{book}</span>
                  </div>
                ))}
              </div>
              
              <Card className="mt-6 p-4 bg-yellow-accent/20 border-yellow-accent" data-testid="card-pages-info">
                <p className="font-semibold text-foreground">
                  Más de 1.200 páginas listas para descargar e imprimir en casa, escuela o iglesia.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Gallery */}
      <section className="py-16 md:py-24 px-6 bg-blue-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Eye className="h-12 w-12 text-blue-medium mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-preview-heading">
              Veja por Dentro dos Livros
            </h2>
            <p className="text-lg text-muted-foreground">Páginas reais e prontas para colorir</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewImages.map((image, index) => (
              <Card key={index + 1} className="overflow-hidden hover-elevate" data-testid={`preview-image-${index + 1}`}>
                <img 
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-auto"
                />
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-6">
              Cada página foi cuidadosamente elaborada para ensinar valores cristãos, histórias bíblicas e versículos enquanto desenvolve a criatividade
            </p>
            <Button 
              size="lg"
              className="bg-green-600 text-white font-bold w-full sm:w-auto"
              onClick={scrollToCTA}
              data-testid="button-cta-preview"
            >
              <ShoppingCart className="mr-2 h-5 w-5 flex-shrink-0" />
              <span className="whitespace-normal">¡Quiero el Pack Completo Ahora!</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-16 md:py-24 px-6 bg-beige">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Gift className="h-12 w-12 text-coral mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-bonuses-heading">
              BÓNUS ESPECIALES
            </h2>
            <p className="text-lg text-muted-foreground">Incluidos GRATIS por tiempo limitado</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: 'Bono #1 – Cartones Bíblicos para Memorización',
                description: 'Perfectos para ayudar a tus hijos a recordar versículos de forma divertida.'
              },
              {
                title: 'Bono #2 – Desafío Bíblico de 7 Días',
                description: 'Un desafío fácil para reforzar hábitos espirituales en los niños.'
              },
              {
                title: 'Bono #3 – Libro Extra de Actividades Cristianas',
                description: 'Más ejercicios educativos, juegos y actividades basadas en valores.'
              },
              {
                title: 'Bono #4 – Planner Devocional Infantil',
                description: 'Organiza el tiempo devocional semanal de tus hijos.'
              },
              {
                title: 'Bono #5 – Pack Especial Mensual',
                description: 'Material exclusivo para imprimir y usar durante el mes.'
              }
            ].map((bonus, index) => (
              <Card key={index} className="p-6 flex gap-4 hover-elevate" data-testid={`bonus-card-${index + 1}`}>
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <Gift className="h-6 w-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{bonus.title}</h3>
                  <p className="text-sm text-muted-foreground">{bonus.description}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-coral font-bold text-lg flex items-center justify-center gap-2" data-testid="text-bonuses-note">
            <ArrowRight className="h-5 w-5" />
            Estos bonos normalmente se venden por separado, ¡pero hoy los llevas GRATIS!
          </p>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <img 
                src={whyWorksImage}
                alt="Mamá y niño coloreando"
                className="rounded-lg shadow-lg max-w-full h-auto"
                data-testid="img-why-works"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <Heart className="h-12 w-12 text-yellow-accent mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-why-heading">
                ¿Por qué este pack funciona tan bien?
              </h2>
              <p className="text-muted-foreground mb-6">Porque combina:</p>
              
              <div className="space-y-4">
                {[
                  'Creatividad',
                  'Enseñanza bíblica',
                  'Actividades divertidas',
                  'Desarrollo emocional',
                  'Momentos en familia'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-yellow-accent/10 p-3 rounded-md" data-testid={`why-item-${index + 1}`}>
                    <Star className="h-5 w-5 text-yellow-accent flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <p className="mt-6 text-muted-foreground" data-testid="text-why-description">
                Mientras tus hijos colorean, aprenden sobre Dios, fortalecen valores cristianos y se alejan de las pantallas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 bg-beige">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <MessageCircle className="h-12 w-12 text-coral mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-testimonials-heading">
              Opiniones de Mamás y Maestras
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                stars: 5,
                quote: 'Mi hija ama estos libros. Ahora tenemos actividades para toda la semana.',
                name: 'María González',
                role: 'Mamá de 2 niños'
              },
              {
                stars: 5,
                quote: 'Perfecto para mi clase de Escuela Dominical. Los niños están encantados.',
                name: 'Ana Rodríguez',
                role: 'Maestra Escuela Dominical'
              },
              {
                stars: 5,
                quote: 'Muy completo. Nunca había visto algo tan bonito y tan práctico.',
                name: 'Laura Martínez',
                role: 'Líder de Ministerio Infantil'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`testimonial-${index + 1}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-accent text-yellow-accent" />
                  ))}
                </div>
                <p className="italic text-muted-foreground mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Offer CTA - Pricing Plans */}
      <section id="cta-section" className="py-16 md:py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-heading">
              ELIGE LA MEJOR OFERTA PARA TI
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Plan Básico */}
            <Card className="bg-white p-6 md:p-8 flex flex-col" data-testid="card-plan-basic">
              <div className="bg-gray-700 text-white text-center py-3 rounded-lg mb-6">
                <h3 className="text-xl font-bold">PLAN BÁSICO: 35 Libros</h3>
              </div>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>35 Libros Cristianos para Colorear:</strong> Más de 1.200 páginas para imprimir</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-red-600 line-through">Bono #1 - Cartones Bíblicos</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-red-600 line-through">Bono #2 - Desafío Bíblico de 7 Días</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-red-600 line-through">Bono #3 - Planner Devocional</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-red-600 line-through">Bono #4 - Libro Extra de Actividades</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-red-600 line-through">Bono #5 - Material Mensual Especial</span>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-green-600 mb-2">$4,99</div>
                <div className="text-sm font-semibold uppercase">PAGO ÚNICO</div>
              </div>
              
              <Button 
                size="lg"
                className="bg-green-600 text-white font-bold w-full"
                data-testid="button-plan-basic"
                asChild
              >
                <a href="https://pay.hotmart.com/W103090250C?off=3mhoeuzt" target="_blank" rel="noopener noreferrer">
                  ¡QUIERO ESTA OPCIÓN!
                </a>
              </Button>
            </Card>
            
            {/* Plan Completo - Mejor Negocio */}
            <Card className="bg-white p-6 md:p-8 flex flex-col border-4 border-green-600 relative" data-testid="card-plan-complete">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-600 text-white px-6 py-1 text-sm font-bold">
                  PLAN COMPLETO: SUPER OFERTA
                </Badge>
              </div>
              
              <div className="bg-gray-800 text-white text-center py-3 rounded-lg mb-4 mt-2">
                <h3 className="text-xl font-bold">(MEJOR NEGOCIO)</h3>
              </div>
              
              <div className="space-y-3 mb-6 flex-1">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>35 Libros Cristianos para Colorear:</strong> Más de 1.200 páginas para imprimir</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Bono #1:</strong> Cartones Bíblicos para Memorización</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Bono #2:</strong> Desafío Bíblico de 7 Días</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Bono #3:</strong> Planner Devocional Infantil</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Bono #4:</strong> Libro Extra de Actividades Cristianas</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Bono #5:</strong> Material Mensual Especial</span>
                </div>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-sm text-gray-500 mb-1">Valor Total: <span className="line-through">$97</span></div>
                <div className="text-sm font-semibold mb-2">HOY PAGO ÚNICO...</div>
                <div className="text-5xl font-bold text-green-600 mb-2">$14,99</div>
                <div className="text-sm font-semibold uppercase">PAGO ÚNICO</div>
              </div>
              
              <Button 
                size="lg"
                className="bg-green-600 text-white font-bold w-full mb-2"
                data-testid="button-plan-complete"
                asChild
              >
                <a href="https://pay.hotmart.com/W103090250C?off=x50swobo" target="_blank" rel="noopener noreferrer">
                  ¡SÍ! ¡QUIERO ESTA SUPER OFERTA!
                </a>
              </Button>
              
              <p className="text-xs text-center text-gray-600">
                <strong>APROVECHA AHORA:</strong> NO vas a encontrar este precio después.
              </p>
            </Card>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 justify-center text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Oferta por tiempo limitado</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Garantía de 7 días</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-6 bg-beige">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="h-16 w-16 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-guarantee-heading">
            Garantía de Satisfacción 100%
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Si por cualquier motivo no amas el material, tienes <span className="text-red-600 font-bold">7 días completos</span> para pedir un reembolso sin preguntas.
          </p>
          <p className="text-muted-foreground">
            Compras sin riesgo y con total tranquilidad.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-faq-heading">
            Preguntas Frecuentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card" data-testid="faq-item-1">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                ¿Es imprimible?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, todos los libros son 100% imprimibles en formato PDF de alta calidad.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card" data-testid="faq-item-2">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                ¿En qué edad funciona?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Los libros están diseñados para niños de 3 a 12 años, con diferentes niveles de complejidad.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card" data-testid="faq-item-3">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                ¿Puedo usar en la iglesia?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                ¡Absolutamente! Puedes imprimirlo y usarlo en tu iglesia, escuela dominical o ministerio infantil.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card" data-testid="faq-item-4">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                ¿Recibo todo al instante?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, recibirás acceso inmediato después de la compra para descargar todos los materiales.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card" data-testid="faq-item-5">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                ¿Puedo imprimir cuantas veces quiera?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sí, puedes imprimir todas las páginas cuantas veces necesites para uso personal o de tu ministerio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 bg-blue-light">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="h-12 w-12 text-coral mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-final-cta-heading">
            ¿Lista para Transformar el Tiempo de tus Hijos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Acceso instantáneo a más de 1.200 páginas de actividades cristianas que tus hijos amarán
          </p>
          
          <Button 
            size="lg"
            className="bg-green-600 text-white font-bold w-full sm:w-auto"
            data-testid="button-cta-final"
          >
            <ShoppingCart className="mr-2 h-6 w-6 flex-shrink-0" />
            <span className="whitespace-normal">Sí, quiero el Pack Completo y los Bonos Exclusivos</span>
          </Button>
          
          <div className="flex flex-wrap gap-4 mt-6 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Oferta por tiempo limitado</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Garantía de 7 días</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-dark text-white/80 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p data-testid="text-footer">
            © 2024 Libros Cristianos para Colorear. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
