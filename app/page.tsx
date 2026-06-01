import Image from 'next/image';
import { MenuCard } from '@/components/menu-card';
import { UtensilsCrossed, Wine, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center bg-background px-4 py-6">
      {/* Logo Section */}
      <div className="mb-2 flex flex-col items-center">
        <div className="relative h-48 w-64 md:h-56 md:w-72">
          <Image
            src="/images/logo.png"
            alt="Wing's Army Martí Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Card Container */}
      <div className="w-full max-w-md rounded-2xl bg-card/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm md:p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-balance text-2xl font-bold text-card-foreground md:text-3xl">
            {"Wing's Army Martí"}
          </h1>
          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              The Best Wings
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </div>

        {/* Welcome Message */}
        <p className="mb-8 text-center text-muted-foreground">
          ¡Bienvenido a nuestro cuartel!
        </p>

        {/* Menu Links */}
        <div className="flex flex-col gap-4">
          <MenuCard
            href="/menus/MENÚ ESQ2.pdf"
            icon={<UtensilsCrossed className="h-7 w-7 text-secondary" />}
            title="Menú Bebidas y Alimentos"
            subtitle="Platillos y bebidas"
          />

          <MenuCard
            href="/menus/MENU_DESTILADOS.pdf"
            icon={<Wine className="h-7 w-7 text-secondary" />}
            title="Menú Destilados"
            subtitle="Licores y cocteles premium"
          />

          <MenuCard
            href="/menus/lo-nuevo.pdf"
            icon={<Sparkles className="h-7 w-7 text-secondary" />}
            title="Lo Nuevo del Cuartel"
            subtitle="Novedades y promociones"
          />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {"Wing's Army®"}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </main>
  );
}
