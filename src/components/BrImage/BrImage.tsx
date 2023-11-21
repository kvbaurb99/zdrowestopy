import React from "react";

export default function BrImage() {
  return (
    <aside
      className="w-full bg-cover bg-fixed bg-no-repeat min-h-[545px] relative"
      style={{
        backgroundImage: "url(br_image.jpg)",
      }}
    >
      <div className="absolute top-0 text-white flex flex-col justify-center left-0 w-full h-full bg-black/60 backdrop-blur-[3px]">
        <div className="page-sizing flex flex-col gap-16">
          <div>
            <div className="relative max-w-fit">
              <h4 className="font-bold text-2xl">
                Dobry podolog Jaworze i okolice
              </h4>
              <div className="absolute -bottom-2.5 left-0 w-1/3 h-0.5 bg-green-600" />
            </div>
            <p className="mt-6 tracking-wide leading-7">
              W poszukiwaniu wysokiej jakości opieki podologicznej, warto
              zwrócić uwagę na nasz gabinet Zdrowe Stopy. Z pasją dbamy o
              zdrowie i komfort stóp. Nasza oferta obejmuje szeroki zakres usług
              - od leczenia przewlekłych problemów takich jak grzybica paznokci,
              modzele czy wrastające paznokcie, po sezonowe zabiegi
              pielęgnacyjne idealne na lato, kiedy Twoje stopy wymagają
              szczególnej troski. Niezależnie od pory roku, Zdrowe Stopy to
              miejsce, gdzie Twoje stopy znajdą ulgę i profesjonalną opiekę.
              Odwiedź nas już dziś i poczuj różnicę!
            </p>
          </div>
          <div>
            <div className="relative max-w-fit">
              <h4 className="font-bold text-2xl">
                Twoje zdrowie stóp w dobrych rękach
              </h4>
              <div className="absolute -bottom-2.5 left-0 w-1/3 h-0.5 bg-green-600" />
            </div>
            <p className="mt-6 tracking-wide leading-7">
              W naszym gabinecie podologicznym priorytetem jest bezpieczeństwo i
              komfort naszych Pacjentów. Rozumiemy, jak ważne jest, aby każdy,
              kto przekracza nasze progi, czuł się komfortowo i pewnie,
              niezależnie od problemu, z jakim się do nas zgłasza. Nasze
              wieloletnie doświadczenie i nieustanne doskonalenie umiejętności
              pozwalają nam na indywidualne podejście do każdego Pacjenta i
              kompleksowe rozwiązanie jego problemów podologicznych.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
