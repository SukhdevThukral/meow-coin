import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Bebas_Neue } from "next/font/google"
import '@hackernoon/pixel-icon-library/fonts/iconfont.css';

const bnb = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
})

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 relative">
            <div className="flex items-center gap-3">
                <Image src="/grumpy_cat.png" alt="grumpy cat"
                width={100}
                    height={100}/>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg px-5 py-3">
                    <span className={bnb.className}>earn $kitty coin 😾</span>
                </Button>
            </div>
            <div className="flex items-center gap-2 text-center">
                <span className={`${bnb.className} text-xl md:text-3xl`}>
                    WELCOME TO THE OFFICIAL
                </span>
                <Image src="/grumpy_cat2.png" alt="flamingo cat"
                width={105}
                    height={105}
                />
                <span className={`${bnb.className} text-xl md:text-3xl`}> GRUMPY CAT MOVEMENT </span>
            </div>
            <div className="flex items-center gap-5 pr-2">
            <i className="hn hn-x text-4xl"></i>
            <i class="hn hn-github text-4xl"></i>


            </div>
        </header>
    )
}
