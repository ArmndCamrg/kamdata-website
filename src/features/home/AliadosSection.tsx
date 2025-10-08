import React from 'react';

const AliadosSection: React.FC = () => {
  // Movemos la función aquí porque solo se usa para los logos de los aliados
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
    if (nextElement) {
      nextElement.style.display = 'block';
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Nuestros Aliados</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center">
              <div className="w-56 h-32 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/assets/logos/ICEC_GTO_logo.png" alt="Logo de Instituto de Innovación, aliado de Kamdata" className="w-48 h-24 object-contain" onError={handleImageError} />
              </div>
              <p className="text-sm text-gray-600 font-medium">Instituto de Innovación</p>
            </div>
            <div className="text-center">
              <div className="w-56 h-32 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/assets/logos/CE_gto_logo.png" alt="Logo de Casa del Emprendimiento, aliado de Kamdata" className="w-48 h-24 object-contain" onError={handleImageError} />
              </div>
              <p className="text-sm text-gray-600 font-medium">Casa del Emprendimiento</p>
            </div>
            <div className="text-center">
              <div className="w-56 h-32 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/assets/logos/TH_logo.png" alt="Logo de Treehouse, aliado de Kamdata" className="w-48 h-24 object-contain" onError={handleImageError} />
              </div>
              <p className="text-sm text-gray-600 font-medium">Treehouse</p>
            </div>
            <div className="text-center">
              <div className="w-56 h-32 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src="/assets/logos/eviordev_logo.png" alt="Logo de E-vior Developments, aliado de Kamdata" className="w-48 h-24 object-contain" onError={handleImageError} />
              </div>
              <p className="text-sm text-gray-600 font-medium">E-vior Developments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AliadosSection;