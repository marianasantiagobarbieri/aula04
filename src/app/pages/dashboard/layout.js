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
        <div className="containerDashboardLayout">
            <nav>
                <div className="titleDashboardLayout"> <span>Dashboard</span> </div>
                <ul>

                    <li><Link href="/"> Home</Link></li>
                    <li><Link href="/pages/dashboard/alter"> Alterar </Link></li>
                    <li><Link href="/pages/dashboard/register"> Registrar</Link></li>
                    <button className="" onClick={sair}>Sair</button>
                </ul>
            </nav>


            <div>{children}</div>
        </div>
    )
}