interface Pelicula {
    id: number;
    titulo: string;
    horarios: string[];
    asientosVendidos: number;
}

const PRECIOS = { Adulto: 10, Estudiante: 7, Niño: 5 }; // [cite: 157, 158, 159]

const validarVenta = (peli: Pelicula, cantidad: number): boolean => {
    const CAPACIDAD = 100; // [cite: 155]
    return (peli.asientosVendidos + cantidad) <= CAPACIDAD; // [cite: 165]
};

// Reporte de ocupación [cite: 168]
const reporteOcupacion = (peliculas: Pelicula[]) => {
    return peliculas.map(p => ({
        titulo: p.titulo,
        porcentaje: (p.asientosVendidos / 100) * 100 // [cite: 174]
    })).filter(res => res.porcentaje >= 70); // [cite: 175]
};