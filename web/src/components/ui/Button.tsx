import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'gold';

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

type ButtonAsButton = CommonProps & {
  as?: 'button';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

type ButtonAsLink = CommonProps & {
  as: 'a';
  href: string;
};

type ButtonAsRouterLink = CommonProps & {
  as: 'link';
  to: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink;

function classes(variant: Variant, fullWidth?: boolean, extra?: string) {
  return [styles.btn, styles[variant], fullWidth ? styles.full : '', extra ?? '']
    .filter(Boolean)
    .join(' ');
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, className, fullWidth } = props;
  const cls = classes(variant, fullWidth, className);

  if (props.as === 'a') {
    return (
      <a href={props.href} className={cls}>
        {children}
      </a>
    );
  }
  if (props.as === 'link') {
    return (
      <Link to={props.to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={cls}>
      {children}
    </button>
  );
}
