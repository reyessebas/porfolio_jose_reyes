import React from 'react';
import { useI18n } from '@/providers/LanguageProvider';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';

const galleryData: GalleryItem[] = [
	{
		common: 'Landing Page Figma',
		binomial: 'UI/UX — Landing Page',
		photo: {
			url: '/video_figma.mp4',
			text: 'Laptop con interfaz de una landing page E-commerce',
			pos: '50% 50%',
			by: 'Sb'
		}
	},
	{
		common: 'Prototipo de pagina E-Commerce',
		binomial: 'UI — Tienda Online',
		photo: {
			url: '/public/carru_nine.png',
			text: 'Catálogo de productos en una tienda online',
			pos: '50% 50%',
			by: 'Sb'
		}
	},
	{
		common: 'Sitio Web Corporativo',
		binomial: 'UX — Website',
		photo: {
			url: '/public/carru_TEN.png',
			text: 'Sitio Web corporativo en laptop',
			pos: '50% 40%',
		by: 'Sb'
		}
	},
	{
		common: 'Wireframes Pagina Web',
		binomial: 'Prototipo — Sitio Web',
		photo: {
			url: '/public/carru_eight.png',
			text: 'Prototipo de un sitio web para la ventas de productos',
			pos: '50% 60%',
			by: 'Sb'
		}
	},
	{
		common: 'Wireframes, Sketches & Flows',
		binomial: 'UI — Proyecto',
		photo: {
			url: '/public/carru_seven.png',
			text: 'Pagina con wireframes y flujos de usuario',
			pos: '50% 50%',
			by: 'Sb'
		}
	},
	{
		common: 'Lading Page Producto',
		binomial: 'UI — Productos',
		photo: {
			url: '/public/carru_four.png',
			text: 'Panel informativo de una landing page de producto',
			pos: '50% 50%',
			by: 'Sb'
		}
	},
	{
		common: 'Figma UI/UX',
		binomial: 'UI/UX Componentes',
		photo: {
			url: '/public/carru_five.png',
			text: 'Componentes y guías de un sistema de diseño',
			pos: '50% 50%',
			by: 'Sb'
		}
	},
	{
		common: 'Pagina Landing Figma',
		binomial: 'UI/UX — Landing Page',
		photo: {
			url: '/video_figma.mp4',
			text: 'Laptop con interfaz de una landing page E-commerce',
			pos: '50% 50%',
			by: 'Sb'
		}
	},
	{
		common: 'Protipo Page',
		binomial: 'Landing — Campaña',
		photo: {
			url: '/public/carru_two.png',
			text: 'Sección de sistema ',
			pos: '50% 40%',
			by: 'Sb'
		}
	},
	{
		common: 'Wireframes & User Flows',
		binomial: 'Prototipado — Baja Fidelidad',
		photo: {
			url: '/public/carru_three.png',
			text: 'Wireframes y flujos de usuario bocetados',
			pos: '50% 50%',
			by: 'Sb'
		}
	}
];

const CircularGalleryDemo = () => {
  const { t } = useI18n();

  return (
    // This outer container provides the scrollable height
    <div className="w-full bg-background text-foreground" style={{ height: '300vh' }}>
      {/* This inner container sticks to the top while scrolling */}
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-8 z-10">
          <h1 className="text-4xl font-bold">{t('circularGallery.title')}</h1>
          <p className="text-muted-foreground">{t('circularGallery.description')}</p>
        </div>
        <div className="w-full h-full">
          <CircularGallery items={galleryData} />
        </div>
      </div>
    </div>
  );
};

export default CircularGalleryDemo;
