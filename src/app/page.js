import GrumpyLayout from "@/components/grumpyLayout";
import Header from "@/components/Header"; 

export default function Home(){
    return(
        //pls dont render multiple body tags ffs
        <main className="bg-[#FFFBEF] min-h-screen">
            <Header/>
            <grumpyLayout/>
        </main>
    )
}