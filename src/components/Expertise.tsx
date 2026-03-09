import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const expertiseAreas = [
  {
    title: "Кухни и гостиные",
    description: "Кухонные гарнитуры, столешницы, гостиные стенки и буфеты. Проектируем под любую планировку — от студии до загородного дома.",
    icon: "ChefHat",
  },
  {
    title: "Спальни и гардеробные",
    description:
      "Шкафы-купе, встроенные гардеробные, кровати с подъёмным механизмом, прикроватные тумбы. Максимум пространства и порядка.",
    icon: "BedDouble",
  },
  {
    title: "Кабинеты и ванные",
    description:
      "Мебель для рабочего кабинета, ванные комнаты и санузлы. Влагостойкие материалы, продуманная эргономика.",
    icon: "Briefcase",
  },
  {
    title: "Двери, буазери и фасады",
    description:
      "Межкомнатные двери, декоративные панели буазери, мебельные фасады и подвесные потолки с фрезеровкой на станках ЧПУ.",
    icon: "Layers",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Направления производства</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Изготовим</HighlightedText> всё,
            <br />
            что вам нужно
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Полный цикл производства корпусной мебели — от замера и проекта до доставки и монтажа. Работаем по всей России.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon name={area.icon} size={40} className="mb-4 text-foreground" />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}