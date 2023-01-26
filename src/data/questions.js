import { uuid } from '../utils';

const questions = [
    {
        id: uuid(),
        text: 'Las tres dimensiones de COBIT son:',
        is_open: true,
        selected_answer_id: null,
        answers: [
            {
                id: uuid(),
                text: 'Procesos, Recursos de TI, y Criterios de Información',
                correct: true,
            },
            {
                id: uuid(),
                text: 'Dominio, Procesos, y Control',
                correct: false,
            },
            {
                id: uuid(),
                text: 'Planificación, Implementación, Entrega y Soporte de TI',
                correct: false,
            },
            {
                id: uuid(),
                text: 'Dominios, Recursos de TI, y Criterios de Información',
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        text: 'Cuál de los siguientes activos informáticos tiene mayor valor para una empresa:',
        is_open: false,
        selected_answer_id: null,
        answers: [
            {
                id: uuid(),
                text: 'Servidores',
                correct: false,
            },
            {
                id: uuid(),
                text: 'Información almacenada',
                correct: true,
            },
            {
                id: uuid(),
                text: 'Software y hardware',
                correct: false,
            },
            {
                id: uuid(),
                text: 'Equipamiento de Red',
                correct: false,
            },
            {
                id: uuid(),
                text: 'Personal',
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        text: 'Un principio de la auditoria operacional utilizada en la auditoria de sistemas es:',
        is_open: false,
        selected_answer_id: null,
        answers: [
            {
                id: uuid(),
                text: 'La exactitud de los resultados del sistema',
                correct: false,
            },
            {
                id: uuid(),
                text: 'La oportunidad de los datos que presenta un sistema',
                correct: false,
            },
            {
                id: uuid(),
                text: 'La eficiencia operacional de usuarios y administradores de TI.',
                correct: true,
            },
            {
                id: uuid(),
                text: 'La protección de los activos informáticos',
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        text: 'Desde el punto de vista de la jerarquía que ocupan en una organización, un sistema de control gerencial permite',
        answers: [
            { id: uuid(), text: 'Operación diaria', correct: false },
            { id: uuid(), text: 'Planeamiento táctico', correct: true },
            {
                id: uuid(),
                text: 'Planeamiento estratégico a largo plazo',
                correct: false,
            },
            { id: uuid(), text: 'Ninguna', correct: false },
        ],
    },
    {
        id: uuid(),
        text: 'Cuál de los siguientes modelos podría establecerse antes de usar COBIT en una empresa considerando que COBIT esta mas orientado al control',
        answers: [
            { id: uuid(), text: 'ITIL', correct: true },
            { id: uuid(), text: 'ISO27001', correct: false },
            { id: uuid(), text: 'COSO', correct: false },
            { id: uuid(), text: 'ISO27002', correct: false },
        ],
    },
    {
        id: uuid(),
        text: 'En cuanto a las normas generales para hacer auditorías, esta la de “Relación Organizativa”, esta se refiere a:',
        answers: [
            {
                id: uuid(),
                text: 'Establecimiento de responsabilidad y autoridad para el auditor',
                correct: false,
            },
            {
                id: uuid(),
                text: 'Completar de manera objetiva la auditoría',
                correct: false,
            },
            {
                id: uuid(),
                text: 'Independencia profesional del auditor',
                correct: true,
            },
            {
                id: uuid(),
                text: 'Supervision del trabajo de auditoría',
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        text: 'Un programador de sistemas de la empresa ha cometido fraude a través de un código oculto en un programa, del cual también es usuario. El valor comprometido es:',
        answers: [
            { id: uuid(), text: 'Integridad', correct: false },
            { id: uuid(), text: 'Software Falso', correct: false },
            { id: uuid(), text: 'Autenticidad', correct: true },
            { id: uuid(), text: 'Ofuscación del Código', correct: false },
        ],
    },
    {
        id: uuid(),
        text: 'Una persona extraña, logró entrar a un curso o aula virtual del ecampus, dado que el código de acceso fue divulgado. EL valor comprometido es',
        answers: [
            { id: uuid(), text: 'Confidencialidad', correct: true },
            { id: uuid(), text: 'Autenticidad', correct: false },
            { id: uuid(), text: 'Privacidad', correct: false },
            { id: uuid(), text: 'No Repudio', correct: false },
        ],
    },
    {
        id: uuid(),
        text: 'Cuál de las siguientes etapas, es la primera que debe realizar el auditor para establecer y/o evaluar un sistema de control?',
        answers: [
            {
                id: uuid(),
                text: 'Ejecutar acciones correctivas',
                correct: false,
            },
            { id: uuid(), text: 'Comparar o diagnosticar', correct: false },
            { id: uuid(), text: 'Establecer estándares', correct: true },
            {
                id: uuid(),
                text: 'Determinar acciones correctivas',
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        text: 'Se dice que la auditoría de sistemas es un control de tipo selectivo porque:',
        answers: [
            { id: uuid(), text: 'Selecciona evidencias', correct: false },
            { id: uuid(), text: 'Selecciona controles', correct: true },
            { id: uuid(), text: 'Selecciona riesgos', correct: false },
            { id: uuid(), text: 'Selecciona que auditar', correct: false },
        ],
    },
    {
        id: uuid(),
        text: 'Existen dispositivos de red y conexiones de red que no están protegidas y se encuentran en áreas de circulación del personal y clientes, lo cual da lugar a que fácilmente puedan ser violados por personas extrañas a la organización o los mismos empleados. El valor comprometido es:',
        answers: [
            { id: uuid(), text: 'Integridad', correct: true },
            { id: uuid(), text: 'Modificación', correct: false },
            {
                id: uuid(),
                text: 'Equipamiento de la Red de Datos',
                correct: false,
            },
            { id: uuid(), text: 'Falsificación', correct: false },
        ],
    },
    {
        id: uuid(),
        text: 'De las siguientes actividades, seleccione la que no pertenece a un proceso de auditoría de sistemas:',
        answers: [
            {
                id: uuid(),
                text: 'Analizar costo beneficio de cada control a definir',
                correct: false,
            },
            {
                id: uuid(),
                text: 'Revisar resultados de auditorías anteriores',
                correct: false,
            },
            {
                id: uuid(),
                text: 'Implementar controles definidos',
                correct: true,
            },
            {
                id: uuid(),
                text: 'Calcular el riesgo, después de aplicar los controles',
                correct: false,
            },
        ],
    },
    {
        id: uuid(),
        text: 'Si en un sistema informático utilizamos una bitácora de accesos al sistema, es porque se quiere garantizar:',
        answers: [
            { id: uuid(), text: 'No repudio', correct: true },
            { id: uuid(), text: 'Autenticidad', correct: false },
            { id: uuid(), text: 'Integridad', correct: false },
            { id: uuid(), text: 'Disponibilidad', correct: false },
        ],
    },
    {
        id: uuid(),
        text: 'Si en un sistema informático definimos un nivel de acceso para cada usuario del sistema (esto quiere decir que el usuario solo puede acceder a las funciones e información permitidas) es porque se quiere garantizar la:',
        answers: [
            { id: uuid(), text: 'Integridad', correct: false },
            { id: uuid(), text: 'No repudio', correct: false },
            { id: uuid(), text: 'Confidencialidad', correct: true },
            { id: uuid(), text: 'Autenticidad', correct: false },
        ],
    },
    {
        id: uuid(),
        text: 'Un ejemplo de control de influencia directiva, en el desarrollo de proyectos de software es:',
        answers: [
            { id: uuid(), text: 'Ninguna', correct: false },
            {
                id: uuid(),
                text: 'Un numero de revisiones mínimas a hacer durante la programación entre desarrolladores',
                correct: false,
            },
            {
                id: uuid(),
                text: 'El seguimiento a las actividades del plan',
                correct: true,
            },
            {
                id: uuid(),
                text: 'Un máximo permitido de horas laborales por semana',
                correct: false,
            },
        ],
    },
];

export default questions.map((question) => {
    question.answers = question.answers.sort(() => Math.random() - 0.5);
    return question;
});
