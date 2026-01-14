'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

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
    console.log('Form Data:', data);
    alert('¡Gracias! Hemos recibido tu solicitud. (Simulación)');
  };

  const nextStep = async () => {
    let isValid = false;
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

  // Helper to register fields nicely with MUI
  const registerField = (name: keyof FormInputs, options?: any) => {
    const { ref, ...rest } = register(name, options);
    return { inputRef: ref, ...rest };
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 'sm', mx: 'auto' }}>
      <Stepper activeStep={currentStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ minHeight: 300 }}>
          {/* Step 1: Contact */}
          {currentStep === 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h5" gutterBottom color="primary.main" fontWeight="bold">
                ¡Hola! Empecemos por conocerte.
              </Typography>
              <TextField
                label="Nombre Completo"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                {...registerField("name", { required: "El nombre es obligatorio" })}
              />
              <TextField
                label="Email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                {...registerField("email", {
                    required: "El email es obligatorio",
                    pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }
                })}
              />
            </Box>
          )}

          {/* Step 2: Destination */}
          {currentStep === 1 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h5" gutterBottom color="primary.main" fontWeight="bold">
                ¿A dónde sueñas ir?
              </Typography>
              <TextField
                label="Destino o Región"
                fullWidth
                placeholder="Ej. Oaxaca, Chiapas, Playa del Carmen..."
                error={!!errors.destination}
                helperText={errors.destination?.message}
                {...registerField("destination", { required: "Por favor indica un destino" })}
              />
            </Box>
          )}

          {/* Step 3: Dates */}
          {currentStep === 2 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h5" gutterBottom color="primary.main" fontWeight="bold">
                ¿Cuándo te gustaría viajar?
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                  label="Fecha Inicio (Aprox)"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.startDate}
                  helperText={errors.startDate?.message}
                  {...registerField("startDate", { required: "Requerido" })}
                />
                <TextField
                  label="Fecha Fin (Aprox)"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.endDate}
                  helperText={errors.endDate?.message}
                  {...registerField("endDate", { required: "Requerido" })}
                />
              </Box>
            </Box>
          )}

          {/* Step 4: Interests */}
          {currentStep === 3 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h5" gutterBottom color="primary.main" fontWeight="bold">
                ¿Qué vibe buscas?
              </Typography>
              <TextField
                select
                label="Selecciona tu estilo"
                fullWidth
                error={!!errors.vibe}
                helperText={errors.vibe?.message}
                defaultValue="" // Important for select
                {...registerField("vibe", { required: "Selecciona una opción" })}
              >
                <MenuItem value="relax">Relax Total (Playa/Spa)</MenuItem>
                <MenuItem value="adventure">Aventura y Naturaleza</MenuItem>
                <MenuItem value="culture">Cultura y Pueblos Mágicos</MenuItem>
                <MenuItem value="foodie">Gastronomía</MenuItem>
                <MenuItem value="mix">Un poco de todo</MenuItem>
              </TextField>
            </Box>
          )}

          {/* Step 5: Budget/Pax */}
          {currentStep === 4 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h5" gutterBottom color="primary.main" fontWeight="bold">
                Últimos detalles
              </Typography>
              <TextField
                label="Número de viajeros"
                type="number"
                fullWidth
                error={!!errors.travelers}
                helperText={errors.travelers?.message}
                {...registerField("travelers", { required: "Requerido", min: 1 })}
              />
              <TextField
                select
                label="Presupuesto aproximado (MXN)"
                fullWidth
                defaultValue=""
                error={!!errors.budget}
                helperText={errors.budget?.message}
                {...registerField("budget", { required: "Requerido" })}
              >
                <MenuItem value="low">Económico ($10k - $20k)</MenuItem>
                <MenuItem value="medium">Standard ($20k - $40k)</MenuItem>
                <MenuItem value="high">Premium (+$40k)</MenuItem>
              </TextField>
            </Box>
          )}

          {/* Step 6: Review */}
          {currentStep === 5 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h5" gutterBottom color="primary.main" fontWeight="bold">
                ¿Todo listo?
              </Typography>
              <Paper variant="outlined" sx={{ p: 2, bgcolor: 'grey.50' }}>
                <Typography variant="body2"><strong>Nombre:</strong> {getValues('name')}</Typography>
                <Typography variant="body2"><strong>Destino:</strong> {getValues('destination')}</Typography>
                <Typography variant="body2"><strong>Fechas:</strong> {getValues('startDate')} al {getValues('endDate')}</Typography>
                <Typography variant="body2"><strong>Estilo:</strong> {getValues('vibe')}</Typography>
                <Typography variant="body2"><strong>Viajeros:</strong> {getValues('travelers')}</Typography>
              </Paper>
              <Typography variant="caption" color="text.secondary">
                Al enviar, nuestros agentes diseñarán una propuesta única para ti.
              </Typography>
            </Box>
          )}
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
          <Button
            disabled={currentStep === 0}
            onClick={prevStep}
            variant="outlined"
          >
            Atrás
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={nextStep}
              color="secondary"
            >
              Siguiente
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Enviar Solicitud
            </Button>
          )}
        </Box>
      </form>
    </Paper>
  );
};

export default BespokeForm;
