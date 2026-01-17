import "../styles/Section.css";
import "../styles/Testimonials.css";
import SectionHero from "../components/SectionHero";

import testimoniosBg from "../assets/imagenes/testimonios.png";
import testimonio1 from "../assets/testimonios/Testimonio 1.png";
import testimonio2 from "../assets/testimonios/Testimonio 2.png";
import testimonio3 from "../assets/testimonios/Testimonio 3.png";
import testimonio4 from "../assets/testimonios/Testimonio 4.png";
import testimonio5 from "../assets/testimonios/Testimonio 5.png";
import testimonio6 from "../assets/testimonios/Testimonio 6.png";
import testimonio7 from "../assets/testimonios/Testimonio 7.png";


export default function Testimonios() {
  return (
    <main className="testimonios-page">

      {/* HERO */}
      <SectionHero
        title="Historias reales de transformación y presencia."
        background={testimoniosBg}
      />

      {/* INTRO */}
      <section className="section testimonios-intro">
        <div className="section-inner testimonios-intro-inner">
          <p>
            Malaika se vive, se siente y se recuerda.
          </p>

          <p>
            Cada experiencia, cada aroma y cada encuentro deja huellas distintas
            en quienes lo transitan.
          </p>

          <p>
            Estas son algunas de las voces de personas que formaron parte de la
            comunidad Malaika.
          </p>
        </div>
      </section>

      {/* TESTIMONIO 1 */}
        <div className="testimonio">
          <div className="testimonio-image">
            <img src={testimonio1} alt="Anahí" />
          </div>

          <div className="testimonio-text">
            <p>
              “Estuve en la experiencia sensorial de Velas entre Aromas y me encantó,
              pasamos una tarde hermosa con un grupo súper divertido. Flor tenía todo
              preparado, los detalles lo fueron todo ✨ cerramos con una meditación muy
              emocionante. Lo recomiendo, fue una experiencia muy linda.”
            </p>

            <span className="testimonio-author">
              — Anahí · Velas entre Aromas
            </span>
          </div>
        </div>

        {/* TESTIMONIO 2 (invertido) */}
        <div className="testimonio reverse">
          <div className="testimonio-image">
            <img src={testimonio2} alt="Nombre" />
          </div>

          <div className="testimonio-text">
            <p>
              “Participamos de la experiencia con mi mamá y nos pareció una hermosa forma de compartir una tarde distinta.
                Flor preparó todo con muchísimo detalle ambientando  el lugar y dándonos todas las indicaciones para hacer nuestras propias velas!
                Me encantó el cierre con meditación guiada! 
                Una genia!”
            </p>

            <span className="testimonio-author">
              —-Constanza· Velas entre aromas
            </span>
          </div>
        </div>

        {/* TESTIMONIO 3 */}
        <div className="testimonio">
          <div className="testimonio-image">
            <img src={testimonio3} alt="Anahí" />
          </div>

          <div className="testimonio-text">
            <p>
              “Fue una experiencia muy entusiasmante porque pude conectar con la creatividad, el sentir, mis deseos y proyecciones. Además hacerlo con amigas permite que se convierta en un ritual de amor y escucha. Me fui muy feliz con mi velita❣️”
            </p>

            <span className="testimonio-author">
              —— Nati· Velas entre Aromas
            </span>
          </div>
        </div>

        {/* TESTIMONIO 4 (invertido) */}
        <div className="testimonio reverse">
          <div className="testimonio-image">
            <img src={testimonio4} alt="Nombre" />
          </div>

          <div className="testimonio-text">
            <p>
              “Amé la experiencia de "Velas entre aromas".♥️✨ Un espacio de encuentro real, pensado desde el corazón para promover la creatividad y la conexion con nosotras mismas y con quienes compartimos el momento. Una oportunidad para ir hacia adentro y poder plasmar en nuestra velita aquello que nos sensibiliza y nos conmueve.” 

            </p>

            <span className="testimonio-author">
              — Leti · Velas entre Aromas
            </span>
          </div>
        </div>


        {/* TESTIMONIO 5 */}
        <div className="testimonio">
          <div className="testimonio-image">
            <img src={testimonio5} alt="Anahí" />
          </div>

          <div className="testimonio-text">
            <p>
              "Hola hola .Hermosa experiencia la de hacer nuestras propias velas junto a un grupo de lindas mujeres y guiadas por Flor que estuvo en cada detalle.Compartimos una tarde distinta llena de aromas y cosas ricas.cerrando con minutos de meditación que nos emociono hasta las lágrimas.❤️"

            </p>

            <span className="testimonio-author">
              — Alejandra · Velas entre Aromas
            </span>
          </div>
        </div>

        {/* TESTIMONIO 6(invertido) */}
        <div className="testimonio reverse">
          <div className="testimonio-image">
            <img src={testimonio6} alt="Nombre" />
          </div>

          <div className="testimonio-text">
            <p>
              "Nos encanto el encuentro, no solamente aprendimos a hacer nuestra vela, sino que nos divertimos y compartimos una noche hermosa! Vamos a repetir la experiencia! muchas gracias por todo 🤍🙌🏻🌸"
            </p>

            <span className="testimonio-author">
              —-Lucia · Velas entre aromas
            </span>
          </div>
        </div>


        {/* TESTIMONIO 7 */}
        <div className="testimonio">
          <div className="testimonio-image">
            <img src={testimonio7} alt="Anahí" />
          </div>

          <div className="testimonio-text">
            <p>
              "Participe de la experiencia con mi grupo de amigas, excelente todo, nos divertimos y despejamos mucho. Compartimos una merienda y después de hacer la vela un momento de meditación y relax, justo lo que necesitábamos para terminar la experiencia 🤍 recomendadisimo!!" 
            </p>

            <span className="testimonio-author">
              — Catalina · Velas entre Aromas
            </span>
          </div>
        </div>


    </main>
  );
}

