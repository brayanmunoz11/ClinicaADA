var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,i=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&o(e,a,t[a]);if(n)for(var a of n(t))r.call(t,a)&&o(e,a,t[a]);return e},c=(e,n)=>t(e,a(n)),s=(e,t)=>{var a={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&n)for(var o of n(e))t.indexOf(o)<0&&r.call(e,o)&&(a[o]=e[o]);return a};import{D as m,R as d,F as u,f as p,a as E,b as g,L as f,u as h,q as x,i as b,M as v,c as y,S as N,K as C,P as S,d as w,C as F,e as I,g as k,h as P,j as A,k as z,B as j,m as $,w as O,l as T,n as D,o as M,p as L,r as R,s as H,t as B,v as J,x as _,y as U,z as V,A as q,E as X,G as Y,H as G,I as K,J as Q,N as Z,O as W,Q as ee,T as te,U as ae,V as ne,W as le,X as re,Y as oe,Z as ie,_ as ce,$ as se,a0 as me,a1 as de,a2 as ue,a3 as pe,a4 as Ee}from"./vendor.d5f3d5f3.js";var ge="/assets/logo.c076582c.png";function fe({}){const[e,t]=m.exports.useState(sessionStorage.getItem("usuario")),[a,n]=m.exports.useState("/Login");var l="";m.exports.useEffect((()=>{"null"===e||null===e?console.log(e):r()}),[]);const r=()=>{"paciente"===(l=JSON.parse(sessionStorage.getItem("usuario")).tipoUsuario)?n("/ClinicaPaciente"):"doctor"===l?n("/ClinicaDoctor"):"administrador"===l&&n("/ClinicaAdministrador")},o=m.exports.useRef(),i=m.exports.useRef(),c=m.exports.useRef(),s=m.exports.useRef(),h=m.exports.useRef(),x=m.exports.useRef();window.onscroll=()=>{window.pageYOffset>0?(o.current.classList.add("menuContainer-on"),i.current.classList.add("menu-on"),c.current.classList.add("extra-on"),s.current.classList.add("active"),h.current.classList.add("logo-on")):(o.current.classList.remove("menuContainer-on"),i.current.classList.remove("menu-on"),c.current.classList.remove("extra-on"),s.current.classList.remove("active"),h.current.classList.remove("logo-on"))};const b=()=>{x.current.classList.toggle("menuNoVisible")};return d.createElement(d.Fragment,null,d.createElement("div",{className:"HomeContainer"},d.createElement("div",{className:"menu-container",ref:o},d.createElement("div",{className:"abrirMenu"},d.createElement("p",null,d.createElement(u,{icon:p,className:"icon",onClick:b}))),d.createElement("div",{className:"menuExtra",id:"menu",ref:x},d.createElement("div",{className:"cerrarMenu"},d.createElement("p",null,d.createElement(u,{icon:E,className:"icon",onClick:b}))),d.createElement("div",{className:"extra",ref:c},d.createElement("div",{className:"covid"},d.createElement(u,{icon:g}),d.createElement("h1",null,"COVID-19")),d.createElement("div",{className:"contacto-header"},d.createElement("h1",null,"Central de citas: ",d.createElement("a",{href:""}," (01) XXX XXXX")),d.createElement("h1",null,d.createElement(f,{to:"null"!==e&&null!==e?a:"/Login"},"Ingresar al hospital Online")))),d.createElement("div",{className:"menu",ref:i},d.createElement("nav",null,d.createElement("ul",null,d.createElement("li",null,d.createElement("a",{href:""},"Especialidades")),d.createElement("li",null,d.createElement("a",{href:""},"Staff Medico")),d.createElement("li",null,d.createElement("a",{href:""},"Contacto")),d.createElement("li",null,d.createElement("a",{href:"",className:"cita"},"Reserva tu cita")))))),d.createElement("div",{className:"logo-container",ref:h},d.createElement("figure",{className:"logo"},d.createElement("img",{src:ge,alt:"logo",ref:s})),d.createElement("div",{className:"logoName"},d.createElement("p",null,"Hospital ",d.createElement("span",null,"Hololive"))))),d.createElement("header",{className:"header"},d.createElement("div",{className:"header1 headers"}),d.createElement("div",{className:"header2 headers",style:{visibility:"hidden",opacity:0}}),d.createElement("div",{className:"header3 headers",style:{visibility:"hidden",opacity:0}})),d.createElement("section",{className:"especialidades-container"},d.createElement("h1",null,"Nuestras Especialidades"),d.createElement("div",{className:"especialidades"},d.createElement("div",{className:"especialidades-card"},d.createElement("a",{href:""},d.createElement("div",{className:"subtitulo"},d.createElement("h2",null,"Especialidad de")),d.createElement("div",{className:"central cardiologia"},d.createElement("figure",null,d.createElement("img",{src:"/assets/cardioIcon.62200b6d.png",alt:""})),d.createElement("h1",null,"Cardiologia")))),d.createElement("div",{className:"especialidades-card"},d.createElement("a",{href:""},d.createElement("div",{className:"subtitulo"},d.createElement("h2",null,"Especialidad de")),d.createElement("div",{className:"central"},d.createElement("figure",null,d.createElement("img",{src:"/assets/cancerIcon.7027b0a5.png",alt:""})),d.createElement("h1",null,"Oncologia")))),d.createElement("div",{className:"especialidades-card"},d.createElement("a",{href:""},d.createElement("div",{className:"subtitulo"},d.createElement("h2",null,"Especialidad de")),d.createElement("div",{className:"central"},d.createElement("figure",null,d.createElement("img",{src:"/assets/stomatchIcon.7660622d.png",alt:""})),d.createElement("h1",null,"Gastroenterologia")))),d.createElement("div",{className:"especialidades-card"},d.createElement("a",{href:""},d.createElement("div",{className:"subtitulo"},d.createElement("h2",null,"Especialidad de")),d.createElement("div",{className:"central"},d.createElement("figure",null,d.createElement("img",{src:"/assets/ginecoIcon.b46919b0.png",alt:""})),d.createElement("h1",null,"Ginecologia")))),d.createElement("div",{className:"especialidades-card"},d.createElement("a",{href:""},d.createElement("div",{className:"subtitulo"},d.createElement("h2",null,"Especialidad de")),d.createElement("div",{className:"central"},d.createElement("figure",null,d.createElement("img",{src:"/assets/pediatriaIcon.a1c3b89e.png",alt:""})),d.createElement("h1",null,"Pediatria"))))),d.createElement("a",{href:""},d.createElement("div",{className:"masEspe"}))),d.createElement("section",{className:"staff-container"},d.createElement("h1",null,"Nuestro STAFF"),d.createElement("div",{className:"staff-group"},d.createElement("div",{className:"responStaff"},d.createElement("a",{href:""},d.createElement("div",{className:"staff"},d.createElement("div",{className:"info"},d.createElement("div",{className:"arriba"},d.createElement("h2",null,"Oftalmologia")),d.createElement("div",{className:"medio"},d.createElement("h1",null,"Dr. Cortez"),d.createElement("p",null,"Dr. en Jefe de Oftalmologia")),d.createElement("div",{className:"abajo"})),d.createElement("figure",null,d.createElement("img",{src:"/assets/staff1.77efe0a1.jpg"})))),d.createElement("a",{href:""},d.createElement("div",{className:"staff"},d.createElement("div",{className:"info"},d.createElement("div",{className:"arriba"},d.createElement("h2",null,"Ginecologia")),d.createElement("div",{className:"medio"},d.createElement("h1",null,"Dra. Gomez"),d.createElement("p",null,"Dra. en Jefe de Ginecologia")),d.createElement("div",{className:"abajo"})),d.createElement("figure",null,d.createElement("img",{src:"/assets/staff2.196fe8b1.png"}))))),d.createElement("div",{className:"responStaff"},d.createElement("a",{href:""},d.createElement("div",{className:"staff"},d.createElement("div",{className:"info"},d.createElement("div",{className:"arriba"},d.createElement("h2",null,"Dermatologia")),d.createElement("div",{className:"medio"},d.createElement("h1",null,"Dr. Castillo"),d.createElement("p",null,"Dr. en Jefe de Dermatologia")),d.createElement("div",{className:"abajo"})),d.createElement("figure",null,d.createElement("img",{src:"/assets/staff3.6da5232a.png"})))),d.createElement("a",{href:""},d.createElement("div",{className:"staff"},d.createElement("div",{className:"info"},d.createElement("div",{className:"arriba"},d.createElement("h2",null,"Pediatria")),d.createElement("div",{className:"medio"},d.createElement("h1",null,"Dr. Barrenechea"),d.createElement("p",null,"Dr. en Jefe de Pediatria")),d.createElement("div",{className:"abajo"})),d.createElement("figure",null,d.createElement("img",{src:"/assets/staff4.b0737efd.png"})))))),d.createElement("a",{href:"",style:{textDecoration:"none"}},d.createElement("div",{className:"masDoc"}))),d.createElement("footer",{className:"footer-container"},d.createElement("div",{className:"footer-main"},d.createElement("div",{className:"footer-left"},d.createElement("img",{src:s}),d.createElement("p",null,"&copy 2020 Clínica Montefiori")),d.createElement("div",{className:"footer-info"},d.createElement("h2",{className:"footer-title"},"Más información"),d.createElement("ul",null,d.createElement("li",null,d.createElement("a",{href:"#"},"Acerca de nosotros")),d.createElement("li",null,d.createElement("a",{href:"#"},"Nuestras especialidades")),d.createElement("li",null,d.createElement("a",{href:"#"},"Nuestros staff médico")))),d.createElement("div",{className:"footer-contact"},d.createElement("h2",{className:"footer-title"},"Contáctenos"),d.createElement("form",{action:""},d.createElement("input",{className:"input",type:"email",name:"email",id:"email",placeholder:"Correo electrónico"}),d.createElement("input",{className:"button",type:"submit",value:"Enviar"})))))))}const he="https://api-login-heroku.herokuapp.com";function xe(){return d.createElement(d.Fragment,null,d.createElement("div",{className:"loaderContainer"},d.createElement("div",{className:"loader"},d.createElement("svg",null,d.createElement("g",null,d.createElement("path",{d:"M 50,100 A 1,1 0 0 1 50,0"})),d.createElement("g",null,d.createElement("path",{d:"M 50,75 A 1,1 0 0 0 50,-25"})),d.createElement("defs",null,d.createElement("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},d.createElement("stop",{offset:"0%",className:"stop1"}),d.createElement("stop",{offset:"100%",className:"stop2"})))))))}function be({setErrorM:e,message:t,type:a}){let n=h();return d.createElement(d.Fragment,null,d.createElement("div",{className:"grayContainer error"},d.createElement("div",{className:"errorContainer"},d.createElement("div",{className:"equiserror"},"confirmCita"===a?d.createElement("div",{className:"check"},d.createElement("div",{className:"check1"})):d.createElement("div",{className:"equis"},d.createElement("div",{className:"equis1"}),d.createElement("div",{className:"equis2"}))),d.createElement("h1",null,t),d.createElement("button",{onClick:()=>(e(!1),"confirmCita"===a?n.push("/ClinicaPaciente/Consultas"):null),className:"errorbutton"},"Aceptar"))))}const ve=x.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 100px 1fr;
  .select {
    width: 100%;
    height: fit-content;
  }
`,ye=x.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .inputInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    width: 60%;
  }
`,Ne=x.div`
  /* width: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  .extraInfo {
    display: flex;
    width: 60%;
    height: 70%;
    flex-direction: column;
    justify-content: space-evenly;
  }
  textarea {
    border: 1px solid #ccc;
    height: 80%;
    outline: none;
    padding: 10px 5px;
    font-size: 1em;
    resize: none;
  }
`,Ce=x.div`

  span {
    height: 100%;
    width: 1px;
    background: ${e=>e.theme.colors.gradients.primary};
    display: block;
    margin: auto;
  }
`,Se=d.createContext({});function we({children:e}){const[t,a]=m.exports.useState("es");return d.createElement(Se.Provider,{value:{language:t,setLanguage:a,texts:{es:{Perfil:"Perfil",Formulario:"Formulario de cita",Configuraciones:"Configuraciones",Home:"Volver al Home",Nombre:"Nombre",Apellido:"Apellido",CitasProgra:"Citas Programadas",Fecha:"Fecha",Hora:"Hora",Horario:"Horario",Especialidad:"Especialidad",Sala:"Sala",CitasResc:"Citas Recientes",Cerrar:"Cerrar Sesion",Turno:"Turno",Extra:"Informacion Extra",Ingresa:"Ingresa Datos",Selecciona:"Selecciona el doctor",Confirma:"Comfirma la consulta",EligeEspecialidad:"Elige una especialidad",EligeTurno:"Elige un turno",Atras:"Atras",Siguiente:"Siguiente",Finalizar:"Finalizar",Seleccionar:"Seleccionar",CambiarIdioma:"Cambiar Idioma",CambiarFuente:"Cambiar Fuente",Paciente:"Paciente",Concluir:"Concluir",AdministrarPersonal:"Administrar Personal",AdministrarPacientes:"Administrar Pacientes",AdministrarCamas:"Administrar Camas",Sexo:"Sexo",Vigencia:"Vigencia",CentroAsistencial:"Centro Asistencial",TipoSeguro:"Tipo de seguro",Cama:"Cama",Ocupada:"Ocupada",AnadirPaciente:"Añadir Paciente",AnadirPersonal:"Añadir Personal",AnadirCama:"Añadir Cama",Consultas:"Consultas"},en:{Perfil:"Profile",Formulario:"Appointment form",Configuraciones:"Configurations",Home:"Back to Home",Nombre:"Name",Apellido:"Last Name",CitasProgra:"Scheduled appointments",Fecha:"Date",Hora:"Hour",Horario:"Schedule",Especialidad:"Specialty",Sala:"Lounge",CitasResc:"Recent appointments",Cerrar:"Sign off",Turno:"Shift",Extra:"Extra Information",Ingresa:"Enter Data",Selecciona:"Choose a doctor",Confirma:"Comfirm Date",EligeEspecialidad:"Choose a specialty",EligeTurno:"Choose a shift",Atras:"Previus",Siguiente:"Next",Finalizar:"Finish",Seleccionar:"Choose",CambiarIdioma:"Change Language",CambiarFuente:"Change Font",Paciente:"Patient",Concluir:"Conclude",AdministrarPersonal:"Manage staff",AdministrarPacientes:"Manage patients",AdministrarCamas:"Manage beds",Sexo:"Sex",Vigencia:"Vigence",CentroAsistencial:"Center",TipoSeguro:"Secure type",Cama:"Bed",Ocupada:"Ocuped",AnadirPaciente:"Add Patient",AnadirPersonal:"Add Staff",AnadirCama:"Add Bed",Consultas:"Appointments"}}}},e)}function Fe(e,t){document.querySelectorAll("*").forEach((a=>{"SCRIPT"==a.tagName||(a.style.fontFamily=e,a.style.fontSize=t)}))}function Ie({especialidad:e,updateEspecialidad:t,horario:a,updateHHorario:n,turno:l,updateTurno:r,updateExtra:o}){const{language:s,setLanguage:u,texts:p}=m.exports.useContext(Se),[E,g]=m.exports.useState(localStorage.getItem("fontFamily")),[f,h]=m.exports.useState(localStorage.getItem("fontSize"));return m.exports.useEffect((()=>{null!==E&&Fe(E,f)}),[]),d.createElement(d.Fragment,null,d.createElement(ve,null,d.createElement(ye,null,d.createElement("div",{className:"inputInfo"},d.createElement("h2",null,p[s].Especialidad),d.createElement("div",{className:"select"},d.createElement(b,{options:[{value:"cardiologia",label:"Cardiologia"},{value:"traumatologia",label:"Traumatologia"},{value:"oncologia",label:"Oncologia"}],name:"especialidad",value:e,placeholder:p[s].EligeEspecialidad,onChange:e=>t(e),styles:{menuList:e=>c(i({},e),{maHeight:"200px"})}}))),d.createElement("div",{className:"inputInfo"},d.createElement("h2",null,p[s].Fecha),d.createElement("div",{className:"select"},d.createElement(v,{utils:y},d.createElement(N,{container:!0,justifyContent:"space-around"},d.createElement(C,{name:"fecha",margin:"normal",id:"date-picker-dialog",format:"dd/MM/yyyy",value:a.date,onChange:e=>{const t=`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`;n({fecha:t,date:e})},KeyboardButtonProps:{"aria-label":"change date"},style:{width:"100%"}}))))),d.createElement("div",{className:"inputInfo"},d.createElement("h2",null,p[s].Turno),d.createElement("div",{className:"select"},d.createElement(b,{options:[{value:"mañana",label:"Mañana"},{value:"tarde",label:"Tarde"},{value:"noche",label:"Noche"}],name:"turno",value:l,placeholder:p[s].EligeTurno,onChange:e=>r(e),styles:{menu:e=>c(i({},e),{position:"absolute"})}})))),d.createElement(Ce,null,d.createElement("span",null)),d.createElement(Ne,null,d.createElement("div",{className:"extraInfo"},d.createElement("h2",null,p[s].Extra),d.createElement("textarea",{name:"",id:"",cols:"30",rows:"10"})))))}const ke=x.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: ato;
  .nose {
    overflow: auto;
    width: 80%;
    height: 100%;
  }
  .ps__rail-y {
    z-index: 10;
  }
  .tablaDoctores {
    width: 100%;
    max-height: 70%;
  }
  .scrollbar-container {
    width: 100%;
  }
  h1 {
    padding-left: 20px;
    font-size: 1.5em;
    text-align: left;
    width: 100%;
    color: ${e=>e.theme.colors.primary};
    font-family: 'Roboto Mono', monospace;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
    min-width: 1000px;
  }
  th {
    font-size: 1.5em;
    color: ${e=>e.theme.colors.primary};
    /* &.selecc {
      width: 200px;
    } */
  }
  th, td {
    font-family: 'Roboto Mono', monospace;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 16px;
    /* pointer-events: none; */
  }
  tr {
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;

    button {
      background: ${e=>e.theme.colors.primary};
      border: none;
      outline: none;
      color: #fff;
      padding: 10px 15px;
      font-size: 1em;
      cursor: pointer;
      width: 150px;
    }
  }
  td {
    color: #999;
    font-size: 15px;
    line-height: 1.4;
  }
  td:first-child, th:first-child {
    padding-left: 20px;
  }
  thead {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 10;
  }
  .on {
    background-color: rgba(130, 223, 230, 0.802);
  }
`,Pe=x.div`
  height: 100%;
  .scrollbar-container {
    width: 100%;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
    min-width: 1000px;
  }
  th {
    font-size: 1.5em;
    color: ${e=>e.theme.colors.primary};
    /* &.selecc {
      width: 200px;
    } */
  }
  th, td {
    font-family: 'Roboto Mono', monospace;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 16px;
    /* pointer-events: none; */
  }
  tr {
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;

    .button {
      background: ${e=>e.theme.colors.primary};
      border: none;
      outline: none;
      color: #fff;
      padding: 10px 15px;
      font-size: 1em;
      cursor: pointer;
      width: 150px;
    }
  }
  td {
    color: #999;
    font-size: 15px;
    line-height: 1.4;
  }
  td:first-child, th:first-child {
    padding-left: 20px;
  }
  thead {
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 10;
  }
  .on {
    background-color: rgba(130, 223, 230, 0.802);
  }
`;function Ae({children:e}){const[t,a]=m.exports.useState(localStorage.getItem("fontFamily")),[n,l]=m.exports.useState(localStorage.getItem("fontSize"));return m.exports.useEffect((()=>{null!==t&&Fe(t,n)}),[]),d.createElement(d.Fragment,null,d.createElement(Pe,null,d.createElement(S,null,d.createElement("div",{className:"table"},e))))}function ze({updateDoctor:e,especialidad:t,turno:a}){const[n,l]=m.exports.useState([]),{language:r,setLanguage:o,texts:i}=m.exports.useContext(Se);m.exports.useEffect((()=>{e(""),function({especialidad:e,turno:t}){return fetch(`${he}/listarDoctores/${e.value}/${t.value}`).then((e=>e.json())).then((e=>e.doctores))}({especialidad:t,turno:a}).then((e=>{l(e),Fe(E)}))}),[]);const[c,s]=m.exports.useState(!1),u=t=>{p();const a=t.target.parentNode.parentNode.parentNode.parentNode.parentNode;e({id:a.id,name:a.childNodes[0].textContent});const n=document.getElementsByName("Checkbox");s(!c),n.forEach((e=>{c?e.removeAttribute("disabled"):(a.classList.add("on"),e.setAttribute("disabled",!0))})),t.target.removeAttribute("disabled")},p=()=>{document.querySelectorAll(".on").forEach((e=>e.classList.remove("on")))},[E,g]=m.exports.useState(localStorage.getItem("fontFamily")),[f,h]=m.exports.useState(localStorage.getItem("fontSize"));return m.exports.useEffect((()=>{null!==E&&Fe(E,f)}),[]),d.createElement(d.Fragment,null,d.createElement(ke,null,d.createElement("div",{className:"nose"},d.createElement(Ae,null,d.createElement("div",{className:"tablaDoctores"},d.createElement("table",null,d.createElement("thead",null,d.createElement("tr",null,d.createElement("th",null,"Doctor"),d.createElement("th",null,i[r].Horario),d.createElement("th",null,i[r].Perfil),d.createElement("th",{className:"selecc"},i[r].Seleccionar))),d.createElement("tbody",null,n.map(((e,t)=>d.createElement("tr",{key:e.idDoc,id:e.idDoc},d.createElement("td",null,e.nombre+" "+e.apellidoP),d.createElement("td",null,e.turno),d.createElement("td",null,d.createElement("button",null,"Ver Perfil")),d.createElement("td",null,d.createElement(w,{control:d.createElement(F,{onChange:u,name:"Checkbox",id:`Checkbox ${t}`})}))))))))))))}const je="update_especialidad",$e="update_horario",Oe="update_turno",Te="update_doctor",De="update_extra",Me="reset_filters",Le={[je]:(e,t)=>c(i({},e),{especialidad:t.payload}),[$e]:(e,t)=>c(i({},e),{horario:t.payload}),[Oe]:(e,t)=>c(i({},e),{turno:t.payload}),[Te]:(e,t)=>c(i({},e),{doctor:t.payload}),[De]:(e,t)=>c(i({},e),{extra:t.payload}),[Me]:(e,t)=>c(i({},e),{especialidad:t.payload.especialidad,horario:t.payload.horario,turno:t.payload.turno,doctor:t.payload.doctor,extra:t.payload.extra})},Re=(e,t)=>{const a=Le[t.type];return a?a(e,t):e};const He=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,Be=x.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #fff;
  border-radius: 10px;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 30px 20px;
`,Je=x.div`
  h1 {
    text-align: center;
    text-transform: uppercase;
    /* font-weight: bold; */
    background: ${e=>e.theme.colors.gradients.primary_reverse};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`,_e=x.div`
  width: 70%;
  margin: auto;
`,Ue=x.div`
  text-align: center;
  button {
    background: ${e=>e.theme.colors.gradients.primary};
    padding: 10px 40px;
    border: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
  }

`,Ve=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  .left {
    display: flex;
    align-items: center;
    font-size: .9em;
    /* color: ${e=>e.theme.colors.primary}; */
    p {
      font-weight: 600;
    }
  }
  .icon {
    font-size: 2em;
    margin-right: 20px;
    width: 28px;
  }
  .right p {
    font-size: .9em;
    :first-letter {
      text-transform: uppercase;
    }
  }
`;function qe({especialidad:e,horario:t,turno:a,doctor:n}){const[l,r]=m.exports.useState(!1),[o,i]=m.exports.useState(!1),[c,s]=m.exports.useState(localStorage.getItem("fontFamily")),[p,E]=m.exports.useState(localStorage.getItem("fontSize"));m.exports.useEffect((()=>{null!==c&&Fe(c,p)}),[]);return d.createElement(d.Fragment,null,o?d.createElement(xe,null):null,l?d.createElement(be,{setErrorM:r,message:"La cita se creo exitosamente",type:"confirmCita"}):null,d.createElement(He,null,d.createElement(Be,null,d.createElement(Je,null,d.createElement("h1",null,"Confirmar Cita")),d.createElement(_e,null,d.createElement(Ve,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:I,className:"icon"}),d.createElement("p",null,"Especialidad")),d.createElement("div",{className:"right"},d.createElement("p",null,e))),d.createElement(Ve,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:k,className:"icon"}),d.createElement("p",null,"Fecha")),d.createElement("div",{className:"right"},d.createElement("p",null,t.fecha))),d.createElement(Ve,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:P,className:"icon"}),d.createElement("p",null,"Turno")),d.createElement("div",{className:"right"},d.createElement("p",null,a))),d.createElement(Ve,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:A,className:"icon"}),d.createElement("p",null,"Doctor")),d.createElement("div",{className:"right"},d.createElement("p",null,n.name)))),d.createElement(Ue,null,d.createElement("button",{onClick:()=>{i(!0);const l=JSON.parse(sessionStorage.getItem("usuario")).id;var o;(o={idPaciente:l,especialidad:e,fecha:t.fecha,turno:a,idDoctor:n.id},fetch(`${he}/createCita`,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(o)}).then((e=>e.json())).then((e=>console.log(e)))).then((e=>{i(!1),r(!0)}))}},"enviar")))))}const Xe=x.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin: 30px 0;
  div {
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    button {
      /* width: 150px; */
      border: none;
      color: #fff;
      padding: 5px 30px;
      cursor: pointer;
      font-size: 1.3em;
      :nth-child(1) {
        background-color: #ccc;
      }
      :nth-child(2) {
        background-color: ${e=>e.theme.colors.secondary};
      }
    }
  }
`;function Ye(e){const t=e,{children:a,value:n,index:l}=t,r=s(t,["children","value","index"]);return d.createElement("div",c(i({role:"tabpanel",hidden:n!==l,id:`wrapped-tabpanel-${l}`,"aria-labelledby":`wrapped-tab-${l}`},r),{style:{height:"100%"}}),n===l&&d.createElement(j,{p:3,style:{height:"100%"}},a))}function Ge({tabState:e,handleBack:t,handleNext:a,steps:n,activeStep:l,setActiveStep:r}){const o={0:()=>0!==u.length&&0!==E.length,1:()=>0!==g.length},{language:i,setLanguage:c,texts:s}=m.exports.useContext(Se),{especialidad:u,horario:p,turno:E,doctor:g,extra:f,updateEspecialidad:h,updateHHorario:x,updateTurno:b,updateDoctor:v,updateExtra:y,resetFilters:N}=function({initialEspecialidad:e="",initialHorario:t=new Date,initialTurno:a="",initialDoctor:n="",initialExtra:l=""}={}){const[r,o]=m.exports.useReducer(Re,{especialidad:e,horario:{fecha:`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`,date:t},turno:a,doctor:n,extra:l}),{especialidad:i,horario:c,turno:s,doctor:d,extra:u}=r;return{especialidad:i,horario:c,turno:s,doctor:d,extra:u,updateEspecialidad:e=>o({type:je,payload:e}),updateHHorario:e=>o({type:$e,payload:e}),updateTurno:e=>o({type:Oe,payload:e}),updateDoctor:e=>o({type:Te,payload:e}),updateExtra:e=>o({type:De,payload:e}),resetFilters:()=>o({type:Me,payload:{especialidad:"",horario:"",turno:"",doctor:"",extra:""}})}}();return m.exports.useEffect((()=>{console.log(l)}),[]),d.createElement(d.Fragment,null,d.createElement("div",{style:{overflow:"one"===e?"unset":"auto"}},d.createElement(Ye,{value:e,index:"one"},d.createElement(Ie,{especialidad:u,updateEspecialidad:h,horario:p,updateHHorario:x,turno:E,updateTurno:b,updateExtra:y})),d.createElement(Ye,{value:e,index:"two"},d.createElement(ze,{updateDoctor:v,especialidad:u,turno:E})),d.createElement(Ye,{value:e,index:"three"},d.createElement(qe,{especialidad:u.value,horario:p,turno:E.value,doctor:g}))),d.createElement(Xe,null,d.createElement("div",null,d.createElement("button",{disabled:0===l,onClick:t},s[i].Atras),d.createElement("button",{disabled:2===l,variant:"contained",color:"primary",onClick:()=>{o[l]()&&a()}},l===n.length-1?s[i].Finalizar:s[i].Siguiente))))}Ye.propTypes={children:z.node,index:z.any.isRequired,value:z.any.isRequired},$({root:{color:"#eaeaf0",display:"flex",height:22,alignItems:"center",backgroundColor:"transparent"},active:{color:"#784af4"},circle:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"},completed:{color:"#784af4",zIndex:1,fontSize:18}}),z.bool,z.bool;const Ke=O({alternativeLabel:{top:22},active:{"& $line":{backgroundImage:"linear-gradient(to right, #61d5ff 0%, #00d9e2 40%, #00ecd8 100%)"}},completed:{"& $line":{backgroundImage:"linear-gradient(to right, #61d5ff 0%, #00d9e2 40%, #00ecd8 100%)"}},line:{height:3,border:0,backgroundColor:"#eaeaf0",borderRadius:1}})(T),Qe=$({root:{backgroundColor:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center"},active:{backgroundImage:"linear-gradient(to right, #61d5ff 0%, #00d9e2 40%, #00ecd8 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},completed:{backgroundImage:"linear-gradient(to right, #61d5ff 0%, #00d9e2 40%, #00ecd8 100%)"}});function Ze(e){const t=Qe(),{active:a,completed:n}=e,l={1:d.createElement(H,null),2:d.createElement(B,null),3:d.createElement(J,null)};return d.createElement("div",{className:R(t.root,{[t.active]:a,[t.completed]:n})},l[String(e.icon)])}Ze.propTypes={active:z.bool,completed:z.bool,icon:z.node};const We=$((e=>({root:{width:"100%",height:"100vh",display:"grid",gridTemplateRows:"auto 1fr auto",overflow:"hidden",backgroundColor:"transparent"},button:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},buttonC:{height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}})));function et(){const{language:e,setLanguage:t,texts:a}=m.exports.useContext(Se),n=We(),[l,r]=d.useState(0),o=function(e,t){return[e[t].Ingresa,e[t].Selecciona,e[t].Confirma]}(a,e);return d.createElement("div",{className:n.root},d.createElement(D,{alternativeLabel:!0,activeStep:l,connector:d.createElement(Ke,null),style:{backgroundColor:"transparent"}},o.map((e=>d.createElement(M,{key:e},d.createElement(L,{StepIconComponent:Ze},e))))),d.createElement(Ge,{tabState:(()=>{switch(l){case 0:return"one";case 1:return"two";case 2:return"three";default:return"gura"}})(),handleBack:()=>{r((e=>e-1))},handleNext:()=>{r((e=>e+1))},steps:o,activeStep:l,setActiveStep:r}))}function tt({}){const e=JSON.parse(sessionStorage.getItem("usuario")).tipoUsuario,[t,a]=m.exports.useState(""),{language:n,setLanguage:l,texts:r}=m.exports.useContext(Se),o=m.exports.useRef();m.exports.useEffect((()=>{"paciente"===e?a("/ClinicaPaciente"):"doctor"===e?a("/ClinicaDoctor"):"administrador"===e&&a("/ClinicaAdministrador")}),[e]);return d.createElement(d.Fragment,null,d.createElement("div",{className:"menu-clinica-container",ref:o},d.createElement("div",{className:"logoMenu",onClick:e=>{o.current.classList.toggle("small")}},d.createElement("figure",{className:"logo"},d.createElement("img",{src:ge,alt:"logo"})),d.createElement("div",{className:"logoName"},d.createElement("p",null,"Hospital ",d.createElement("span",null,"Hololive")))),d.createElement("nav",{className:"menu-clinica"},d.createElement("ul",null,d.createElement("div",{className:"up"},d.createElement("li",null,d.createElement(f,{to:t},d.createElement(u,{icon:_,className:"icon"}),d.createElement("p",null,r[n].Perfil))),d.createElement("li",null,d.createElement(f,{to:"/ClinicaPaciente/Consultas"},d.createElement(u,{icon:k,className:"icon"}),d.createElement("p",null,r[n].Consultas))),"paciente"===e?d.createElement("li",null,d.createElement(f,{to:"/ClinicaPaciente/Formulario"},d.createElement(u,{icon:U,className:"icon"}),d.createElement("p",null,r[n].Formulario))):null,d.createElement("li",null,d.createElement(f,{to:"/ClinicaPaciente/Config"},d.createElement(u,{icon:V,className:"icon"}),d.createElement("p",null,r[n].Configuraciones)))),d.createElement("div",{className:"down"},d.createElement("li",null,d.createElement(f,{to:"/",onClick:()=>{sessionStorage.setItem("usuario","null")}},d.createElement(u,{icon:q,className:"icon"}),d.createElement("p",null,r[n].Cerrar))),d.createElement("li",null,d.createElement(f,{to:"/"},d.createElement(u,{icon:X,className:"icon"}),d.createElement("p",null,r[n].Home))))))))}const at=x.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  overflow: auto;
  position: relative;
`,nt=x.div`
  /* overflow: auto; */
`,lt=x.div`
  h1 {
    padding-top: 10px;
    /* font-size: 1.5em; */
    text-align: center;
    width: 100%;
    color: ${e=>e.theme.colors.primary};
  }
`,rt=x.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  flex-wrap: wrap;
  /* height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center; */

`,ot=x.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #fff;
  border-radius: 10px;
  width: 300px;
  height: fit-content;
  margin: 20px 20px;
  padding-top: 20px;
`,it=x(_e)`
  width: 85%;
`,ct=x(Ve)`
  margin-top: 15px;
  .icon {
    margin-right: 15px;
  }
`,st=x(Je)`
  font-size: .7em;
`;function mt({}){const[e,t]=m.exports.useState([]),[a,n]=m.exports.useState([]),[l,r]=m.exports.useState(!1);return m.exports.useContext(Se),m.exports.useEffect((()=>{r(!0),function(){const e=JSON.parse(sessionStorage.getItem("usuario")).id;return fetch(`${he}/citasUser/${e}`).then((e=>e.json())).then((e=>e))}().then((e=>{console.log(e),t(e.citasPro),n(e.citasTer),r(!1)}))}),[]),d.createElement(d.Fragment,null,d.createElement(at,null,l?d.createElement(xe,null):d.createElement(d.Fragment,null,d.createElement(nt,null,d.createElement(lt,null,d.createElement("h1",null,"Citas Pendientes")),d.createElement(rt,null,e.map((e=>d.createElement(ot,{key:e.idCita},d.createElement(it,null,d.createElement(st,null,d.createElement("h1",null,"Cita #",e.idCita)),d.createElement(ct,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:I,className:"icon"}),d.createElement("p",null,"Especialidad")),d.createElement("div",{className:"right"},d.createElement("p",null,e.especialidad))),d.createElement(ct,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:k,className:"icon"}),d.createElement("p",null,"Fecha")),d.createElement("div",{className:"right"},d.createElement("p",null,e.fecha))),d.createElement(ct,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:P,className:"icon"}),d.createElement("p",null,"Turno")),d.createElement("div",{className:"right"},d.createElement("p",null,e.turno))),d.createElement(ct,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:A,className:"icon"}),d.createElement("p",null,"Doctor")),d.createElement("div",{className:"right"},d.createElement("p",null,e.doctor))))))))),d.createElement(nt,null,d.createElement(lt,null,d.createElement("h1",null,"Citas Recientes")),d.createElement(rt,null,a.map((e=>d.createElement(ot,{key:e.idCita},d.createElement(it,null,d.createElement(st,null,d.createElement("h1",null,"Cita #",e.idCita)),d.createElement(ct,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:I,className:"icon"}),d.createElement("p",null,"Especialidad")),d.createElement("div",{className:"right"},d.createElement("p",null,e.especialidad))),d.createElement(ct,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:k,className:"icon"}),d.createElement("p",null,"Fecha")),d.createElement("div",{className:"right"},d.createElement("p",null,e.fecha))),d.createElement(ct,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:P,className:"icon"}),d.createElement("p",null,"Turno")),d.createElement("div",{className:"right"},d.createElement("p",null,e.turno))),d.createElement(ct,null,d.createElement("div",{className:"left"},d.createElement(u,{icon:A,className:"icon"}),d.createElement("p",null,"Doctor")),d.createElement("div",{className:"right"},d.createElement("p",null,e.doctor))))))))))))}const dt=x.div`
  height: 100%;
  width: 100%;
  display: grid;
  padding: 20px 30px;
  grid-template-columns: 330px 1fr;
  grid-gap: 20px;
`,ut=x.div`
  display: grid;
  grid-template-rows: 140px auto;
  grid-gap: 40px;
`,pt=x.div`
  /* display: grid; */
`,Et=x.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  .title {
    background-color: #E9E9E9;
    height: 40px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    h1 {
      text-transform: uppercase;
      font-size: 1em;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
`,gt=x.div`
  padding: 15px;
  .infoTitle {
    text-transform: uppercase;
    font-size: .5em;
    color: ${e=>e.theme.colors.primary};
    margin-bottom: 10px;
    .icon {
      margin-right: 15px;
    }
  }
  .infoContainer {
    table {
      width: 100%;
      text-align: left;
      border-collapse: collapse;
    }
    th {
      color: #78F7BD;
      text-transform: uppercase;
      font-size: .9em;
      font-weight: bold;
    }
    tr {
      height: 40px;
      border-bottom: 1px solid #ccc;
      vertical-align: middle;
    }
    .opciones {
      width: auto;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .icon {
        cursor: pointer;
      }
      .icon:nth-child(1) {
        color: ${e=>e.theme.colors.secondary};
      }
      .icon:nth-child(2) {
        color: red;
      }
    }
    .anadirFamiliar {
      height: 40px;
      font-size: 1.6em;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-top: 10px;
    }
  }
`,ft=x.div`
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border-radius: 10px;
  figure {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      height: 80%;
    }
  }
  .infoItem {
    :nth-of-type(-n+2) {
     margin-bottom: 5px;
    }
    span {
      font-size: 13px;
      font-weight: bold;
    }
    p {
      font-size: 16px;
    }
  }
`,ht=x.div`
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  .info {
    .infoTitle {
      background-color: #E9E9E9;
      height: 40px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      p {
        text-transform: uppercase;
        font-size: .9em;
        font-weight: 600;
        /* letter-spacing: 1px; */
      }
    }
    .infoItem {
      height: 70px;
      /* background-color: #afa; */
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      .left {
        display: flex;
        align-items: center;
        font-size: .9em;
        p {
          width: 50px;
          font-weight: 600;
        }
      }
      .icon {
        font-size: 2em;
        margin-right: 20px;
        width: 28px;
      }
      .right p {
        font-size: .9em;
      }
    }
  }
`;function xt({}){const[e,t]=m.exports.useState(JSON.parse(sessionStorage.getItem("usuario")));return d.createElement(d.Fragment,null,d.createElement(ft,null,d.createElement("figure",null,d.createElement("img",{src:"https://m.media-amazon.com/images/I/51-H2JY9eyL._AC_SX466_.jpg",alt:""})),d.createElement("div",{className:"info"},d.createElement("div",{className:"infoItem"},d.createElement("span",null,"Nombres"),d.createElement("p",null,e.nombre)),d.createElement("div",{className:"infoItem"},d.createElement("span",null,"Apellido Paterno"),d.createElement("p",null,e.apellidoP)),d.createElement("div",{className:"infoItem"},d.createElement("span",null,"Apellido Materno"),d.createElement("p",null,e.apellidoM)))),d.createElement(ht,null,d.createElement("div",{className:"info"},d.createElement("div",{className:"infoTitle"},d.createElement("p",null,"Informacion extra")),d.createElement("div",{className:"infoItem"},d.createElement("div",{className:"left"},d.createElement(u,{icon:Y,className:"icon"}),d.createElement("p",null,"DNI")),d.createElement("div",{className:"right"},d.createElement("p",null,e.dni))),d.createElement("div",{className:"infoItem"},d.createElement("div",{className:"left"},d.createElement(u,{icon:G,className:"icon"}),d.createElement("p",null,"SEXO")),d.createElement("div",{className:"right"},d.createElement("p",null,e.sexo))),d.createElement("div",{className:"infoItem"},d.createElement("div",{className:"left"},d.createElement(u,{icon:K,className:"icon"}),d.createElement("p",null,"CENTRO ASISTENCIAL")),d.createElement("div",{className:"right"},d.createElement("p",null,e.centro))),d.createElement("div",{className:"infoItem"},d.createElement("div",{className:"left"},d.createElement(u,{icon:Q,className:"icon"}),d.createElement("p",null,"TIPO")),d.createElement("div",{className:"right"},d.createElement("p",null,e.tipoSeguro))),d.createElement("div",{className:"infoItem"},d.createElement("div",{className:"left"},d.createElement(u,{icon:Z,className:"icon"}),d.createElement("p",null,"VIGENCIA")),d.createElement("div",{className:"right"},d.createElement("p",null,e.vigencia))))))}function bt(){return d.createElement(d.Fragment,null,d.createElement(dt,null,d.createElement(ut,null,d.createElement(xt,null)),d.createElement(pt,null,d.createElement(Et,null,d.createElement("div",{className:"title"},d.createElement("h1",null,"Panel de Informacion")),d.createElement(gt,null,d.createElement("div",{className:"infoTitle"},d.createElement("h1",null,d.createElement(u,{icon:W,className:"icon"}),"Informacion de Familiares")),d.createElement("div",{className:"infoContainer"},d.createElement("table",null,d.createElement("thead",null,d.createElement("tr",null,d.createElement("th",null,"Nombre"),d.createElement("th",null,"Parentesco"),d.createElement("th",null,"Correo"))),d.createElement("tbody",null,[{nombre:"Gura Hololive",parentesco:"Hija",correo:"gura@hololive.jp"},{nombre:"Amelia Hololive",parentesco:"Hija",correo:"amelia@hololive.jp"}].map((e=>d.createElement("tr",null,d.createElement("td",null,e.nombre),d.createElement("td",null,e.parentesco),d.createElement("td",null,e.correo),d.createElement("td",null,d.createElement("div",{className:"opciones"},d.createElement(u,{icon:ee,className:"icon"}),d.createElement(u,{icon:te,className:"icon"})))))))),d.createElement("div",{className:"anadirFamiliar"},d.createElement(u,{icon:ae}))))))))}const vt=x.div`
  /* width: 100%;
  height: 100%; */
  /* background-color: #afa; */
  height: 100vh;
`;function yt({}){return d.createElement(d.Fragment,null,d.createElement(vt,null,d.createElement(bt,null)))}const Nt=x.div`
  display: grid;
  grid-template-rows: auto 1fr;
  /* position: relative; */
  .titleContainer {
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    color: ${e=>e.theme.colors.primary};
  }
  .container {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    .configItem {
      padding: 0 20px;
      width: 100%;
      height: 100px;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .icon {
        font-size: 4em;
        width: 80px;
        margin-right: 20px;
      }
      :hover {
        background-color: #E8E8E8;
      }
    }
  }
`;function Ct({setChange:e,cambiarFont:t}){m.exports.useRef(null),m.exports.useRef(null);const a=m.exports.useRef(null);m.exports.useState("ss");return d.createElement(d.Fragment,null,d.createElement("div",{className:"formatoContainer"},d.createElement("div",{className:"subContainerFont"},d.createElement("div",{className:"containerRes"},d.createElement("div",{className:"formatoTitulo"},d.createElement("h1",null,"Cambiar tipo de Fuente"),d.createElement(u,{icon:E,onClick:()=>e(!1),className:"icon"})),d.createElement("form",{action:"",id:"formato",onSubmit:e=>{e.preventDefault(),t(a.current.value),localStorage.setItem("fontFamily",a.current.value),Fe(a.current.value)}},d.createElement("div",{className:"formatoItem formato3"},d.createElement("div",{className:"item"},d.createElement("p",null,"Font Family"),d.createElement("p",{className:"formatoP"},"Tipo de fuente del editor"),d.createElement("input",{type:"text",name:"font",id:"",ref:a})),d.createElement("button",{type:"button",onClick:()=>{Fe("Open Sans, sans-serif"),localStorage.removeItem("fontFamily")}},"reset")))),d.createElement("div",{className:"buttonF"},d.createElement("button",{form:"formato"},"Aplicar")))))}function St({cambiarFont:e}){const{language:t,setLanguage:a,texts:n}=m.exports.useContext(Se),[l,r]=m.exports.useState(!1),[o,i]=m.exports.useState(localStorage.getItem("fontFamily"));return m.exports.useEffect((()=>{null!==o&&Fe(o)}),[]),d.createElement(d.Fragment,null,l?d.createElement(Ct,{setChange:r,cambiarFont:e}):null,d.createElement(Nt,null,d.createElement("div",{className:"titleContainer"},d.createElement("h1",null,n[t].Configuraciones)),d.createElement("div",{className:"container"},d.createElement("div",{className:"configItem",onClick:e=>{a((e=>"es"===e?"en":"es"))}},d.createElement(u,{icon:ne,className:"icon"}),d.createElement("p",null,n[t].CambiarIdioma)),d.createElement("div",{className:"configItem",onClick:e=>{r(!0)}},d.createElement(u,{icon:le,className:"icon"}),d.createElement("p",null,n[t].CambiarFuente)))))}function wt({cambiarFont:e}){return d.createElement(d.Fragment,null,d.createElement("div",{className:"clinicaContainer"},d.createElement(tt,null),d.createElement(re,null,d.createElement(oe,{path:"/ClinicaPaciente/Config"},d.createElement(St,{cambiarFont:e})),d.createElement(oe,{path:"/ClinicaPaciente/Formulario"},d.createElement(et,null)),d.createElement(oe,{path:"/ClinicaPaciente/Consultas"},d.createElement(mt,null)),d.createElement(oe,{path:"/ClinicaPaciente"},d.createElement(yt,null)))))}const Ft=x.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr;
  .ContainertablaPacientes {
    width: 100%;
    overflow: auto;
    height: fit-content;
  }
  `,It=x.div`
  display: flex;
  align-items: center;
  overflow: auto;
  height: 100%;
  padding: 0 80px 0px 0px;
`;function kt({}){const[e,t]=m.exports.useState([]),{language:a,setLanguage:n,texts:l}=m.exports.useContext(Se),r=e=>{t((t=>t.filter((t=>t.idCita!==e)))),function({idCita:e}){fetch(`${he}/terminarCita/${e}`).then((e=>e.json())).then((e=>e.citas))}({idCita:e})};return m.exports.useEffect((()=>{(function(){const e=JSON.parse(sessionStorage.getItem("usuario")).id;return fetch(`${he}/citaDoctor/${e}`).then((e=>e.json())).then((e=>e.citas))})().then(t)}),[]),d.createElement(d.Fragment,null,d.createElement(Ft,null,d.createElement(bt,null),d.createElement(It,null,d.createElement("div",{className:"ContainertablaPacientes"},d.createElement(Ae,null,d.createElement("div",{className:"tablaDoctores"},d.createElement("table",null,d.createElement("thead",null,d.createElement("tr",null,d.createElement("th",null,l[a].Fecha),d.createElement("th",null,l[a].Horario),d.createElement("th",null,l[a].Paciente),d.createElement("th",null,l[a].Concluir))),d.createElement("tbody",null,e.map((e=>d.createElement("tr",{key:e.idCita},d.createElement("td",null,e.fecha),d.createElement("td",null,e.turno),d.createElement("td",null,e.paciente),d.createElement("td",null,d.createElement("button",{onClick:()=>r(e.idCita)},"Concluir")))))))))))))}function Pt({}){return d.createElement(d.Fragment,null,d.createElement("div",{className:"clinicaContainer"},d.createElement(tt,null),d.createElement(re,null,d.createElement(oe,{path:"/Clinica/Config"},d.createElement(St,null)),d.createElement(oe,{path:"/ClinicaDoctor"},d.createElement(kt,null)))))}const At=x.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr;
  .ContainertablaPacientes {
    width: 100%;
    overflow: auto;
    height: fit-content;
  }
  `,zt=x.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 70%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  `,jt=x(f)`
  background-color: ${e=>e.theme.colors.primary};
  height: 40px;
  width: 50%;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  text-decoration: none;
`;function $t({}){const{language:e,setLanguage:t,texts:a}=m.exports.useContext(Se);return d.createElement(d.Fragment,null,d.createElement(At,null,d.createElement(bt,null),d.createElement(zt,null,d.createElement("div",{className:"container"},d.createElement(jt,{to:"/ClinicaAdministrador/AdministrarPersonal"},a[e].AdministrarPersonal),d.createElement(jt,{to:"/ClinicaAdministrador/AdministrarPacientes"},a[e].AdministrarPacientes),d.createElement(jt,{to:"/ClinicaAdministrador/AdministrarCamas"},a[e].AdministrarCamas)))))}const Ot=x.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`,Tt=x.div`
  margin: 20px 0 50px 20px;
  display: flex;
  justify-content: flex-start;
  color: ${e=>e.theme.colors.primary};
  h1 {
    line-height: 50px;
    font-size: 2.4em;
  }
  .icon {
    font-size: 3em;
    margin-right: 20px;
    color: ${e=>e.theme.colors.primary};
  }
`,Dt=x.div`
  width: 80%;
  display: grid;
  margin: auto;
  grid-template-rows: 50px 1fr 100px;
  height: 100%;

`,Mt=x.div`

`,Lt=x.div`
  margin: 40px 0;
  overflow: hidden;
  max-height: calc(100vh - 400px);
  h1 {
    padding-left: 20px;
    font-size: 1.5em;
    text-align: left;
    width: 100%;
    color: ${e=>e.theme.colors.primary};
    font-family: 'Roboto Mono', monospace;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    /* height: 40vh; */
  }
  th {
    color: ${e=>e.theme.colors.primary}
  }
  th, td {
    font-family: 'Roboto Mono', monospace;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  tr {
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;
  }
  td {
    color: #999;
    font-size: 15px;
    line-height: 1.4;
  }
  .sexo{
    width: 100px;
    /* max-width: 100px; */
  }
  .editar, .vigencia {
    width: 160px;
  }

  thead {
    position: sticky;
    top: 0;
    background-color: #fff;
  }
`,Rt=x.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  button {
    background: ${e=>e.theme.colors.primary};
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.3em;
    padding: 10px 20px;
  }
`;function Ht({type:e,setAnadir:t,children:a}){return d.createElement(d.Fragment,null,d.createElement("button",{onClick:()=>{t(!0)}},a))}const Bt=x.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`,Jt=x.div`
  width: 800px;
  /* height: 500px; */
  background-color: #fff;
  display: grid;
  grid-template-rows: auto 1fr;
  padding-top: 10px;
  overflow: auto;
  max-height: calc(100vh - 100px);
`,_t=x.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 0 20px;
  color: ${e=>e.theme.colors.primary};
  .icon {
    font-size: 2.5em;
    cursor: pointer;
  }
`,Ut=x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  form {
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    label {
      margin: 10px 0;
      display: block;
    }
    input[type='text'], input[type='password'] {
      display: block;
      outline: none;
      width: 100%;
      height: 30px;
      padding-left: 5px;
      border: 1px solid #ccc;
    }
    .buttons {
      display: flex;
    }
    .button {
      width: 150px;
      background-color: ${e=>e.theme.colors.primary};
      border: none;
      outline: none;
      color: #fff;
      padding: 8px 0px;
      cursor: pointer;
      margin: 20px auto;
      font-size: 1.3em;
    }
    h2 {
      margin-top: 10px;
    }
    .MuiFormControl-marginNormal {
      margin: 0;
    }
    .select {
      width: 100%;
      height: fit-content;
      position: relative;
    }
    .buttonc {
      margin: 30px auto;
    }
  }
`;function Vt(){return fetch(`${he}/listarPacientes`).then((e=>e.json())).then((e=>e.pacientes))}const qt=[{value:"cardiologia",label:"Cardiologia"},{value:"traumatologia",label:"Traumatologia"},{value:"oncologia",label:"Oncologia"},{value:"oncologia",label:"Oncologia"},{value:"oncologia",label:"Oncologia"},{value:"oncologia",label:"Oncologia"},{value:"oncologia",label:"Oncologia"},{value:"oncologia",label:"Oncologia"}],Xt=[{value:"mañana",label:"Mañana"},{value:"tarde",label:"Tarde"},{value:"noche",label:"Noche"}],Yt=[{value:"M",label:"Masculino"},{value:"F",label:"Femenino"}];function Gt({type:e,setAnadir:t,setDoctores:a,setPacientes:n,setCamas:l}){const[r,o]=m.exports.useState(),[s,p]=m.exports.useState([]),g={Personal:e=>function(e){return fetch(`${he}/crearDoctor`,{method:"POST",body:e}).then((e=>e.json())).then((e=>e.doctores))}(e).then((e=>{a(e),t(!1)})),Paciente:e=>function(e){return fetch(`${he}/crearPaciente`,{method:"POST",body:e}).then((e=>e.json())).then((e=>e.paciente))}(e).then((e=>{n(e),t(!1)})),Camas:e=>function(e){return fetch(`${he}/crearCama`,{method:"POST",body:e}).then((e=>e.json())).then((e=>e.camas))}(e).then((e=>{l(e),t(!1)}))};m.exports.useEffect((()=>{"Camas"===e&&Vt().then((e=>{p((t=>t.concat(e.map((e=>({value:e.id,label:e.nombre}))))))}))}),[]);const[f,h]=m.exports.useState(localStorage.getItem("fontFamily")),[x,S]=m.exports.useState(localStorage.getItem("fontSize"));return m.exports.useEffect((()=>{null!==f&&Fe(f,x)}),[]),d.createElement(d.Fragment,null,d.createElement(Bt,null,d.createElement(Jt,null,d.createElement(_t,null,d.createElement("h1",null,d.createElement(u,{icon:ie})," Añadir ",e),d.createElement(u,{icon:E,onClick:()=>{t(!1)},className:"icon"})),d.createElement(Ut,null,d.createElement("form",{onSubmit:t=>{t.preventDefault();const a=new FormData(t.target);g[e](a)}},"Personal"===e?d.createElement(d.Fragment,null,d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"nombre"},"Nombre"),d.createElement("input",{type:"text",name:"nombre",autoComplete:"off"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"apellido"},"Apellido"),d.createElement("input",{type:"text",name:"apellido",autoComplete:"off"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"usuario"},"DNI"),d.createElement("input",{type:"text",name:"usuario",autoComplete:"off"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"sexo"},"Sexo"),d.createElement(b,{options:Yt,name:"sexo",placeholder:"Elige un sexo"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"especialidad"},"Especialidad"),d.createElement(b,{options:qt,name:"especialidad",placeholder:"Elige una especialidad",styles:{menuList:e=>c(i({},e),{height:"200px"})}})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"turno"},"Turno"),d.createElement(b,{options:Xt,name:"turno",placeholder:"Elige un turno"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"correo"},"Correo"),d.createElement("input",{type:"text",name:"correo",autoComplete:"off"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"contraseña"},"Contraseña"),d.createElement("input",{type:"password",name:"contrasena"})),d.createElement("button",{className:"button"},"Enviar")):null,"Paciente"===e?d.createElement(d.Fragment,null,d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"nombre"},"Nombre"),d.createElement("input",{type:"text",name:"nombre"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"apellido"},"Apellido"),d.createElement("input",{type:"text",name:"apellido",autoComplete:"off"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"usuario"},"DNI"),d.createElement("input",{type:"text",name:"usuario",autoComplete:"off"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"sexo"},"Sexo"),d.createElement(b,{options:Yt,name:"sexo",placeholder:"Elige un sexo"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"vigencia"},"Vigencia"),d.createElement(v,{utils:y},d.createElement(N,{container:!0,justifyContent:"space-around"},d.createElement(C,{name:"vigencia",margin:"normal",id:"date-picker-dialog",format:"dd/MM/yyyy",value:r,onChange:e=>{o(e)},KeyboardButtonProps:{"aria-label":"change date"},style:{width:"100%"}})))),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"tipoSeguro"},"Tipo de seguro"),d.createElement(b,{options:[{value:"Titular",label:"Titular"},{value:"Otro",label:"Otro"}],name:"tipoSeguro",placeholder:"Elige un turno"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"centro"},"Centro Asistencial"),d.createElement(b,{options:[{value:"UNMSM",label:"UNMSM"},{value:"PUCP",label:"PUCP"}],name:"centro",placeholder:"Elige un turno"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"correo"},"Correo"),d.createElement("input",{type:"text",name:"correo",autoComplete:"off"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"contrasena"},"Contraseña"),d.createElement("input",{type:"password",name:"contrasena",autoComplete:"off"})),d.createElement("button",{className:"button"},"Enviar")):null,"Camas"===e?d.createElement(d.Fragment,null,d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"paciente"},"Paciente"),d.createElement(b,{options:s,name:"paciente",placeholder:"Elige un paciente",styles:{menuList:e=>c(i({},e),{maxHeight:"200px"})}})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"sala"},"Sala"),d.createElement(b,{options:[{value:"1",label:"Sala 1"},{value:"2",label:"Sala 2"}],name:"sala",placeholder:"Elige una sala"})),d.createElement("div",{className:"formItem"},d.createElement("label",{htmlFor:"ocupada"},"Ocupada"),d.createElement(b,{options:[{value:"Ocupada",label:"Ocupada"},{value:"Sin ocupar",label:"Sin ocupar"}],name:"ocupada",placeholder:"Elige una sala"})),d.createElement("button",{className:"button buttonc"},"Enviar")):null)))))}function Kt({}){const[e,t]=m.exports.useState([]),[a,n]=m.exports.useState(!1),{language:l,setLanguage:r,texts:o}=m.exports.useContext(Se);m.exports.useEffect((()=>{fetch(`${he}/listarDoctores`).then((e=>e.json())).then((e=>e.doctores)).then(t)}),[]);const[i,c]=m.exports.useState(localStorage.getItem("fontFamily")),[s,p]=m.exports.useState(localStorage.getItem("fontSize"));return m.exports.useEffect((()=>{null!==i&&Fe(i,s)}),[]),d.createElement(d.Fragment,null,a?d.createElement(Gt,{type:"Personal",setAnadir:n,setDoctores:t}):null,d.createElement(Ot,null,d.createElement(Tt,null,d.createElement(f,{to:"/ClinicaAdministrador"},d.createElement(u,{icon:ce,className:"icon"})),d.createElement("h1",null,o[l].AdministrarPersonal)),d.createElement(Dt,null,d.createElement(Mt,null,d.createElement("input",{type:"text"})),d.createElement(Lt,null,d.createElement(Ae,null,d.createElement("div",{className:"tablapacientees"},d.createElement("table",null,d.createElement("thead",null,d.createElement("tr",null,d.createElement("th",null,o[l].Nombre),d.createElement("th",{className:"sexo"},o[l].Sexo),d.createElement("th",null,o[l].Especialidad),d.createElement("th",{className:"vigencia"},o[l].Turno))),d.createElement("tbody",null,e.map(((e,t)=>d.createElement("tr",{key:e.id},d.createElement("td",null,e.nombre),d.createElement("td",null,e.sexo),d.createElement("td",null,e.especialidad),d.createElement("td",null,e.turno))))))))),d.createElement(Rt,null,d.createElement(Ht,{type:"Personal",setAnadir:n},o[l].AnadirPersonal)))))}const Qt=x.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`,Zt=x.div`
  margin: 20px 0 50px 20px;
  display: flex;
  justify-content: flex-start;
  color: ${e=>e.theme.colors.primary};
  h1 {
    line-height: 50px;
    font-size: 2.4em;
  }
  .icon {
    font-size: 3em;
    margin-right: 20px;
    color: ${e=>e.theme.colors.primary};
  }
