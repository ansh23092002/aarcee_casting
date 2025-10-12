"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const animateNumber = (
  start: number,
  end: number,
  durationMs: number,
  onUpdate: (value: number) => void
) => {
  const startTime = performance.now();
  const tick = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / durationMs);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const value = Math.floor(start + (end - start) * eased);
    onUpdate(value);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const GetIntouch = () => {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;
    animateNumber(0, 35, 1200, setYears);
    animateNumber(430, 500, 1200, setClients);
    animateNumber(970, 1000, 1200, setProjects);
  }, []);

  return (
    <section id="contact" className="w-full">
      <ul className="flex flex-wrap items-center justify-around gap-6 px-6 py-8">
        <li className="flex flex-col items-center">
          <p className="font-bold text-yellow-300 text-3xl lg:text-4xl">{years}+</p>
          <p className="text-sm md:text-base">Years of Experience</p>
        </li>
        <li className="flex flex-col items-center">
          <p className="font-bold text-yellow-300 text-3xl lg:text-4xl">{clients}+</p>
          <p className="text-sm md:text-base">Clients</p>
        </li>
        <li className="flex flex-col items-center">
          <p className="font-bold text-yellow-300 text-3xl lg:text-4xl">{projects}+</p>
          <p className="text-sm md:text-base">Projects Completed</p>
        </li>
      </ul>

      <div className="relative w-full">
        <div className="relative h-72 md:h-96 w-full">
          <Image
            src="/assets/companyimage.jpg"
            alt="Aarcee Casting company facility"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-4 rounded-xl bg-black/40 px-5 py-4 text-center text-white backdrop-blur-sm">
            <h4 className="font-bold text-lg md:text-2xl lg:text-3xl">Ready to Discuss Your Project?</h4>
            <p className="mt-1 text-xs md:text-sm">
              Contact our team of experts to discuss your steel casting requirements and discover how
              Aarcee Casting can deliver the perfect solution for your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetIntouch;
