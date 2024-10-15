import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="font-Title container">
          <div className="mx-auto mb-14 max-w-[460px] text-center">
            <h2 className="font-Title mb-4 text-center text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              We provide the best services
            </h2>
            <p className="text-center text-base !leading-relaxed text-body-color md:text-lg">
              Efficiently aggregate core competencies from end to end without
              sustainable ideas. Dynamically favor tactical solutions without
              added value.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
