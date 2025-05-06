
const questions = [
    {
        "question": "¿Cuáles de las siguientes son dos ventajas del sistema de archivos NTFS en comparación con FAT32? (Elija dos opciones).",
        "options": [
          "El sistema NTFS es más fácil de configurar.",
          "El sistema NTFS permite un acceso más rápido a los periféricos externos, como las unidades USB.",
          "El sistema NTFS proporciona más características de seguridad.",
          "El sistema NTFS admite archivos más grandes.",
          "El sistema NTFS permite un formateado más veloz de las unidades.",
          "El sistema NTFS permite detectar sectores defectuosos automáticamente."
        ],
        "correct": [2, 3]
    },
    {
        "question": "¿Qué tecnología se creó para reemplazar el programa del BIOS en las placas madre de las computadoras personales modernas?",
        "options": [
          "CMC",
          "UEFI",
          "RAM",
          "MBR"
        ],
        "correct": [1]
      },
      {
        "question": "Un técnico instaló una utilidad de un tercero para administrar una computadora con Windows 7. Sin embargo, la utilidad no se inicia automáticamente cuando se inicia la computadora. ¿Qué puede hacer el técnico para resolver este problema?",
        "options": [
          "Desinstale el programa y, a continuación, elija Agregar nuevos programas en la utilidad Agregar o quitar programas para instalar la aplicación.",
          "Establecer en uno el valor clave del registro de la aplicación.",
          "Cambiar el tipo de inicio de la utilidad a Automático en Servicios.",
          "Utilizar la utilidad Agregar o quitar programas para establecer el acceso al programa y los valores predeterminados de este."
        ],
        "correct": [2]
      },
      {
        "question": "¿Qué tipo de comando de Windows PowerShell realiza una acción y arroja una salida o un objeto al siguiente comando que se ejecutará?",
        "options": [
          "Funciones",
          "Scrip",
          "Coma",
          "cmdlets",
          "Rutinas"
        ],
        "correct": [3]
      },
      {
        "question": "Un usuario crea un archivo con la extensión.ps1 en Windows. ¿Qué tipo de archivo es?",
        "options": [
          "Comando cmdlet de PowerShell",
          "Función de PowerShell",
          "Documentación de PowerShell",
          "Script de PowerShell"
        ],
        "correct": [3]
      },
      {
        "question": "¿Cuál es el propósito de usar el comando net accounts en Windows?",
        "options": [
          "Iniciar un servicio de red",
          "Revisar la configuración de los requisitos de contraseña y de inicio de sesión para usuarios",
          "Mostrar información sobre recursos de red compartidos",
          "Mostrar una lista de computadoras y dispositivos de red presentes en la red"
        ],
        "correct": [1]
      },
      {
        "question": "¿Qué declaración describe la función del protocolo de bloque de mensajes de servidor (Server Message Block SMB)?",
        "options": [
          "Se utiliza para administrar computadoras remotas.",
          "Se utiliza para compartir recursos de red.",
          "Se utiliza para transmitir contenido multimedia.",
          "Se utiliza para comprimir archivos almacenados en un disco."
        ],
        "correct": [1]
      },
      {
        "question": "El usuario de una PC emite el comando netstat sin opciones. ¿Cuál es el resultado de este comando?",
        "options": [
          "Un informe de uso y conexión de red",
          "Una lista histórica de pings exitosos que han sido enviados",
          "Una lista de todas las conexiones TCP activas establecidas",
          "Una tabla de routing local"
        ],
        "correct": [2]
      },
      {
        "question": "¿Qué herramienta de Windows puede utilizar un administrador de ciberseguridad para asegurar computadoras independientes que no forman parte de un dominio de Active Directory?",
        "options": [
          "Política de seguridad local",
          "PowerShell",
          "Windows Defender",
          "Firewall de Windows"
        ],
        "correct": [0]
      },
      {
        "question": "Un técnico de TI desea crear una regla en dos computadoras con Windows 10 para evitar que una aplicación instalada tenga acceso a la red pública de internet. ¿Qué herramienta utilizaría el técnico para lograr esto?",
        "options": [
          "Política de seguridad local",
          "Firewall de Windows Defender con seguridad avanzada",
          "Administración de equipos",
          "DMZ"
        ],
        "correct": [1]
      },
      {
        "question": "¿Por qué un administrador de red elegiría Linux como sistema operativo en el Centro de Operaciones de Seguridad (Security Operations Center, SOC)?",
        "options": [
          "Es más seguro que otros sistemas operativos de servidor.",
          "Se crean más aplicaciones de red para este entorno.",
          "El administrador tiene más control del sistema operativo.",
          "Es más fácil de usar que otros sistemas operativos."
        ],
        "correct": [2]
      },
      {
        "question": "¿Qué tipo de herramienta permite a los administradores observar y entender cada detalle de una transacción de la red?",
        "options": [
          "Herramienta de análisis de malware",
          "Software de captura de paquetes",
          "Administrador de registros",
          "Sistema de tickets"
        ],
        "correct": [1]
      },
      {
        "question": "¿Por qué Kali Linux se considera una opción común en las pruebas de seguridad de la red de una organización?",
        "options": [
          "Puede utilizarse para interceptar y registrar el tráfico de red.",
          "Es una herramienta de análisis de red que prioriza los riesgos de seguridad.",
          "Puede utilizarse para probar las debilidades al utilizar software malicioso solamente.",
          "Es una distribución de seguridad de Linux de código abierto que contiene muchas herramientas de penetración de red."
        ],
        "correct": [3]
      },
      {
        "question": "Si un sistema Linux arranca en la GUI de manera predeterminada, ¿qué aplicación puede usar un administrador de red para tener acceso al entorno de la CLI?",
        "options": [
          "Herramienta de administración de paquetes",
          "Visor del sistema",
          "Visor de archivos",
          "Emulador de terminales"
        ],
        "correct": [3]
      },
        {
        "question": "¿Qué resultado arroja el comando man man introducido por un administrador de Linux?",
        "options": [
          "El conic man man proporciona documentación sobre el comando man.",
          "El comando man man configura la interfaz de red con una dirección manual.",
          "El comando man man abre el archivo de registro más reciente.",
          "El comando man man proporciona una lista de comandos disponibles en la petición actual."
        ],
        "correct": [0]
      },
      {
        "question": "¿Cuál es el número de dirección de puerto conocido que utiliza DNS para responder a las solicitudes?",
        "options": [
          "25",
          "110",
          "53",
          "60"
        ],
        "correct": [2]
      },
      {
        "question": "¿Qué dos métodos se pueden utilizar para fortalecer un dispositivo informático? (Elija dos opciones).",
        "options": [
          "Garantizar la seguridad física.",
          "Aplicar el mecanismo de historial de contraseña.",
          "Permitir que los servicios predeterminados permanezcan habilitados.",
          "Permitir la detección automática de USB.",
          "Actualizar parches con un estricto régimen anual independientemente de la fecha de cada versión."
        ],
        "correct": [0, 1]
      },
      {
        "question": "Mire el resultado del comando ls -l en la salida de Linux a continuación. ¿Cuáles son los permisos de archivo de grupo asignados al usuario de ventas para el archivo analyst.txt? <br> ls –l analyst.txt <br> -rwxrw-r-- sales staff 1028 May 28 15:50 analyst.txt",
        "options": [
          "Solo lectura",
          "Solo escritura",
          "Lectura, escritura",
          "Lectura, escritura, ejecución"
        ],
        "correct": [3]
      },
      {
        "question": "¿Qué usuario puede anular permisos de archivo en una computadora con Linux?",
        "options": [
          "Usuario raíz (root)",
          "Solo el creador del archivo",
          "Cualquier usuario que tenga permiso de «otro» en el archivo",
          "Cualquier usuario que tenga permiso de «grupo» en el archivo"
        ],
        "correct": [0]
      },
      {
        "question": "Un usuario inicia sesión en Windows con una cuenta de usuario normal e intenta usar una aplicación que requiere privilegios administrativos. ¿Qué puede hacer el usuario para poder usar la aplicación sin inconvenientes?",
        "options": [
          "Hacer clic con el botón derecho en la aplicación y elegir Run as Priviledge (Ejecutar como usuario con privilegios).",
          "Hacer clic con el botón derecho en la aplicación y elegir Run as root (Ejecutar como usuario raíz).",
          "Hacer clic con el botón derecho en la aplicación y elegir Run as administrador (Ejecutar como administrador).",
          "Hacer clic con el botón derecho en la aplicación y elegir Run as Superuser (Ejecutar como superusuario)."
        ],
        "correct": [2]
      },
      {
        "question": "¿Cuál es el propósito de introducir el comando netsh en una PC con Windows?",
        "options": [
          "Someter a prueba los dispositivos de hardware en la PC",
          "Configurar parámetros de red para la PC",
          "Cambiar el nombre de la PC",
          "Crear cuentas de usuario"
        ],
        "correct": [1]
      },
      {
        "question": "¿Por qué se considera que Linux está mejor protegido contra el malware que otros sistemas operativos?",
        "options": [
          "Menos implementaciones",
          "Herramientas de penetración y protección personalizables",
          "Firewall integrado",
          "Estructura del sistema de archivos, permisos de archivos y restricciones de las cuentas de usuario"
        ],
        "correct": [3]
      },
      {
        "question": "¿Cuáles son dos beneficios del uso de una partición ext4 en lugar de ext3? (Elija dos opciones).",
        "options": [
          "Aumento en el tamaño de los archivos admitidos",
          "Menor tiempo de carga",
          "Mayor rendimiento",
          "Aumento en la cantidad de dispositivos admitidos",
          "Compatibilidad con CDFS",
          "Compatibilidad con NTFS"
        ],
        "correct": [0, 2]
      },
      {
        "question": "¿Qué comando de Linux puede utilizarse para visualizar el nombre del directorio de trabajo actual?",
        "options": [
          "pwd",
          "sudo",
          "chmod",
          "ps"
        ],
        "correct": [0]
      },
      {
        "question": "En el shell de Linux, ¿que carácter se utiliza entre dos comandos para indicar al shell que combine y ejecute estos dos comandos en secuencia?",
        "options": [
          "$",
          "%",
          "|",
          "#"
        ],
        "correct": [2]
      },
      {
        "question": "¿Cuáles son los dos comandos que se pueden utilizar para comprobar si la resolución de nombres DNS funciona correctamente en un equipo Windows? (Elija dos opciones).",
        "options": [
          "nbtstat cisco.com",
          "net cisco.com",
          "ping cisco.com",
          "nslookup cisco.com",
          "ipconfig /flushdns"
        ],
        "correct": [2, 3]
      },
];

