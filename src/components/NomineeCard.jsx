function NomineeCard({ image, name, department }) {
  return (
    <div className="flex flex-row gap-3 backdrop-blur-lg bg-amber-100 border border-amber-100 rounded-md shadow-md p-3">
      <div>
        <img
          src={image}
          alt={name}
          className="filter drop-shadow-[0_0_0.25rem_#2b2b2b] rounded-full w-12 md:w-20 bg-[#2b2b2b] border-2 border-amber-400"
        />
      </div>

      <div className="flex flex-col justify-center items-start">
        <h4 className="font-semibold text-sm md:text-xl">{name}</h4>

        <h6 className="text-xs">{department}</h6>
      </div>
    </div>
  );
}

export default NomineeCard;
