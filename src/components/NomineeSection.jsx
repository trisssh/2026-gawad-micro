import NomineeCard from "./NomineeCard";

function NomineeSection({ title, subtitle, nominees }) {
  return (
    <div
      className="w-full max-w-[340px] sm:max-w-2xl lg:max-w-4xl mx-auto
                    backdrop-blur-lg bg-white border border-gray-200
                    rounded-2xl shadow-md p-4 md:p-6"
    >
      <div className="mb-4">
        <h4 className="font-semibold text-lg md:text-xl">{title}</h4>
        <h6 className="text-sm text-gray-500">{subtitle}</h6>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {nominees.map((nominee, index) => (
          <NomineeCard
            key={index}
            image={nominee.image}
            name={nominee.name}
            department={nominee.department}
          />
        ))}
      </div>
    </div>
  );
}

export default NomineeSection;