// Inicializar el cuestionario
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');
let userAnswers = questions.map(() => new Set()); // Respuestas del usuario como conjuntos para manejar selecciones múltiples

// Estado inicial: deshabilitar el botón de resultados
submitButton.disabled = true;

// Crear mensaje indicativo dinámico
const messageElement = document.createElement('p');
messageElement.id = 'message';
messageElement.style.textAlign = 'center';
messageElement.style.fontWeight = 'bold';
messageElement.style.color = '#ff0000';
messageElement.textContent = `Responde todas las preguntas para ver los resultados.`;
quizContainer.appendChild(messageElement);

// console.log(questions.length)

// Renderizar las preguntas
questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<p>${q.question}</p>`;

    q.options.forEach((option, i) => {
        const optionButton = document.createElement('div');
        optionButton.classList.add('option');
        optionButton.textContent = option;

        // Evento para manejar la selección de opciones
        optionButton.addEventListener('click', () => {
            // Si es una pregunta con múltiples respuestas correctas
            if (q.correct.length > 1) {
                if (userAnswers[index].has(i)) {
                    userAnswers[index].delete(i); // Desmarcar si ya está seleccionada
                    optionButton.classList.remove('selected');
                } else {
                    userAnswers[index].add(i); // Marcar como seleccionada
                    optionButton.classList.add('selected');
                }
            } else {
                // Pregunta con una única respuesta correcta
                const allOptions = questionDiv.querySelectorAll('.option');
                allOptions.forEach(opt => {
                    opt.classList.remove('disabled');
                    opt.style.pointerEvents = 'auto';
                });
                userAnswers[index] = new Set([i]);
            }

            // Deshabilitar pregunta si todas las opciones están seleccionadas (para preguntas múltiples)
            if (userAnswers[index].size === q.correct.length || q.correct.length === 1) {
                const allOptions = questionDiv.querySelectorAll('.option');
                allOptions.forEach(opt => {
                    opt.classList.add('disabled');
                    opt.style.pointerEvents = 'none';
                });

                // Resaltar respuestas correctas e incorrectas
                allOptions.forEach((opt, j) => {
                    if (q.correct.includes(j)) {
                        opt.classList.remove('selected');
                        opt.classList.add('correct'); // Verde
                    } else if (userAnswers[index].has(j)) {
                        opt.classList.remove('selected');
                        opt.classList.add('incorrect'); // Rojo
                    }
                });

                // Mostrar retroalimentación
                const feedback = document.createElement('p');
                feedback.classList.add('feedback');

                const isCorrect = [...userAnswers[index]].every(
                    selected => q.correct.includes(selected)
                ) && userAnswers[index].size === q.correct.length;

                if (isCorrect) {
                    feedback.textContent = "¡Correcto!";
                    feedback.classList.add('feedback-correct');
                } else {
                    feedback.textContent = "¡Incorrecto!";
                    feedback.classList.add('feedback-incorrect');
                }
                questionDiv.appendChild(feedback);

                // Actualizar estado del botón "Ver resultados"
                checkIfAllAnswered();
            }
        });

        questionDiv.appendChild(optionButton);
    });

    quizContainer.appendChild(questionDiv);
});

// Validar si todas las preguntas fueron respondidas
function checkIfAllAnswered() {
    const allAnswered = userAnswers.every(
        (answer, index) => answer.size > 0 || (questions[index].correct.length === 1 && answer.size === 1)
    );

    if (allAnswered) {
        submitButton.disabled = false;
        messageElement.textContent = "¡Ya puedes ver los resultados!";
        messageElement.style.color = "#28a745"; // Verde
    } else {
        submitButton.disabled = true;
        const unanswered = userAnswers.filter(answer => answer.size === 0).length;
        messageElement.textContent = `Faltan ${unanswered} pregunta(s) por responder.`;
        messageElement.style.color = "#ff0000"; // Rojo
    }
}

// Mostrar los resultados al hacer clic en el botón
submitButton.addEventListener('click', () => {
    let score = 0;

    // Calcular el puntaje solo con respuestas correctas
    userAnswers.forEach((answer, index) => {
        const isCorrect = [...answer].every(selected => questions[index].correct.includes(selected)) &&
                          answer.size === questions[index].correct.length;

        if (isCorrect) {
            score++;
        }
    });

    scoreElement.textContent = `Tu puntaje es: ${score} de ${questions.length}`;
});
