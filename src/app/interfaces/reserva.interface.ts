export interface Reserva {
  nombre: string;
  email: string;
  cedula: string;
  fecha: string;
  hora: string;
  personas: number;
  vista: 'interior' | 'exterior';
  comentarios?: string;
}
