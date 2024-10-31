// Funcion para formatear la fecha
export function formatDate(date: Date) {
    const newDate = new Date(date)
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return newDate.toLocaleDateString('es-ES', options)
}
