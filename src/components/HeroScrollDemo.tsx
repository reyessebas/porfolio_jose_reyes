"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useI18n } from "@/providers/LanguageProvider";

export function HeroScrollDemo() {
  const { t } = useI18n();
  const randomImageUrls = [
   
    "..//public/elemento_one.png",
  
  ];

  const randomImage = randomImageUrls[Math.floor(Math.random() * randomImageUrls.length)];

  return (
    <div className="flex flex-col overflow-hidden pb-[30px] pt-[30px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {t('heroScroll.subtitle')}<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {t('heroScroll.title')}
              </span>
            </h1>
          </>
        }
      >
        <img
          src={randomImage}
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
