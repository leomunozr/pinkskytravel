"use client";

import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useWhatsApp } from "@/shared/hooks/useWhatsApp";
import { getTourInquiryMessage } from "../messages/whatsapp";

interface WhatsAppButtonProps extends ButtonProps {
  message?: string;
  tourTitle?: string;
  label?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  tourTitle,
  label = "Reservar por WhatsApp",
  sx,
  ...props
}) => {
  const { sendMessage, isLoading } = useWhatsApp();

  const url = tourTitle ? sendMessage(getTourInquiryMessage(tourTitle)) : "";

  return (
    <Button
      component="a"
      variant="contained"
      size="large"
      target="_blank"
      rel="noopener noreferrer"
      href={isLoading ? "" : url}
      disabled={isLoading}
      endIcon={<WhatsAppIcon />}
      sx={{
        bgcolor: "#25D366",
        color: "white",
        "&:hover": { bgcolor: "#1DA851" },
        ...sx,
      }}
      {...props}
    >
      {label}
    </Button>
  );
};
