import NomineeCard from "./NomineeCard";

function NomineeSection({ title, subtitle, nominees }) {
  return (
    <div className="w-[315px] md:w-[1000px] backdrop-blur-lg bg-white border border-gray-200 rounded-2xl shadow-md p-3 md:p-5">
      <div className="mb-3">
        <h4 className="font-semibold">{title}</h4>

        <h6 className="text-sm text-gray-500">{subtitle}</h6>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
