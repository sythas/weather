export default function Icon({ name = 'sunny'}) {
  switch (name) {
    case 'cloudy':
      return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.944,11.112C18.507,7.67,15.56,5,12,5C9.244,5,6.85,6.611,5.757,9.15C3.609,9.792,2,11.82,2,14c0,2.757,2.243,5,5,5h11 c2.206,0,4-1.794,4-4C22,13.12,20.695,11.538,18.944,11.112z M18,17H7c-1.654,0-3-1.346-3-3c0-1.404,1.199-2.756,2.673-3.015 l0.581-0.102l0.192-0.558C8.149,8.274,9.895,7,12,7c2.757,0,5,2.243,5,5v1h1c1.103,0,2,0.897,2,2S19.103,17,18,17z"></path></svg>
    case 'rain':
      return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 13H10V20H8zM11 15H13V22H11zM14 13H16V20H14z"></path><path d="M18.944,10.113C18.507,6.671,15.56,4.001,12,4.001c-2.756,0-5.15,1.611-6.243,4.15C3.609,8.793,2,10.82,2,13.001 c0,2.757,2.243,5,5,5v-2c-1.654,0-3-1.346-3-3c0-1.403,1.199-2.756,2.673-3.015l0.581-0.103l0.192-0.559 C8.149,7.274,9.895,6.001,12,6.001c2.757,0,5,2.243,5,5v1h1c1.103,0,2,0.897,2,2s-0.897,2-2,2h-1v2h1c2.206,0,4-1.794,4-4 C22,12.12,20.695,10.539,18.944,10.113z"></path></svg>
    case 'snow':
      return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.944,10.112C18.507,6.67,15.56,4,12,4C9.244,4,6.85,5.611,5.757,8.15C3.609,8.792,2,10.819,2,13c0,2.757,2.243,5,5,5v-2 c-1.654,0-3-1.346-3-3c0-1.403,1.199-2.756,2.673-3.015l0.581-0.103l0.192-0.559C8.149,7.273,9.895,6,12,6c2.757,0,5,2.243,5,5v1h1 c1.103,0,2,0.897,2,2s-0.897,2-2,2h-1v2h1c2.206,0,4-1.794,4-4C22,12.119,20.695,10.538,18.944,10.112z"></path><circle cx="15" cy="16" r="1"></circle><circle cx="15" cy="19" r="1"></circle><circle cx="12" cy="18" r="1"></circle><circle cx="12" cy="21" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="9" cy="16" r="1"></circle></svg>
    default:
      return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"></path><path fillRule="evenodd" d="M8.202.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L5.232.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.19l-1.532-.245a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.509.36a.25.25 0 00-.154.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334L.79 10.768a.25.25 0 00.154.374l1.51.36a.25.25 0 01.188.282l-.244 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.508a.25.25 0 00-.374-.155l-1.322.812a.25.25 0 01-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" clipRule="evenodd"></path></svg>
  }
}