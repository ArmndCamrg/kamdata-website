import React, { useState } from 'react';
import { useCloudFunctions, useFormValidation, useToast, ContactFormData } from '../hooks/useCloudFunctions';

interface ContactFormProps {
  defaultService?: ContactFormData['service'];
  onSuccess?: () => void;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  defaultService = 'consulta-general', 
  onSuccess,
  className = '' 
}) => {
  const { submitContactForm, isLoading } = useCloudFunctions();
  const { validateContactForm } = useFormValidation();
  const { showToast } = useToast();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    message: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    { value: 'conferencias', label: 'Conferencias - Despierta tu Genio Digital' },
    { value: 'talleres', label: 'Talleres de Transformación Digital' },
    { value: 'mentoria-grupal', label: 'Mentoría Grupal' },
    { value: 'mentoria-individual', label: 'Mentoría Individual' },
    { value: 'nexo-estrategico', label: 'Nexo Estratégico' },
    { value: 'consulta-general', label: 'Consulta General' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateContactForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
      showToast('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: defaultService,
        message: '',
        acceptTerms: false,
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      showToast('Error al enviar el mensaje. Por favor, inténtalo de nuevo.', 'error');
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <div className="text-green-600 text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          ¡Mensaje enviado correctamente!
        </h3>
        <p className="text-green-700 mb-4">
          Hemos recibido tu mensaje y nos pondremos en contacto contigo en las próximas 24 horas.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="text-red-800 font-semibold mb-2">Por favor, corrige los siguientes errores:</h4>
          <ul className="text-red-700 text-sm space-y-1">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="+1 234 567 8900"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
          Servicio de interés *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        >
          {serviceOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
        />
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="acceptTerms"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleInputChange}
          required
          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="acceptTerms" className="text-sm text-gray-700">
          Acepto los{' '}
          <a href="/terminos" className="text-blue-600 hover:text-blue-800 underline">
            términos y condiciones
          </a>{' '}
          y la{' '}
          <a href="/privacidad" className="text-blue-600 hover:text-blue-800 underline">
            política de privacidad
          </a>
          . *
        </label>
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            'Enviar Mensaje'
          )}
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        * Campos obligatorios
      </p>
    </form>
  );
};

export default ContactForm;