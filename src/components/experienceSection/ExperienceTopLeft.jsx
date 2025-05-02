import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="06" text="Months" />
      </div>
      <p className="text-center">
        Full Stack Developer with 6 months' experience in building responsive
        and scalable web applications.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
