import '../globals.css'
export const metadata = {
  title: 'EduTime - Horarios',
  description: 'Es una Base de Datos que permite organizar de forma eficiente y modificable todos los horarios escolares de una Escuela, indicando profesores, aulas, horarios y cursos.',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
