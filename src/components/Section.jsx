import Container from './Container'

export default function Section({ 
  children, 
  className = '', 
  containerSize = 'default',
  background = 'default',
  padding = 'default',
  ...props 
}) {
  const backgroundClasses = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-gray-50 to-white',
    primary: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700',
    dark: 'bg-gray-900'
  }

  const paddingClasses = {
    none: '',
    sm: 'py-12',
    default: 'py-16 lg:py-20',
    lg: 'py-20 lg:py-24',
    xl: 'py-24 lg:py-32'
  }

  return (
    <section 
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}
