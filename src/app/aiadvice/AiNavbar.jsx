
import Link from "next/link";
import { CgArrowLeft } from "react-icons/cg";

const AiNavbar = () => {
    return (
        <nav 
            className="w-full md:w-1/2 ai-nav-bg flex items-center relative justify-center py-2 md:rounded-lg
                md:mt-2 font-semibold"   
        >
            <Link href="/" className="absolute left-5 text-2xl md:text-3xl">
                <CgArrowLeft />
            </Link>
            <h1 className="md:text-lg">AI Advice</h1>
        </nav>
    )
}

export default AiNavbar;