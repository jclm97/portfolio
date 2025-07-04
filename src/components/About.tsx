const About = () => {
  return (
    <section id="about" className="flex flex-col gap-3 lg:px-3 mb-16 lg:mb-36">
      <div className="lg:hidden font-bold text-base uppercase text-foreground">
        About
      </div>
      <div className="flex flex-col gap-5 text-base text-muted-foreground">
      <p>
        Gracias a mi formación académica, diseñé, fabriqué y analicé sistemas mecánicos. 
        Durante ese camino, me crucé con el mundo de la robótica. Al principio, me parecía interesante 
        construir el hardware físico (y aún me lo parece), pero lo que realmente despertó mi interés fue 
        el software detrás de los comportamientos autónomos.
      </p>
      <p>
        Este interés me ha llevado a desarrollar software de autonomía para robots que han recorrido tierra, 
        aire y mar. La mayor parte de mis contribuciones y experiencia está en GNC (Guía, Navegación y Control). 
        Últimamente, me he centrado más en etapas iniciales, donde participo en percepción y mapeo, 
        y espero seguir en esa línea.
      </p>
    </div>

    </section>
  );
};

export default About;
