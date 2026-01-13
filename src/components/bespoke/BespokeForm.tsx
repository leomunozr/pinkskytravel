'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
  // Step 1: Contact
  name: string;
  email: string;
  // Step 2: Destination
  destination: string;
  // Step 3: Dates
  startDate: string;
  endDate: string;
  // Step 4: Interests
  vibe: string;
  // Step 5: Budget/Pax
  budget: string;
  travelers: number;
};

const steps = [
  'Contacto',
  'Destino',
  'Fechas',
  'Intereses',
  'Detalles',
  'Confirmar'
];

const BespokeForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, trigger, getValues, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // TODO: INTEGRACIÓN CON GOOGLE SHEETS
    // 1. Crear una API Route en src/app/api/submit-lead/route.ts
    // 2. Usar 'googleapis' y una Service Account para autenticarse.
    // 3. Enviar 'data' a la hoja de cálculo.
    // 4. Manejar errores y mostrar mensaje de éxito.

    console.log('Form Data:', data);
    alert('¡Gracias! Hemos recibido tu solicitud. (Simulación)');
  };

  const nextStep = async () => {
    let isValid = false;
    // Validate current step fields before proceeding
    if (currentStep === 0) isValid = await trigger(['name', 'email']);
    if (currentStep === 1) isValid = await trigger('destination');
    if (currentStep === 2) isValid = await trigger(['startDate', 'endDate']);
    if (currentStep === 3) isValid = await trigger('vibe');
    if (currentStep === 4) isValid = await trigger(['budget', 'travelers']);

    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <span
              key={index}
              className={`text-xs font-bold ${index <= currentStep ? 'text-pink-dusk' : 'text-gray-300'}`}
            >
              {step}
            </span>
          ))}
        </div>
        <div className="h-2 bg-gray-100 rounded-full">
          <div
            className="h-full bg-pink-dusk rounded-full transition-all duration-300"
            style={{ width: `${((currentStep) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Step 1: Contact */}
        {currentStep === 0 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-2xl font-bold text-midnight-blue">¡Hola! Empecemos por conocerte.</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre Completo</label>
              <input
                {...register("name", { required: "El nombre es obligatorio" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-dusk focus:ring focus:ring-pink-200 p-3 border"
                placeholder="Tu nombre"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                {...register("email", { required: "El email es obligatorio", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-dusk focus:ring focus:ring-pink-200 p-3 border"
                placeholder="tucorreo@ejemplo.com"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
          </div>
        )}

        {/* Step 2: Destination */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-2xl font-bold text-midnight-blue">¿A dónde sueñas ir?</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Destino o Región</label>
              <input
                {...register("destination", { required: "Por favor indica un destino" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-dusk focus:ring focus:ring-pink-200 p-3 border"
                placeholder="Ej. Oaxaca, Chiapas, Playa del Carmen..."
              />
              {errors.destination && <span className="text-red-500 text-sm">{errors.destination.message}</span>}
            </div>
          </div>
        )}

        {/* Step 3: Dates */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-2xl font-bold text-midnight-blue">¿Cuándo te gustaría viajar?</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Fecha Inicio (Aprox)</label>
                <input
                  type="date"
                  {...register("startDate", { required: "Requerido" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-dusk focus:ring focus:ring-pink-200 p-3 border"
                />
                {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Fecha Fin (Aprox)</label>
                <input
                  type="date"
                  {...register("endDate", { required: "Requerido" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-dusk focus:ring focus:ring-pink-200 p-3 border"
                />
                {errors.endDate && <span className="text-red-500 text-sm">{errors.endDate.message}</span>}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Interests */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-2xl font-bold text-midnight-blue">¿Qué vibe buscas?</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Selecciona tu estilo</label>
              <select
                {...register("vibe", { required: "Selecciona una opción" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-dusk focus:ring focus:ring-pink-200 p-3 border"
              >
                <option value="">Selecciona...</option>
                <option value="relax">Relax Total (Playa/Spa)</option>
                <option value="adventure">Aventura y Naturaleza</option>
                <option value="culture">Cultura y Pueblos Mágicos</option>
                <option value="foodie">Gastronomía</option>
                <option value="mix">Un poco de todo</option>
              </select>
              {errors.vibe && <span className="text-red-500 text-sm">{errors.vibe.message}</span>}
            </div>
          </div>
        )}

        {/* Step 5: Budget/Pax */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-2xl font-bold text-midnight-blue">Últimos detalles</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Número de viajeros</label>
              <input
                type="number"
                min="1"
                {...register("travelers", { required: "Requerido", min: 1 })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-dusk focus:ring focus:ring-pink-200 p-3 border"
              />
              {errors.travelers && <span className="text-red-500 text-sm">{errors.travelers.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Presupuesto aproximado (MXN)</label>
              <select
                {...register("budget", { required: "Requerido" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-dusk focus:ring focus:ring-pink-200 p-3 border"
              >
                <option value="">Selecciona rango...</option>
                <option value="low">Económico ($10k - $20k)</option>
                <option value="medium">Standard ($20k - $40k)</option>
                <option value="high">Premium (+$40k)</option>
              </select>
              {errors.budget && <span className="text-red-500 text-sm">{errors.budget.message}</span>}
            </div>
          </div>
        )}

        {/* Step 6: Review */}
        {currentStep === 5 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-2xl font-bold text-midnight-blue">¿Todo listo?</h2>
            <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 space-y-2">
              <p><strong>Nombre:</strong> {getValues('name')}</p>
              <p><strong>Destino:</strong> {getValues('destination')}</p>
              <p><strong>Fechas:</strong> {getValues('startDate')} al {getValues('endDate')}</p>
              <p><strong>Estilo:</strong> {getValues('vibe')}</p>
              <p><strong>Viajeros:</strong> {getValues('travelers')}</p>
            </div>
            <p className="text-xs text-gray-500">Al enviar, nuestros agentes diseñarán una propuesta única para ti.</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t mt-6">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            >
              Atrás
            </button>
          ) : <div></div>}

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-pink-dusk text-white rounded hover:bg-opacity-90"
            >
              Siguiente
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-midnight-blue text-white rounded hover:bg-opacity-90 font-bold"
            >
              Enviar Solicitud
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BespokeForm;
