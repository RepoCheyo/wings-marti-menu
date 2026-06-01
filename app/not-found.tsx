import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-secondary px-4">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="relative h-48 w-64 md:h-56 md:w-72">
          <Image
            src="/images/logo.png"
            alt="Wing's Army Martí Logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-accent-foreground md:text-5xl">
            404
          </h1>
          <p className="text-lg text-accent-foreground/80">
            Página no encontrada
          </p>
          <p className="text-sm text-accent-foreground/60">
            Lo sentimos, la página que buscas no existe en nuestro cuartel.
          </p>
        </div>

        <Link href="/">
          <Button
            variant="secondary"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
          >
            Volver al inicio
          </Button>
        </Link>
      </div>
    </main>
  );
}
