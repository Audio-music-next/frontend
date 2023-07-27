import React from "react";

export const Presentation = () => {
  return (
    <React.Fragment>
      <div
        className="absolute h-full w-full backdrop-blur-sm backdrop-opacity-100
       bg-white/30  top-0 left-0 -z-10"
      />
      <div className="flex flex-col gap-6 text-gray-0 ">
        <h1 className="text-heading-3 font-600 ">
          Bem-vindo ao Palco da Essência Sonora!
        </h1>
        <p className="text-body-1 text-justify lg:max-w-[50%]">
          Seja bem-vindo(a) à Essência Sonora, a produtora musical que traz à
          vida o poderoso universo do heavy metal e do rock em sua forma mais
          autêntica! Somos apaixonados por música e temos o compromisso de criar
          jingles e produções musicais que elevam o espírito e desencadeiam
          emoções intensas. Junte-se a nós nesta jornada sonora e vamos fazer
          sua música ressoar nos corações dos apaixonados por esse universo
          singular.
        </p>
      </div>
    </React.Fragment>
  );
};
