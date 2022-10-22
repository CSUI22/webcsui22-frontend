import React from "react";
import { Imageoptimized } from "@elements";

export const HeroSection: React.FC = () => (
    <div>
        <div className="flex items-center">
            <div className="relative flex flex-wrap mx-auto">
            <Imageoptimized
                imageUrl="/assets/images/csui-22.png"
                alt="CSUI 22"
                className="w-[1200px] h-[576px]"
                fit="contain"
            />
            </div>
            
        </div>
    </div>
)