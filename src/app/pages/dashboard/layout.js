'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import '@/app/globals.css';

export default function DashboardLayout({ children }) {
    const { push } = useRouter();

    const sair = (e) => {
        e.preventDefault();
        Cookies.remove('token');
        push('/');
    }
    return (
        <div>
            <nav>
                <ul>
                    <h1>Dashboard</h1>
                    <Link href="/"> Home</Link>
                    <Link href="/pages/dashboard/alter"> Alterar </Link>
                    <Link href="/pages/dashboard/register"> Registrar</Link>
                    <button onClick={sair}>Sair</button>
                </ul>
            </nav>


            <div>{children}</div>
        </div>
    )
}