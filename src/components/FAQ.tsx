import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько времени занимает изготовление мебели?",
    answer:
      "Сроки зависят от сложности и объёма заказа. Стандартная кухня или шкаф-купе — от 15 до 30 рабочих дней с момента подписания договора. Сложные проекты с буазери или фрезеровкой ЧПУ — от 30 до 45 дней. Точные сроки указываем в договоре.",
  },
  {
    question: "Вы работаете только под заказ или есть готовые решения?",
    answer:
      "Мы работаем исключительно под заказ. Каждое изделие изготавливается по вашим размерам и предпочтениям. Это позволяет получить мебель, которая идеально вписывается в ваш интерьер, а не наоборот.",
  },
  {
    question: "Какие материалы вы используете?",
    answer:
      "Работаем с МДФ, ЛДСП, массивом дерева, акрилом и эмалью. Фурнитура — Blum, Hettich, Grass. Все материалы сертифицированы и соответствуют стандартам безопасности. По желанию клиента можем использовать любые другие материалы.",
  },
  {
    question: "Вы осуществляете монтаж и доставку?",
    answer:
      "Да, мы работаем под ключ: замер, проектирование, производство, доставка и монтаж — всё включено. Работаем в Москве и Московской области, а также доставляем по всей России.",
  },
  {
    question: "Какая гарантия на вашу мебель?",
    answer:
      "Мы даём гарантию 3 года на всю корпусную мебель и фурнитуру. Если в течение гарантийного срока возникнут любые дефекты производства — устраним за наш счёт.",
  },
  {
    question: "Как начать заказ?",
    answer:
      "Свяжитесь с нами любым удобным способом — оставьте заявку на сайте, позвоните или напишите в мессенджер. Мы согласуем время для бесплатного замера и консультации, после которых подготовим проект и смету.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}