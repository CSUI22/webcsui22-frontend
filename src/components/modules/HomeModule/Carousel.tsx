import React, { useEffect, useState } from "react";
import { Imageoptimized } from "@elements";


const carouselContents = [
    {
        name: "Cafe JPW",
        imageUrl: "cafejpw.jpg",
        description: "Gathering pertama kali di Cafe JPW Depok, untuk teman-teman CSUI22 yang masuk dari jalur SNMPTN, PPKB, dan Talent Scouting. Seru sekali bisa bertemu dan mendapatkan banyak teman baru!"
    },
    {
        name: "Foto Bareng",
        imageUrl: "fotobareng.jpg",
        description: "Dengan memakai Jaket Kuning kebanggaan akhirnya kita bisa kumpul lengkap selepas rangkaian acara PKKMB dan berfoto didepan gedung Rektorat UI yang ikonik."
    },
    {
        name: "LBM",
        imageUrl: "lbm.jpg",
        description: "Selepas mendukung kontingen basket CSUI. Suara kami serak dan badan kami berkeringat karena dengan semangat menyanyikan chants-chants Laskar Biru Merah!"
    },
    {
        name: "Mini Soccer",
        imageUrl: "minisoccer.jpg",
        description: "Healing sebentar setelah kuis Kalkulus. Walaupun hujan dan jalanan macet, tidak menyurutkan semangat teman-teman untuk berkumpul dan bermain bola bersama"
    }

]


export const Carousel: React.FC = () => {
    const TIME_DELAY = 1000
    const TIME_INTERVAL = 5000
    const [activeContent, setActiveContent] = useState(0)
    const [activeButton, setActiveButton] = useState(0)

    // Handle content changing transition
    const changeContent = (i:number) => {
        const element: any = document.getElementById("carousel-content")
        return new Promise((resolve) => {
                setTimeout(resolve, TIME_DELAY/2)
                element.style.transitionDuration = TIME_DELAY/2 + "ms"
                element.style.transform = "translateX(-150%)"
                element.style.opacity = "0"
            }).then(() => {
                const swipeLeft = () => {
                    element.style.transitionDuration = TIME_DELAY/2 + "ms"
                    element.style.transform = "translateX(0%)"
                    element.style.opacity = "1"
                }
                setTimeout(swipeLeft, 100)
                setActiveContent(i)
                element.style.transitionDuration = "0ms"
                element.style.transform = "translateX(150%)"
            })
    }

    const clickButton = (i:number) => {
        if (i === activeButton) return
        setActiveButton(i)
        changeContent(i)
    }

    // Change carousel content in certain interval time
    useEffect(() => {
        const intervalId = setInterval(() => {
            let newContentId = activeButton + 1
            if(newContentId >= carouselContents.length) newContentId = 0
            setActiveButton(newContentId)
            changeContent(newContentId)
        }, TIME_INTERVAL)
        return () => clearInterval(intervalId)
    })

    return (
        <div id="carousel" className="md:py-2 md:px-12 lg:px-24 py-2 px-7 mt-12">
            <h2 className="text-3xl s:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Moments Through Film</h2>

            <div id="carousel-content" className="flex flex-col md:flex-row justify-end lg:h-96 md:h-80 mb-12 mx-auto max-w-screen-xl ease-in-out">
                <Imageoptimized
                    className="h-60 s:h-80 md:h-full w-full md:w-1/2 rounded-2xl overflow-hidden mb-4 s:mb-8 md:mb-0"
                    imageUrl={'/assets/images/carousel/' + carouselContents[activeContent].imageUrl}
                    alt={carouselContents[activeContent].name}
                    fit="cover"
                />
                <div className="h-full w-full md:w-1/2 flex flex-col justify-center text-center md:text-left md:ml-8 lg:ml-12">
                    <p className="text-3xl s:text-4xl md:text-5xl font-bold mb-4">{carouselContents[activeContent].name}</p>
                    <p className="text-base s:text-lg">{carouselContents[activeContent].description}</p>
                </div>
            </div>

            <div id="carousel-navbar" className="relative md:h-40 max-w-sm md:w-full mx-auto md:max-w-screen-xl flex items-center">
                <div className="flex w-full flex-col items-center md:flex-row md:justify-around space-y-4 md:space-y-0">
                {
                    carouselContents.map((content, i) => (
                        <div 
                            key={i} 
                            onClick={() => clickButton(i)} 
                            className={"h-16 md:h-28 w-full md:w-36 lg:w-48 p-4 rounded-2xl flex md:flex-col md:justify-center items-center cursor-pointer relative border-2" + (i === activeButton ? " bg-[#E1E4F0] border-[#9CA5CA]" : ' border-transparent')}
                        >
                            <p className={"text-xl font-semibold text-center align-middle absolute ml-12 md:ml-0" + (i%2==0 ? " md:pb-16" : " md:pt-16")}>{content.name}</p>
                            <div className="md:w-full my-1 z-10">
                                <div className="h-5 w-5 rounded-full bg-[#0E1F58] mx-auto shadow-md"/>
                            </div>
                        </div>
                    ))
                }
                </div>

                <div className="hidden md:block absolute w-full h-2 bg-[#304281]/90 rounded-full"/>
                <div className="block md:hidden absolute w-2 h-full bg-[#304281]/90 rounded-full ml-6"/>
            </div>
        </div>
    )
}