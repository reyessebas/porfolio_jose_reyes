import React, { useEffect, useMemo, useState } from 'react';
import { FaCampground, FaFire, FaTint, FaHotTub, FaHiking } from 'react-icons/fa';

interface Option {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const optionsData: Option[] = [
  {
    title: 'Home Page',
    description: "Boceto página principal",
    image: '/wireframes/page1.jpg',
    icon: <FaCampground size={24} className="text-amber-400" />,
  },
  {
    title: "Áreas",
    description: "Diseño página tipos de área",
    image: '/wireframes/page2.jpg',
    icon: <FaFire size={24} className="text-amber-400" />,
  },
  {
    title: 'Boceto Items',
    description: 'Diseño página boceto items',
    image: '/wireframes/page3.jpg',
    icon: <FaTint size={24} className="text-amber-400" />,
  },
  {
    title: 'Vista General',
    description: 'Vista general de los datos',
    image: '/wireframes/page4.jpg',
    icon: <FaHotTub size={24} className="text-amber-400" />,
  },
  {
    title: 'Interfaz SST',
    description: 'Prototipo interfaz completa',
    image: '/wireframes/page5.jpg',
    icon: <FaHiking size={24} className="text-amber-400" />,
  },
   {
    title: 'Home Page',
    description: "Boceto página principal",
    image: '/wireframes/page6.jpg',
    icon: <FaCampground size={24} className="text-amber-400" />,
  },
  {
    title: "Áreas",
    description: "Diseño página tipos de área",
    image: '/wireframes/page7.jpg',
    icon: <FaFire size={24} className="text-amber-400" />,
  },
  {
    title: 'Boceto Items',
    description: 'Diseño página boceto items',
    image: '/wireframes/page8.jpg',
    icon: <FaTint size={24} className="text-amber-400" />,
  },
  {
    title: 'Vista General',
    description: 'Vista general de los datos',
    image: '/wireframes/page9.jpg',
    icon: <FaHotTub size={24} className="text-amber-400" />,
  },
  {
    title: 'Interfaz SST',
    description: 'Prototipo interfaz completa',
    image: '/wireframes/page10.jpg',
    icon: <FaHiking size={24} className="text-amber-400" />,
  },
];

const InteractiveSelector: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);

  const options = useMemo(() => optionsData, []);

  useEffect(() => {
    setHeaderVisible(true);
    const timers: ReturnType<typeof setTimeout>[] = [];

    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [options]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 py-16">
      <div
        className="w-full max-w-3xl text-center transition-all duration-700"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(-12px)',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm mb-3 text-foreground">
          OMINCA SST
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Wireframes y bocetos del sistema de gestión de seguridad y salud en el trabajo
        </p>
      </div>

      <div className="h-10" />

      <div className="flex w-full max-w-6xl h-[420px] md:h-[460px] items-stretch overflow-hidden rounded-2xl border border-zinc-300/60 dark:border-zinc-800/60 bg-zinc-100/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-2xl">
        {options.map((option, index) => {
          const isActive = activeIndex === index;
          const isVisible = animatedOptions.includes(index);

          return (
            <div
              key={option.title}
              className="relative flex flex-col justify-end transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: isActive ? 'auto 100%' : 'auto 120%',
                backgroundPosition: 'center',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
                minWidth: '64px',
                minHeight: '100px',
                margin: 0,
                borderRadius: 0,
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: isActive ? '#f59e0b' : '#e5e7eb',
                backgroundColor: '#18181b',
                boxShadow: isActive
                  ? '0 20px 60px rgba(0,0,0,0.45)'
                  : '0 10px 30px rgba(0,0,0,0.25)',
                flex: isActive ? '7 1 0%' : '1 1 0%',
                zIndex: isActive ? 10 : 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
                overflow: 'hidden',
                willChange: 'flex-grow, box-shadow, background-size, background-position',
              }}
              onClick={() => handleOptionClick(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div
                className="absolute left-0 right-0 bottom-6 flex items-center gap-3 px-4"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateX(0)' : 'translateX(18px)',
                  transition: 'all 700ms ease-in-out',
                }}
              >
                <div className="min-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-black/70 backdrop-blur shadow-md border border-white/15">
                  {option.icon}
                </div>
                <div className="text-white">
                  <div className="text-lg font-bold leading-tight">{option.title}</div>
                  <div className="text-base text-gray-200 leading-snug">{option.description}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveSelector;
