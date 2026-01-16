import { useState, useEffect, useCallback } from 'react';
import { client } from '@/shared/api/sanity/client';
import { GET_WHATSAPP_NUMBER } from '@/shared/api/sanity/queries';

export const useWhatsApp = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNumber = async () => {
      try {
        const number = await client.fetch<string>(GET_WHATSAPP_NUMBER);
        setPhoneNumber(number || "+525536555990");
      } catch (error) {
        console.error("Failed to fetch WhatsApp number", error);
        setPhoneNumber("+525536555990");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNumber();
  }, []);

  const sendMessage = useCallback((message: string) => {
    if (!phoneNumber) return '';
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, [phoneNumber]);

  return { sendMessage,  isLoading };
};
