import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'bordered';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'light',
  className = '',
  children,
  style,
  ...props
}) => {
  const isDark = variant === 'dark';
  const isBordered = variant === 'bordered';

  return (
    <div
      className={`rounded-xl transition-all duration-200 ${
        isDark
          ? 'bg-gray-900 text-white border border-gray-800'
          : isBordered
          ? 'bg-white text-gray-900 border-2 border-gray-200'
          : 'bg-white text-gray-900 shadow-md border border-gray-100'
      } p-6 ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`mb-4 flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <h3 className={`text-lg font-bold ${className}`} {...props}>
    {children}
  </h3>
);

export const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`text-sm ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 ${className}`} {...props}>
    {children}
  </div>
);
