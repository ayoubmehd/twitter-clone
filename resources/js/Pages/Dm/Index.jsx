import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import SidebarLayout from "@/Layouts/SidebarLayout";
import PrimaryButton from "@/Components/core/PrimaryButton";
import DmContainer, { DmForm, DmHeader } from "@/Components/Domain/Dm";
import { useState } from "react";

function Threads({ threads }) {
    if (threads.length === 0) {
        return (
            <div className="flex items-center justify-center h-full py-4">
                <div className="text-center">
                    <div className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                        No threads yet
                    </div>
                </div>
            </div>
        );
    }


    return threads.map((thread) => (
        <li key={thread.id} className="relative">
            <Link
                href={route("dm.show", thread.id)}
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10">
                <span>{thread.users[0].name}</span>
            </Link>
        </li>
    ))

}
function SidebarMenu({ threads }) {
    return <ul className="relative m-0 list-none px-[0.2rem]">
        <li className="relative pt-6 px-6 pb-8">
            <PrimaryButton
                className="w-full justify-center text-center h-12 cursor-pointer items-center truncate rounded-[5px] text-[0.875rem] outline-none transition duration-300 ease-linear hover:text-inherit hover:outline-none focus:text-inherit focus:outline-none  active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none">
                <span>New</span>
            </PrimaryButton>
        </li>
        <Threads threads={threads} />
    </ul>;
}

function SearchInput() {
    return <div className="w-full">
        <div className="relative flex w-full flex-wrap items-stretch">
            <input
                type="search"
                className="relative m-0 block min-w-0 flex-auto rounded border-none bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Username"
                aria-label="Search"
                aria-describedby="button-addon2" />

            <span
                className="absolute right-0 rtl:left-0 input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd" />
                </svg>
            </span>
        </div>
    </div>
}


export default function Dm({ auth, threads, thread }) {
    const [user, setUser] = useState(2);


    console.log(thread);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Home" />

            <SidebarLayout
                menu={<SidebarMenu threads={threads.data} />}
            >
                <DmContainer
                    header={<DmHeader search={<SearchInput />} />}
                    form={<DmForm onSubmit={data => router.post(route('dm.store', user), data)} />}
                />
            </SidebarLayout>

        </AuthenticatedLayout>
    );
}


