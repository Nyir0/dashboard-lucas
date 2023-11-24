function Menu(){
    return(
        <section>
            <div className="flex items-center px-3 mr-5 py-3 text-m italic title-header w-[20vw] logo-shadow h-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 transform rotate-180 mr-2 w-6 h-6 icon icon--feather"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
                <strong className="text-[var(--color-text1)">
                    Skewind
                </strong>
            </div>
            <div className="absolute menu w-[20vw] pr-1 overflow-y-scroll h-[92.5vh] text-[var(--color-text1)] pb-3">
                <div className="flex flex-col pt-10 px-4 pb-5 ">
                    <strong className="font-extrabold text-s">DASHBOARDS</strong>
                    <span>Useful dashboard designs</span>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    <span className="font-extrabold text-s">
                        Ecommerce
                    </span>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                    <span className="font-extrabold text-s">
                        Analytics
                    </span>
                </div>
                <div className="flex flex-col my-6 px-4 ">
                    <strong className="font-extrabold text-s">APPLICATIONS</strong>
                    <span>Prebuilt application designs</span>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span className="font-extrabold text-s">
                        Contacts
                    </span>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span className="font-extrabold text-s">
                        Chat
                    </span>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span className="font-extrabold text-s">
                        Email
                    </span>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                    <span className="font-extrabold text-s">
                        File Manager
                    </span>
                </div>
                <div className="flex flex-col my-6 px-4 ">
                    <strong className="font-extrabold text-s">PAGES</strong>
                    <span>Common page designs</span>
                </div>
                <div className="flex items-center py-2 cursor-pointer sub-menu justify-between">
                    <div className="flex items-center w-4/5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <span className="font-extrabold text-s">
                            Authentication
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="navigation__item__chevron icon icon--feather arrow"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <div className="flex items-center py-2 cursor-pointer sub-menu justify-between">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                        <span className="font-extrabold text-s">
                            Error
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="navigation__item__chevron icon icon--feather arrow"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <span className="font-extrabold text-s">
                        Coming Soon
                    </span>
                </div>
                <div className="flex flex-col my-6 px-4 ">
                    <strong className="font-extrabold text-s">USER INTERFACE</strong>
                    <span>Building blocks of the UI & UX</span>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
                    <span className="font-extrabold text-s">
                        Typography
                    </span>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
                    <span className="font-extrabold text-s">
                        Icons
                    </span>
                </div>
                <div className="flex items-center py-2 cursor-pointer sub-menu justify-between">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        <span className="font-extrabold text-s">
                            Page Layouts
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="navigation__item__chevron icon icon--feather arrow"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <div className="flex items-center py-2 cursor-pointer sub-menu justify-between">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        <span className="font-extrabold text-s">
                            Components
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="navigation__item__chevron icon icon--feather arrow"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <div className="flex items-center py-2 cursor-pointer sub-menu justify-between">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon></svg>
                        <span className="font-extrabold text-s">
                            Forms
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="navigation__item__chevron icon icon--feather arrow"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <div className="flex items-center py-2 cursor-pointer sub-menu justify-between">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                        <span className="font-extrabold text-s">
                            Level 0
                        </span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="navigation__item__chevron icon icon--feather arrow"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path></svg>
                    <span className="font-extrabold text-s">
                        Table
                    </span>
                </div>
                <div className="flex items-center py-2 cursor-pointer menu-unique ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" className="icon icon--feather mr-4 pl-4 pr-2 py-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                    <span className="font-extrabold text-s">
                        Charts
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Menu;