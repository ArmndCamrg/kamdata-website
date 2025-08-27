import { useState } from 'react';

// Tipos para los formularios
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: 'conferencias' | 'talleres' | 'mentoria-grupal' | 'mentoria-individual' | 'nexo-estrategico' | 'consulta-general';
  message: string;
  acceptTerms: boolean;
}

export interface NewsletterData {
  email: string;
  source?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: string[];
  contactId?: string;
  subscriptionId?: string;
}

// Configuración de la API
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://us-central1-kamdata-website.cloudfunctions.net'
  : 'http://localhost:5001/kamdata-website/us-central1';

export const useCloudFunctions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Función para enviar formulario de contacto
  const submitContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/processContactForm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el formulario');
      }

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para suscribirse al newsletter
  const subscribeToNewsletter = async (newsletterData: NewsletterData): Promise<ApiResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/subscribeNewsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newsletterData),
      });

      const result: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al suscribirse al newsletter');
      }

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para obtener estadísticas (solo para admin)
  const getContactStats = async (): Promise<any> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/getContactStats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // En una implementación real, aquí irían los headers de autenticación
          // 'Authorization': `Bearer ${authToken}`
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al obtener estadísticas');
      }

      return result.data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    submitContactForm,
    subscribeToNewsletter,
    getContactStats,
  };
};

// Hook para validación de formularios
export const useFormValidation = () => {
  const validateContactForm = (data: Partial<ContactFormData>): string[] => {
    const errors: string[] = [];

    if (!data.name || data.name.trim().length < 2) {
      errors.push('El nombre debe tener al menos 2 caracteres');
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Ingresa un email válido');
    }

    if (data.phone && (data.phone.length < 10 || data.phone.length > 20)) {
      errors.push('El teléfono debe tener entre 10 y 20 caracteres');
    }

    if (!data.service) {
      errors.push('Selecciona un servicio');
    }

    if (!data.message || data.message.trim().length < 10) {
      errors.push('El mensaje debe tener al menos 10 caracteres');
    }

    if (!data.acceptTerms) {
      errors.push('Debes aceptar los términos y condiciones');
    }

    return errors;
  };

  const validateNewsletterForm = (data: Partial<NewsletterData>): string[] => {
    const errors: string[] = [];

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Ingresa un email válido');
    }

    return errors;
  };

  return {
    validateContactForm,
    validateNewsletterForm,
  };
};

// Hook para notificaciones toast
export const useToast = () => {
  const [toasts, setToasts] = useState<Array<{
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
  }>>([]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString();
    const newToast = { id, message, type };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return {
    toasts,
    showToast,
    removeToast,
  };
};