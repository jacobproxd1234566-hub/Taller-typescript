interface Cliente {
    turno: number;
    estado: 'esperando' | 'atendido';
    llegada: number; // timestamp
    atencion?: number; // timestamp
}

let fila: Cliente[] = [];
let contadorTurnos = 1;

const llegadaCliente = () => {
    const nuevo: Cliente = {
        turno: contadorTurnos++,
        estado: 'esperando',
        llegada: Date.now()
    };
    fila.push(nuevo); // [cite: 132]
};

const atenderCliente = () => {
    const cliente = fila.find(c => c.estado === 'esperando'); // [cite: 133]
    if (cliente) {
        cliente.estado = 'atendido';
        cliente.atencion = Date.now();
        const espera = (cliente.atencion - cliente.llegada) / 1000;
        console.log(`Cliente ${cliente.turno} esperó ${espera} segundos.`); // [cite: 134]
    }
};