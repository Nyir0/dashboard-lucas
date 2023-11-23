function Menu(){
    return(
        <section>
            <div className="flex items-center px-3 mr-5 py-3 text-m italic title-header w-[20vw] logo-shadow h-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 transform rotate-180 mr-2 w-6 h-6 icon icon--feather"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
                <strong>
                    Skewind
                </strong>
            </div>
            <div class="absolute menu w-[20vw] px-8">
                <div class="flex flex-col pt-14 pb-5 text-[var(--color-text1)]">
                    <strong class="font-extrabold text-s">DASHBOARDS</strong>
                    <span>Useful dashboard designs</span>
                </div>
                <div class="flex my-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon icon--feather italic mr-4"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    <span class="text-[var(--color-text1)] font-extrabold text-s">
                        Ecommerce
                    </span>
                </div>
                <div class="flex my-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon icon--feather mr-4"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                    <span class="text-[var(--color-text1)] font-extrabold text-s">
                        Analytics
                    </span>
                </div>
                <div class="flex flex-col my-10 text-[var(--color-text1)]">
                    <strong class="font-extrabold text-s">APPLICATIONS</strong>
                    <span>Useful dashboard designs</span>
                </div>
                <div class="flex my-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon icon--feather mr-4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span class="text-[var(--color-text1)] font-extrabold text-s">
                        Contacts
                    </span>
                </div>
                <div class="flex my-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon icon--feather mr-4"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span class="text-[var(--color-text1)] font-extrabold text-s">
                        Chat
                    </span>
                </div>
                <div class="flex my-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon icon--feather mr-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span class="text-[var(--color-text1)] font-extrabold text-s">
                        Email
                    </span>
                </div>
                <div class="flex my-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon icon--feather mr-4"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                    <span class="text-[var(--color-text1)] font-extrabold text-s">
                        File Manager
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Menu;