'use client'
import Button, { ButtonProps } from '@mui/material/Button'
import Link from 'next/link'

interface LinkButtonProps extends ButtonProps {
  href: string
}

export default function LinkButton({ href, ...props }: LinkButtonProps) {
  return <Button component={Link} href={href} {...props} />
}
