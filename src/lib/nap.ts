/**
 * Name / Address / Phone — dados do negócio.
 * Centralizar aqui pra schema JSON-LD, footer, contato — coerência absoluta.
 */

export const NAP = {
  name: import.meta.env.PUBLIC_BUSINESS_NAME || 'Aluguel Touro Mecânico',
  cnpj: import.meta.env.PUBLIC_BUSINESS_CNPJ || '',
  street: import.meta.env.PUBLIC_BUSINESS_ADDRESS_STREET || '',
  city: import.meta.env.PUBLIC_BUSINESS_ADDRESS_CITY || 'Rio de Janeiro',
  state: import.meta.env.PUBLIC_BUSINESS_ADDRESS_STATE || 'RJ',
  cep: import.meta.env.PUBLIC_BUSINESS_ADDRESS_CEP || '',
  email: import.meta.env.PUBLIC_BUSINESS_EMAIL || 'contato@alugueltouromecanico.com.br',
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || '5521971542005',
  fundadoEm: 2024,
  url: 'https://alugueltouromecanico.com.br',
} as const;

export const SITE = {
  title: 'Aluguel Touro Mecânico | Rio de Janeiro',
  defaultDescription:
    'Aluguel de touro mecânico no Rio de Janeiro com laudo INMETRO, seguro de evento e operador profissional. Festa junina, formatura, corporativo e aniversário em todos os bairros.',
  defaultOgImage: '/images/og/default.jpg',
  twitterHandle: '',
  locale: 'pt-BR',
} as const;
