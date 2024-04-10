import Link from "next/link";

export function MainNav() {
	return (
		<nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row">
			<Link href="/">Главная</Link>
			<Link href="/templates">Шаблоны</Link>
		</nav>
	);
}
