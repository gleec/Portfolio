export const esp = {
  profession: 'Web Developer',
  /*
  profession_desc: `Licenciada en Computación con 3 años de experiencia en Programación. Manejo sólido
  de HTML, CSS, SASS, JS. Habilidad en consultas de BD en postgreSQl. Habilidad en
  Desarrollo de reportes y formatos con las herramientas : Crystal Report y JasperSoft
  Report. Conocimiento en los frameworks: Node.js, Next.js y Angular. Conocimiento de
  ERP y Manejo de negocio hotelero.`,*/
  profession_desc: `Licenciada en Computación con 3 años de experiencia en Programación. 
  Comprometida, responsable, honesta y dedicada, constantemente buscando la manera de 
  crecer y mejorar como persona y profesional.`,
  name_dev: 'Glery Cardoza',
  github: 'Github',
  skills: 'Habilidades',
  experience: 'Experiencias',
  achievements: 'Logros',
  projects: 'Proyectos',
  linkedin: 'Linkedin',
  language: 'Leng',
  see_more: 'Ver más',
  // skills_array: [
  //   {
  //     skill: 'Javascript',
  //     percentage: '70',
  //     logo: '/logo/js.png'
  //   },
  //   {
  //     skill: 'Html5',
  //     percentage: '80',
  //     logo: '/logo/html.png'
  //   },
  //   {
  //     skill: 'CSS',
  //     percentage: '75',
  //     logo: '/logo/css.png'
  //   },
  //   {
  //     skill: 'SASS',
  //     percentage: '75',
  //     logo: '/logo/sass-logo.png'
  //   },
  //   {
  //     skill: 'Node.js',
  //     percentage: '60',
  //     logo: '/logo/node-js.png'
  //   },
  //   {
  //     skill: 'Next.js',
  //     percentage: '60',
  //     logo: '/logo/nextjs.png'
  //   },
  //   {
  //     skill: 'Angular',
  //     percentage: '30',
  //     logo: '/logo/angular.png'
  //   },
  //   {
  //     skill: 'PostgreSQL',
  //     percentage: '75',
  //     logo: '/logo/postgresql.png'
  //   },
  //   {
  //     skill: 'Crystal Reports',
  //     percentage: '60',
  //     logo: '/logo/crystal-reports.png'
  //   },
  //   {
  //     skill: 'Jasper Reports',
  //     percentage: '50',
  //     logo: '/logo/JasperReports.png'
  //   }
  // ],
  // experiences_array: [
  //   {
  //     job: 'Web Developer',
  //     company: 'Looppers',
  //     from: 'Sep 2020',
  //     to: 'Ago 2021',
  //     functions: [
  //       'Desarrollo de aplicaciones web en Ionic, Angular.',
  //       'Manejo de BD con MySQL Server',
  //       'Desarrollo Backend en nodeJs'
  //     ],
  //     logo: '/company/looppers.jpg'
  //   },
  //   {
  //     job: 'Help Desk Analyst',
  //     company: 'Jacidi',
  //     from: 'Oct 2018',
  //     to: 'Sep 2020',
  //     functions: [
  //       'Responsable de las incidencias/requerimientos del cliente, mediante las herramientas Rticket y JIRA.',
  //       'Atención y ayuda al cliente a través de correo, telefóno o mediante generación de guías y manuales.',
  //       'Analizar y realizar consultas en Postgresql para solución de incidencias de primer y segundo nivel.',
  //       'Generar consultas y modelar reportes en Jaspersoft Studio.',
  //       'Brindar soporte en el sistema iDempiere.',
  //       'Manejo y apoyo de modelo de negocio hotelero a nivel funcional para el desarrollo del Backend y Frontend.'
  //     ],
  //     logo: '/company/jacidi.jpg'
  //   },
  //   {
  //     job: 'Developer',
  //     company: 'Factory Soft',
  //     from: 'Feb 2018',
  //     to: 'Ago 2018',
  //     functions: [
  //       'Desarrollar consultas en SQL Server.',
  //       'Manejo y desarrollo de reportes y formatos con Crystal Report en los módulos: Administrativo y Nomina del sistema eFactory.',
  //       'Soporte técnico y funcional a los clientes de eFactory.',
  //       'Creación de Archivos TXT para crear pago masivo de los diferentes Bancos de Venezuela.'
  //     ],
  //     logo: '/company/factory.png'
  //   }
  // ],
  projects_array: [
    {
      image: '/project/efactory.png',
      urlProject: 'http://login.factorysoftve.com/Framework/Formularios/frmLogin.aspx#efactory',
      name: 'efactory ERP',
      description: `eFactory es un ERP que ofrece soluciones empresariales en la Nube para administrar 
      el negocio de una empresa de manera eficaz y a enfocar la gestión en crear oportunidades de valor competitivo.`,
      achievements: [
        'Manejo de entorno ASP.net',
        'Lenguaje de programación: pgSQL',
        'Uso de la herramienta: Crystal Report',
        'Soporte técnico y funcional a los clientes de eFactory'
      ],
      skills: ['/logo/crystal-reports.png']
    },
    {
      image: '/project/5senia.png',
      urlProject: 'http://5senia.jacidi.com:8888/webui/',
      name: '5senia',
      description: `5senia es un ERP que ofrece soluciones de negocio Hotelero en la Nube, orientado en el
      software ERP IDempiere`,
      achievements: [
        'Manejo y gestión del sistema iDempiere',
        'Manejo de modelo de negocio hotelero',
        'Lenguajes de programación: HTML, CSS, Javascript',
        'Uso de herramientas: JasperSoft Studio, GitHub, Rticket y JIRA',
        'Analisis para soluciones de incidencias de primer y segundo nivel'
      ],
      skills: [
        '/logo/html.png',
        '/logo/css.png',
        '/logo/sass-logo.png',
        '/logo/js.png',
        '/logo/JasperReports.png'
      ]
    },
    {
      image: '/project/tartarayalemana.jpeg',
      urlProject: 'http://tartarayalemana.com/',
      name: 'Tartara & Alemana',
      description: `Es una aplicación web para gestionar procesos del restaurante "Tartara y Alemana" , en el cual se puede gestionar la orden del 
      cliente mediante un carrito de compra y procesar el pago de su pedido`,
      achievements: ['Manejo de framework Angular', 'Manejo de NodeJs', 'Uso de MySQL Server'],
      skills: [
        '/logo/html.png',
        '/logo/sass-logo.png',
        '/logo/js.png',
        '/logo/angular.png',
        '/logo/node-js.png'
      ]
    },
    {
      image: '/project/watchmen.png',
      urlProject: '',
      name: 'Watchmen',
      description: `Es una web que permite visualizar y buscar  las peliculas más populares, mediante el uso de la api "https://www.themoviedb.org/"`,
      achievements: ['Manejo de framework Next Js', 'Manejo de NodeJs'],
      skills: [
        '/logo/html.png',
        '/logo/sass-logo.png',
        '/logo/js.png',
        '/logo/nextjs.png',
        '/logo/node-js.png'
      ]
    }
  ]
};
