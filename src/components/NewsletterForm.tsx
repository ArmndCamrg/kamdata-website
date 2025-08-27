import React, { useState } from 'react';
import { useCloudFunctions, useFormValidation, useToast, NewsletterData } from '../hooks/useCloudFunctions';

interface NewsletterFormProps {
  source?: string;
  onSuccess?: () => void;
  className?: string;
  placeholder?: string;
  buttonText?: string;
  showLabels?: boolean;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  source = 'website',
  onSuccess,
  className = '',
  placeholder = 'Tu email aquí...',
  buttonText = 'Suscribirse',
  showLabels = true
}) => {
  const { subscribeToNewsletter, isLoading } = useCloudFunctions();
  const { validateNewsletterForm } = useFormValidation();
  const { showToast } = useToast();

  const [formData, setFormData] = useState<NewsletterData>({
    email: '',
    source,
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      email: value,
    }));

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateNewsletterForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await subscribeToNewsletter(formData);
      setIsSubmitted(true);
      showToast('¡Te has suscrito correctamente al newsletter!', 'success');
      
      // Reset form
      setFormData({
        email: '',
        source,
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes('ya está suscrito')) {
        showToast('Este email ya está suscrito al newsletter.', 'info');
      } else {
        showToast('Error al suscribirse. Por favor, inténtalo de nuevo.', 'error');
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-4 text-center ${className}`}>
        <div className="text-green-600 text-2xl mb-2">✓</div>
        <h4 className="text-lg font-semibold text-green-800 mb-1">
          ¡Suscripción exitosa!
        </h4>
        <p className="text-green-700 text-sm mb-3">
          Recibirás nuestros últimos insights en tu email.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-green-600 hover:text-green-800 text-sm underline"
        >
          Suscribir otro email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
          <ul className="text-red-700 text-sm space-y-1">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          {showLabels && (
            <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
          )}
          <input
            type="email"
            id="newsletter-email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder={placeholder}
          />
        </div>
        
        <div className="flex-shrink-0">
          {showLabels && (
            <div className="block text-sm font-medium text-transparent mb-2">
              &nbsp;
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : (
              buttonText
            )}
          </button>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Al suscribirte, aceptas recibir emails de Kamdata. Puedes cancelar tu suscripción en cualquier momento.
      </p>
    </form>
  );
};

export default NewsletterForm;