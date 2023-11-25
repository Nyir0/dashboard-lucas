import React from "react";
import { tablePeople } from "../data/tablePeople";
import "./table.css";

export function Table(){
    return (
        <div className="col-span-6 xl:col-span-2 card px-4 py-8">
            <div className="card__header">
                <h3 className="text-2xl">Recent Orders</h3>
            </div>
            <div className="card__body px-0 scrollbar" data-scrollbar="" data-scrollbar-auto-hide="false" data-simplebar="init">
                <div className="simplebar-wrapper mt-[-17.5px] mb-[-21px]">
                    <div className="simplebar-mask">
                        <div className="simplebar-offset right-0 bottom-0" >
                            <div className="simplebar-content-wrapper h-auto overflow-hidden" tabindex="0" role="region" aria-label="scrollable content">
                                <div className="simplebar-content py-4 px-0 pt-5">
                                    <table className="table">
                                        <thead className="border-b-2 border-gray-300">
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
                                                    <td className="whitespace-nowrap">{person.date}</td>
                                                    <td>
                                                        <a href="#" className="flex items-center hover:text-primary-500 min-w-[125px]">
                                                            <span className="avatar w-8 h-8 mr-3">
                                                                <img src={person.productImg} alt={person.peopleName} className="avatar__object"/>                                                
                                                            </span>
                                                            <span className="flex flex-col">
                                                                <span className="line-clamp-1 text-sm">{person.productName}</span>
                                                                <span className="text-gray-400 text-xs">{person.productType}</span>
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="flex items-center hover:text-primary-500 min-w-[150px]">
                                                            <span className="avatar w-8 h-8 mr-3">
                                                                <img src={person.peopleImg} alt="{person.peopleImg}" className="avatar__object"/>
                                                            </span>
                                                            <span className="flex flex-col">
                                                                <span className="line-clamp-1 text-sm">{person.peopleName}</span>
                                                                <span className="text-gray-400 text-xs">{person.peopleLg}</span>
                                                            </span>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <span className={person.stColor} >{person.st}</span>
                                                    </td>
                                                    <td className="text-xl">{person.amount}</td>
                                                </tr>
                                            )}
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