import './styles.scss';

import { IconButton } from "@chakra-ui/react"
import { Menu } from 'lucide-react';
import { PiRankingFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { LuMedal } from "react-icons/lu";
import { MdOutlineCamera } from "react-icons/md";

import { Button } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'

import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

export function MenuSlider() {
    return (
        <div className='menuSlider'>
            <DrawerRoot placement="start">
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                    <IconButton variant="plain" aria-label="Search database">
                        <Menu color='white'/>
                    </IconButton>
                </DrawerTrigger>
                <DrawerContent bg="#0ea47a">
                    <DrawerHeader>
                    <DrawerTitle>Metropolitano 2025</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody className='container-section'>
                        <DrawerActionTrigger>
                            <NavLink to="/" className='section-menu'>
                                <FaHome />
                                Inicio
                            </NavLink>
                            <NavLink to="/classificacao" className='section-menu'>
                                <PiRankingFill />
                                Classificação
                            </NavLink>
                            <NavLink to="/ranking" className='section-menu'>
                                <LuMedal/>
                                Ranking e votações
                            </NavLink>
                            <NavLink to="/midias" className='section-menu'>
                                <MdOutlineCamera />
                                Fotos, videos e noticias
                            </NavLink>
                        </DrawerActionTrigger>
                    </DrawerBody>
                    <DrawerFooter>
                    <DrawerActionTrigger asChild>
                        <Button variant="outline" color="white">Fechar</Button>
                    </DrawerActionTrigger>
                    </DrawerFooter>
                    <DrawerCloseTrigger color="white"/>
                </DrawerContent>
            </DrawerRoot>
        </div>
    )
}