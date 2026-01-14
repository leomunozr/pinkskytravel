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
  // Step 2: destino
  destino: string;
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
    if (currentStep === 1) isValid = await trigger('destino');
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
    <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, maxWidth: 'md', mx: 'auto', border: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ width: '100%', mb: 6 }}>
        <Stepper activeStep={currentStep} alternativeLabel sx={{
            '& .MuiStepConnector-line': { borderColor: 'divider' },
            '& .MuiStepIcon-root': { color: 'grey.300' },
            '& .MuiStepIcon-root.Mui-active': { color: 'secondary.main' },
            '& .MuiStepIcon-root.Mui-completed': { color: 'primary.main' },
        }}>
            {steps.map((label) => (
            <Step key={label}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ minHeight: 320, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Step 1: Contact */}
          {currentStep === 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 'sm', mx: 'auto', width: '100%' }}>
              <Typography variant="h4" gutterBottom color="text.primary" fontWeight={700} align="center">
                ¡Hola! Empecemos por conocerte.
              </Typography>
              <TextField
                label="Nombre Completo"
                fullWidth
                variant="outlined"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...registerField("name", { required: "El nombre es obligatorio" })}
              />
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...registerField("email", {
                    required: "El email es obligatorio",
                    pattern: { value: /^\S+@\S+$/i, message: "Email inválido" }
                })}
              />
            </Box>
          )}

          {/* Step 2: destino */}
          {currentStep === 1 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 'sm', mx: 'auto', width: '100%' }}>
              <Typography variant="h4" gutterBottom color="text.primary" fontWeight={700} align="center">
                ¿A dónde sueñas ir?
              </Typography>
              <TextField
                label="Destino o Región"
                fullWidth
                placeholder="Ej. Oaxaca, Chiapas, Playa del Carmen..."
                error={!!errors.destino}
                helperText={errors.destino?.message}
                {...registerField("destino", { required: "Por favor indica un destino" })}
              />
            </Box>
          )}

          {/* Step 3: Dates */}
          {currentStep === 2 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 'sm', mx: 'auto', width: '100%' }}>
              <Typography variant="h4" gutterBottom color="text.primary" fontWeight={700} align="center">
                ¿Cuándo te gustaría viajar?
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 'sm', mx: 'auto', width: '100%' }}>
              <Typography variant="h4" gutterBottom color="text.primary" fontWeight={700} align="center">
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 'sm', mx: 'auto', width: '100%' }}>
              <Typography variant="h4" gutterBottom color="text.primary" fontWeight={700} align="center">
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 'sm', mx: 'auto', width: '100%' }}>
              <Typography variant="h4" gutterBottom color="text.primary" fontWeight={700} align="center">
                ¿Todo listo?
              </Typography>
              <Paper variant="outlined" sx={{ p: 3, bgcolor: 'background.default', borderRadius: 2 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                    <Typography variant="body2" color="text.secondary">Nombre</Typography>
                    <Typography variant="body1" fontWeight={500}>{getValues('name')}</Typography>

                    <Typography variant="body2" color="text.secondary">Destino</Typography>
                    <Typography variant="body1" fontWeight={500}>{getValues('destino')}</Typography>

                    <Typography variant="body2" color="text.secondary">Fechas</Typography>
                    <Typography variant="body1" fontWeight={500}>{getValues('startDate')} al {getValues('endDate')}</Typography>

                    <Typography variant="body2" color="text.secondary">Estilo</Typography>
                    <Typography variant="body1" fontWeight={500}>{getValues('vibe')}</Typography>
                </Box>
              </Paper>
              <Typography variant="caption" color="text.secondary" align="center">
                Al enviar, nuestros agentes diseñarán una propuesta única para ti.
              </Typography>
            </Box>
          )}
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 6 }}>
          <Button
            disabled={currentStep === 0}
            onClick={prevStep}
            variant="text"
            color="inherit"
          >
            Atrás
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={nextStep}
              color="primary"
              disableElevation
              sx={{ px: 4, py: 1.5 }}
            >
              Siguiente
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disableElevation
              sx={{ px: 4, py: 1.5, fontWeight: 700 }}
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
