const About = () => {
  return (
    <div className="min-h-screen">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What makes our products stand out from the competition?
        </div>
        <div className="collapse-content">
          <p>
            Our products stand out for their exceptional quality and
            craftsmanship. We take pride in sourcing the finest materials and
            employing skilled artisans to create each item with precision and
            care. Additionally, our commitment to sustainable and eco-friendly
            practices sets us apart. We prioritize using environmentally
            friendly materials and processes to reduce our carbon footprint and
            contribute to a better future.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How did our brand come into existence?
        </div>
        <div className="collapse-content">
          <p>
            Our brand was born out of a passion for innovation and a desire to
            provide customers with unique and high-quality products. It all
            began when our founder, [Founder's Name], envisioned a world where
            everyday items were not only functional but also works of art. With
            dedication and a team of like-minded individuals, we started our
            journey to create products that elevate your daily life. Today,
            we're proud to share our creations with you.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is our company's mission and values?
        </div>
        <div className="collapse-content">
          <p>
            Our mission is to enhance the lives of our customers by offering
            thoughtfully designed and meticulously crafted products that bring
            joy and utility to everyday routines. We are guided by a set of core
            values that include integrity, sustainability, and
            customer-centricity. We believe in transparency, ethical business
            practices, and giving back to the community. These values drive
            every decision we make and every product we create.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
