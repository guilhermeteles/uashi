import { Swoosh } from '../../components/ui/Swoosh';
import { Hero } from '../sections/Hero';
import { ComoFunciona } from '../sections/ComoFunciona';
import { Precos } from '../sections/Precos';
import { Planos } from '../sections/Planos';
import { Lojas } from '../sections/Lojas';
import { BaixarApp } from '../sections/BaixarApp';
import { Faq } from '../sections/Faq';

export function Home() {
  return (
    <>
      <Hero />
      <Swoosh />
      <ComoFunciona />
      <Swoosh />
      <Precos />
      <Swoosh />
      <Planos />
      <Swoosh />
      <Lojas />
      <Swoosh />
      <BaixarApp />
      <Swoosh />
      <Faq />
    </>
  );
}
