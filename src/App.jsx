import React, { useState } from 'react';
import { Mail, UserCheck, PenTool, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Shield } from 'lucide-react';

const GrantProcess = () => {
  // Гэта зменная кіруе тым, які крок зараз адкрыты
  const [activeStep, setActiveStep] = useState(0);

  // Палітра ў стылі БЧБ (Белы-Чырвоны-Белы)
  const colors = {
    black: '#2D2D2D',       // Цёмна-шэры (амаль чорны) для тэксту
    red: '#E31E24',         // Класічны чырвоны
    lightGray: '#E5E7EB',   // Светла-шэры для межаў
    darkRed: '#991B1B',     // Цёмна-чырвоны для акцэнтаў
    mediumGray: '#9CA3AF',  // Шэры для неактыўных элементаў
    white: '#FFFFFF',       // Белы
    bg: '#FAFAFA'           // Светлы фон
  };

  // Дадзеныя для кожнага кроку
  const steps = [
    {
      id: 0,
      title: "Умоўнае адабрэнне",
      short: "Старт",
      icon: <Mail className="w-6 h-6" />,
      content: {
        heading: "Вам прыйшоў ліст: «Умоўна адобрана»",
        desc: "Гэта яшчэ не перамога. Адборачная камісія вызначыла ўмовы. Грант дадуць, толькі калі вы выправіце заяўку паводле каментарыяў.",
        actions: [
          "Вывучыць табліцу з заўвагамі ў лісце",
          "Скарэкціраваць бюджэт (улічыць памылкі)",
          "Выправіць апісальную частку (Наратыў)"
        ],
        warning: "Тэрміны залежаць ад хуткасці вашых правак! Чым хутчэй выправіце — тым хутчэй кантракт."
      }
    },
    {
      id: 1,
      title: "Праверка (Due Diligence)",
      short: "Дакументы",
      icon: <Shield className="w-6 h-6" />,
      content: {
        heading: "Збор дакументаў (KYC)",
        desc: "Нам трэба пацвердзіць вашу легальнасць. Пакет дакументаў залежыць ад вашага статусу.",
        subtypes: [
          {
            title: "Арганізацыя (ЕС/ЕЭЗ)",
            items: ["Скан рэгістрацыі", "Статут", "Пратакол аб прызначэнні дырэктара", "Палітыкі ўнутранага кантролю"]
          },
          {
            title: "Ініцыятыва + Фіскальны партнёр",
            items: ["Мемарандум аб партнёрстве", "Дадзеныя менеджара праекта", "Пашпартныя дадзеныя (бяспечна)", "Ліст-самаацэнка (Self-assessment)"]
          }
        ],
        warning: "Дакументы загружаюцца праз абароненую сістэму. Банкаўскія дадзеныя — асобна."
      }
    },
    {
      id: 2,
      title: "Ментарства і Фінал",
      short: "Фіналізацыя",
      icon: <UserCheck className="w-6 h-6" />,
      content: {
        heading: "Праца з ментарам",
        desc: "Вас падключаць да ментара для чыставой падрыхтоўкі праекта.",
        actions: [
          "Узгадніць фінальны бюджэт з ментарам",
          "Пераканацца, што бюджэт адпавядае актыўнасцям",
          "Атрымаць фінальнае «ОК» ад грант-менеджара"
        ],
        warning: "Любое змяненне ў бюджэце патрабуе тлумачэння ў апісальнай частцы!"
      }
    },
    {
      id: 3,
      title: "Кантракт і Грошы",
      short: "Кантракт",
      icon: <PenTool className="w-6 h-6" />,
      content: {
        heading: "Падпісанне і Транш",
        desc: "Выходзім на фінішную прамую перад стартам.",
        actions: [
          "Падпісанне дамовы (скан/арыгінал)",
          "Атрыманне пакета інструкцый па справаздачнасці",
          "Атрыманне графіка траншаў"
        ],
        result: "ПЕРАВОД ПЕРШАГА ТРАНША (АСНОЎНАЯ СУМА)"
      }
    },
    {
      id: 4,
      title: "Рэалізацыя і Справаздача",
      short: "Рэалізацыя",
      icon: <TrendingUp className="w-6 h-6" />,
      content: {
        heading: "Праца над праектам",
        desc: "Самы важны этап. Галоўная памылка — пакідаць справаздачнасць на потым.",
        actions: [
          "Правядзенне мерапрыемстваў",
          "Збор фота/відэа пацверджанняў",
          "Збор чэкаў і ведамасцяў"
        ],
        highlight: "Прынцып ONGOING: Збірайце доказы адразу пасля пакупкі/мерапрыемства. Не чакайце канца года!",
        final: "Фінальная справаздача -> Перавод рэшты сродкаў (~10-20%)"
      }
    }
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 font-sans" style={{ backgroundColor: colors.bg, color: colors.black }}>
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="p-8 relative overflow-hidden" style={{ backgroundColor: colors.white, borderBottom: `4px solid ${colors.red}` }}>
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colors.black }}>Працэс рэалізацыі праекта</h1>
            <p className="text-lg opacity-80" style={{ color: colors.black }}>Пакрокавае кіраўніцтва: ад перамогі ў конкурсе да фінальнай справаздачы</p>
          </div>
          {/* Decorative Elements - BChB Style stripes */}
          <div className="absolute right-0 top-0 bottom-0 w-32 opacity-10" style={{ backgroundColor: colors.red, transform: 'skewX(-20deg) translateX(50%)' }}></div>
          <div className="absolute right-40 top-0 bottom-0 w-8 opacity-5" style={{ backgroundColor: colors.red, transform: 'skewX(-20deg)' }}></div>
        </div>

        {/* Timeline Navigation */}
        <div className="border-b overflow-x-auto" style={{ backgroundColor: colors.white, borderColor: colors.lightGray }}>
          <div className="flex min-w-max md:min-w-0 md:justify-between p-4 relative">
            
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 -translate-y-1/2 z-0" style={{ backgroundColor: colors.lightGray }}></div>
            
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 flex flex-col items-center justify-center p-2 min-w-[80px] md:w-full group transition-all duration-300 focus:outline-none`}
              >
                <div 
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-md border-4 transition-all duration-300`}
                  style={{ 
                    backgroundColor: activeStep === index ? colors.red : colors.white,
                    borderColor: activeStep === index ? colors.red : (activeStep > index ? colors.black : colors.lightGray),
                    transform: activeStep === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <div className={`transition-colors duration-300`} style={{ color: activeStep === index ? colors.white : (activeStep > index ? colors.black : colors.mediumGray) }}>
                     {activeStep > index ? <CheckCircle size={24} /> : step.icon}
                  </div>
                </div>
                
                <span className={`mt-3 text-xs md:text-sm font-semibold whitespace-nowrap px-2 py-1 rounded-md transition-colors`}
                  style={{ 
                    color: activeStep === index ? colors.red : colors.mediumGray,
                    backgroundColor: activeStep === index ? '#FEF2F2' : 'transparent', 
                    boxShadow: activeStep === index ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' : 'none'
                  }}>
                  {step.short}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-10 min-h-[400px] flex flex-col md:flex-row gap-8 animate-fadeIn">
          
          {/* Left Column: Visual & Header */}
          <div className="md:w-1/3 flex flex-col gap-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-bold w-fit`} style={{ backgroundColor: colors.red }}>
              Крок {activeStep + 1} з 5
            </div>
            <h2 className="text-3xl font-bold leading-tight" style={{ color: colors.black }}>
              {steps[activeStep].title}
            </h2>
            <p className="text-lg font-medium" style={{ color: '#4B5563' }}>
              {steps[activeStep].content.heading}
            </p>
            <div className="h-1 w-20 rounded mt-2" style={{ backgroundColor: colors.red }}></div>
          </div>

          {/* Right Column: Details & Checklists */}
          <div className="md:w-2/3 rounded-xl p-6 border shadow-sm" style={{ backgroundColor: colors.white, borderColor: colors.lightGray }}>
            <p className="mb-6 text-lg leading-relaxed" style={{ color: '#374151' }}>
              {steps[activeStep].content.desc}
            </p>

            {/* Checklist Actions */}
            {steps[activeStep].content.actions && (
              <div className="space-y-3 mb-6">
                <h3 className="text-sm uppercase tracking-wide font-bold mb-2" style={{ color: colors.mediumGray }}>Што трэба зрабіць:</h3>
                {steps[activeStep].content.actions.map((action, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-100">
                    <div className="mt-1 min-w-[16px]" style={{ color: colors.red }}>
                      <CheckCircle size={18} />
                    </div>
                    <span className="font-medium" style={{ color: colors.black }}>{action}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Special Subtypes (for Document step) */}
            {steps[activeStep].content.subtypes && (
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {steps[activeStep].content.subtypes.map((type, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-red-200">
                    <h4 className="font-bold mb-3 text-sm uppercase" style={{ color: colors.red }}>{type.title}</h4>
                    <ul className="space-y-2">
                      {type.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: colors.black }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.lightGray }}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Warnings */}
            {steps[activeStep].content.warning && (
              <div className="flex items-start gap-3 p-4 rounded-lg border-l-4 mt-4 shadow-sm" style={{ backgroundColor: '#FFF5F5', borderColor: '#FED7D7', borderLeftColor: colors.red }}>
                <AlertTriangle className="min-w-[20px]" style={{ color: colors.red }} />
                <p className="text-sm font-semibold" style={{ color: '#991B1B' }}>{steps[activeStep].content.warning}</p>
              </div>
            )}

             {/* Highlight (for step 5) */}
             {steps[activeStep].content.highlight && (
              <div className="flex items-start gap-3 p-4 rounded-lg border mt-4 bg-gray-50" style={{ borderColor: colors.lightGray }}>
                <AlertTriangle className="min-w-[20px]" style={{ color: colors.black }} />
                <p className="text-sm font-semibold" style={{ color: colors.black }}>{steps[activeStep].content.highlight}</p>
              </div>
            )}

            {/* Result */}
            {steps[activeStep].content.result && (
              <div className="mt-6 flex items-center justify-center p-4 border-2 rounded-lg font-bold text-center" style={{ backgroundColor: '#FDF2F2', borderColor: colors.red, color: colors.darkRed }}>
                {steps[activeStep].content.result}
              </div>
            )}

            {/* Final Text */}
            {steps[activeStep].content.final && (
               <div className="mt-6 flex items-center gap-2 text-sm font-medium border-t pt-4" style={{ borderColor: colors.lightGray, color: colors.mediumGray }}>
                 <ArrowRight size={16} /> {steps[activeStep].content.final}
               </div>
            )}

          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-4 border-t flex justify-between items-center" style={{ backgroundColor: colors.white, borderColor: colors.lightGray }}>
          <button 
            disabled={activeStep === 0}
            onClick={() => setActiveStep(prev => prev - 1)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors`}
            style={{ 
                color: activeStep === 0 ? colors.lightGray : colors.black, 
                cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                backgroundColor: activeStep === 0 ? 'transparent' : '#F3F4F6'
            }}
          >
            ← Назад
          </button>
          
          <div className="flex gap-1">
             {steps.map((_, i) => (
               <div key={i} className={`h-1.5 rounded-full transition-all duration-300`} 
                    style={{ 
                        width: i === activeStep ? '32px' : '8px', 
                        backgroundColor: i === activeStep ? colors.red : colors.lightGray 
                    }}></div>
             ))}
          </div>

          <button 
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep(prev => prev + 1)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors shadow-lg text-white`}
            style={{
                backgroundColor: activeStep === steps.length - 1 ? colors.lightGray : colors.red,
                cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
            }}
          >
            Далей →
          </button>
        </div>
      </div>
    </div>
  );
};

export default GrantProcess;
