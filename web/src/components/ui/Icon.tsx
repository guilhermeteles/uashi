import { Icon as Iconify, type IconProps as IconifyProps } from '@iconify/react';

/**
 * Wrapper fino em torno do @iconify/react.
 * O protótipo usa o set `hugeicons:*`, então mantemos a mesma nomenclatura.
 */
export type IconProps = IconifyProps;

export function Icon(props: IconProps) {
  return <Iconify {...props} />;
}
