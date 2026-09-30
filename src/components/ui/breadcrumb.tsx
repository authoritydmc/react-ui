import React from 'react';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
  children: React.ReactNode;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ separator = '/', className = '', children, ...props }, ref) => {
    const items = React.Children.toArray(children);

    return (
      <nav ref={ref} aria-label="Breadcrumb" className={`flex ${className}`} {...props}>
        <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm text-gray-600 dark:text-gray-300">
          {items.map((child, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <li aria-hidden="true" className="text-gray-400 dark:text-gray-600 select-none">
                  {separator}
                </li>
              )}
              {child}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
);
Breadcrumb.displayName = 'Breadcrumb';

export interface BreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  isCurrent?: boolean;
}

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ isCurrent = false, className = '', children, ...props }, ref) => (
    <li
      ref={ref}
      aria-current={isCurrent ? 'page' : undefined}
      className={`inline-flex items-center ${
        isCurrent
          ? 'font-semibold text-gray-900 dark:text-white pointer-events-none'
          : 'font-medium'
      } ${className}`}
      {...props}
    >
      {children}
    </li>
  )
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

export interface BreadcrumbLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: React.ElementType;
}

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ as: Component = 'a', className = '', children, ...props }, ref) => (
    <Component
      ref={ref}
      className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbEllipsis: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className = '',
  ...props
}) => (
  <span
    aria-hidden="true"
    className={`flex h-7 w-7 items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer ${className}`}
    {...props}
  >
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
    <span className="sr-only">More</span>
  </span>
);
