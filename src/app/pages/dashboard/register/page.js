'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const metadata = {
    title: 'Registro de Usuários',
    description: 'Projeto PTAC',
}

export default function DashboardLayout({children}) {
    const { push } = useRouter();

    const sair = (e) => {
        e.preventDefault();
        Cookies.remove('token');
        push('/');
    }
    return(
        <div>
         <h1>Dashboard</h1>
         <Link href="/pages/dashboard"> Home</Link>
        </div>
    )
}