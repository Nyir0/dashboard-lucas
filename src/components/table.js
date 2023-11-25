import React from "react";
import { tablePeople } from "../data/tablePeople";

export function Table(){
    return (
        <div class="col-span-6 xl:col-span-2 card">
            <div class="card__header">
                <h3 class="text-2xl">Recent Orders</h3>
            </div>
            <div class="card__body px-0 scrollbar" data-scrollbar="" data-scrollbar-auto-hide="false" data-simplebar="init">
                <div class="simplebar-wrapper mt-[-17.5px] mb-[-21px]">
                    <div class="simplebar-mask">
                        <div class="simplebar-offset right-0 bottom-0" >
                            <div class="simplebar-content-wrapper h-auto overflow-hidden" tabindex="0" role="region" aria-label="scrollable content">
                                <div class="simplebar-content py-4 px-0 pt-5">
                                    <table class="table">
                                        <thead class="border-b-2 border-gray-300">
                                            <tr>
                                                <th>Date</th>
                                                <th>Product</th>
                                                <th>Customer</th>
                                                <th>Status</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tablePeople.map(person=>                               
                                                <tr>
                                                    <td class="whitespace-nowrap">{person.date}</td>
                                                    <td>
                                                        <a href="#" class="flex items-center hover:text-primary-500 min-w-[125px]">
                                                            <span class="avatar w-8 h-8 mr-3">
                                                                <img src="{person.productImg}" alt="{person.peopleName}" class="avatar__object"/>                                                
                                                            </span>
                                                            <span class="flex flex-col">
                                                                <span class="line-clamp-1 text-sm">{person.productName}</span>
                                                                <span class="text-gray-400 text-xs">{person.productType}</span>
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href="#" class="flex items-center hover:text-primary-500 min-w-[150px]">
                                                            <span class="avatar w-8 h-8 mr-3">
                                                                <img src="{person.peopleImg}" alt="{person.peopleImg}" class="avatar__object"/>
                                                            </span>
                                                            <span class="flex flex-col">
                                                                <span class="line-clamp-1 text-sm">{person.peopleName}</span>
                                                                <span class="text-gray-400 text-xs">{person.peopleLg}</span>
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <span class="badge scheme-green">{person.st}</span>
                                                    </td>
                                                    <td class="text-xl">{person.amount}</td>
                                                </tr>
                                            )};
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
    );
};