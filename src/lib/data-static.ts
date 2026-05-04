/**
 * Re-export central — data-source.ts importa daqui.
 * Dados base (bairros, eventos, modelos, espaços) ficam em data-base.ts
 * pra evitar circular import com a factory de páginas.
 */

export {
  BAIRROS_STATIC, EVENTOS_STATIC, MODELOS_STATIC, ESPACOS_STATIC,
} from './data-base';

// Página piloto (versão revisada com 10 ajustes do seo-writer)
export { PAGINA_TIJUCA_FESTA_JUNINA } from './data-pagina-tijuca-festa-junina';

// Páginas geo populadas — uma por evento prioritário
export { PAGINAS_FESTA_JUNINA } from './data-paginas-festa-junina';
export { PAGINAS_FORMATURA } from './data-paginas-formatura';
export { PAGINAS_ANIVERSARIO_INFANTIL } from './data-paginas-aniversario-infantil';
