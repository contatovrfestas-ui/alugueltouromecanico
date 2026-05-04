/**
 * Helpers pra montar URLs de CTA WhatsApp consistentes.
 */

const WA_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '5521971542005';
const WA_DEFAULT_MSG =
  import.meta.env.PUBLIC_WHATSAPP_DEFAULT_MSG ||
  'Olá, quero orçamento de touro mecânico';

export function whatsappUrl(message?: string): string {
  const text = encodeURIComponent(message || WA_DEFAULT_MSG);
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

export function whatsappUrlForPagina(opts: {
  bairro?: string;
  evento?: string;
  contexto?: string;
}): string {
  const partes = ['Olá, quero orçamento de touro mecânico'];
  if (opts.evento) partes.push(`para ${opts.evento}`);
  if (opts.bairro) partes.push(`em ${opts.bairro}`);
  if (opts.contexto) partes.push(opts.contexto);
  return whatsappUrl(partes.join(' '));
}
