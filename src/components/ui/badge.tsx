import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<string, { bg: string; text: string; dot: string }> = {
  primary: { bg: '#ebf5ff', text: '#1e40af', dot: '#3b82f6' },
  success: { bg: '#def7ec', text: '#03543f', dot: '#10b981' },
  warning: { bg: '#fef08a', text: '#713f12', dot: '#f59e0b' },
  danger: { bg: '#fde8e8', text: '#9b1c1c', dot: '#ef4444' },
  info: { bg: '#e1effe', text: '#1e429f', dot: '#60a5fa' },
  neutral: { bg: '#f3f4f6', text: '#374151', dot: '#9ca3af' },
};

const sizeStyles: Record<string, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
  lg: 'text-base px-3 py-1.5',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'sm',
  dot = false,
  children,
  className = '',
  style,
  ...props
}) => {
  const styles = variantStyles[variant] || variantStyles.primary;
  const sizeClass = sizeStyles[size] || sizeStyles.sm;

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${sizeClass} ${className}`}
      style={{
        backgroundColor: styles.bg,
        color: styles.text,
        ...style,
      }}
      {...props}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full mr-1.5"
          style={{ backgroundColor: styles.dot }}
        />
      )}
      {children}
    </span>
  );
};

export default Badge;
