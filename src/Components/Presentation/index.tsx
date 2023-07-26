export const Presentation = () => {
  return (
    <section className="relative bg-presentation w-full object-cover -z-20 ">
      <div
        className="absolute h-full w-full backdrop-blur-sm backdrop-opacity-100
       bg-white/30  top-0 left-0 -z-10"
      />
      <div className="flex flex-col gap-6 ">
        <h1 className="text-heading-3 font-600 ">
          Conheça o trabalho da audio Music
        </h1>
        <p className="text-body-1 md:max-w-[50%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
      </div>
    </section>
  );
};