`,Wt=x.div`
  width: 80%;
  display: grid;
  margin: auto;
  grid-template-rows: 50px 1fr 100px;
  height: 100%;

`,ea=x.div`

`,ta=x.div`
  margin: 40px 0;
  overflow: hidden;
  max-height: calc(100vh - 400px);
  h1 {
    padding-left: 20px;
    font-size: 1.5em;
    text-align: left;
    width: 100%;
    color: ${e=>e.theme.colors.primary};
    font-family: 'Roboto Mono', monospace;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    /* height: 40vh; */
  }
  th {
    color: ${e=>e.theme.colors.primary}
  }
  th, td {
    font-family: 'Roboto Mono', monospace;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  tr {
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;
  }
  td {
    color: #999;
    font-size: 15px;
    line-height: 1.4;
  }
  .sexo{
    width: 100px;
    /* max-width: 100px; */
  }
  .editar, .vigencia {
    width: 160px;
  }

  thead {
    position: sticky;
    top: 0;
    background-color: #fff;
  }
`,aa=x.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .button {
    background: ${e=>e.theme.colors.primary};
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.3em;
    padding: 10px 20px;
  }
`;function na({}){const[e,t]=m.exports.useState([]),[a,n]=m.exports.useState(!1),{language:l,setLanguage:r,texts:o}=m.exports.useContext(Se),[s,p]=m.exports.useState(!1),[E,g]=m.exports.useState([]),[h,x]=m.exports.useState(""),[S,w]=m.exports.useState(),F=e=>{w(e)};m.exports.useEffect((()=>{Vt().then(t)}),[]);const[I,k]=m.exports.useState(localStorage.getItem("fontFamily")),[P,A]=m.exports.useState(localStorage.getItem("fontSize"));m.exports.useEffect((()=>{null!==I&&Fe(I,P)}),[]);const z=[{value:"M",label:"Masculino"},{value:"F",label:"Femenino"}];m.exports.useEffect((()=>{Vt().then((e=>{g((t=>t.concat(e.map((e=>({value:e.id,label:e.nombre}))))))}))}),[]);const j=e=>{p(!s),document.querySelector("#nombre"),document.querySelector("#sexo"),document.querySelector("#tipo"),document.querySelector("#centro");const t=e.target.parentNode.parentNode;x(t.id)};return d.createElement(d.Fragment,null,a?d.createElement(Gt,{type:"Paciente",setAnadir:n,setPacientes:t}):null,d.createElement(Qt,null,d.createElement(Zt,null,d.createElement(f,{to:"/ClinicaAdministrador"},d.createElement(u,{icon:ce,className:"icon"})),d.createElement("h1",null,o[l].AdministrarPacientes)),d.createElement(Wt,null,d.createElement(ea,null,d.createElement("input",{type:"text"})),d.createElement(ta,null,d.createElement(Ae,null,d.createElement("div",{className:"tablapacientees"},d.createElement("table",null,d.createElement("thead",null,d.createElement("tr",null,d.createElement("th",null,o[l].Nombre),d.createElement("th",null,o[l].Sexo),d.createElement("th",null,o[l].Vigencia),d.createElement("th",null,o[l].TipoSeguro),d.createElement("th",null,o[l].CentroAsistencial),d.createElement("th",{className:"editar"},"Editar"))),d.createElement("tbody",null,e.map(((e,t)=>d.createElement("tr",{key:e.id,id:e.id},s&&h==e.id?d.createElement(d.Fragment,null,d.createElement("td",null,d.createElement("input",{type:"text",id:"nombre"})),d.createElement("td",null,d.createElement(b,{options:z,name:"sexo",placeholder:"Elige un sexo",id:"sexo",styles:{control:e=>c(i({},e),{width:"calc(100% - 40px)"})}})),d.createElement("td",null,d.createElement(v,{utils:y},d.createElement(N,{container:!0,justifyContent:"space-around"},d.createElement(C,{name:"fecha",margin:"normal",id:"date-picker-dialog",format:"dd/MM/yyyy",value:S,onChange:F,KeyboardButtonProps:{"aria-label":"change date"},style:{width:"100%"}})))),d.createElement("td",null,d.createElement(b,{options:[{value:"Titular",label:"Titular"},{value:"No Titular",label:"No titular"}],name:"sala",placeholder:"Elige una sala",id:"tipo",styles:{control:e=>c(i({},e),{width:"calc(100% - 40px)"})}})),d.createElement("td",null,d.createElement(b,{options:[{value:"UNMSM",label:"UNMSM"},{value:"PUCP",label:"PUCP"}],name:"sala",placeholder:"Elige una sala",id:"centro",styles:{control:e=>c(i({},e),{width:"calc(100% - 40px)"})}})),d.createElement("td",null,d.createElement("button",{className:"button",onClick:j},"Aceptar"),d.createElement("button",{className:"button",onClick:()=>p(!1)},"Cancelar"))):d.createElement(d.Fragment,null,d.createElement("td",null,e.nombre),d.createElement("td",null,e.sexo),d.createElement("td",null,e.vigencia),d.createElement("td",null,e.tipoSeguro),d.createElement("td",null,e.centro),d.createElement("td",null,d.createElement("button",{className:"button",onClick:e=>{const t=e.target.parentNode.parentNode;x(t.id),p(!s)}},"Editar"))))))))))),d.createElement(aa,null,d.createElement(Ht,{type:"Paciente",setAnadir:n},o[l].AnadirPaciente)))))}const la=x.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`,ra=x.div`
  margin: 20px 0 50px 20px;
  display: flex;
  justify-content: flex-start;
  color: ${e=>e.theme.colors.primary};
  h1 {
    line-height: 50px;
    font-size: 2.4em;
  }
  .icon {
    font-size: 3em;
    margin-right: 20px;
    color: ${e=>e.theme.colors.primary};
  }
`,oa=x.div`
  width: 80%;
  display: grid;
  margin: auto;
  grid-template-rows: 50px 1fr 100px;
  height: 100%;

`,ia=x.div`

`,ca=x.div`
  margin: 40px 0;
  overflow: hidden;
  max-height: calc(100vh - 400px);
  h1 {
    padding-left: 20px;
    font-size: 1.5em;
    text-align: left;
    width: 100%;
    color: ${e=>e.theme.colors.primary};
    font-family: 'Roboto Mono', monospace;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    /* height: 40vh; */
  }
  th {
    color: ${e=>e.theme.colors.primary}
  }
  th, td {
    font-family: 'Roboto Mono', monospace;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  tr {
    border-bottom: 1px solid #ccc;
    padding: 0 20px;
    box-sizing: border-box;
  }
  td {
    color: #999;
    font-size: 15px;
    line-height: 1.4;
  }
  .sexo{
    width: 100px;
    /* max-width: 100px; */
  }
  .editar, .vigencia {
    width: 160px;
  }
  .small {
    width: 160px;
  }

  thead {
    position: sticky;
    top: 0;
    background-color: #fff;
  }
  /* .paciente {
    width: 300px;
  } */
`,sa=x.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  button {
    background: ${e=>e.theme.colors.primary};
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1.3em;
    padding: 10px 20px;
  }
`;function ma({}){const[e,t]=m.exports.useState([]),[a,n]=m.exports.useState(!1),[l,r]=m.exports.useState(!1),[o,s]=m.exports.useState([]),{language:p,setLanguage:E,texts:g}=m.exports.useContext(Se),[h,x]=m.exports.useState("");m.exports.useEffect((()=>{fetch(`${he}/listarCamas`).then((e=>e.json())).then((e=>e.camas)).then(t)}),[]);const[v,y]=m.exports.useState(localStorage.getItem("fontFamily")),[N,C]=m.exports.useState(localStorage.getItem("fontSize"));m.exports.useEffect((()=>{null!==v&&Fe(v,N)}),[]);const S=e=>{r(!l);const a=document.querySelector("#sala"),n=document.querySelector("#ocupada"),o=document.querySelector("#paciente");var i;(i={idCama:row.id,sala:a.childNodes[2].value,estado:n.childNodes[2].value,idUsuario:o.childNodes[2].value},fetch(`${he}/editarCama`,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(i)}).then((e=>e.json())).then((e=>e.camas))).then(t)};return m.exports.useEffect((()=>{Vt().then((e=>{s((t=>t.concat(e.map((e=>({value:e.id,label:e.nombre}))))))}))}),[]),d.createElement(d.Fragment,null,a?d.createElement(Gt,{type:"Camas",setAnadir:n,setCamas:t}):null,d.createElement(la,null,d.createElement(ra,null,d.createElement(f,{to:"/ClinicaAdministrador"},d.createElement(u,{icon:ce,className:"icon"})),d.createElement("h1",null,g[p].AdministrarCamas)),d.createElement(oa,null,d.createElement(ia,null,d.createElement("input",{type:"text"})),d.createElement(ca,null,d.createElement(Ae,null,d.createElement("div",{className:"tablapacientees"},d.createElement("table",null,d.createElement("thead",null,d.createElement("tr",null,d.createElement("th",null,g[p].Cama),d.createElement("th",null,g[p].Sala),d.createElement("th",null,g[p].Ocupada),d.createElement("th",null,g[p].Paciente),d.createElement("th",null,"Cambiar estado"))),d.createElement("tbody",null,e.map(((e,t)=>d.createElement("tr",{key:e.idcamas,id:e.idcamas},d.createElement("td",null,e.idcamas),l&&h==e.idcamas?d.createElement(d.Fragment,null,d.createElement("td",null,d.createElement(b,{options:[{value:"1",label:"Sala 1"},{value:"2",label:"Sala 2"}],name:"sala",placeholder:"Elige una sala",id:"sala",styles:{control:e=>c(i({},e),{width:"calc(100% - 40px)"})}})),d.createElement("td",null,d.createElement(b,{options:[{value:"Ocupada",label:"Ocupada"},{value:"Sin ocupar",label:"Sin ocupar"}],name:"ocupada",placeholder:"Elige",id:"ocupada",styles:{control:e=>c(i({},e),{width:"calc(100% - 40px)"})}})),d.createElement("td",{className:"paciente"},d.createElement(b,{options:o,name:"paciente",placeholder:"Elige un paciente",id:"paciente",styles:{menuList:e=>c(i({},e),{maxHeight:"200px"}),control:e=>c(i({},e),{width:"calc(100% - 40px)"})}})),d.createElement("td",null,d.createElement("button",{onClick:S},"Aceptar"),d.createElement("button",{onClick:()=>r(!1)},"Cancelar"))):d.createElement(d.Fragment,null,d.createElement("td",null,e.sala),d.createElement("td",null,e.estado),d.createElement("td",{className:"paciente"},e.nombre),d.createElement("td",null,d.createElement("button",{onClick:e=>{const t=e.target.parentNode.parentNode;x(t.id),r(!l)}},"Editar"))))))))))),d.createElement(sa,null,d.createElement(Ht,{type:"Camas",setAnadir:n},g[p].AnadirCama)))))}function da({}){return d.createElement(d.Fragment,null,d.createElement("div",{className:"clinicaContainer"},d.createElement(tt,null),d.createElement(re,null,d.createElement(oe,{path:"/Clinica/Config"},d.createElement(St,null)),d.createElement(oe,{path:"/ClinicaAdministrador/AdministrarCamas"},d.createElement(ma,null)),d.createElement(oe,{path:"/ClinicaAdministrador/AdministrarPacientes"},d.createElement(na,null)),d.createElement(oe,{path:"/ClinicaAdministrador/AdministrarPersonal"},d.createElement(Kt,null)),d.createElement(oe,{path:"/ClinicaAdministrador"},d.createElement($t,null)))))}const ua=x.div`
  width: 100%;
  height: 100%;
`,pa=x.h1`
  margin: 0;
  width: fit-content;
  font-size: 2.5em;
  color: transparent;
  background: ${e=>e.theme.colors.gradients.primary_reverse};
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`,Ea=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 180px;
  width: 100%;
`,ga=x.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* margin: auto; */
  padding: 0 30px;
`;x.input`
  width: 70%;
  min-width: 200px;
  height: 35px;
  margin-top: 20px;
  outline: none;
  padding: 0 5px;
  font-size: .8em;
`;const fa=x.button`
  outline: none;
  border: none;
  background: ${e=>e.theme.colors.gradients.primary};
  width: 150px;
  height: 40px;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
`,ha=x.div`
  width: ${e=>e.apellido?100:70}%;
  max-width: ${e=>e.apellido?"45%":"100%"};
  height: 50px;
  margin-top: 20px;
  position: relative;
`,xa=x.div`
  height: 100%;
  overflow: hidden;
  position: relative;
`,ba=x.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-top: 20px;

  :focus + label span,
  :valid + label span
  {
    color: ${e=>e.theme.colors.primary};
    transform: translateY(-150%)
  }

  :focus + label::after,
  :valid + label::after
  {
    right: 0;
  }

  &.on:focus + label::before,
  &.on:valid + label::before
  {
    right: 0;
  }
`,va=x.label`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 1px solid #000;
  pointer-events: none;
  /* overflow: hidden; */

  span {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
    font-size: 14px;
  }

  ::after {
    content: '';
    width: 100%;
    height: 3px;
    background: ${e=>e.theme.colors.gradients.primary};
    position: absolute;
    bottom: -1px;
    right: 100%;
    transition: all .3s ease;
  }

  ::before {
    content: '';
    width: 100%;
    height: 3px;
    background: red;
    position: absolute;
    bottom: -1px;
    right: 100%;
    z-index: 100;
    transition: all .3s ease;
  }
`;var ya=d.forwardRef((function(e,t){var a=e,{name:n,maxLength:l,label:r,children:o}=a,c=s(a,["name","maxLength","label","children"]);return d.createElement(d.Fragment,null,d.createElement(ha,{apellido:c.apellido},d.createElement(xa,null,d.createElement(ba,i({autoComplete:"off",name:n,type:n.includes("password")?"password":"text",required:!0,maxLength:l},c)),d.createElement(va,{id:"labelLogin"},d.createElement("span",null,r))),o))}));function Na({}){const[e,t]=m.exports.useState(!1),[a,n]=m.exports.useState(!1),[l,r]=m.exports.useState(""),{handleSubmit:o,register:c,clearErrors:s,formState:{errors:u}}=se({mode:"onBlur",reValidateMode:"onChange",criteriaMode:"all"});let p=h();const E=c("dni",{minLength:{value:8,message:"8 digitos pls"}});return d.createElement(d.Fragment,null,e?d.createElement(xe,null):null,a?d.createElement(be,{setErrorM:n,message:l}):null,d.createElement(ua,null,d.createElement(ga,{onSubmit:o(((e,a)=>{a.preventDefault(),t(!0),function(e){let t="";return fetch(`${he}/signin`,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>(e.valid&&sessionStorage.setItem("usuario",JSON.stringify(e.user)),"doctor"===e.user.tipoUsuario?t="/ClinicaDoctor":"paciente"===e.user.tipoUsuario?t="/ClinicaPaciente":"administrador"===e.user.tipoUsuario&&(t="/ClinicaAdministrador"),{valid:e.valid,message:e.message,path:t})))}(e).then((e=>{if(t(!1),e.valid)return p.push(e.path);n(!0),r(e.message)}))}),((e,t)=>{Object.keys(e).forEach((t=>console.log(e[t])))}))},d.createElement(pa,null,"Login"),d.createElement(Ea,null,d.createElement(ya,{name:"dni",label:"DNI",maxLength:"8",onKeyPress:e=>{var t=String.fromCharCode(e.which);/[0-9]/.test(t)||e.preventDefault()},onChange:e=>{E.onChange(e),(e=>{8===e.target.value.length&&s("dni")})(e)},onBlur:E.onBlur,ref:E.ref}),d.createElement(me,{errors:u,name:"dni",render:({messages:e})=>e?Object.entries(e).map((([e,t])=>d.createElement("p",{key:e},t))):null}),d.createElement(ya,i({name:"password",label:"Contraseña"},c("password")))),d.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},d.createElement(fa,{type:"submit"},"Login"),d.createElement("span",{style:{marginTop:"10px",fontSize:"12px"}},"¿No tienes una cuenta? ",d.createElement(f,{to:"/Register"},"Registrate")),d.createElement("span",{style:{marginTop:"10px",fontSize:"12px"}},"¿No te acuerdas tu contraseña?"),d.createElement("span",{style:{marginTop:"10px",fontSize:"12px"}},d.createElement(f,{to:"/"},"Volver al Home"))))))}const Ca="@media screen and (max-width: 800px)",Sa=de`
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
`,wa=x.div`
  background: ${e=>e.theme.colors.gradients.primary};
  background-size: 700%;
  background-position: left;
  height: 100vh;
  position: relative;
  width: 100%;
  animation: ${Sa} infinite 3s alternate;
  display: flex;
  align-items: center;
  justify-content: center;
`,Fa=x.div`
  background-color: #fff;
  height: 80%;
  /* left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute; */
  min-width: 75%;
  width: 1200px;
  margin: 0 30px;
  display: grid;
  grid-template-columns: 40% 1fr;

  ${Ca} {
    display: initial;
  }
`,Ia=x.div`
  ${e=>`background-image: url('${e.path}');`}
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${Ca} {
    display: none;
  }
`;function ka({}){return d.createElement(d.Fragment,null,d.createElement(wa,null,d.createElement(Fa,null,d.createElement(Na,null),d.createElement(Ia,{path:"https://www.inoutviajes.com/fotos/20/15399_zzzdoctor-with-stethoscope-analyzing-patient-data-tablet-hospital-healthcare-medical-technology-concept.jpg"}))))}const Pa=x(Ea)`
  height: fit-content;
  p {
  color: #bf1650;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`,Aa=x.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,za=x.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`,ja=de`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,$a=x.div`
  position: absolute;
  /* top: 0; */
  z-index: 12;
  left: 50%;
  bottom: -102%;
  height: 40px;
  background-color: #fff;
  border: 1px solid ${e=>e.theme.colors.primary};
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px;
  transform-style: preserve-3d;
  transition: .3s;
  animation: ${ja} .1s linear;
  ::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid ${e=>e.theme.colors.primary};
    position: absolute;
    top: 0;
    background-color: #fff;
    transform: rotate(45deg) translateY(-50%) translateZ(-1px);
  }
  p {
    color: ${e=>e.theme.colors.primary};
    font-size: .7em;
    text-align: center;
  }
`;function Oa({}){let e=h();const[t,a]=m.exports.useState(!1),[n,l]=m.exports.useState(!1),[r,o]=m.exports.useState(""),[c,s]=m.exports.useState({nombres:"",paterno:"",materno:""}),{handleSubmit:u,register:p,setError:E,watch:g,clearErrors:x,formState:{errors:b}}=se({mode:"onBlur",reValidateMode:"onChange",criteriaMode:"all"}),v=g("password",""),y=p("dni",{minLength:{value:8,message:"El dni deben ser 8 digitos"}}),N=e=>{const t=e.target.value;8===t.length?(x("dni"),function(e){return fetch("http://servicio.dayangels.com/api/reniec/dni-lite",{mode:"no-cors",method:"POST",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json, text/plain, */*","Content-Type":"application/json",Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjgyNzc3MzAsImlzcyI6ImxvY2FsaG9zdCIsInVzZXJfaWQiOjQyOTB9.Sn_dYYRQ4u1WSm0aMAR3bfgEH3h0fKbB977gMfyRM7U"},body:JSON.stringify({dni:e})}).then((e=>e.json())).then((e=>e.response))}(t).then((e=>{void 0!==e?s(e):console.log("avion dijo el camion")}))):s({nombres:"",paterno:"",materno:""})},C=p("nombre"),S=p("apellidoP"),w=p("apellidoM"),F=p("passwordC");return d.createElement(d.Fragment,null,t?d.createElement(xe,null):null,n?d.createElement(be,{setErrorM:l,message:r}):null,d.createElement(ua,null,d.createElement(ga,{onSubmit:u(((t,n)=>{n.preventDefault(),a(!0);const r=new Date,i={nombre:t.nombre||c.nombres,apellidoP:t.apellidoP||c.paterno,apellidoM:t.apellidoM||c.materno,dni:t.dni||c.dni,sexo:c.sexo,correo:t.correo,contrasena:t.password,vigencia:`${r.getDate()}/${r.getMonth()+1}/${r.getFullYear()+1}`,tipoUsuario:"paciente"};var s;(s=i,fetch(`${he}/signup`,{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(s)}).then((e=>e.json())).then((e=>(console.log(e),"user created"===e.message&&sessionStorage.setItem("usuario",JSON.stringify(e.user)),e.message)))).then((t=>{if(a(!1),"user created"===t)return e.push("/ClinicaPaciente");l(!0),o(t)}))}))},d.createElement(pa,null,"Registro"),d.createElement(Pa,null,d.createElement(ya,{name:"dni",label:"DNI",maxLength:"8",onKeyPress:e=>{var t=String.fromCharCode(e.which);/[0-9]/.test(t)||e.preventDefault()},onChange:e=>{y.onChange(e),N(e)},onBlur:y.onBlur,ref:y.ref},d.createElement(me,{errors:b,name:"dni",maxLength:"8",render:({messages:e})=>e?d.createElement($a,null,d.createElement("p",null,e.minLength)):null})),d.createElement(ya,{name:"nombre",label:"Nombre",value:c.nombres,onChange:C.onChange,onBlur:C.onBlur,ref:C.ref}),d.createElement(me,{errors:b,name:"nombre",render:({messages:e})=>e?Object.entries(e).map((([e,t])=>d.createElement("p",{key:e},t))):null}),d.createElement(Aa,null,d.createElement(za,null,d.createElement(ya,{name:"apellidoP",label:"Apellido Paterno",value:c.paterno,apellido:!0,onChange:S.onChange,onBlur:S.onBlur,ref:S.ref}),d.createElement(ya,{name:"apellidoM",label:"Apellido Materno",value:c.materno,apellido:!0,onChange:w.onChange,onBlur:w.onBlur,ref:w.ref}))),d.createElement(ya,i({name:"correo",label:"Email"},p("correo",{pattern:{value:/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+/g,message:"El correo debe seguir el patron xxxx@xxxx.xxxx"}})),d.createElement(me,{errors:b,name:"correo",render:({messages:e})=>e?d.createElement($a,null,d.createElement("p",null,e.pattern)):null})),d.createElement(ya,i({name:"password",label:"Contraseña"},p("password",{minLength:{value:3,message:"La contraseña debe tener 8 digitos como minimo(por ahora solo 123 xfa)"}})),d.createElement(me,{errors:b,name:"password",render:({messages:e})=>e?d.createElement($a,null,d.createElement("p",null,e.minLength)):null})),d.createElement(ya,{name:"passwordC",label:"Confirmar contraseña",onChange:e=>{F.onChange(e),(e=>{v===e.target.value?x("passwordC"):E("passwordC",{type:"manual",message:"No coincide"})})(e)},onBlur:F.onBlur,ref:F.ref},b.passwordC&&d.createElement($a,null," ",d.createElement("p",null,b.passwordC.message)))),d.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},d.createElement(fa,{type:"submit"},"Registrate"),d.createElement("span",{style:{marginTop:"10px",fontSize:"12px"}},"¿Ya tienes una cuenta? ",d.createElement(f,{to:"/login"},"Logeate")),d.createElement("span",{style:{marginTop:"10px",fontSize:"12px"}},d.createElement(f,{to:"/"},"Volver al Home"))))))}function Ta({}){return d.createElement(d.Fragment,null,d.createElement(wa,null,d.createElement(Fa,null,d.createElement(Ia,{path:"https://wallpaperaccess.com/full/624111.jpg"}),d.createElement(Oa,null))))}function Da(){const[e,t]=m.exports.useState();return m.exports.useEffect((()=>{}),[e]),d.createElement(d.Fragment,null,d.createElement(we,null,d.createElement(ue,null,d.createElement(re,null,d.createElement(oe,{path:"/Login"},d.createElement(ka,null)),d.createElement(oe,{path:"/Register"},d.createElement(Ta,null)),d.createElement(oe,{path:"/ClinicaPaciente"},d.createElement(wt,{cambiarFont:t})),d.createElement(oe,{path:"/ClinicaDoctor"},d.createElement(Pt,null)),d.createElement(oe,{path:"/ClinicaAdministrador"},d.createElement(da,null)),d.createElement(oe,{path:"/"},d.createElement(fe,null))))))}pe.render(d.createElement(Ee,{theme:{colors:{primary:"#1bd3da",secondary:"#389FED",gradients:{primary:"linear-gradient(to right, #61d5ff 0%, #00d9e2 40%, #00ecd8 100%)",primary_reverse:"linear-gradient(to right top, #00ecd8 0%, #00d9e2 40%, #61d5ff 100%)"}}}},d.createElement(Da,null)),document.getElementById("root"));
