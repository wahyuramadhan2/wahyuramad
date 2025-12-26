const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-center text-foreground">
            Tentang Saya
          </h2>
          
          <div className="w-12 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="space-y-6 text-center">
            <p className="text-lg text-foreground leading-relaxed">
              Saya adalah mahasiswa Psikologi di <span className="text-primary font-medium">Universitas Negeri Surabaya</span> dengan 
              fokus pada Psikologi Kognitif dan Psikolinguistik.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Memiliki pengalaman sebagai Observer di lingkungan pendidikan anak usia dini, 
              di mana saya mengamati dinamika perkembangan anak termasuk interaksi sosial, 
              regulasi emosi, dan pertumbuhan kognitif.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Aktif mengeksplorasi perpaduan antara psikologi dan teknologi, 
              termasuk machine learning dan data analytics untuk memahami perilaku manusia secara lebih mendalam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
