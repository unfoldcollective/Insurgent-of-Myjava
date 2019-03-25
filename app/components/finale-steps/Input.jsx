import React from 'react';
import { connect } from 'react-redux';
import Keyboard from '../Keyboard.jsx';
import Cta from '../Cta.jsx';
import { _s } from '../../utils';

function mapStateToProps(state) {
  const { data, canvas } = state;
  return {
    data,
    canvas
  };
}

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showExtra: false
    };
  }
  render() {
    const { children, nextAction, required, legal } = this.props;

    return (
      <article className="input-overlay">
        {this.state.showExtra ? (
          <div className="extra">
            <aside className="context-navigation">
              <Cta
                className="big reverse"
                action={() => {
                  this.setState({ showExtra: false });
                }}
              >
                {_s('EXIT_CANCEL', this.props.data)}
              </Cta>
            </aside>
            <div className="extra-text">
              <h1>Informácia pre dotknuté osoby GDPR</h1>
              <p>Ochrana osobných údajov</p>
              <h2>
                1. Prevádzkovateľ: Slovenská národná galéria so sídlom na adrese
                Riečna 1, 815 13 Bratislava, IČO: 00164712 (ďalej len
                „prevádzkovateľ&quot;).
              </h2>
              <h3>1.1 Súhlas dotknutej osoby so spracúvaním osobných údajov</h3>
              <p>
                V prípade, že vyznačíte súhlas s poskytnutím a spracovaním
                uvedených osobných údajov potvrdzujete, že vám boli v zmysle a v
                rozsahu článku 13 nariadenia Európskeho parlamentu a rady (EÚ)
                2016/679 o ochrane fyzických osôb pri spracúvaní osobných údajov
                a o voľnom pohybe takýchto údajov, ktorými sa zrušuje smernica
                95/46/ES (všeobecné nariadenie o ochrane osobných údajov, ďalej
                len „nariadenie GDPR&quot;) a v súlade so zákonom č. 18/2018
                Z.z. o ochrane osobných údajov a o zmene a doplnení niektorých
                zákonov prevádzkovateľom poskytnuté informácie o spracúvaní
                osobných údajov, že ste boli poučený o právach a povinnostiach
                dotknutej osoby a súhlasíte so spracovaním svojich osobných
                údajov: e-mailová adresa.
              </p>
              <h3>1.2 Účel spracúvania osobných údajov</h3>
              <p>
                Osobné údaje spracúvame za účelom zaslania e-mailu z aplikácie
                &quot;Myjavskí povstalci&quot;. Dotknutá osoba udeľuje súhlas na
                spracúvanie osobných údajov na dobu päť rokov od udelenia
                súhlasu. Po uplynutí vyššie uvedenej doby prevádzkovateľ
                bezodkladne vykoná likvidáciu (výmaz) poskytnutých osobných
                údajov z informačných systémov prevádzkovateľa. To neplatí, ak
                dotknutá osoba využila svoje právo na vymazanie v zmysle čl. 17
                nariadenia GDPR. Súhlas je možné kedykoľvek písomne odvolať na
                adrese prevádzkovateľa alebo zaslaním e-mailu na e-mailovú
                adresu gdpr@sng.sk. Dotknutá osoba má za podmienok stanovených v
                nariadení GDPR právo požadovať od prevádzkovateľa prístup k
                osobným údajom týkajúcim sa dotknutej osoby a právo na ich
                opravu alebo vymazanie alebo obmedzenie spracúvania, alebo právo
                namietať proti spracúvaniu, ako aj právo na prenosnosť údajov.
                Bližšie sú práva dotknutej osoby upravené v článku 15 až 23
                nariadenia GDPR a na stránke prevádzkovateľa www.sng.sk.
                Prevádzkovateľ má určenú zodpovednú osobu za ochranu osobných
                údajov, ktorú môže dotknutá osoba kontaktovať v súvislosti so
                všetkými otázkami týkajúcimi sa spracúvania jej osobných údajov
                a uplatňovania svojich práv podľa nariadenia GDPR; kontaktné
                údaje na zodpovednú osobu prevádzkovateľa: e-mail:
                zodpovednaosobagdpr@sng.sk alebo písomne na adresu
                prevádzkovateľa s označením „zodpovedná osoba GDPR&quot;.
              </p>
              <h2>2. Aké údaje zbierame</h2>
              <p>
                Získavame Vašu e-mailovú adresu na jednorazové zaslania e-mailu
                z Aplikácie &quot;Myjavskí povstalci&quot;, ktorá je prístupná v
                expozícii Múzea Slovenských národných rád. Na Vami zadanú
                e-mailovú adresu príde odkaz na kompozíciu povstalca , ktorú ste
                vytvorili na dotykovej obrazovke.
              </p>
              <h2>3. Komu údaje sprístupňujeme</h2>
              <p>
                Vaše osobné údaje nezverejňujeme, nesprístupňujeme a
                neposkytujeme žiadnym iným subjektom s výnimkou situácií
                opísaných nižšie:
              </p>
              <h3>3.1. V prípadoch externého spracúvania</h3>
              <p>
                Vaše osobné údaje majú k dispozícii náš dodávateľ, ktorí ich pre
                nás spracúvajú na základe našich pokynov a v súlade s týmto
                dokumentom. Dodržiavajú pri tom všetky potrebné bezpečnostné,
                technické a organizačné opatrenia, aby vašim osobným údajom
                poskytli požadovanú ochranu. V prípade aplikácie &quot;Myjavskí
                povstalci&quot; je partnerom Google Ireland Limited (Gmail) -
                Gordon House, Barrow Street, Dublin 4, Írsko.
              </p>
              <h3>3.2 Z právnych dôvodov a na predchádzanie škodám</h3>
              <p>
                Vaše údaje môžeme takisto uchovávať alebo sprístupňovať iným
                osobám, aby sme vyhoveli povinnostiam vyplývajúcim z právnych
                predpisov, z požiadaviek štátnych a iných orgánov, aby sme si
                uplatňovali svoje nároky alebo sa obhajovali v konaniach, kde si
                ich iní uplatňujú voči nám. Medzi kategórie tretích osôb, ktorým
                sprístupňujeme osobné údaje z týchto dôvodov, patria napríklad
                súdy, štátne a iné príslušné orgány vykonávajúce kontrolu nad
                našou činnosťou, zodpovedné za riešenie sporov alebo vykonávanie
                rozhodnutí, či naši účtovní poradcovia a audítori.
              </p>
              <h3>3.3 Právo na prístup k údajom</h3>
              <p>
                Máte právo získať od nás potvrdenie o tom, či sa o vás
                spracúvajú osobné údaje, a v prípade, ak vaše osobné údaje
                spracúvame, poskytneme vám informáciu o tom, aké údaje o vás
                spracúvame a na aký účel, komu boli vaše osobné údaje poskytnuté
                a ako dlho budeme vaše osobné údaje uchovávať.
              </p>
              <h3>3.4 Právo na opravu</h3>
              <p>
                Prijímame primerané opatrenia, aby sme zabezpečili presnosť,
                úplnosť aktuálnosť informácií, ktoré o vás máme k dispozícii. Ak
                si myslíte, že údaje, ktorými disponujeme sú nepresné, neúplné
                alebo neaktuálne, prosím, neváhajte nás požiadať, aby sme tieto
                informácie upravili, aktualizovali alebo doplnili.
              </p>
              <h3>3.5 Právo na vymazanie (právo na zabudnutie)</h3>
              <p>
                Máte právo na vymazanie osobných údajov, ktoré o vás spracúvame,
                v prípade ak sú splnené nasledovné podmienky a neuplatňujú sa
                zákonné výnimky:
              </p>
              <ul>
                <li>
                  údaje už nie sú potrebné na účely, na ktoré sa získavali;
                </li>
                <li>
                  odvoláte súhlas na spracúvanie svojich osobných údajov a na
                  ich spracúvanie neexistuje iný právny základ;
                </li>
                <li>
                  na základe vašej konkrétnej situácie namietnete proti
                  spracúvaniu svojich osobných údajov spracúvaných na základe
                  oprávneného záujmu, keď neprevažujú oprávnené dôvody na
                  spracúvanie, alebo namietnete proti spracúvaniu na účel
                  priameho marketingu;
                </li>
                <li>osobné údaje sa spracúvali nezákonne. </li>
              </ul>
              <h3>3.6 Právo namietať</h3>
              <p>
                Máte právo namietať voči spracúvaniu údajov, ktoré je založené
                na našich legitímnych oprávnených záujmoch. V prípade, ak nemáme
                presvedčivý legitímny oprávnený dôvod na spracúvanie a vy podáte
                námietku, nebudeme vaše osobné údaje ďalej spracúvať.
              </p>
              <h3>3.7 Podávanie sťažností</h3>
              <p>
                Ak chcete podať sťažnosť na spôsob, akým sú vaše osobné údaje
                spracúvané, vrátane uplatnenia vyššie uvedených práv, môžete sa
                obrátiť na našu zodpovednú osobu. Všetky vaše podnety a
                sťažnosti riadne preveríme. Ak nie ste spokojný s našou
                odpoveďou, alebo sa domnievate, že vaše osobné údaje spracúvame
                nespravodlivo alebo nezákonne, môžete podať sťažnosť na dozorný
                orgán, ktorým je Úrad na ochranu osobných údajov Slovenskej
                republiky, https://dataprotection.gov.sk , Hraničná 12, 820 07
                Bratislava 27; tel. číslo: +421 /2/ 3231 3214; e-mail:
                statny.dozor@pdp.gov.sk.
              </p>
              <h3>3.8 Kto sme a kde nás môžete kontaktovať</h3>
              <p>
                Prevádzkovateľom pri spracúvaní vašich osobných údajov je
                Slovenská národná galéria so sídlom na adrese Riečna 1, 815 13
                Bratislava, IČO: 00164712. V prípade ak máte akékoľvek otázky k
                tomuto dokumentu alebo použitiu svojich osobných údajov, alebo
                si chcete uplatniť svoje práva popísané v tomto dokumente,
                môžete nás kontaktovať e-mailom na adrese gdpr@sng.sk alebo
                písomne na adrese našej inštitúcie.
              </p>
            </div>
          </div>
        ) : null}
        <header className="input-header">{children}</header>
        <Keyboard action={nextAction} required={required} />
        <p
          className="legal"
          onClick={() => {
            legal &&
              this.setState({
                showExtra: true
              });
          }}
        >
          {legal}
        </p>

        {!required ? (
          <div className="input-skip">
            <Cta action={nextAction} className="big">
              Skip
            </Cta>
          </div>
        ) : null}

        <style jsx>
          {`
            div.extra {
              width: 100vw;
              height: 100vh;
              background: rgba(255, 255, 255);
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1000000;
              display: flex;
              justify-content: center;
              overflow-y: scroll;
            }

            div.extra-text {
              font-family: SourceSans, sans-serif;
              max-width: 50%;
              color: black;
              font-size: 1.3rem;
              font-weight: normal;
            }

            :global(.extra-text h1) {
              margin: 2rem 0;
            }
            :global(.extra-text h2) {
              margin: 1.5rem 0;
            }
            :global(.extra-text h3) {
              margin: 1rem 0;
            }
            :global(.extra-text ul) {
              padding-left: 2rem;
            }

            aside.context-navigation {
              position: fixed;
              right: 5vw;
              bottom: 5vh;
              padding: 2rem;
            }

            article.input-overlay {
              position: absolute;
              z-index: 1000000;
              width: 100vw;
              height: 100vh;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              background: rgba(0, 0, 0, 0.5);
            }

            header.input-header {
              text-align: center;
              margin-bottom: 2rem;
            }

            div.input-skip {
              position: absolute;
              right: 5vw;
              bottom: 5vh;
              padding: 2rem;
            }

            p.legal {
              padding-top: 2rem;
              font-family: SourceSans, sans-serif;
              height: 10rem;
              font-size: 1.3rem;
              text-decoration: underline;
            }
          `}
        </style>
      </article>
    );
  }
}

const ConnectedInput = connect(mapStateToProps)(Input);

export { ConnectedInput as Input };
