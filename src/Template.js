import Menu from "./components/Menu";
import "./SearchEffect";

function Template(){
    return(
        <header className="fixed">
            <Menu />
            <div className="flex justify-between items-center header-shadow">
                <nav className="flex items-center w-[55vw] py-1 relative">
                    {/* Icons de navegacao */}
                    <div className="relative file-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="icon icon--feather mx-2 hover:bg-slate-200 rounded-md p-1 header-icon"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                        <span className="p-2 bg-slate-300 text-s absolute text-center w-28 -left-8 rounded-2xl svg-title">File Manager</span>
                    </div>
                    <div class="relative file-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="icon icon--feather mx-2 hover:bg-slate-200 rounded-md p-1 header-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        <span className="p-2 bg-slate-300 text-s absolute text-center w-28 -left-8 rounded-2xl svg-title">Chat</span>
                    </div>
                    <div class="relative file-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="icon icon--feather mx-2 hover:bg-slate-200 rounded-md p-1 header-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span className="p-2 bg-slate-300 text-s absolute text-center w-28 -left-8 rounded-2xl svg-title">Email</span>
                    </div>
                    <div class="relative file-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="icon icon--feather mx-2 hover:bg-slate-200 rounded-md p-1 header-icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        <span className="p-2 bg-slate-300 text-s absolute text-center w-28 -left-8 rounded-2xl svg-title">Contacts</span>
                    </div>
                    <div className="flex flex-col items-center relative file-hover">
                        <svg id="simbole-dash" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="icon icon--feather mx-2 bg-white rounded-md p-1 z-20 hover:opacity-0"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        <svg id="simbole-add" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="icon icon--feather absolute bg-slate-200 z-10"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <div className="w-2 h-1 rounded-full bg-slate-300 mt-1"></div>
                        <span className="p-2 bg-slate-300 text-s absolute text-center w-52 -left-[4.5rem] top-10 rounded-2xl svg-title">Dashboard Ecommerce</span>
                    </div>
                    {/* Barra de busca  */}
                    <div className="mx-4 px-4 py-2 search w-[25vw]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="icon icon--feather mx-2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input className="w-full pr-2" type="text" placeholder="Search..." />
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="navigation__item__chevron icon icon--feather arrow rotate-90"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                </nav>
                {/* Bandeira de lingugagem */}
                <section className="flex items-center">
                    <div id="language" className="relative cursor-pointer">
                        <img src="flags/eua.svg" alt="" />
                        <div className="py-2 bg-white px-4 text-s absolute text-center w-36 -left-8 top-8 rounded-md language-select hidden">
                            <ul>
                                <li className="flex items-center py-2">
                                    <img src="flags/eua.svg" alt="" />
                                    <span className="pl-2">English</span>
                                </li>
                                <li className="flex items-center py-2">
                                    <img src="flags/french.svg" alt="" />
                                    <span className="pl-2">French</span>
                                </li>
                                <li className="flex items-center py-2">
                                    <img src="flags/german.svg" alt="" />
                                    <span className="pl-2">German</span>
                                </li>
                                <li className="flex items-center py-2">
                                    <img src="flags/indonesi.svg" alt="" />
                                    <span className="pl-2">Indonesia</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Notificacao */}
                    <section id="messages" className="relative pt-1 cursor-pointer">
                        <div className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="icon icon--feather mx-4"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            <span className="p-1 rounded-full bg-sky-700 px-2 text-xs text-white absolute -top-3 right-3">
                                2
                            </span>
                        </div>
                        <div id="alert-messages" className="py-2 bg-white px-4 text-s absolute text-center w-[40vw] h-[25rem] right-4 top-8 rounded-md language-select z-[200] overflow-y-auto hidden">
                            <div className="flex justify-between border-b-[1px]">
                                <span>MESSAGES</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon icon--heroiconsOutline"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                            </div>
                            <ul>
                                <li className="flex items-center py-2 border-b-[1px]">
                                    <img className="mr-5" src="profile-icon-9.png" alt="" width='40' height='40'/>
                                    <div className="flex flex-col items-start">
                                        <strong>Issor</strong>
                                        <p>You sent an attachment.</p>
                                        <span>16 hours ago</span>
                                    </div>
                                </li>
                                <li className="flex items-center py-2 border-b-[1px]">
                                    <img className="mr-5" src="profile-icon-9.png" alt="" width='40' height='40'/>
                                    <div className="flex flex-col items-start">
                                        <strong>Issor</strong>
                                        <p>You sent an attachment.</p>
                                        <span>16 hours ago</span>
                                    </div>
                                </li>
                                <li className="flex items-center py-2 border-b-[1px]">
                                    <img className="mr-5" src="profile-icon-9.png" alt="" width='40' height='40'/>
                                    <div className="flex flex-col items-start">
                                        <strong>Issor</strong>
                                        <p>You sent an attachment.</p>
                                        <span>16 hours ago</span>
                                    </div>
                                </li>
                                <li className="flex items-center py-2 border-b-[1px]">
                                    <img className="mr-5" src="profile-icon-9.png" alt="" width='40' height='40'/>
                                    <div className="flex flex-col items-start">
                                        <strong>Issor</strong>
                                        <p>You sent an attachment.</p>
                                        <span>16 hours ago</span>
                                    </div>
                                </li>
                                <li className="flex items-center py-2 border-b-[1px]">
                                    <img className="mr-5" src="profile-icon-9.png" alt="" width='40' height='40'/>
                                    <div className="flex flex-col items-start">
                                        <strong>Issor</strong>
                                        <p>You sent an attachment.</p>
                                        <span>16 hours ago</span>
                                    </div>
                                </li>
                                <li className="flex items-center py-2 border-b-[1px]">
                                    <img className="mr-5" src="profile-icon-9.png" alt="" width='40' height='40'/>
                                    <div className="flex flex-col items-start">
                                        <strong>Issor</strong>
                                        <p>You sent an attachment.</p>
                                        <span>16 hours ago</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* Alerta */}
                    <section id="notific" className="relative cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="icon icon--feather"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        <span className="p-1 rounded-full bg-red-600 px-2 text-xs text-white absolute -top-2 -right-3">
                            3
                        </span>
                        <div id="alert-notific" className="py-2 bg-white px-4 text-s absolute text-center w-[40vw] h-[25rem] right-4 top-8 rounded-md language-select z-[200] overflow-y-auto hidden">
                            <div className="flex justify-between border-b-[1px] py-2">
                                <span>Notifications</span>
                                <span class="text-blue-400 font-bold">MARK ALL AS READ</span>
                            </div>
                            <ul>
                                <li className="flex flex-col items-start py-2">
                                    <span className="text-blue-300 font-bold">Today</span>
                                    <div className="flex items-center py-2 border-b-[1px] w-full">
                                        <img className="mr-5" src="profile-icon-9.png" alt="" width='40' height='40'/>
                                        <div className="flex flex items-start justify-between w-full">
                                            <p className="py-5">Margo Corn has invited you to the project Untitled</p>
                                            <span>16 hours ago</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex flex-col items-start py-2">
                                    <span className="text-blue-300 font-bold">Yesterday</span>
                                    <div className="flex items-center py-2 border-b-[1px] w-full">
                                        <img className="mr-5" src="profile-icon-9.png" alt="" width='40' height='40'/>
                                        <div className="flex flex items-start justify-between w-full">
                                            <p className="py-5">Margo Corn has invited you to the project Untitled</p>
                                            <span>13:00</span>
                                        </div>
                                    </div>
                                </li><li className="flex flex-col items-start py-2">
                                    <span className="text-blue-300 font-bold"></span>
                                    <div className="flex items-center py-2 border-b-[1px] w-full">
                                        <img className="mr-5" src="profile-icon-9.png" alt="" width='40' height='40'/>
                                        <div className="flex flex items-start justify-between w-full">
                                            <p className="py-5">Margo Corn has invited you to the project Untitled</p>
                                            <span>15:54</span>
                                        </div>
                                    </div>
                                </li><li className="flex flex-col items-start py-2">
                                    <span className="text-blue-300 font-bold">25 Mar</span>
                                    <div className="flex items-center py-2 border-b-[1px] w-full">
                                        <img className="mr-5" src="profile-icon-9.png" alt="" width='40' height='40'/>
                                        <div className="flex flex items-start justify-between w-full">
                                            <p className="py-5">Margo Corn has invited you to the project Untitled</p>
                                            <span>14:12</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* Perfil */}
                    <section>
                        <div className="px-5 flex justify-between">
                            <div className="relative">
                                <img src="profile-icon-9.png" alt="" width='40' height='40'/>
                                <span className="p-1 w-4 h-4 border-white border-2 bg-green-600 rounded-full w-1 h-1 absolute top-6 right-0"></span>
                            </div>
                            <div className="flex flex-col px-4">
                                <strong>John Doe</strong>
                                <span className="text-xs">Administrador</span>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </header>
        
    )
}

export default Template;