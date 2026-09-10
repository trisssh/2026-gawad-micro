function NomineeCard({ image, name, department }) {
  return (
    <div
      className="flex items-center gap-3 backdrop-blur-lg bg-amber-100
                 border border-amber-200 rounded-xl shadow-md p-3
                 w-full h-full
                 transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg"
    >
      <img
        src={image}
        alt={name}
        className="flex-shrink-0 filter drop-shadow-[0_0_0.25rem_#2b2b2b]
                   rounded-full w-12 h-12 md:w-20 md:h-20
                   object-cover bg-[#2b2b2b] border-2 border-amber-400"
      />

      <div className="flex flex-col justify-center min-w-0 flex-1">
        <h4
          className="font-semibold text-sm md:text-xl leading-tight line-clamp-2 break-words"
          title={name}
        >
          {name}
        </h4>
        <h6
          className="text-xs md:text-sm text-neutral-600 truncate"
          title={department}
        >
          {department}
        </h6>
      </div>
    </div>
  );
}

export default NomineeCard;
