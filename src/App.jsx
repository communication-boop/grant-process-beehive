import React, { useState } from 'react';
import { Mail, UserCheck, PenTool, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Shield, FileText } from 'lucide-react';

const GrantProcess = () => {
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

  const steps = [
    {
      id: 0,
      title: "Ваш праект адобраны",
      short: "Крок 1",
      icon: <Mail className="w-6 h-6" />,
      content: {
        heading: "Вы атрымалі ліст з рашэннем Адборачнага камітэта",
        desc: "Гэта значыць, што ваш праект прыняты да падтрымкі. У некаторых выпадках камісія можа прапанаваць удакладненні: змяншэнне сумы гранта, карэкціроўку або выключэнне асобных кампанентаў праекта, а таксама шэраг заўваг да прапановы. У такіх выпадках грант-мэнэджары дапамагаюць адаптаваць прапанову і ўдакладніць паказчыкі па індыкатарах.",
        actions: [
          "Праверце, ці ёсць у лісце табліца або пералік заўваг.",
          "Калі ёсць заўвагі, уважліва іх вывучыце і адкарэктуйце бюджэт і/ці наратыўную частку праекта ў адпаведнасці з імі.",
          "Калі заўваг няма — адразу пераходзьце да наступнага кроку і пачынайце збіраць дакументы для кантракта."
        ],
        warning: "Працэс заключэння кантракта можа заняць пэўны час — гэта натуральны этап працы з праектам. Мы з боку каманды стараемся зрабіць яго максімальна гладкім і своечасовым, улічваючы аб’ём заўваг і тэмп сумеснай камунікацыі."
      }
    },
    {
      id: 1,
      title: "Пацвярджэнне юрыдычнага статусу вашай арганізацыі",
      short: "Крок 2",
      icon: <Shield className="w-6 h-6" />,
      content: {
        heading: "",
        desc: "На гэтым кроку мы пацвярджаем юрыдычны статус і банкаўскія рэквізіты вашай ініцыятывы/арганізацыі. Спіс дакументаў залежыць ад таго, у якім фармаце вы працуеце: як ініцыятыва з фіскальным партнёрам або як зарэгістраваная арганізацыя ў адной з краін ЕС, Усходняга партнёрства або Еўрапейскай эканамічнай зоны.",
        subtypes: [
          {
            title: "1. Для гранцье, якія працуюць праз фіскальнага партнёра",
            items: [
              "Мемарандум аб стварэнні ініцыятывы (з апісаннем мэтаў ініцыятывы, назвай кіруючага воргана, колькасцю людзей і датай заснавання) у адвольнай форме;",
              "Кантактныя дадзеныя ініцыятывы ў адпаведнай excel-табліцы па форме;",
              "Банкаўскія рэквізіты ў еўра вашага фіскальнага партнэра. Запаўняецца ў далучанай excel-табліцы;",
              "Пратакол паседжання кіроўнага воргана ініцыятывы аб вызначэнні каардынатара праекта і рашэнне кіруючага воргана фіскальнага партнэра аб упанаважанай асобе для падпісання дамовы;",
              "Кантактная інфармацыя ў адпаведнай excel-табліцы па форме;",
              "Копіі пашпартоў мэнаджэра (-кі) праекта і ўпаўнаважанга (-ай) кіраўніка ініцыятывы (31-32 старонка з прапіскай), калі дамова будзе заключацца з фізічнай асобай;",
              "Чэк-ліст унутранага кантролю (трэба падпісаць і адзначыць гачыкамі);",
              "Ліст-самаацэнка для гранцье і партнэраў па праеце, калі таія ёсць адносна ўнутранай палітыкі і працэдур супраць сэксуальнай эксплуатацыі, гвалту і дамагянняў (SEA-H), дасылаецца падпісаным ў pdf-фармаце;",
              "Дакумент-выпіску з банка без асабістай інфармацыі, каб былі бачныя нумар рахунка і назва ўладальніка рахунка для перастрахоўкі."
            ]
          },
          {
            title: "2. Для гранцье, якія маюць рэгістрацыю ў адной з краін ЕС, Усходняга партнёрства або Еўрапейскай эканамічнай зоны",
            items: [
              "Скан пасведчання аб рэгістрацыі арганізацыі;",
              "Скан статута;",
              "Пратакол паседжання кіроўнага воргана арганізацыі аб прызначэнні: а) Кіраўніка (-цы) менаджэра праекта; б) упаўнаважанага прадстаўніка арганізацыі для падпісання кантракта з адказным партнёрам Belarus Beehive;",
              "Чэк-ліст унутранага кантролю (трэба падпісаць і адзначыць гачыкамі);",
              "Ліст-самаацэнка для гранцье і партнэраў па праеце, калі такія ёсць адносна ўнутранай палітыкі і працэдур супраць сэксуальнай эксплуатацыі, гвалту і дамаганняў (SEA-H), дасылаецца падпісаным ў pdf-фармаце;",
              "Excel-табліцы па форме з: а) Кантактнымі дадзенымі арганізацыі; б) кантактная інфармацыя 2 асобаў узгаданых у п. 3; в) банкаўскія рэквізіты ў Еўра;",
              "Дакумент-выпіску з банка без асабістай інфармацыі, каб былі бачныя нумар рахунка і назва ўладальніка рахунка для перастрахоўкі."
            ]
          }
        ],
        warning: "Усе дакументы трэба загружаць толькі праз абароненую сістэму — гэта важна для вашай бяспекі. Банкаўскія рэквізіты і пашпартныя дадзеныя не варта дасылаць праз звычайную электронную пошту або мэсэнджары."
      }
    },
    {
      id: 2,
      title: "Фіналізацыя праекта",
      short: "Крок 3",
      icon: <UserCheck className="w-6 h-6" />,
      content: {
        heading: "На гэтым этапе мы фінальна падрыхтоўваем ваш праект да кантракта",
        desc: "На гэтым кроку мы ўзгадняем фінальную версію апісання праекта і бюджэту. Калі заўваг няшмат, звычайна хапае кароткага абмену каментарамі з грант-мэнэджарам. Калі праект больш складаны або змяненняў шмат, да працы далучаецца ментар: ён дапамагае пераструктураваць апісанне, удакладніць індыкатары і прывесці бюджэт у адпаведнасць з планам.",
        actions: [
          "Разам з ментарам або грант-мэнеджарам прайсціся па заўвагах да апісальнай часткі праекта.",
          "Унесці змены ў наратыў: мэты, вынікі, індыкатары, апісанне актыўнасцяў.",
          "Узгадніць канчатковы бюджэт: праверыць кошты, ускосныя выдаткі, адпаведнасць актыўнасцям.",
          "Пераканацца, што ўсе змены ў бюджэце адлюстраваны ў апісальнай частцы.",
          "Загрузіць абноўленыя дакументы (апісанне і бюджэт) у сістэму і даслаць іх грант-мэнеджару.",
          "Абавязкова азнаёміцца з Палажэннем аб конкурсе праграмы, каб разумець асноўныя правілы і патрабаванні."
        ],
        highlight: "Любое змяненне ў бюджэце патрабуе кароткага тлумачэння ў апісальнай частцы. Магчымыя некалькі раўндаў правак, таму своечасовыя адказы на каментары дапамогуць не зацягваць пераход да кантракта.",
        warning: (
          <span>
            Заўвагі могуць датычыцца любой пазіцыі бюджэту, у тым ліку ўзроўню аплаты працы.
            <br /><br />
            Калі вы не згодныя з прапанаваным скарачэннем нейкай пазіцыі, вы можаце абгрунтаваць прапанаваны кошт гэтай адзінкі.
            <br /><br />
            Ускосныя выдаткі варта прапісваць асобна, каб мы маглі зразумець, ці з’яўляюцца яны прымальнымі (eligible) паводле Палажэння аб конкурсе. Пры падрыхтоўцы бюджэту карыстайцеся інструкцыямі па бюджэце і працы з сістэмай, размешчанымі ў раздзеле «Шаблоны дакументаў».
          </span>
        )
      }
    },
    {
      id: 3,
      title: "Падпісанне дамовы",
      short: "Крок 4",
      icon: <PenTool className="w-6 h-6" />,
      content: {
        heading: "Падпісанне дакументаў і ўзгадненне графіка траншаў гранта",
        desc: "На гэтым этапе фармуецца канчатковы пакет дакументаў на подпіс і ўзгадняецца графік пералічэння траншаў. Пасля падпісання дамовы мы дасылаем вам сродкі на пазначаны вамі рахунак цягам 10 дзён.",
        actions: [
          "Падпісаць кантракт і астатнія дакументы з пакета і даслаць нам скан (альбо арыгінал — паводле інструкцыі)"
        ],
        subtypes: [
          {
            title: "Пакет дакументаў на подпіс:",
            items: [
              "Дамова;",
              "Апісанне праекта;",
              "Бюджэт;",
              "Інструкцыя па справаздачнасці;",
              "Патрабаванні да візабіліці;",
              "Графік актыўнасцей, Палажэнне аб конкурсе (апцыянальна ў залежнасці ад праекта)."
            ]
          }
        ],
        warning: "Уважліва прачытайце ўсе дакументы з пакета, захавайце іх для далейшай працы і абавязкова праверце графік траншаў: сумы, прыблізныя даты і ўмовы пералічэння, каб разумець, як ён звязаны з этапамі рэалізацыі праекта і справаздачнасці."
      }
    },
    {
      id: 4,
      title: "Рэалізацыя і справаздачнасць",
      short: "Крок 5",
      icon: <TrendingUp className="w-6 h-6" />,
      content: {
        heading: "Праца над праектам, маніторынг, збор доказаў",
        desc: "Пасля падпісання дамовы і атрымання першага транша праект афіцыйна стартуе. Вы атрымліваеце інструкцыю па працы з Beesystem.",
        actions: [
          "Рэалізоўваць актыўнасці праекта згодна з узгодненым планам і бюджэтам.",
          "Збіраць пацверджанні ўсіх актыўнасцяў: фота, відэа, праграмы мерапрыемстваў, спісы ўдзельнікаў, спасылкі на публікацыі і інш.",
          "Збіраць і сістэматызаваць фінансавыя дакументы: рахункі, інвойсы, квітанцыі, дамовы і г.д.",
          "Фіксаваць вынікі па індыкатарах: лічбы, апытанні, якасныя гісторыі і прыклады ўплыву.",
          "Паступова (ONGOING) падгружаць фінансавыя дакументы ў сістэму / перадаваць фінансавай спецыялістцы, а не толькі перад фінальным дэдлайнам."
        ],
        highlight: "Маніторынг праекта: Магчыма, на ваш праект будзе накіраваны маніторшчык ці маніторшчыца. Яны могуць: наведваць вашы адкрытыя мерапрыемствы; браць інтэрв’ю ў бенефіцыяраў і каманды; праводзіць апытанні, збіраць прыклады ўплыву і добрыя практыкі. Пры гэтым маніторшчык / маніторшчыца заўсёды дзейнічае ў межах вашых патрабаванняў бяспекі і не атрымлівае доступу ні да персанальных даных удзельнікаў, ні да фінансавай інфармацыі па праекце.",
        warning: "Важна: Збірайце доказы адразу пасля пакупкі або мерапрыемства — не чакайце канца праекта. Выдаткі без належных пацвярджанняў могуць быць прызнаныя непрымальнымі і не будуць кампенсаваныя.",
        final: "Фінальная справаздача -> Перавод рэшты сродкаў"
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
              {steps[activeStep].short}
            </div>
            <h2 className="text-3xl font-bold leading-tight" style={{ color: colors.black }}>
              {steps[activeStep].title}
            </h2>
            
            {/* Added conditional rendering for heading */}
            {steps[activeStep].content.heading && (
              <p className="text-lg font-medium" style={{ color: '#4B5563' }}>
                {steps[activeStep].content.heading}
              </p>
            )}
            
            <div className="h-1 w-20 rounded mt-2" style={{ backgroundColor: colors.red }}></div>
          </div>

          {/* Right Column: Details & Checklists */}
          <div className="md:w-2/3 rounded-xl p-6 border shadow-sm" style={{ backgroundColor: colors.white, borderColor: colors.lightGray }}>
            <p className="mb-6 text-lg leading-relaxed" style={{ color: '#374151' }}>
              {steps[activeStep].content.desc}
            </p>

            {/* Actions List */}
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

            {/* Document Package List (Specific for Step 4) */}
            {steps[activeStep].content.docList && (
              <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
                 <h3 className="text-sm uppercase tracking-wide font-bold mb-3 flex items-center gap-2" style={{ color: colors.darkRed }}>
                    <FileText size={16}/> Пакет дакументаў на подпіс:
                 </h3>
                 <ul className="grid md:grid-cols-2 gap-2">
                    {steps[activeStep].content.docList.map((doc, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                            {doc}
                        </li>
                    ))}
                 </ul>
              </div>
            )}

            {/* Subtypes (for Step 2 / KYC & Step 4 Contracts) */}
            {steps[activeStep].content.subtypes && (
              <div className="grid md:grid-cols-1 gap-4 mb-6">
                {steps[activeStep].content.subtypes.map((type, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-red-200">
                    <h4 className="font-bold mb-3 text-sm uppercase" style={{ color: colors.red }}>{type.title}</h4>
                    <ul className="space-y-2">
                      {type.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: colors.black }}>
                          <div className="w-1.5 h-1.5 mt-1.5 rounded-full shrink-0" style={{ backgroundColor: colors.lightGray }}></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Highlight (Monitoring/Blue Block) */}
             {steps[activeStep].content.highlight && (
              <div className="flex items-start gap-3 p-4 rounded-lg border mt-4 bg-blue-50" style={{ borderColor: '#DBEAFE' }}>
                <Shield className="min-w-[20px]" style={{ color: '#1E40AF' }} />
                <p className="text-sm font-semibold" style={{ color: '#1E3A8A' }}>{steps[activeStep].content.highlight}</p>
              </div>
            )}

            {/* Warnings (Red Block) */}
            {steps[activeStep].content.warning && (
              <div className="flex items-start gap-3 p-4 rounded-lg border-l-4 mt-4 shadow-sm" style={{ backgroundColor: '#FFF5F5', borderColor: '#FED7D7', borderLeftColor: colors.red }}>
                <AlertTriangle className="min-w-[20px]" style={{ color: colors.red }} />
                <div className="text-sm font-semibold" style={{ color: '#991B1B' }}>{steps[activeStep].content.warning}</div>
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
