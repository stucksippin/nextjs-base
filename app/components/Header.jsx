import Link from "next/link";

function Header() {
    return (
        <header className="container mx-auto p-6 flex justify-between border mt-5 bg-orange-100 mb-10">
            <div className="w-10"><img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qCreqkTZL0F0bF9kZctFE1XVFocO__70kw&usqp=CAU" alt="logo" /></div>



            <Link className="hover:text-blue-400 border border-transparent transition-all" href='/hotel'>rooms</Link>
            <Link className="hover:text-blue-400 border border-transparent transition-all" href='/request'>request</Link>
            <Link className="hover:text-blue-400 border border-transparent transition-all" href='/admin/rooms'>admin</Link>
            <Link className="hover:text-blue-400 border border-transparent transition-all" href='/login'>Sign in</Link>
            <Link className="hover:text-blue-400 border border-transparent transition-all" href='/register'>Sign up</Link>
        </header>
    );
}

export default Header;

